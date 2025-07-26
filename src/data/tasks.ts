import { ItemStack } from "@minecraft/server";
import { ItemAwards, ItemConditions, Task, TaskGroup } from "@starock/task";

export const task1 = new Task("hiddenyears:task1", "任务1", "任务1的描述", {
  awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
  conditions: [new ItemConditions("minecraft:stick")],
  previousTask: "none",
});

export const task2 = new Task("hiddenyears:task2", "任务2", "任务2的描述", {
  awards: [new ItemAwards("hiddenyears:copper_coin", 20)],
  conditions: [new ItemConditions("minecraft:diamond")],
  previousTask: task1,
});

export const task3 = new Task("hiddenyears:task3", "任务3", "任务3的描述", {
  awards: [new ItemAwards("hiddenyears:copper_coin", 30)],
  conditions: [new ItemConditions("minecraft:gold_ingot")],
  previousTask: task2,
});

export const group1 = new TaskGroup(
  "hiddenyears:group1",
  "任务组1",
  "任务组1的描述",
  {
    tasks: [task1, task2],
    awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
    previousTask: "none",
  }
);

export const group2 = new TaskGroup(
  "hiddenyears:group2",
  "任务组2",
  "任务组2的描述",
  {
    tasks: [task3],
    awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
    previousTask: group1,
  }
);
