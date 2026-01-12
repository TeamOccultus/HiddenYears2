import { giveItem, ItemConditions, Job } from "@occultus/api";
import { ItemStack } from "@minecraft/server";
import { wizard } from "./beginner/wizard";
import { pastor } from "./beginner/pastor";
import { warrior } from "./beginner/warrior";
import { archer } from "./beginner/archer";

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
    transform: [
      {
        job: wizard,
        condition: new ItemConditions("hiddenyears:decision_gem", 1, true),
      },
      {
        job: warrior,
        condition: new ItemConditions("hiddenyears:decision_gem", 1, true),
      },
      {
        job: archer,
        condition: new ItemConditions("hiddenyears:decision_gem", 1, true),
      },
      {
        job: pastor,
        condition: new ItemConditions("hiddenyears:decision_gem", 1, true),
      },
    ],
  }
);

traveler.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:decision_gem"));
  }
});
