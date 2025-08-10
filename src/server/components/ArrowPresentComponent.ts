import {
  Entity,
  EntityDamageCause,
  ItemStack,
  Player,
  system,
  world,
} from "@minecraft/server";
import { ArrowPresentParams, ArrowPresents } from "./ArrowPresentParams";
import { Random } from "@occultus/api";

export class ArrowPresentComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {});
    });
    world.afterEvents.projectileHitEntity.subscribe((arg) => {
      try {
        const item = new ItemStack(arg.projectile.typeId);
        if (!item) return;
        const component = item.getComponent(this.componentName);
        if (!component) return;
        const params = component.customComponentParameters
          .params as ArrowPresentParams;
        stringifyPresent(arg.getEntityHit().entity, params.present);
      } catch (e) {}
    });
  }
}

function stringifyPresent(
  hitEntity: Entity | undefined,
  present: ArrowPresents
) {
  if (!hitEntity) return;
  if (present === "daylight") {
    hitEntity.dimension
      .getEntities({
        location: hitEntity.location,
        maxDistance: 6,
        families: ["monster"],
      })
      .forEach((entity) => {
        if (!entity.isValid) return;
        entity.setOnFire(10);
        entity.applyDamage(5);
      });
    return;
  }
  if (present === "lightning") {
    hitEntity.dimension
      .getEntities({
        location: hitEntity.location,
        maxDistance: 15,
        families: ["monster"],
      })
      .forEach((entity) => {
        if (!entity.isValid) return;
        entity.dimension.spawnEntity(
          "minecraft:lightning_bolt",
          entity.location
        );
        entity.applyDamage(10);
      });
    return;
  }
  if (present === "fire") {
    hitEntity.dimension
      .getEntities({
        location: hitEntity.location,
        maxDistance: 6,
        excludeFamilies: ["player"],
      })
      .forEach((entity) => {
        if (!entity.isValid) return;
        entity.setOnFire(20);
        entity.applyDamage(10, { cause: EntityDamageCause.fire });
      });
    return;
  }
  if (present === "steel") {
    hitEntity.dimension
      .getEntities({
        location: hitEntity.location,
        maxDistance: 6,
        excludeFamilies: ["player"],
      })
      .forEach((entity) => {
        if (!entity.isValid) return;
        entity.applyDamage(Random.integer(12, 8), {
          cause: EntityDamageCause.freezing,
        });
        entity.dimension.spawnParticle(
          "minecraft:snowflake_particle",
          entity.location
        );
        entity.addEffect("minecraft:slowness", 200, {
          amplifier: 1,
          showParticles: false,
        });
      });
    return;
  }
}
