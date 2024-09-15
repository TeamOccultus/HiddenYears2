import { Entity, EquipmentSlot, ItemStack } from "@minecraft/server";

export class HyUtils {
  private constructor() {}
  static isAffectByDroughtDebuff(target: Entity, item: ItemStack): boolean {
    if (
      item?.typeId === "hy:shattered_sand_cudgel" &&
      !target.hasTag("hy:immune_desert_debuff")&&
      !(target.getComponent("equippable").getEquipment(EquipmentSlot.Head).typeId === "hy:drift_sand_coronet")
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
      item?.typeId === "hy:shattered_sand_sickle" &&
      !target.hasTag("hy:immune_desert_debuff")&&
      !(target.getComponent("equippable").getEquipment(EquipmentSlot.Head).typeId === "hy:drift_sand_coronet")
    ) {
     return true;
    } else {
      return false;
    }
  }
}
