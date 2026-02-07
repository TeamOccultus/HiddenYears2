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

export const amnestyPastor = new Job(
  "hiddenyears:amnesty_pastor",
  { translate: "job.hiddenyears:amnesty_pastor" },
  { translate: "job.hiddenyears:amnesty_pastor.desc" },
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
  "hiddenyears:amnesty_pastor_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.amnesty_pastor.1"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:amnesty_pastor_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.amnesty_pastor.2"
  },
  {
    text: "？？？"
  },
  10 * TicksPerSecond
);

skill2.onRelease((arg) => {
  const player = arg.source;
  // 圣罚赎免：领域持续期间为范围内友方（含自身）提供伤害吸收 III 30秒。
  // TODO: 实际实现为释放时单次提供效果，与设定不符
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 8,
    families: ["player"]
  }).applyEffectData({
    effectType: "minecraft:absorption",
    duration: 30 * TicksPerSecond,
    amplifier: 2
  });
  // 圣罚赎免：领域持续期间，对自身周围 8 格内所有敌方每秒等级*0.2的额外伤害
  const handle = system.runInterval(() => {
    if (!skill2.isReleasing(player)) {
      system.clearRun(handle);
      return;
    }
    new EntitiesUtils(player.dimension, {
      location: player.location,
      maxDistance: 8,
      families: ["monster"]
    }).applyDamage(amnestyPastor.getLevel(player) * 0.2, {
      cause: EntityDamageCause.none
    });
  }, 1 * TicksPerSecond);
});

amnestyPastor.config.skills = [skill1, skill2];

amnestyPastor.onHitEntity((arg) => {
  const player = arg.damagingEntity as Player;
  // 赦罪之舞：对敌人进行近战攻击时，有45%的概率回复等级*0.8 的血量
  // 圣罚赎免：领域持续期间自身近战攻击的回血概率（固有天赋）提升至 100%。
  new RandomEvent(skill2.isReleasing(player) ? 1 : 0.45, () => {
    heal(player, amnestyPastor.getLevel(player) * 0.8);
  }).call();
  const hurtEntity = arg.hitEntity;
  if (!hurtEntity.isValid) return;
  if (skill1.isReleasing(player)) {
    const isWeakness = hurtEntity.getEffect("minecraft:weakness") != undefined;
    // 赎罪重击：对敌方目标进行近战攻击时，造成5+等级*1.2的额外伤害
    // 赎罪重击：若目标处于虚弱状态，伤害效果额外提升 50%。
    const damage = (5 + amnestyPastor.getLevel(player) * 1.2) * (isWeakness ? 1.5 : 1);
    hurtEntity.applyDamage(damage, {
      cause: EntityDamageCause.none
    });
    // 赎罪重击：同时为自身恢复重击伤害*0.5的生命值。
    // 赎罪重击：若目标处于虚弱状态，回血效果额外提升 50%。
    heal(player, damage * 0.5 * (isWeakness ? 1.5 : 1));
  }
  // 赦罪之舞：对敌人进行近战攻击时，50% 的概率让敌人获得 15 秒 虚弱。
  // 放在技能一效果后面
  new RandomEvent(0.5, () => {
    hurtEntity.addEffect("minecraft:weakness", 15 * TicksPerSecond);
  }).call();
});
