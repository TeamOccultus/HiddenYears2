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

skill1.onRelease((arg) => {});

skill2.onRelease((arg) => {
  const player = arg.source;
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 8,
    families: ["player"]
  }).applyEffectData({
    effectType: "minecraft:absorption",
    duration: 30 * TicksPerSecond,
    amplifier: 2
  });
  const handle = system.runInterval(() => {
    new EntitiesUtils(player.dimension, {
      location: player.location,
      maxDistance: 8,
      families: ["monster"]
    }).applyDamage(amnestyPastor.getLevel(player) * 0.2, {
      cause: EntityDamageCause.none
    });
  }, 1 * TicksPerSecond);
  system.runTimeout(() => {
    system.clearRun(handle);
  }, 10 * TicksPerSecond);
});

amnestyPastor.config.skills = [skill1, skill2];

amnestyPastor.onHitEntity((arg) => {
  const player = arg.damagingEntity as Player;
  new RandomEvent(0.45, () => {
    heal(player, amnestyPastor.getLevel(player) * 0.8);
  }).call();
  const hurtEntity = arg.hitEntity;
  if (!hurtEntity.isValid) return;
  let chance = 0.5;
  if (player.hasTag("hiddenyears:amnesty_pastor_skill_2")) chance = 1;
  new RandomEvent(chance, () => {
    hurtEntity.addEffect("minecraft:weakness", 15 * TicksPerSecond);
  }).call();
  if (player.hasTag("hiddenyears:amnesty_pastor_skill_1")) {
    const damage = 5 + amnestyPastor.getLevel(player) * 1.2;
    hurtEntity.applyDamage(damage, {
      cause: EntityDamageCause.none
    });
    heal(player, damage * 0.5);
  }
});
