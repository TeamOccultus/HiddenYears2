import { world } from "@minecraft/server";
import { RandomEvent } from "@occultus/api";

export class LunamutatioEntityEvent {
  static subscribe() {
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const { hitEntity, damagingEntity } = event;
      if (!damagingEntity.matches({ families: ["lunamutatio_monster"] }))
        return;
      if (!hitEntity.isValid) return;
      new RandomEvent(0.6, () => {
        hitEntity.addEffect("wither", 5 * 20);
      }).call();
    });
    world.afterEvents.projectileHitEntity.subscribe((event) => {
      const { source } = event;
      if (!source.matches({ families: ["lunamutatio_monster"] })) return;
      if (!event.getEntityHit().entity) return;
      if (!event.getEntityHit().entity.isValid) return;
      new RandomEvent(0.6, () => {
        event.getEntityHit().entity.addEffect("wither", 5 * 20);
      }).call();
    });
  }
}
