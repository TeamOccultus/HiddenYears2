import {
  EntityQueryOptions,
  ItemCooldownComponent,
  system,
  world,
} from "@minecraft/server";
import {
  affectEntities,
  damageEntities,
  getEquipmentItem,
} from "@grindstone/utils";
import { applyImitationDamage } from "./utils";


/**
 * 破伤风伤害监听器
 * @tag `hy:tetanus_item` 将物品设置为可进行破伤风伤害
 * @tag `hy:tetanus_attacker` 标记造成伤害的生物，破伤风伤害不会应用在含有此标签的生物之上
 */
export function tetanusAttackTrigger() {
  world.afterEvents.itemUse.subscribe((event) => {
    const [PLAYER, ITEM] = [event.source, event.itemStack];
    if (ITEM.hasTag("hy:tetanus_item")) {
      PLAYER.addTag("hy:tetanus_attacker");
      const opinion: EntityQueryOptions = {
        location: PLAYER.location,
        maxDistance: 4,
        excludeTags: ["hy:tetanus_attacker"],
        excludeFamilies: ["noaoe"],
      };
      affectEntities(PLAYER.dimension, opinion, "poison", 300);
      affectEntities(PLAYER.dimension, opinion, "nausea", 600, {
        amplifier: 1,
      });
      affectEntities(PLAYER.dimension, opinion, "wither", 6);
      PLAYER.removeTag("hy:tetanus_attacker");
    }
  });
}

/**
 * 法术爆发监听器
 * @tag `hy:magic_explode` 将物品设置为可进行法术爆发
 * @tag `hy:magic_explode_attacker` 标记造成伤害的生物，法术爆发不会应用在含有此标签的生物之上
 */
export function magicExplodeTrigger() {
  world.afterEvents.itemUse.subscribe((event) => {
    const [PLAYER, ITEM] = [event.source, event.itemStack];
    if (ITEM.hasTag("hy:magic_explode") && PLAYER.level > 5) {
      const cooldown = ITEM.getComponent("cooldown") as ItemCooldownComponent;

      if (cooldown.getCooldownTicksRemaining(PLAYER) !== 0) {
        PLAYER.onScreenDisplay.setActionBar({
          translate: "hy.message.wait_cooldown",
        });
        return;
      }
      PLAYER.addTag("hy:magic_explode_attacker");
      PLAYER.addExperience(-10);
      damageEntities(
        PLAYER.dimension,
        {
          location: PLAYER.location,
          maxDistance: 10,
          excludeTags: ["hy:magic_explode_attacker"],
          excludeFamilies: ["noaoe"],
        },
        6
      );
      system.runTimeout(() => {
        PLAYER.removeTag("hy:magic_explode_attacker");
      }, 100);
    }
  });
}

/**
 * 腐蚀攻击监听器
 * @tag `hy:corrosion_weapon` 将物品设置为可进行腐蚀攻击
 */
export function corrosionAttackTrigger() {
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const [ENTITY, ITEM] = [
      event.hitEntity,
      getEquipmentItem(event.damagingEntity),
    ];
    if (ITEM?.hasTag("hy:corrosion_weapon")) {
      ENTITY.addEffect("poison", 200, { amplifier: 1 });
    }
  });
}

/**
 * 仿制伤害监听器
 * @tag `hy:imitation_tools` 将物品设置为仿制物品
 */
export function imitationDamageTrigger() {
  world.afterEvents.playerBreakBlock.subscribe((event) => {
    const [ENTITY, ITEM] = [event.player, event.itemStackBeforeBreak];
    if (ITEM?.hasTag("hy:imitation_tools")) {
      applyImitationDamage(ENTITY);
    }
  });
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const [ENTITY, ITEM] = [
      event.damagingEntity,
      getEquipmentItem(event.damagingEntity),
    ];
    if (ITEM?.hasTag("hy:imitation_tools")) {
      applyImitationDamage(ENTITY);
    }
  });
}
