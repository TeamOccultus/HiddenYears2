import { getEquipmentItem } from "@lazuli/ldk2";
import {
  Dimension,
  Entity,
  EquipmentSlot,
  ItemStack,
  Vector3,
} from "@minecraft/server";

export class HyUtils {
  private constructor() {}
  static isAffectByDroughtDebuff(target: Entity, item: ItemStack): boolean {
    if (
      item?.typeId === "hy:shattered_sand_cudgel" &&
      !target.matches({ families: ["immune_desert_debuff"] }) &&
      !target.hasTag("hy:immune_desert_debuff") &&
      !(
        target.getComponent("equippable")?.getEquipment(EquipmentSlot.Head)
          .typeId === "hy:drift_sand_coronet"
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
  static isAffectByBossDroughtDebuff(target: Entity): boolean {
    if (
      !target.matches({ families: ["immune_desert_debuff"] }) &&
      !target.hasTag("hy:immune_desert_debuff") &&
      !(
        target.getComponent("equippable")?.getEquipment(EquipmentSlot.Head)
          .typeId === "hy:drift_sand_coronet"
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 返回实体是否会被沙漠Debuff影响
   * @param target
   * @param item
   * @returns
   */
  static isAffectByDehydrationDebuff(target: Entity, item: ItemStack): boolean {
    if (
      item?.typeId === "hy:shattered_sand_staff" &&
      !target.matches({ families: ["immune_desert_debuff"] }) &&
      !target.hasTag("hy:immune_desert_debuff") &&
      !(
        target.getComponent("equippable")?.getEquipment(EquipmentSlot.Head)
          .typeId === "hy:drift_sand_coronet"
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
  static loot(dimension: Dimension, location: Vector3, path: string) {
    dimension.runCommand(
      `loot spawn ${location.x} ${location.y} ${location.z} loot "${path}"`
    );
  }
  /**
   * 判断实体是否受血色的护甲机制影响
   * @param entity
   * @returns
   */
  static isAffectByBloodArmor(entity: Entity, attacker: Entity) {
    if (
      !attacker.matches({
        families: ["ruby"],
      })
    ) {
      return false;
    }
    if (
      !(
        getEquipmentItem(entity, EquipmentSlot.Chest)?.typeId ===
        "hy:ruby_chestplate"
      )
    ) {
      return false;
    }
    if (
      !(
        getEquipmentItem(entity, EquipmentSlot.Legs)?.typeId ===
        "hy:ruby_leggings"
      )
    ) {
      return false;
    }
    if (
      !(
        getEquipmentItem(entity, EquipmentSlot.Feet)?.typeId === "hy:ruby_boots"
      )
    ) {
      return false;
    }
    console.info("This entity is affect by Blood Armor.")
    return true;
  }
  /**
   * 判断实体是否会受血色的冠冕效果影响
   * @param entity
   * @returns
   */
  static isAffectByBloodCrown(entity: Entity, attacker: Entity) {
    if (
      !attacker.matches({
        families: ["ruby"],
      })
    ) {
      return false;
    }
    if (
      getEquipmentItem(entity, EquipmentSlot.Head)?.typeId === "hy:ruby_helmet"
    ) {
      console.info("This entity is affect by Blood Crown.")
      return true;
    } else {
      return false;
    }
  }
}
