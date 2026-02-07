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

export const arcaneWizard = new Job(
  "hiddenyears:arcane_wizard",
  { translate: "job.hiddenyears:arcane_wizard" },
  { translate: "job.hiddenyears:arcane_wizard.desc" },
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

// 圣言惩击：对半径 3 格内敌人造成等级*1.5 的神圣伤害，同时回复自身等级*0.8 的生命值。
skill1.onRelease((arg) => {
  const player = arg.source;
  heal(player, arcaneWizard.getLevel(player) * 0.8);
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 3,
    families: ["monster"]
  }).applyDamage(arcaneWizard.getLevel(player) * 1.5, {
    cause: EntityDamageCause.magic,
    damagingEntity: player
  });
});

// 生成持续 15 秒的神圣领域，
// 领域内法术伤害提升等级*0.6，敌方受到每秒等级*0.5 的持续神圣伤害。
// 实现差异：地方收到的神圣伤害为无来源伤害
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
      cause: EntityDamageCause.magic,
      damagingEntity: undefined
    });
  }, 1 * TicksPerSecond);
});

arcaneWizard.config.skills = [skill1, skill2];

arcaneWizard.onCauseDamage((arg) => {
  // 圣力庇佑：造成法术伤害时，15% 概率获得 1 层「圣盾」（伤害吸收 II 10 秒）
  if (arg.damageSource.cause != EntityDamageCause.magic) return;
  const player = arg.damageSource.damagingEntity as Player;
  shield(player);
  // 神圣爆发：领域内法术伤害提升等级*0.6，敌方受到每秒等级*0.5 的持续神圣伤害。
  // TODO：实现偏差：实际实现为领域持续期间，释放者多对受伤实体造成一次0.6倍无来源魔法伤害
  if (!arg.hurtEntity.isValid) return;
  if (skill2.isReleasing(player)) {
    arg.hurtEntity.applyDamage(arcaneWizard.getLevel(player) * 0.6, {
      cause: EntityDamageCause.magic,
      // 防止再次触发二技能导致左脚右脚上天
      damagingEntity: null
    });
  }
});

function shield(player: Player) {
  new RandomEvent(0.15, () => {
    player.addEffect("minecraft:absorption", 10, { amplifier: 1 });
  }).call();
}