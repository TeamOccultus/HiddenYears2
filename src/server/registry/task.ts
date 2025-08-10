import { TaskCenter } from "@occultus/api";
import { group1, group2 } from "../../data/tasks";
import { CommandPermissionLevel } from "@minecraft/server";

export const book = new TaskCenter(
    "hiddenyears:task_book",
    "任务书",
    "任务书的描述",
    {
      tasks: [group1, group2],
    }
  );

export function registryTask() {
  book.addTrigger("hiddenyears:task_book", {
    name: "hiddenyears:task",
    description: "打开任务书",
    permissionLevel: CommandPermissionLevel.Any,
  });
}
