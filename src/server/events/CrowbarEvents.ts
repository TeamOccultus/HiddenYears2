import { Block, ItemStack } from "@minecraft/server";
import { CrowbarRecipeManager } from "../recipe/crowbar/CrowbarRecipeManager";
import { RandomEvent } from "@occultus/api";

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
