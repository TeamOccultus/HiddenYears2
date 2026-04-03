import {
  EntitiesUtils,
  giveItem,
  heal,
  ItemConditions,
  Job,
  JobSkill,
  RandomEvent
} from "@occultus/api";
import { amnestyPastor } from "../advanced/amnestyPastor";
import { orisonPastor } from "../advanced/orisonPastor";
import { ItemStack, Player, TicksPerSecond } from "@minecraft/server";
import { getJobDescription } from "../toolkit";
import { UnifiedCurrencyValueConditions } from "../../conditions/UCV";

export const pastor = new Job(
  "hiddenyears:pastor",
  { translate: "job.hiddenyears:pastor" },
  getJobDescription("hiddenyears:pastor"),
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 5,
        condition: [new UnifiedCurrencyValueConditions(2000, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new UnifiedCurrencyValueConditions(2500, true)]
      }
    ],
    transform: [
      {
        job: amnestyPastor,
        condition: new ItemConditions("hiddenyears:pastor_gem", 1, true)
      },
      {
        job: orisonPastor,
        condition: new ItemConditions("hiddenyears:pastor_gem", 1, true)
      }
    ]
  }
);

const skill1 = new JobSkill(
  "hiddenyears:pastor_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.pastor.1"
  },
  {
    text: "？？？"
  },
  // 固有天赋要求5秒内，所以得设置
  5 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:pastor_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.pastor.2"
  },
  {
    text: "？？？"
  },
  // 固有天赋要求5秒内，所以得设置
  5 * TicksPerSecond
);

skill1.onRelease((arg) => {
  const player = arg.source;
  heal(player, pastor.getLevel(player) * 1.2);
});

skill2.onRelease((arg) => {
  const player = arg.source;
  const entities = new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 8,
    type: "player"
  });
  entities.tryOperateEntity((entity) => {
    heal(entity, pastor.getLevel(player) * 2.5);
  });
});

pastor.config.skills = [skill1, skill2];

pastor.onHurt((_arg, player) => {
  if (pastor.isReleasingSkills(player)) {
    new RandomEvent(0.5, () => {
      heal(player, pastor.getLevel(player) * 0.8);
    }).call();
  }
});

pastor.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:pastor_gem"));
  }
});
