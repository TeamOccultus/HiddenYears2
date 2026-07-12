import { world } from "@minecraft/server";
import { droughtEffect } from "../effects/drought";

export class DesertEntityEvent {
  static subscribe() {
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const { hitEntity, damagingEntity } = event;
      if (!damagingEntity.matches({ families: ["desert_monster"] })) return;
      if (!hitEntity.isValid) return;
      droughtEffect.add(hitEntity, 200, 1);
    });
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const { hitEntity, damagingEntity } = event;
      if (!(damagingEntity.typeId === "minecraft:husk")) return;
      if (!hitEntity.isValid) return;
      droughtEffect.add(hitEntity, 100, 1);
    });
  }
}
