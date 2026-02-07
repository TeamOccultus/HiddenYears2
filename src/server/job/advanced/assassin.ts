import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  EntitiesUtils,
  getEquipmentItem,
  ItemConditions,
  Job,
  JobSkill
} from "@occultus/api";

export const assassin = new Job(
  "hiddenyears:assassin",
  { translate: "job.hiddenyears:assassin" },
  { translate: "job.hiddenyears:assassin.desc" },
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
  // 隐匿突袭：进入隐身状态 10 秒
  arg.source.addEffect("minecraft:invisibility", 10 * TicksPerSecond, {
    amplifier: 0,
    showParticles: false
  });
});

skill2.onRelease((arg) => {
  // 致命毒刃：进入隐身状态 15 秒
  arg.source.addEffect("minecraft:invisibility", 12 * TicksPerSecond, {
    amplifier: 0,
    showParticles: false
  });
  // 致命毒刃：下一次伤害对敌人造成等级*1.8的额外伤害并附加持续 5 秒的中毒 
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
  if (!hurtEntity.isValid) return;
  // 致命毒刃：下一次伤害对敌人造成等级*1.8的额外伤害并附加持续 5 秒的中毒 
  if (player.hasTag("hiddenyears:critical_next_attack")) {
    hurtEntity.applyDamage(arg.damage * assassin.getLevel(player) * 1.8);
    hurtEntity.addEffect("minecraft:potion", 5 * TicksPerSecond);
  }
  // 暗影潜伏 - 手持匕首攻击时，伤害提升等级*0.8
  if (mainHandItem?.hasTag("hiddenyears:is_dagger")) {
    // 额外提升50%等级的伤害
    hurtEntity.applyDamage(arg.damage * assassin.getLevel(player) * 0.8);
  }
});
