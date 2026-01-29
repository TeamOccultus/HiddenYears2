import { Entity, EquipmentSlot, Player } from "@minecraft/server";
import { VirtualEffect, getEquipmentItem } from "@occultus/api";

/**
 * 实体被攻击时，判断其是否会获得干旱效果
 * @param entity 被攻击的实体
 * @tag `hiddenyears:immune_desert_debuff` 使实体免疫沙漠负面效果
 * @returns
 */
export function isAffectByTetanusEffect(entity: Entity): boolean {
  if (entity.hasTag("hiddenyears:tetanus_attacker")) return false;
  return true;
}

export const tetanusEffect = new VirtualEffect("hiddenyears:tetanus", 20);
