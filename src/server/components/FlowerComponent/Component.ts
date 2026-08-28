import { EntityDamageCause, system } from "@minecraft/server";
import { RandomEvent } from "@occultus/api";
import { FlowerComponentParams } from "./Params";

export class FlowerComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((event) => {
      event.blockComponentRegistry.registerCustomComponent(componentName, {
        onTick(arg0, arg1) {
          const p = arg1.params as FlowerComponentParams;
          new RandomEvent(p.chance, () => {
            arg0.dimension
              .getEntitiesAtBlockLocation(arg0.block.location)
              .forEach((entity) => {
                entity.applyDamage(p.damage, {
                  cause: EntityDamageCause.contact
                });
              });
          });
        }
      });
    });
  }
}
