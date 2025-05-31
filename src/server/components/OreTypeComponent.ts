import { system } from "@minecraft/server";
import { OreTypeSchema } from "./OreTypeSchema";
import { mentalAffect } from "../../utils/entity";

export class OreTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onPlayerBreak(arg0, arg1) {
          const player = arg0.player;
          const params = arg1.params as OreTypeSchema;
          if (!player) return;
          if (params.ore_type == "ruby") {
            mentalAffect(player);
          }
        },
      });
    });
  }
}
