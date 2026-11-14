import { system } from "@minecraft/server";
import { ExperiencedBlockParams } from "./Params";

export class ExperiencedBlockComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const block = init.blockComponentRegistry;
      block.registerCustomComponent(componentName, {
        onPlayerBreak(arg0, arg1) {
          const [block, dimension] = [arg0.block, arg0.dimension];
          const params = arg1.params as ExperiencedBlockParams;
          if (!params.on_break) return;
          dimension.spawnXp(block.location, params.on_break);
        },
        onPlace(arg0, arg1) {
          const [block, dimension] = [arg0.block, arg0.dimension];
          const params = arg1.params as ExperiencedBlockParams;
          if (!params.on_place) return;
          dimension.spawnXp(block.location, params.on_place);
        },
      });
    });
  }
}
