import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  world,
  system
} from "@minecraft/server";
import { StructureLocatorParams } from "../components/StructureLocatorComponent/Params";

export class LocateEvents {
  onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const params = arg1.params as StructureLocatorParams;
    const player = arg0.source;
    world.gameRules.commandBlockOutput = true;
    world.structureManager.place(params.locate_helper, player.dimension, {
      x: player.location.x,
      y: -64,
      z: player.location.z
    });
    player.runCommand("setblock ~ -63 ~ redstone_block");
    system.runTimeout(() => {
      player.runCommand("fill ~ 123 ~ ~ 124 ~ air");
    }, 4);
  }
}
