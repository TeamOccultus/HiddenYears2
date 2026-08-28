import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  EntitiesUtils,
  getEquipmentItem,
  ItemConditions,
  Job,
  JobSkill,
  RandomEvent
} from "@occultus/api";
import { getJobDescription } from "../toolkit";
import { MaigcEnergyConditions } from "../../conditions/ME";

export const swordman = new Job(
  "hiddenyears:swordman",
  { translate: "job.hiddenyears:swordman" },
  getJobDescription("hiddenyears:swordman"),
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 5,
        condition: [new ItemConditions("hiddenyears:magic_dust", 12, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new ItemConditions("hiddenyears:magic_origin", 15, true)]
      },
      {
        min: 11,
        max: 15,
        condition: [new ItemConditions("hiddenyears:magic_origin", 25, true)]
      }
    ]
  }
);

const skill1 = new JobSkill(
  "hiddenyears:swordman_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.swordman.1"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:swordman_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.swordman.2"
  },
  {
    text: "？？？"
  },
  5 * TicksPerSecond
);

skill1.onRelease((arg) => {
  const player = arg.source;
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 3,
    families: ["monster"]
  }).applyDamage(swordman.getLevel(player) * 1.2, {
    cause: EntityDamageCause.entityAttack,
    damagingEntity: player
  });
});

skill2.onRelease((arg) => {
  const player = arg.source;
  const utils = new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 6,
    families: ["monster"]
  });
  utils.applyDamage(3 + swordman.getLevel(player) * 1.2, {
    cause: EntityDamageCause.entityAttack,
    damagingEntity: player
  });
  utils.applyEffectData({
    effectType: "minecraft:slowness",
    duration: 15 * TicksPerSecond,
    amplifier: 1
  });
});

swordman.config.skills = [skill1, skill2];

swordman.onCauseDamage((arg) => {
  // 这个是为了防止非近战攻击触发
  if (arg.damageSource.cause !== EntityDamageCause.entityAttack) return;
  const player = arg.damageSource.damagingEntity as Player;
  const mainHandItem = getEquipmentItem(player);
  if (!mainHandItem?.hasTag("minecraft:is_sword")) return;
  if (new RandomEvent(0.25, () => {}).call()) {
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears.swordman:critical_hit"
    });
    // TODO: 可以加个带有打击感的音效
    const hurtEntity = arg.hurtEntity;
    if (!hurtEntity.isValid) return;
    // 额外提升50%等级的伤害
    hurtEntity.applyDamage(arg.damage * swordman.getLevel(player) * 0.5, {
      cause: EntityDamageCause.entityAttack,
      damagingEntity: player
    });
  }
});
