import { Entity, EquipmentSlot, Player } from "@minecraft/server";
import { VirtualEffect } from "@grindstone/effect-kit";
import { getEquipmentItem } from "@grindstone/utils";

/**
 * 实体被攻击时，判断其是否会获得干旱效果
 * @param entity 被攻击的实体
 * @tag `hy:immune_desert_debuff` 使实体免疫沙漠负面效果
 * @returns
 */
function isAffectByDroughtEffect(entity: Entity): boolean {
  if (entity.matches({ families: ["immune_desert_debuff"] })) return false;
  if (entity.hasTag("hy:immune_desert_debuff")) return false;
  if (
    getEquipmentItem(entity, EquipmentSlot.Head)?.typeId ===
    "hy:drift_sand_coronet"
  )
    return false;
  return true;
}

export const droughtEffect = new VirtualEffect("hy:drought", 20);

droughtEffect.onUpdate((entity) => {
  if (isAffectByDroughtEffect(entity)) {
    entity.addEffect("weakness", 40, {
      amplifier: 2,
    });
    entity.addEffect("nausea", 40, { amplifier: 2 });
    entity.addEffect("darkness", 40);
    entity.addEffect("poison", 40);
  }
});

droughtEffect.onAddToEntity((entity) => {
  if (entity instanceof Player) {
    entity.sendMessage({ translate: "hy.message.drought" });
  }
});
