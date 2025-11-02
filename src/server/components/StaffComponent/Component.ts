import { system, world } from "@minecraft/server";
import { StaffEvents } from "../../events/StaffEvents";

export class StaffComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
      });
    });
    world.afterEvents.itemUse.subscribe((event) => {
      const { itemStack, source } = event;
      const staff = itemStack.getComponent(this.componentName);
      if (!staff) return;
      StaffEvents.onRelease(event, staff.customComponentParameters);
    });
  }
}
