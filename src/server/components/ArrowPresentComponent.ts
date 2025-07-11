import { Entity, ItemStack, system, world } from "@minecraft/server";
import { ArrowPresentParams, ArrowPresents } from "./ArrowPresentParams";
import { EntitiesUtils } from "@starock/entity";

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
        entity.applyDamage(8);
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
        entity.dimension.spawnEntity("minecraft:lightning_bolt", entity.location);
        entity.applyDamage(10);
      });
    return;  
  }
}
