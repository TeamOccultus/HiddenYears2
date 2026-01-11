import { system, world } from "@minecraft/server";
import { TaskMigrationSystem } from "./task/TaskMigrationSystem";
import { TaskMigrationForm } from "./task/TaskMigrationForm";
import { legacyQuests } from "./task/legacyQuests";

export class MigrationEvents {
  static subscribe() {
    world.afterEvents.playerSpawn.subscribe((event) => {
      console.log(legacyQuests.size);
      console.log(TaskMigrationSystem.hasLegacyQuest(event.player));
      if (!event.initialSpawn) return;
      if (!TaskMigrationSystem.hasLegacyQuest(event.player)) return;
      event.player.sendMessage({
        translate: "message.hiddenyears:migration.task",
      });
    });
  }
}
