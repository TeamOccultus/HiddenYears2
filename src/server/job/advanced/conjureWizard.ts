import { TicksPerSecond, EntityDamageCause, system } from "@minecraft/server";
import {
  EntitiesUtils,
  ItemConditions,
  Job,
  JobSkill,
  toVec3,
  Vector3Utils
} from "@occultus/api";

export const conjureWizard = new Job(
  "hiddenyears:conjure_wizard",
  { translate: "job.hiddenyears:conjure_wizard" },
  { translate: "job.hiddenyears:conjure_wizard.desc" },
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)]
      }
    ]
  }
);
const skill1 = new JobSkill(
  "hiddenyears:conjure_wizard_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.conjure_wizard.1"
  },
  {
    text: "？？？"
  },
  0
);

const skill2 = new JobSkill(
  "hiddenyears:conjure_wizard_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.conjure_wizard.2"
  },
  {
    text: "？？？"
  },
  0
);

skill1.onRelease((arg) => {
  const player = arg.source;
  // TODO: 制作仆从
  const entity = player.dimension.spawnEntity(
    "hiddenyears:magic_sprite",
    Vector3Utils.add(player.location, toVec3(0, 1, 0))
  );
  entity.getComponent("minecraft:tameable").tame(player);
  console.log(
    "Entity tamed to:" +
      entity.getComponent("minecraft:tameable")?.tamedToPlayerId
  );
  system.runTimeout(() => {
    if (entity.isValid) entity?.kill();
  }, 30 * TicksPerSecond);
});

// 引爆范围内所有己方灵体，对周围 5 格敌人造成等级 * 5 的魔法伤害。
skill2.onRelease((arg) => {
  const player = arg.source;
  const utils = new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 5,
    families: ["monster"]
  });
  utils.applyDamage(5, { cause: EntityDamageCause.magic });
});

conjureWizard.config.skills = [skill1, skill2];
