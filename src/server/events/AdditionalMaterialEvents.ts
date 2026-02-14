import {
  EntityDamageCause,
  EntityHitEntityAfterEvent,
  PlayerBreakBlockAfterEvent,
  system
} from "@minecraft/server";
import { AdditionalMaterialType } from "../../core/AdditionalMaterial";

export class AdditionalMaterialEvents {
  private constructor() {}
  static onHitEntity(
    arg: EntityHitEntityAfterEvent,
    type: AdditionalMaterialType
  ) {
    const { hitEntity, damagingEntity } = arg;
    if (!hitEntity.isValid) return;
    if (type === "erosion") {
      hitEntity.addEffect("minecraft:slowness", 200);
      const handle = system.runInterval(() => {
        hitEntity.applyDamage(5, { cause: EntityDamageCause.magic });
      }, 40);
      system.runTimeout(() => system.clearRun(handle), 120);
      return;
    }
    if (type === "sparkling_copper") {
      damagingEntity.addTag("hiddenyears:sparkling_copper_attaker");
      const entities = hitEntity.dimension.getEntities({
        location: damagingEntity.location,
        maxDistance: 8,
        excludeTags: ["hiddenyears:sparkling_copper_attaker"]
      });
      entities.forEach((entity) => {
        if (!entity.isValid) return;
        entity.applyDamage(8, { cause: EntityDamageCause.magic });
        if (!entity.isValid) return;
        entity.dimension.spawnParticle(
          "minecraft:critical_hit_emitter",
          entity.location
        );
      });
      damagingEntity.removeTag("hiddenyears:sparkling_copper_attaker");
      return;
    }
  }
  static onMineBlock(
    arg: PlayerBreakBlockAfterEvent,
    type: AdditionalMaterialType
  ) {
    const { player } = arg;
    if (type === "erosion") return;
    if (type === "sparkling_copper") {
      player.addEffect("minecraft:haste", 200, {
        amplifier: 3,
        showParticles: false
      });
      return;
    }
  }
}
