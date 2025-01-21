import { EquipmentSlot, system, world } from "@minecraft/server";
import { getEquipmentItem } from "@grindstone/utils";
import { vanillaDimensions } from "@lazuli/ldk2";


/**
 * 干旱效果
 */
export function droughtEffectMonitor() {
  vanillaDimensions.forEach((dimension) => {
    dimension.getEntities({ tags: ["hy:drought"] }).forEach((entity) => {
      entity.addEffect("weakness", 40, {
        amplifier: 2,
      });
      entity.addEffect("nausea", 40, { amplifier: 2 });
      entity.addEffect("darkness", 40);
      entity.addEffect("poison", 40, { amplifier: 2 });
    });
  });
}

/**
 * 脱水效果
 */
export function dehydrationEffectMonitor() {
  vanillaDimensions.forEach((dimension) => {
    dimension.getEntities({ tags: ["hy:dehydration"] }).forEach((entity) => {
      entity.applyDamage(1);
      entity.addEffect("weakness", 40, {
        amplifier: 2,
      });
      entity.addEffect("nausea", 40, { amplifier: 2 });
      entity.addEffect("mining_fatigue", 40, { amplifier: 2 });
    });
  });
}

/**
 * 徽章效果监听器
 */
export function badgeEffectMonitor() {
  world.getAllPlayers().forEach((player) => {
    if (!getEquipmentItem(player, EquipmentSlot.Chest)?.hasTag("hy:badge")){
      return;
    }
    const chestItem = getEquipmentItem(player, EquipmentSlot.Chest);
    switch (chestItem.typeId) {
      case "hy:diamond_badge":
        player.addEffect("health_boost", 40, {
          showParticles: false,
          amplifier: 2,
        });
        break;
      case "hy:golden_badge":
        player.addEffect("health_boost", 40, {
          showParticles: false,
          amplifier: 1,
        });
        break;
      case "hy:copper_badge":
        player.addEffect("health_boost", 40, { showParticles: false });
        break;
      default:
        break;
    }
  });
}
