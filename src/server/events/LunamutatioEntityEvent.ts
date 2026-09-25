import { EntityDamageCause, world } from "@minecraft/server";
import { RandomEvent, Time, toVec3, Vector3Utils } from "@occultus/api";

export class LunamutatioEntityEvent {
  static subscribe() {
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const { hitEntity, damagingEntity } = event;
      if (!damagingEntity.matches({ families: ["basic_lunamutatio_monster"] }))
        return;
      if (!hitEntity.isValid) return;
      const brightness = Time.getMoonBrightness();
      hitEntity.applyDamage(10 * brightness, {
        cause: EntityDamageCause.wither,
        damagingEntity: damagingEntity
      });
      new RandomEvent(brightness, () => {
        hitEntity.addEffect("wither", 5 * 20);
      }).call();
    });
    world.afterEvents.projectileHitEntity.subscribe((event) => {
      const { source } = event;
      const hitEntity = event.getEntityHit().entity;
      if (
        !source ||
        !source.matches({ families: ["basic_lunamutatio_monster"] })
      )
        return;
      if (!hitEntity) return;
      if (!hitEntity.isValid) return;
      const brightness = Time.getMoonBrightness();
      hitEntity.applyDamage(2 * brightness, {
        cause: EntityDamageCause.wither,
        damagingProjectile: event.projectile
      });
      new RandomEvent(brightness, () => {
        hitEntity.addEffect("wither", 5 * 20);
      }).call();
    });
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const { hitEntity, damagingEntity } = event;
      if (!damagingEntity.matches({ families: ["lunamutatio_traveler"] }))
        return;
      if (!hitEntity.isValid) return;
      const brightness = Time.getMoonBrightness();
      hitEntity.applyDamage(12 * brightness, {
        cause: EntityDamageCause.wither,
        damagingEntity: damagingEntity
      });
      new RandomEvent(brightness, () => {
        hitEntity.addEffect("wither", 10 * 20, { amplifier: 1 });
      }).call();
    });
    world.afterEvents.projectileHitEntity.subscribe((event) => {
      const { source } = event;
      const hitEntity = event.getEntityHit().entity;
      if (!source || !source.matches({ families: ["lunamutatio_traveler"] }))
        return;
      if (!hitEntity) return;
      if (!hitEntity.isValid) return;
      const brightness = Time.getMoonBrightness();
      hitEntity.applyDamage(4 * brightness, {
        cause: EntityDamageCause.wither,
        damagingProjectile: event.projectile
      });
      new RandomEvent(0.9, () => {
        hitEntity.addEffect("wither", 10 * 20, { amplifier: 1 });
      }).call();
    });
    world.afterEvents.entityDie.subscribe((event) => {
      const { damageSource, deadEntity } = event;
      if (
        deadEntity.matches({ families: ["basic_lunamutatio_monster"] }) ||
        deadEntity.matches({ families: ["lunamutatio_traveler"] })
      ) {
        const block = deadEntity.dimension.getBlock(
          Vector3Utils.add(deadEntity.location, toVec3(0, -1, 0))
        );
        if (
          block.typeId === "minecraft:dirt" ||
          block.typeId === "minecraft:grass_block"
        ) {
          deadEntity.dimension.setBlockType(
            deadEntity.location,
            "hiddenyears:flower_of_lunamutatio"
          );
        }
      }
    });
  }
}
