import { Entity, EquipmentSlot, Player } from "@minecraft/server";
import { VirtualEffect } from "@grindstone/effect-kit";
import { getEquipmentItem } from "@grindstone/utils";

/**
 * 实体被攻击时，判断其是否会获得干旱效果
 * @param entity 被攻击的实体
 * @tag `hy:immune_desert_debuff` 使实体免疫沙漠负面效果
 * @returns
 */
function isAffectByTetanusEffect(entity: Entity): boolean {
  if (entity.hasTag("hy:tetanus_attacker")) return false;
  return true;
}

export const tetanusEffect = new VirtualEffect("hy:tetanus", 1, 20);

tetanusEffect.setEffect((entity) => {
  if (isAffectByTetanusEffect(entity)) {
    entity.addEffect("poison", 40, {
      amplifier: 2,
    });
    entity.addEffect("nausea", 40, { amplifier: 2 });
    entity.addEffect("wither", 40);
  }
});

tetanusEffect.setLevelUp((entity) => {
  if (entity instanceof Player) {
    entity.sendMessage({ translate: "hy.message.tetanus" });
  }
});
