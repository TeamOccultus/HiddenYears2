import {
  EntityDamageCause,
  Player,
  system,
  TicksPerSecond
} from "@minecraft/server";
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

export const arcaneWizard = new Job(
  "hiddenyears:arcane_wizard",
  { translate: "job.hiddenyears:arcane_wizard" },
  getJobDescription("hiddenyears:arcane_wizard"),
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 5,
        condition: [new UnifiedCurrencyValueConditions(500, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new UnifiedCurrencyValueConditions(800, true)]
      }
    ],
  }
);

const skill1 = new JobSkill(
  "hiddenyears:arcane_wizard_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.arcane_wizard.1"
  },
  {
    text: "？？？"
  },
  0
);

const skill2 = new JobSkill(
  "hiddenyears:arcane_wizard_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.arcane_wizard.2"
  },
  {
    text: "？？？"
  },
  15 * TicksPerSecond
);

// 对半径 3 格内敌人造成 等级*1.5 的神圣伤害，同时回复自身等级*0.8 的生命值。
skill1.onRelease((arg) => {
  const player = arg.source;
  heal(player, arcaneWizard.getLevel(player) * 0.8);
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 3,
    families: ["monster"]
  }).applyDamage(arcaneWizard.getLevel(player) * 1.5, {
    cause: EntityDamageCause.none
  });
});

// 生成持续 15 秒的神圣领域，
// 领域内法术伤害提升等级*0.6，敌方受到每秒等级*0.5 的持续神圣伤害。
skill2.onRelease((arg) => {
  const player = arg.source;
  const handle = system.runInterval(() => {
    if (!skill2.isReleasing(player)) {
      system.clearRun(handle);
      return;
    }
    new EntitiesUtils(player.dimension, {
      location: player.location,
      maxDistance: 10,
      families: ["monster"]
    }).applyDamage(arcaneWizard.getLevel(player) * 0.5, {
      cause: EntityDamageCause.none
    });
  }, 1 * TicksPerSecond);
});

arcaneWizard.config.skills = [skill1, skill2];

arcaneWizard.onCauseDamage((arg) => {
  if (arg.damageSource.cause != EntityDamageCause.magic) return;
  const player = arg.damageSource.damagingEntity as Player;
  new RandomEvent(0.15, () => {
    player.addEffect("minecraft:absorption", 10, { amplifier: 1 });
  }).call();
  if (skill2.isReleasing(player)) {
    arg.hurtEntity.applyDamage(arcaneWizard.getLevel(player) * 0.6, {
      cause: EntityDamageCause.magic,
      damagingEntity: null
    });
  }
});
