import {
  getEquipmentItem,
  setEquipmentItem,
  withPercentChance,
} from "@grindstone/utils";
import {
  Entity,
  EquipmentSlot,
  ItemStack,
  Player,
} from "@minecraft/server";
import { HyCorrosionMap } from "../data/data";

/**
 * 实体被攻击时，判断其是否会获得干旱效果
 * @param target 被攻击的实体
 * @param attackWeapon 攻击武器
 * @tag `hy:immune_desert_debuff` 使实体免疫沙漠负面效果
 * @returns
 */
export function isAffectByDroughtDebuff(
  target: Entity,
  attackWeapon: ItemStack
): boolean {
  if (attackWeapon?.typeId !== "hy:shattered_sand_cudgel") return false;
  if (target.matches({ families: ["immune_desert_debuff"] })) return false;
  if (target.hasTag("hy:immune_desert_debuff")) return false;
  if (
    getEquipmentItem(target, EquipmentSlot.Head)?.typeId ===
    "hy:drift_sand_coronet"
  )
    return false;
  return true;
}

/**
 * 实体被攻击时，判断其是否会获得脱水效果
 * @param target 被攻击的实体
 * @param attackWeapon 攻击武器
 * @tag `hy:immune_desert_debuff` 使实体免疫沙漠负面效果
 * @returns
 */
export function isAffectByDehydrationDebuff(
  target: Entity,
  attackWeapon: ItemStack
): boolean {
  if (attackWeapon?.typeId !== "hy:shattered_sand_staff") return false;
  if (target.matches({ families: ["immune_desert_debuff"] })) return false;
  if (target.hasTag("hy:immune_desert_debuff")) return false;
  if (
    getEquipmentItem(target, EquipmentSlot.Head)?.typeId ===
    "hy:drift_sand_coronet"
  )
    return false;
  return true;
}

/**
 * 判断法老残影是否可以为实体添加干旱效果
 * @param target 被施法的实体
 * @returns
 */
export function isAffectByBossDroughtDebuff(target: Entity): boolean {
  if (target.matches({ families: ["immune_desert_debuff"] })) return false;
  if (target.hasTag("hy:immune_desert_debuff")) return false;
  if (
    getEquipmentItem(target, EquipmentSlot.Head)?.typeId ===
    "hy:drift_sand_coronet"
  )
    return false;
  return true;
}
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