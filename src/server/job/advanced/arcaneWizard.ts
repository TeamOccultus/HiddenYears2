import { ItemConditions, Job } from "@occultus/api";

export const arcaneWizard = new Job(
  "hiddenyears:arcane_wizard",
  { translate: "job.hiddenyears:arcane_wizard" },
  { translate: "job.hiddenyears:arcane_wizard.desc" },
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