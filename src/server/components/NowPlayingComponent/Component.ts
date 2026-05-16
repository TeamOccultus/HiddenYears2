import { Player, system, world } from "@minecraft/server";
import { NowPlayingToast } from "../../../core/Toast";
import { NowPlayingParams } from "./Params";

export class NowPlayingComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {});
    });
    world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
      if (event.block.typeId !== "minecraft:jukebox") return;
      const nowPlaying = event.itemStack.getComponent(this.componentName);
      const param = nowPlaying.customComponentParameters
        .params as NowPlayingParams;
      system.run(() => {
        new NowPlayingToast(
          param.name,
          param.author,
          param.icon_path ?? "textures/ui/world_glyph_color"
        ).send(event.player);
      });
    });
  }
}
