import { ItemConditions, Job } from "@occultus/api";

export const orisonPastor = new Job(
  "hiddenyears:orison_pastor",
  { translate: "job.hiddenyears:orison_pastor" },
  { translate: "job.hiddenyears:orison_pastor.desc" },
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
