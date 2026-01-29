import { ItemConditions, Job } from "@occultus/api";

export const berserker = new Job(
  "hiddenyears:berserker",
  { translate: "job.hiddenyears:berserker" },
  { translate: "job.hiddenyears:berserker.desc" },
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)]
      }
    ]
  }
);
