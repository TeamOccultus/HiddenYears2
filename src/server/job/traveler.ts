import { ItemConditions, Job } from "@occultus/api";

export const traveler = new Job(
  "hiddenyears:traveler",
  { translate: "job.hiddenyears:traveler" },
  { translate: "job.hiddenyears:traveler.desc" },
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