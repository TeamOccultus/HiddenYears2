import { ItemConditions, Job } from "@occultus/api";
import { amnestyPastor } from "../advanced/amnestyPastor";
import { orisonPastor } from "../advanced/orisonPastor";

export const pastor = new Job(
  "hiddenyears:pastor",
  { translate: "job.hiddenyears:pastor" },
  { translate: "job.hiddenyears:pastor.desc" },
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
        job: amnestyPastor,
        condition: new ItemConditions("hiddenyears:pastor_gem", 1, true),
      },
      {
        job: orisonPastor,
        condition: new ItemConditions("hiddenyears:pastor_gem", 1, true),
      },
    ],
  }
);
