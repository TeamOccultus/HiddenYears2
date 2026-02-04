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
        condition: [new ItemConditions("hiddenyears:copper_coin", 5, true)]
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
  heal(player, pastor.getLevel(player) * 0.4);
});

skill2.onRelease((arg) => {
  const player = arg.source;
  const entities = new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 8,
    type: "player"
  });
  entities.tryOperateEntity((entity) => {
    heal(entity, pastor.getLevel(player) * 1.25);
  });
});

pastor.config.skills = [skill1, skill2];

pastor.onHurt((_arg, player) => {
  if (pastor.isReleasingSkills(player)) {
    new RandomEvent(0.25, () => {
      heal(player, pastor.getLevel(player) * 0.5);
    }).call();
  }
});

pastor.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:pastor_gem"));
  }
});
