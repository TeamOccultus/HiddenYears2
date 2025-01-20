import { Player } from "@minecraft/server";
import { VirtualEffect } from "./core";

export const bleedEffect = new VirtualEffect("hy:bleed", 2, 20);

bleedEffect.setEffect((entity, level) => {
  if (level === 1) {
    entity.applyDamage(1);
    entity.addEffect("slowness", 40, { amplifier: 1 });
  }
  if (level === 2) {
    entity.applyDamage(2);
    entity.addEffect("slowness", 40, { amplifier: 2 });
  }
}, 20);

bleedEffect.setLevelUp((entity) => {
  if (entity instanceof Player) {
    entity.sendMessage({ translate: "hy.message.bleed" });
  }
});
