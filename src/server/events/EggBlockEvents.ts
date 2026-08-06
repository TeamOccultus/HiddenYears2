import {
  BlockComponentTickEvent,
  CustomComponentParameters
} from "@minecraft/server";
import { EggBlockParams } from "../components/EggBlockComponent/Params";
import { RandomEvent } from "@occultus/api";

export function eggBlockOnTick(
  arg0: BlockComponentTickEvent,
  param: CustomComponentParameters
) {
  const data = param.params as EggBlockParams;
  const { block, dimension } = arg0;
  const randomEvent = new RandomEvent(data.chance ?? 1.0, () => {
    // @ts-ignore
    const currentGrowth = block.permutation.getState("starock:growth");
    if (typeof currentGrowth !== "number") return;
    if (currentGrowth + 1 > data.max_growth) {
      dimension.setBlockType(block.location, "minecraft:air");
      dimension.spawnEntity(data.spawn_entity, block.location, {
        spawnEvent: data.spawn_event
      });
      dimension.spawnParticle(
        data.particle ?? "minecraft:crop_growth_emitter",
        block.location
      );
      return;
    }
    block.setPermutation(
      // @ts-ignore
      block.permutation.withState("starock:growth", currentGrowth + 1)
    );
    dimension.spawnParticle(
      data.particle ?? "minecraft:crop_growth_emitter",
      block.location
    );
  });
  randomEvent.call();
}
