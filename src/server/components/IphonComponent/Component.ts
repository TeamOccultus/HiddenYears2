import { system, world } from "@minecraft/server";
import { IphonEvents } from "../../events/IphonEvents";

export class IphonComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {});
    });
    world.afterEvents.itemUse.subscribe((event) => {
      const { itemStack, source } = event;
      const staff = itemStack.getComponent(this.componentName);
      if (!staff) return;
      IphonEvents.onRelease(event, staff.customComponentParameters);
    });
  }
}
