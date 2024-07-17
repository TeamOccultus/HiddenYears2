import { world } from "@minecraft/server";
import { LoggerAPI } from "project-lantern";

export class Debug {
  static chatTrigger() {
    world.afterEvents.chatSend.subscribe((event) => {
      if (event.message === "!close music") {
        event.sender.stopMusic();
      }
    });
  }
}
