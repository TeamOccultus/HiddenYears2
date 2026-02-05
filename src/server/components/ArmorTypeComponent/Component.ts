import {
  system,
  world
} from "@minecraft/server";
import { ArmorEvents } from "../../events/ArmorEvents";

export class ArmorTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {});
    });

    world.afterEvents.entityHurt.subscribe((event) => {
      ArmorEvents.onEntityHurt(event);
    })
  }
}
