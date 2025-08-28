import { TaskCenter } from "@occultus/api";
import { getAllChapters } from "../../data/tasks";
import { CommandPermissionLevel } from "@minecraft/server";

export const book = new TaskCenter(
    "hiddenyears:task_book",
    { translate: "task.title" },
    { translate: "task.body" },
    {
      tasks: getAllChapters(),
    }
  );

export function registryTask() {
  book.addTrigger("hiddenyears:task_book", {
    name: "hiddenyears:task",
    description: " %command.task.description",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false
  });
}
