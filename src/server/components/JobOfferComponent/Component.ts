import { system } from "@minecraft/server";
import { JobEvents } from "../../events/JobEvents";

export class JobComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onUse(arg0, arg1) {
          JobEvents.onUse(arg0, arg1);
        }
      });
    });
  }
}
