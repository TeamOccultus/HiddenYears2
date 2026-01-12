import { ItemConditions, Job } from "@occultus/api";

export const swordman = new Job(
  "hiddenyears:swordman",
  { translate: "job.hiddenyears:swordman" },
  { translate: "job.hiddenyears:swordman.desc" },
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