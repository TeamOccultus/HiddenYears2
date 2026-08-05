import { Entity, EquipmentSlot, Player } from "@minecraft/server";
import { VirtualEffect, getEquipmentItem } from "@occultus/api";

/**
 * 实体被攻击时，判断其是否会获得干旱效果
 * @param entity 被攻击的实体
 * @tag `hiddenyears:immune_desert_debuff` 使实体免疫沙漠负面效果
 * @returns
 */
export function isAffectByDroughtEffect(entity: Entity): boolean {
  if (entity.matches({ families: ["immune_desert_debuff"] })) return false;
  if (entity.hasTag("hiddenyears:immune_desert_debuff")) return false;
  if (
    getEquipmentItem(entity, EquipmentSlot.Head)?.typeId ===
    "hiddenyears:drift_sand_coronet"
  )
    return false;
  return true;
}

export const droughtEffect = new VirtualEffect("hiddenyears:drought", 20,{
  translate: "effect.hiddenyears:drought.name"
});
