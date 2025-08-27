import { Player, world } from "@minecraft/server";
import { RandomEvent } from "@occultus/api";

export function unyieldingArmor(player: Player, level: number = 1) {
  player.addEffect("minecraft:resistance", 300 * level, {
    amplifier: level - 1,
    showParticles: false,
  });
  player.addEffect("minecraft:strength", 300 * level, {
    amplifier: level - 1,
    showParticles: false,
  });
  player.addEffect("minecraft:speed", 300 * level, {
    amplifier: level - 1,
    showParticles: false,
  });
  player.onScreenDisplay.setActionBar({
    translate: "message.hiddenyears:unyielding",
  });
}

export function rebirthArmor(player: Player) {
  const health = player.getComponent("health");
  if (health.currentValue > 5) return;
  health.setCurrentValue(health.currentValue + 5);
  new RandomEvent(0.5, () => {
    health.resetToMaxValue();
  });
  player.onScreenDisplay.setActionBar({
    translate: "message.hiddenyears:rebirth",
  });
}


