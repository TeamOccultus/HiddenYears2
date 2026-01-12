import { ItemConditions, Job } from "@occultus/api";

export const conjure_wizard = new Job(
  "hiddenyears:conjure_wizard",
  { translate: "job.hiddenyears:conjure_wizard" },
  { translate: "job.hiddenyears:conjure_wizard.desc" },
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