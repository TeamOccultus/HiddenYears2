import { system } from "@minecraft/server";
import { vanillaDimensions } from "lazuli-mc";

/**
 * The bleed effect.
 */
export function bleedEffectMonitor() {
  vanillaDimensions.forEach((dimension) => {
    dimension.getEntities({ tags: ["hy:bleed_lv1"] }).forEach((entity) => {
      system.runInterval(() => {
        entity.applyDamage(1);
        entity.addEffect("slowness", 40, { amplifier: 1 });
      }, 40);
    });
    dimension.getEntities({ tags: ["hy:bleed_lv2"] }).forEach((entity) => {
      system.runInterval(() => {
        entity.applyDamage(1);
        entity.addEffect("slowness", 20, { amplifier: 1 });
      }, 20);
    });
  });
}
