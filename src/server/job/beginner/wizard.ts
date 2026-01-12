import { giveItem, ItemConditions, Job } from "@occultus/api";
import { arcaneWizard } from "../advanced/arcaneWizard";
import { conjureWizard } from "../advanced/conjureWizard";
import { ItemStack } from "@minecraft/server";

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
    transform: [
      {
        job: arcaneWizard,
        condition: new ItemConditions("hiddenyears:wizard_gem", 1, true),
      },
      {
        job: conjureWizard,
        condition: new ItemConditions("hiddenyears:wizard_gem", 1, true),
      },
    ],
  }
);

wizard.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:wizard_gem"));
  }
});
