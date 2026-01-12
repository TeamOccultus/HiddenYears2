import { ItemConditions, Job } from "@occultus/api";

export const magicArcher = new Job(
  "hiddenyears:magic_archer",
  { translate: "job.hiddenyears:magic_archer" },
  { translate: "job.hiddenyears:magic_archer.desc" },
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