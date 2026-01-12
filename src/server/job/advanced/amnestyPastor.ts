import { ItemConditions, Job } from "@occultus/api";

export const amnestyPastor = new Job(
  "hiddenyears:amnesty_pastor",
  { translate: "job.hiddenyears:amnesty_pastor" },
  { translate: "job.hiddenyears:amnesty_pastor.desc" },
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