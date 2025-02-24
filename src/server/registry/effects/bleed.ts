import { Player } from "@minecraft/server";
import { VirtualEffect } from "@grindstone/effect-kit";

export const bleedEffect = new VirtualEffect("hy:bleed", 20);

bleedEffect.onUpdate((entity, level) => {
  if (level === 1) {
    entity.applyDamage(1);
    entity.addEffect("slowness", 40, { amplifier: 1 });
  }
  if (level === 2) {
    entity.applyDamage(2);
    entity.addEffect("slowness", 40, { amplifier: 2 });
  }
});

bleedEffect.onAddToEntity((entity) => {
  if (entity instanceof Player) {
    entity.sendMessage({ translate: "hy.message.bleed" });
  }
});
