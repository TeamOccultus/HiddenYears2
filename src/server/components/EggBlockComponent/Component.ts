import { system, world } from "@minecraft/server";
import { eggBlockOnTick } from "../../events/EggBlockEvents";

export class EggBlockComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onTick(arg0, arg1) {
          eggBlockOnTick(arg0,arg1)
        },
      });
    });
  }
}
