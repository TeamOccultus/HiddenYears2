import { EquipmentSlot, world } from "@minecraft/server";
import { getEquipmentItem } from "@grindstone/utils";

/**
 * 徽章效果监听器
 */
export function badgeEffectMonitor() {
  world.getAllPlayers().forEach((player) => {
    if (!getEquipmentItem(player, EquipmentSlot.Chest)?.hasTag("hy:badge")) {
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

/**
 * 雨神王冠效果监听器
 */
export function isisCrownEffectMonitor() {
  world.getAllPlayers().forEach((player) => {
    if (
      getEquipmentItem(player, EquipmentSlot.Head)?.typeId === "hy:isis_crown"
    ) {
      player.addEffect("fire_resistance", 40);
      if (!player.hasTag("hy:immune_desert_debuff")) {
        player.addTag("hy:immune_desert_debuff");
      }
    }
  });
}
