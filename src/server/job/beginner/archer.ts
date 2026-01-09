import { ItemConditions, Job } from "@occultus/api";

export const archer = new Job(
  "hiddenyears:archer",
  { translate: "job.hiddenyears:archer" },
  { translate: "job.hiddenyears:archer.desc" },
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 5, true)],
      },
    ],
  }
);