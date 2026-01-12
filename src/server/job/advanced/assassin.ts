import { ItemConditions, Job } from "@occultus/api";

export const assassin = new Job(
  "hiddenyears:assassin",
  { translate: "job.hiddenyears:assassin" },
  { translate: "job.hiddenyears:assassin.desc" },
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)],
      },
    ],
  }
);