import { Block, ItemStack } from "@minecraft/server";
import { RandomEvent, Random } from "@starock/math";
import { HammerRecipeManager } from "../recipe/hammer/HammerRecipeManager";

export class HammerEvents {
  static spawnAdditionalMaterial(id: string, block: Block) {
    new RandomEvent(0.85, () => {
      block.dimension.spawnItem(
        HammerRecipeManager.getResult(id) as ItemStack,
        block.location
      );
    }).call();
  }
}