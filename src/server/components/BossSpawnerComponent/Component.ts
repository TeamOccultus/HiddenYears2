import { system } from "@minecraft/server";
import { BossSpawnerParams } from "./Params";
import { BossSpwanerEvents } from "../../events/BossSpawnerEvents";

export class BossSpawnerComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onPlayerInteract(arg0, arg1) {
          const p = arg1.params as BossSpawnerParams;
          BossSpwanerEvents.onPlayerInteract(arg0, p);
        },
      });
    });
  }
}
