import { giveItem, ItemConditions, Job } from "@occultus/api";
import { assassin } from "../advanced/assassin";
import { berserker } from "../advanced/berserker";
import { swordman } from "../advanced/swordman";
import { ItemStack } from "@minecraft/server";

export const warrior = new Job(
  "hiddenyears:warrior",
  { translate: "job.hiddenyears:warrior" },
  { translate: "job.hiddenyears:warrior.desc" },
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
        job: assassin,
        condition: new ItemConditions("hiddenyears:warrior_gem", 1, true),
      },
      {
        job: berserker,
        condition: new ItemConditions("hiddenyears:warrior_gem", 1, true),
      },
      {
        job: swordman,
        condition: new ItemConditions("hiddenyears:warrior_gem", 1, true),
      },
    ],
  }
);

warrior.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:warrior_gem"));
  }
});
