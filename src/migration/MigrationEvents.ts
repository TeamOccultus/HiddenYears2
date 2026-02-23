import { world } from "@minecraft/server";
import { TaskMigrationSystem } from "./task/TaskMigrationSystem";

export class MigrationEvents {
  static subscribe() {
    world.afterEvents.playerSpawn.subscribe((event) => {
      if (!event.initialSpawn) return;
      if (!TaskMigrationSystem.hasLegacyQuest(event.player)) return;
      event.player.sendMessage({
        translate: "message.hiddenyears:migration.task"
      });
    });
  }
}
