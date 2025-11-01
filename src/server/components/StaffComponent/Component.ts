import { system } from "@minecraft/server";
import { StaffEvents } from "../../events/StaffEvents";

export class StaffComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onUse(arg0, arg1) {
          StaffEvents.onRelease(arg0, arg1);
        },
      });
    });
  }
}
