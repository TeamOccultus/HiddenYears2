import { ItemLockMode, ItemStack, world } from "@minecraft/server";
import { giveItem } from "@occultus/api";
import { default as items } from "../../../config/init.json";

export class InitalSpawnEvents {
  static subscribe() {
    world.afterEvents.playerSpawn.subscribe((event) => {
      const handle = event.player.getDynamicProperty("hiddenyears:init_gift");
      if (!handle) {
        items.forEach((item) => {
          const itemStack = new ItemStack(item);
          itemStack.lockMode = ItemLockMode.inventory;
          giveItem(event.player, itemStack);
        });
        event.player.setDynamicProperty("hiddenyears:init_gift", true);
      }
    });
  }
}
