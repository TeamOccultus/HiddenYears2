import { ItemConditions, Job } from "@occultus/api";
import { assassin } from "../advanced/assassin";
import { berserker } from "../advanced/berserker";
import { swordman } from "../advanced/swordman";

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
