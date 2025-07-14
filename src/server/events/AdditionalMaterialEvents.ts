import {
  EntityDamageCause,
  ItemComponentHitEntityEvent,
  ItemComponentMineBlockEvent,
  system,
} from "@minecraft/server";
import { AdditionalMaterialType } from "../item/AdditionalMaterial";
import { EntitiesUtils } from "@starock/entity";

export class AdditionalMaterialEvents {
  private constructor() {}
  static onHitEntity(
    arg: ItemComponentHitEntityEvent,
    type: AdditionalMaterialType
  ) {
    const { itemStack, hitEntity, attackingEntity } = arg;
    if (type === "erosion") {
      hitEntity.addEffect("minecraft:slowness", 200);
      const handle = system.runInterval(() => {
        if (hitEntity.isValid) {
          hitEntity.applyDamage(5, { cause: EntityDamageCause.magic });
        }
      }, 40);
      system.runTimeout(() => system.clearRun(handle), 120);
      return;
    }
    if (type === "sparkling_copper") {
      attackingEntity.addTag("hiddenyears:sparkling_copper_attaker");
      const entities = hitEntity.dimension.getEntities({
        location: attackingEntity.location,
        maxDistance: 8,
        excludeTags: ["hiddenyears:sparkling_copper_attaker"],
      });
      entities.forEach((entity) => {
        entity.applyDamage(8, { cause: EntityDamageCause.magic });
        entity.dimension.spawnParticle(
          "minecraft:critical_hit_emitter",
          entity.location
        );
      });
      attackingEntity.removeTag("hiddenyears:sparkling_copper_attaker");
      return;
    }
  }
  static onMineBlock(
    arg: ItemComponentMineBlockEvent,
    type: AdditionalMaterialType
  ) {
    const { itemStack, block, source } = arg;
    if (type === "erosion") return;
    if (type === "sparkling_copper") {
      source.addEffect("minecraft:haste", 200, {
        amplifier: 3,
        showParticles: false,
      });
      return;
    }
  }
}
