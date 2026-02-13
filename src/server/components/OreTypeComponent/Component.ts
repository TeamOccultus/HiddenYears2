import { system } from "@minecraft/server";
import { OreTypeParams } from "./Params";
import { OreEvents } from "../../events/OreEvents";

export class OreTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onPlayerBreak(arg0, arg1) {
          const player = arg0.player;
          const params = arg1.params as OreTypeParams;
          if (!player) return;
          if (params.ore_type === "sandcaust") {
            OreEvents.sandcaust(player);
          }
          if (params.ore_type == "ruby") {
            OreEvents.mentalAffect(player);
          }
        }
      });
    });
  }
}
