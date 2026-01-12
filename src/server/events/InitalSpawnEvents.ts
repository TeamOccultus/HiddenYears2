import { ItemStack, world } from "@minecraft/server";
import { giveItem } from "@occultus/api";

export class InitalSpawnEvents {
  static subscribe() {
    world.afterEvents.playerSpawn.subscribe((event) => {
       const handle = event.player.getDynamicProperty("hiddenyears:get_task_book")
       if(!handle){
        giveItem(event.player,[new ItemStack("hiddenyears:task_book"), new ItemStack("hiddenyears:travel_gem")])
       }
    })
  }
}
