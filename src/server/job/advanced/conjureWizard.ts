import {
  TicksPerSecond,
  EntityDamageCause,
  system,
  world
} from "@minecraft/server";
import {
  EntitiesUtils,
  ItemConditions,
  Job,
  JobSkill,
  toVec3,
  Vector3Utils
} from "@occultus/api";
import { getJobDescription } from "../toolkit";

export const conjureWizard = new Job(
  "hiddenyears:conjure_wizard",
  { translate: "job.hiddenyears:conjure_wizard" },
  getJobDescription("hiddenyears:conjure_wizard"),
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
  const spritesId: string[] = [];
  // TODO: 制作仆从
  function summonSprite(offset: [number, number, number]) {
    const entity = player.dimension.spawnEntity(
      "hiddenyears:magic_sprite",
      Vector3Utils.add(player.location, toVec3(...offset))
    );
    entity.getComponent("minecraft:tameable").tame(player);
    spritesId.push(entity.id);
    console.log(entity.id);
    return entity;
  }
  summonSprite([1, 0, 0]);
  summonSprite([-1, 0, 0]);
  summonSprite([0, 0, 1]);
  summonSprite([0, 0, -1]);
  player.setDynamicProperty(
    "hiddenyears:conjure_wizard_sprites",
    JSON.stringify(spritesId)
  );
  console.log(spritesId);
  system.runTimeout(() => {
    spritesId.forEach((id) => {
      const entity = world.getEntity(id);
      if (!entity || !entity.isValid) return;
      entity.remove();
    });
    player.setDynamicProperty("hiddenyears:conjure_wizard_sprites");
  }, 30 * TicksPerSecond);
});

// 引爆范围内所有己方灵体，对周围 5 格敌人造成等级 * 5 的魔法伤害。
skill2.onRelease((arg) => {
  const player = arg.source;
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 10,
    families: ["monster"]
  }).applyDamage(conjureWizard.getLevel(player) * 5 + 1, {
    cause: EntityDamageCause.entityExplosion
  });

  const rawData = player.getDynamicProperty(
    "hiddenyears:conjure_wizard_sprites"
  );
  console.log(rawData);
  if (!rawData) return;
  if (typeof rawData !== "string")
    return player.setDynamicProperty("hiddenyears:conjure_wizard_sprites");
  JSON.parse(rawData).forEach((id: string) => {
    console.log(id);
    if (typeof id !== "string") return;
    const entity = world.getEntity(id);
    if (!entity || !entity.isValid) return;
    entity.triggerEvent("hiddenyears:start_explode");
  });
});

conjureWizard.config.skills = [skill1, skill2];
