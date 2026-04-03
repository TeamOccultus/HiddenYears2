import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  EntitiesUtils,
  heal,
  ItemConditions,
  Job,
  JobSkill,
  RandomEvent
} from "@occultus/api";
import { getJobDescription } from "../toolkit";
import { UnifiedCurrencyValueConditions } from "../../conditions/UCV";

export const orisonPastor = new Job(
  "hiddenyears:orison_pastor",
  { translate: "job.hiddenyears:orison_pastor" },
  getJobDescription("hiddenyears:orison_pastor"),
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 5,
        condition: [new ItemConditions("hiddenyears:magic_dust", 12, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new ItemConditions("hiddenyears:magic_origin", 15, true)]
      },
      {
        min: 11,
        max: 15,
        condition: [new ItemConditions("hiddenyears:magic_origin", 25, true)]
      }
    ],
  }
);

const skill1 = new JobSkill(
  "hiddenyears:orison_pastor_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.orison_pastor.1"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:orison_pastor_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.orison_pastor.2"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

skill1.onRelease((arg) => {
  const player = arg.source;
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 3,
    families: ["player"]
  }).tryOperateEntity((entity) => {
    heal(entity, orisonPastor.getLevel(player) * 2.5);
  });
});

// 对自己和半径 5 格内所有玩家回复等级*3的生命值，并为其添加伤害吸收 II 15秒
skill2.onRelease((arg) => {
  const player = arg.source;
  const utils = new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 5,
    families: ["player"]
  });
  utils.tryOperateEntity((entity) => {
    heal(entity, orisonPastor.getLevel(player) * 3);
    entity.addEffect("minecraft:absorption", 15 * TicksPerSecond, {
      amplifier: 1
    });
  });
});

orisonPastor.config.skills = [skill1, skill2];

orisonPastor.onHurt((arg) => {
  const player = arg.hurtEntity as Player;
  // 被动技能
  if (orisonPastor.isReleasingSkills(player)) {
    new RandomEvent(0.5, () => {
      heal(
        arg.hurtEntity,
        orisonPastor.getLevel(arg.hurtEntity as Player) * 0.7
      );
    }).call();
  }
});
