import { system } from "@minecraft/server";
import { TrophyBundleEvents } from "../../events/TrophyBundleEvents";

export class TrophyBundleComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          TrophyBundleEvents.onUse(arg0, arg1);
        },
      });
    });
  }
}
