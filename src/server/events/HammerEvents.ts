import { Block, ItemStack } from "@minecraft/server";
import { HammerRecipeManager } from "../recipe/hammer/HammerRecipeManager";
import { RandomEvent } from "@occultus/api";

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