import { Player } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { Format } from "@occultus/api";
import { TaskMigrationSystem } from "./TaskMigrationSystem";

export class TaskMigrationForm {
  static display(player: Player) {
    const form = new MessageFormData()
      .title({
        translate: "ui.migration.task"
      })
      .body({
        rawtext: [
          { translate: "ui.migration.task.desc_1" },
          { text: Format.newLine },
          { translate: "ui.migration.task.desc_2" }
        ]
      })
      .button1({
        translate: "ui.migration.task.yes"
      })
      .button2({
        translate: "ui.migration.task.no"
      });

    form.show(player).then((response) => {
      if (response.selection === undefined || response.selection === 1) return;
      if (response.selection === 0) {
        player.sendMessage({ translate: "ui.migration.task.start" });
        const result = TaskMigrationSystem.migrateTasks(player);
        player.sendMessage({
          translate: "ui.migration.task.success",
          with: [
            result.all.toString(),
            result.success.toString(),
            result.failed.toString()
          ]
        });
      }
    });
  }
}
