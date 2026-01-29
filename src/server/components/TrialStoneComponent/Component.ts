import { system } from "@minecraft/server";
import { TrialStoneParams } from "./Params";
import { TrialStoneEvents } from "../../events/TrialStoneEvent";

export class TrialStoneComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onPlayerInteract(arg0, arg1) {
          const p = arg1.params as TrialStoneParams;
          TrialStoneEvents.onPlayerInteract(arg0, p);
        }
      });
    });
  }
}
