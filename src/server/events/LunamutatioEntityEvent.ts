import { EntityDamageCause, world } from "@minecraft/server";
import { RandomEvent, Time } from "@occultus/api";

export class LunamutatioEntityEvent {
  static subscribe() {
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const { hitEntity, damagingEntity } = event;
      if (!damagingEntity.matches({ families: ["basic_lunamutatio_monster"] }))
        return;
      if (!hitEntity.isValid) return;
      const brightness = Time.getMoonBrightness();
      console.log("Brightness:" + brightness);
      hitEntity.applyDamage(10 * brightness, {
        cause: EntityDamageCause.wither,
        damagingEntity: null
      });
      new RandomEvent(brightness, () => {
        hitEntity.addEffect("wither", 5 * 20);
      }).call();
    });
    world.afterEvents.projectileHitEntity.subscribe((event) => {
      const { source } = event;
      const hitEntity = event.getEntityHit().entity;
      if (source && !source.matches({ families: ["basic_lunamutatio_monster"] })) return;
      if (!hitEntity) return;
      if (!hitEntity.isValid) return;
      const brightness = Time.getMoonBrightness();
      console.log("Brightness:" + brightness);
      hitEntity.applyDamage(2 * brightness, {
        cause: EntityDamageCause.wither,
        damagingEntity: null
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
      console.log("Brightness:" + brightness);
      hitEntity.applyDamage(12 * brightness, {
        cause: EntityDamageCause.wither,
        damagingEntity: null
      });
      new RandomEvent(brightness, () => {
        hitEntity.addEffect("wither", 10 * 20, { amplifier: 1 });
      }).call();
    });
    world.afterEvents.projectileHitEntity.subscribe((event) => {
      const { source } = event;
      const hitEntity = event.getEntityHit().entity;
      if (source && !source.matches({ families: ["lunamutatio_traveler"] })) return;
      if (!hitEntity) return;
      if (!hitEntity.isValid) return;
      const brightness = Time.getMoonBrightness();
      console.log("Brightness:" + brightness);
      hitEntity.applyDamage(4 * brightness, {
        cause: EntityDamageCause.wither,
        damagingEntity: null
      });
      new RandomEvent(0.9, () => {
        hitEntity.addEffect("wither", 10 * 20, { amplifier: 1 });
      }).call();
    });
  }
}
