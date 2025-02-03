import {
  EntityQueryOptions,
  ItemCooldownComponent,
  system,
  Vector3,
  world,
} from "@minecraft/server";
import {
  affectEntities,
  damageEntities,
  getEquipmentItem,
  loot,
  randomInteger,
  setEquipmentItem,
} from "@grindstone/utils";
import { applyImitationDamage } from "./utils";
import { droughtEffect } from "../server/registry/effects/drought";
import { tetanusEffect } from "../server/registry/effects/tetanus";

/**
 * 破伤风伤害监听器
 * @tag `hy:tetanus_item` 将物品设置为可进行破伤风伤害
 * @tag `hy:tetanus_attacker` 标记造成伤害的生物，破伤风伤害不会应用在含有此标签的生物之上
 */
export function tetanusAttackTrigger() {
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const [TARGET, ITEM] = [
      event.hitEntity,
      getEquipmentItem(event.damagingEntity),
    ];
    if (ITEM?.hasTag("hy:tetanus_item")) {
      tetanusEffect.addLevelTemporarily(TARGET, 1, 300);
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

/**
 * 战利品袋监听器
 * @tag `hy:trophy_bundle` 将物品设置为战利品袋
 * @tag `hy:loot_from_tag` 将物品设置为从标签读取战利品表，如`loot:entities.allay`将会被解析为`loot_tables/entities/allay.json`
 * @tag `hy:loot_from_script` 将物品设置为从脚本动态属性读取战利品表，此时则应该将`hy:loot_table`属性设置为`entities/allay`
 */
export function trophyBundleTrigger() {
  world.afterEvents.itemUse.subscribe((event) => {
    if (!event.itemStack.hasTag("hy:trophy_bundle")) return;
    const [item, player] = [event.itemStack, event.source];
    const location: Vector3 = {
      x: player.location.x,
      y: player.location.y,
      z: player.location.z,
    };
    setEquipmentItem(player);
    player.playSound("bundle.drop_contents");
    if (item.hasTag("hy:loot_from_tag")) {
      const tags = item.getTags();
      tags.forEach((tag) => {
        if (tag.startsWith("loot:")) {
          const path = tag.replace("loot:", "").replace(".", "/");
          loot(player.dimension, location, path);
        }
      });
    }
    if (item.hasTag("hy:loot_from_script")) {
      const path = item.getDynamicProperty("hy:loot_table");
      if (typeof path !== "string") return;
      system.runTimeout(() => {
        loot(player.dimension, location, path);
      }, 20);
    }
  });
}

/**
 * 令实体可以造成干旱伤害
 * @family `drought_attacker`——将实体设置为可造成干旱攻击
 * @todo 开放自定义效果等级和时长
 */
export function droughtEffectAtkTrigger() {
  world.afterEvents.entityHitEntity.subscribe((arg) => {
    if (arg.damagingEntity.matches({ families: ["drought_attacker"] })) {
      if (arg.hitEntity.isValid())
        droughtEffect.addLevelTemporarily(arg.hitEntity, 1, 160);
    }
  });
}
