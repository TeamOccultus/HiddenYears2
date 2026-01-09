import { ItemConditions, Job } from "@occultus/api";

export const warrior = new Job(
  "hiddenyears:warrior",
  { translate: "job.hiddenyears:warrior" },
  { translate: "job.hiddenyears:warrior.desc" },
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)],
      },
    ],
  }
);