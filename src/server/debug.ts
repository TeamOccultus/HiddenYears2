import { world } from "@minecraft/server";
import { LoggerAPI } from "project-lantern";
import { MOD_LOGGER } from "../index";

export class Debug {
  static chatTrigger() {
    world.afterEvents.chatSend.subscribe((event) => {
      if (event.message === "!open debug" && event.sender.isOp()) {
        MOD_LOGGER.setLogLevel(LoggerAPI.LogLevel.INFO);
      }
      if (event.message === "!close debug" && event.sender.isOp()) {
        MOD_LOGGER.setLogLevel(LoggerAPI.LogLevel.WARN);
      }
      if (event.message === "!close music") {
        event.sender.stopMusic();
      }
    });
  }
}
