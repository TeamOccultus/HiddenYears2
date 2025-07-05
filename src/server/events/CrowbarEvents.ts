import { Block, ItemStack } from "@minecraft/server";
import { RandomEvent } from "@starock/math";
import { CrowbarRecipeManager } from "../recipe/crowbar/CrowbarRecipeManager";

export class CrowbarEvents {
  static spawnNugget(id: string, block: Block) {
    new RandomEvent(0.7, () => {
      block.dimension.spawnItem(
        CrowbarRecipeManager.getResult(id) as ItemStack,
        block.location
      );
    }).call();
  }
}
