import {
  ItemComponentHitEntityEvent,
  CustomComponentParameters,
  Entity,
  EntityDamageCause,
  Player
} from "@minecraft/server";
import { WeaponTypeSchema } from "../components/WeaponTypeComponent/Params";
import { LegendWeaponEvent } from "./LegendWeaponEvent";
import { hasFamily, Random } from "@occultus/api";
import { SpecificDamageParams } from "../components/SpecificDamageComponent/Params";

export class WeaponEvent {
  static onHitEntity(
    arg0: ItemComponentHitEntityEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as WeaponTypeSchema;
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
  static onSpecificDamageHitEntity(
    arg0: ItemComponentHitEntityEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as SpecificDamageParams;
    const specificDamage = WeaponEvent.getSpecificDamage(
      arg0.hitEntity,
      params
    );
    console.log("specific damage"+specificDamage)
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
  static getSpecificDamage(
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
