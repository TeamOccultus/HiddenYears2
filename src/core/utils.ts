import {
  getEquipmentItem,
  giveItem,
  setEquipmentItem,
  withPercentChance,
} from "@grindstone/utils";
import {
  Entity,
  EquipmentSlot,
  ItemStack,
  Player,
  system,
} from "@minecraft/server";
import { HyCorrosionMap } from "../data/data";
import { ISIS_CROWN } from "../data/quest";

/**
 * 判断实体受到攻击时，是否受血色的护甲机制影响
 * @param target 被攻击的实体
 * @param attacker 造成攻击的实体
 * @returns
 */
export function isAffectByBloodArmor(target: Entity, attacker: Entity) {
  if (
    !attacker.matches({
      families: ["ruby"],
    })
  ) {
    return false;
  }
  if (
    !(
      getEquipmentItem(target, EquipmentSlot.Chest)?.typeId ===
      "hy:ruby_chestplate"
    )
  ) {
    return false;
  }
  if (
    !(
      getEquipmentItem(target, EquipmentSlot.Legs)?.typeId ===
      "hy:ruby_leggings"
    )
  ) {
    return false;
  }
  if (
    !(getEquipmentItem(target, EquipmentSlot.Feet)?.typeId === "hy:ruby_boots")
  ) {
    return false;
  }
  return true;
}

/**
 * 判断实体受到攻击时，是否会受血色的冠冕效果影响
 * @param target 被攻击的实体
 * @param attacker 造成攻击的实体
 * @returns
 */
export function isAffectByBloodCrown(target: Entity, attacker: Entity) {
  if (
    !attacker.matches({
      families: ["ruby"],
    })
  ) {
    return false;
  }
  if (
    !(getEquipmentItem(target, EquipmentSlot.Head)?.typeId === "hy:ruby_helmet")
  ) {
    return false;
  }
  return false;
}

/**
 * 判断当工具耐久耗尽时是否执行锈蚀操作
 * @param item 要替换的物品
 * @param holder
 */
export function replaceLowerCopperTool(item: ItemStack, holder: Entity) {
  if (item.hasTag("hy:corrosive_tools")) {
    //@ts-ignore
    setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    return true;
  } else {
    return false;
  }
}

/**
 * 造成仿制伤害
 * @param entity 使用了仿制工具的实体
 */
export function applyImitationDamage(entity: Entity): void {
  withPercentChance({
    chance: 0.05,
    event: () => {
      entity.applyDamage(2);
      if (entity instanceof Player) {
        entity.sendMessage({ translate: "hy.message.imitation_damage" });
      }
    },
  });
}

export function listenIsisMonologue(player: Player) {
  player.addEffect("regeneration", 120, { amplifier: 5, showParticles: false });
  player.camera.fade({
    fadeTime: {
      fadeInTime: 1,
      fadeOutTime: 1,
      holdTime: 11,
    },
  });
  player.sendMessage({
    translate: "hy.monologue.mutas_wrath_dead.1",
  });
  system.runTimeout(() => {
    player.sendMessage({
      translate: "hy.monologue.mutas_wrath_dead.2",
    });
  }, 40);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "hy.monologue.mutas_wrath_dead.3",
    });
  }, 80);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "hy.monologue.mutas_wrath_dead.4",
    });
  }, 120);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "hy.monologue.mutas_wrath_dead.5",
    });
  }, 160);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "hy.monologue.mutas_wrath_dead.6",
    });
  }, 200);
  system.runTimeout(() => {
    giveItem(player, new ItemStack("hy:letter_19"));
    player.sendMessage({
      translate: "hy.monologue.mutas_wrath_dead.7",
      with: [player.name],
    });
    player.playSound("ramdom.levelup");
    player.onScreenDisplay.setTitle({ translate: "hy.title.desert_book" });
    player.onScreenDisplay.updateSubtitle({
      translate: "hy.title.desert_book.subtitle",
    });
  }, 240);
  player.setDynamicProperty("hy:has_listened_isis_monologue", true);
  ISIS_CROWN.complete(player);
}
