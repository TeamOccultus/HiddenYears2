import { system } from "@minecraft/server";
import { VaultParams } from "./Params";
import { VaultEvents } from "../../events/VaultEvents";

export class VaultComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onPlayerInteract(arg0, arg1) {
          const p = arg1.params as VaultParams;
          VaultEvents.onPlayerInteract(arg0, p);
        },
      });
    });
  }
}
