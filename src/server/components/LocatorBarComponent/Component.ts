import { system } from "@minecraft/server";
import { LocatorBarEvents } from "../../events/LocatorBarEvents";

export class LocatorBarComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          LocatorBarEvents.onUse(arg0, arg1);
        }
      });
    });
  }
}
