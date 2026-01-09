import { ItemConditions, Job } from "@occultus/api";

export const wizard = new Job(
  "hiddenyears:wizard",
  { translate: "job.hiddenyears:wizard" },
  { translate: "job.hiddenyears:wizard.desc" },
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