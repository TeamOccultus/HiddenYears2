import {
  ItemComponentHitEntityEvent,
  CustomComponentParameters,
  Entity,
  EntityDamageCause,
  Player,
  TicksPerSecond,
  ItemComponentMineBlockEvent
} from "@minecraft/server";
import { WeaponTypeParams } from "../components/WeaponTypeComponent/Params";
import { LegendWeaponEvent } from "./LegendWeaponEvent";
import { hasFamily, Random, RandomEvent, Tick } from "@occultus/api";
import { SpecificDamageParams } from "../components/SpecificDamageComponent/Params";
import {
  getDaggerAttack,
  getDaggerSkillChance,
  getSledgehammerSkillChance
} from "../../core/WeaponToolUtils";
import { bleedEffect } from "../effects/bleed";

export class WeaponEvent {
  static onHitEntity(
    arg0: ItemComponentHitEntityEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as WeaponTypeParams;
    if (params.weapon_type === "sledgehammer") {
      WeaponEvent.onSledgehammerAttack(arg0);
    }
    if (params.weapon_type === "dagger") {
      WeaponEvent.onDaggerAttack(arg0, arg1);
    }
    if (params?.legend_weapon === "suffering") {
      LegendWeaponEvent.onSufferingSwordAttack(arg0);
    }
    if (params?.legend_weapon === "shattered_sand_cudgel") {
      LegendWeaponEvent.onShatteredSandCudgelAttack(arg0);
    }
    if (params?.legend_weapon === "shattered_sand_staff") {
      LegendWeaponEvent.onShatteredSandStaffAttack(arg0);
    }
  }
  private static onDaggerAttack(
    arg0: ItemComponentHitEntityEvent,
    arg1: CustomComponentParameters
  ) {
    const { attackingEntity, hitEntity } = arg0;
    const p = arg1.params as WeaponTypeParams;
    if (!(attackingEntity instanceof Player)) return;
    new RandomEvent(getDaggerSkillChance(attackingEntity), () => {
      // @todo 找个有打击感的音效
      attackingEntity.playSound("game.player.attack.strong");
      hitEntity.applyDamage(getDaggerAttack(p), {
        cause: EntityDamageCause.entityAttack,
        damagingEntity: attackingEntity
      });
    }).call();
  }
  private static onSledgehammerAttack(arg0: ItemComponentHitEntityEvent) {
    const { attackingEntity, hitEntity } = arg0;
    attackingEntity.addEffect("minecraft:slowness", 3 * TicksPerSecond, {
      showParticles: false
    });
    attackingEntity.addEffect("minecraft:mining_fatigue", 3 * TicksPerSecond, {
      showParticles: false
    });
    if (!(attackingEntity instanceof Player)) return;
    new RandomEvent(getSledgehammerSkillChance(attackingEntity), () => {
      // @todo 找个有打击感的音效
      attackingEntity.playSound("game.player.attack.strong");
      bleedEffect.add(hitEntity, 10 * TicksPerSecond);
    }).call();
  }
  static onSpecificDamageHitEntity(
    arg0: ItemComponentHitEntityEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as SpecificDamageParams;
    const specificDamage = WeaponEvent.getSpecificDamage(
      arg0.hitEntity,
      params
    );
    if (specificDamage > 0) {
      arg0.hitEntity.applyDamage(specificDamage, {
        cause: EntityDamageCause.none,
        damagingEntity: null
      });
      if (arg0.attackingEntity instanceof Player) {
        arg0.attackingEntity.onScreenDisplay.setActionBar({
          translate: "ui.specific_damage",
          with: [specificDamage.toString()]
        });
      }
    }
  }
  private static getSpecificDamage(
    entity: Entity,
    params: SpecificDamageParams
  ): number {
    const data = params;
    if (!data) return 0;
    if (data.length === 0) return 0;
    for (const d of data) {
      if (hasFamily(entity, d.family))
        return typeof d.damage === "number"
          ? d.damage
          : Random.integer(d.damage[0], d.damage[1]);
    }
    return 0;
  }
}
