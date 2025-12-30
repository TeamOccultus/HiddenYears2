import { system } from "@minecraft/server";
import { TrialStoneParams } from "./Params";


export class TrialStoneComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onPlayerInteract(arg0, arg1) {
          const p = arg1.params as TrialStoneParams;
          
        },
      });
    });
  }
}
