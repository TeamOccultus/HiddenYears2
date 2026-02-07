import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  consumeHealthAmplifier,
  EntitiesUtils,
  getCurrentHealth,
  ItemConditions,
  Job,
  JobSkill
} from "@occultus/api";

export const berserker = new Job(
  "hiddenyears:berserker",
  { translate: "job.hiddenyears:berserker" },
  { translate: "job.hiddenyears:berserker.desc" },
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
  "hiddenyears:berserker_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.berserker.1"
  },
  {
    text: "？？？"
  },
  0
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
  // 殷红之力 - 每次近战攻击时造成已损失生命值*0.8的额外伤害  
  const healthComponent = player.getComponent("minecraft:health")!;
  const damagedAmount = healthComponent.effectiveMax - healthComponent.currentValue;
  hurtEntity.applyDamage(damagedAmount * 0.8);
  // 在技能 2 发动期间，对目标造成额外伤害
  if (skill2.isReleasing(player)) {
    const currentHealth = healthComponent.currentValue;
    // 嗜血狂战：10 秒内对目标造成(等级*30)/(生命值-5) （生命值在5~20之间）的额外伤害
    if (currentHealth > 5) {
      const damage = (berserker.getLevel(player) * 30) / (currentHealth - 5);
      hurtEntity.applyDamage(damage, { cause: EntityDamageCause.none });
      return;
    }
    // 嗜血狂战：10 秒内对目标造成(等级*4.5) （生命值小于等于5）的额外伤害
    const damage = berserker.getLevel(player) * 4.5;
    hurtEntity.applyDamage(damage, { cause: EntityDamageCause.none });
  }
});
