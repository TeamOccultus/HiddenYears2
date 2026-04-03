import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  consumeHealthAmplifier,
  EntitiesUtils,
  getCurrentHealth,
  Job,
  JobSkill
} from "@occultus/api";
import { getJobDescription } from "../toolkit";
import { UnifiedCurrencyValueConditions } from "../../conditions/UCV";

export const berserker = new Job(
  "hiddenyears:berserker",
  { translate: "job.hiddenyears:berserker" },
  getJobDescription("hiddenyears:berserker"),
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 5,
        condition: [new UnifiedCurrencyValueConditions(4000, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new UnifiedCurrencyValueConditions(6000, true)]
      },
      {
        min: 11,
        max: 15,
        condition: [new UnifiedCurrencyValueConditions(8000, true)]
      }
    ],
  }
);

const skill1 = new JobSkill(
  "hiddenyears:berserker_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.berserker.1"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:berserker_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.berserker.2"
  },
  {
    text: "？？？"
  },
  10 * TicksPerSecond
);

skill1.onRelease((arg) => {
  const player = arg.source;
  consumeHealthAmplifier(player, 0.2);
  const damage =
    (5 + berserker.getLevel(player) * 20) / getCurrentHealth(player);
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 6,
    families: ["monster"]
  }).applyDamage(damage);
});

skill2.onRelease((arg) => {
  const player = arg.source;
  consumeHealthAmplifier(player, 0.3);
});

berserker.config.skills = [skill1, skill2];

berserker.onHitEntity((arg) => {
  const hurtEntity = arg.hitEntity;
  if (!hurtEntity.isValid) return;
  const player = arg.damagingEntity as Player;
  const healthComponent = player.getComponent("minecraft:health");
  if (!healthComponent) return;
  const damagedAmount =
    healthComponent.effectiveMax - healthComponent.currentValue;
  hurtEntity.applyDamage(damagedAmount * 0.8);
  // 在技能 2 发动期间，对目标造成额外伤害
  if (skill2.isReleasing(player)) {
    const currentHealth = getCurrentHealth(player);
    if (currentHealth > 5) {
      const damage = (berserker.getLevel(player) * 30) / (currentHealth - 5);
      hurtEntity.applyDamage(damage, { cause: EntityDamageCause.none });
      return;
    }
    const damage = berserker.getLevel(player) * 4.5;
    hurtEntity.applyDamage(damage, { cause: EntityDamageCause.none });
  }
});
