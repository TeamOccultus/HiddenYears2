import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  EntitiesUtils,
  getEquipmentItem,
  ItemConditions,
  Job,
  JobSkill
} from "@occultus/api";
import { getJobDescription } from "../toolkit";

export const assassin = new Job(
  "hiddenyears:assassin",
  { translate: "job.hiddenyears:assassin" },
  getJobDescription("hiddenyears:assassin"),
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
  "hiddenyears:assassin_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.assassin.1"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:assassin_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.assassin.2"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

skill1.onRelease((arg) => {
  arg.source.addEffect("minecraft:invisibility", 10 * TicksPerSecond, {
    amplifier: 0,
    showParticles: false
  });
});

skill2.onRelease((arg) => {
  arg.source.addEffect("minecraft:invisibility", 12 * TicksPerSecond, {
    amplifier: 0,
    showParticles: false
  });
  // 下次攻击必定暴击，这里不用自带的标签判断是因为这个效果无视技能持续时间
  arg.source.addTag("hiddenyears:critical_next_attack");
  arg.source.onScreenDisplay.setActionBar({
    translate: "message.hiddenyears:critical_next_attack"
  });
});

assassin.config.skills = [skill1, skill2];

assassin.onCauseDamage((arg) => {
  const player = arg.damageSource.damagingEntity as Player;
  const hurtEntity = arg.hurtEntity;
  const mainHandItem = getEquipmentItem(player);
  if (player.hasTag("hiddenyears:critical_next_attack")) {
    if (hurtEntity.isValid)
      hurtEntity.applyDamage(arg.damage * assassin.getLevel(player) * 1.8);
    if (hurtEntity.isValid)
      hurtEntity.addEffect("minecraft:potion", 5 * TicksPerSecond);
  }
  if (mainHandItem?.hasTag("hiddenyears:is_dagger")) {
    if (!hurtEntity.isValid) return;
    // 额外提升50%等级的伤害
    hurtEntity.applyDamage(arg.damage * assassin.getLevel(player) * 0.8);
  }
});
