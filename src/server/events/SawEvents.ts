import { Block, ItemStack } from "@minecraft/server";
import { SawRecipeManager } from "../recipe/saw/SawRecipeManager";
import { RandomEvent, Random } from "@occultus/api";

export class SawEvents {
  static spawnStick(block: Block) {
    new RandomEvent(0.85, () => {
      block.dimension.spawnItem(
        new ItemStack("minecraft:stick", Random.integer(5, 2)),
        block.location
      );
    }).call();
  }
  static spawnPlank(id: string, block: Block) {
    new RandomEvent(0.8, () => {
      block.dimension.spawnItem(
        SawRecipeManager.getResult(id) as ItemStack,
        block.location
      );
    }).call();
  }
  static spawnItSelf(id: string, block: Block) {
    new RandomEvent(0.2, () => {
      block.dimension.spawnItem(new ItemStack(id), block.location);
    }).call();
  }
}
