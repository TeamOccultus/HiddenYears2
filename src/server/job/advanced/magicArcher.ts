import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  EntitiesUtils,
  EventList,
  EventListData,
  ItemConditions,
  Job,
  JobSkill,
  RandomEvent
} from "@occultus/api";

function hasEnhanced(player: Player) {
  return (
    player.hasTag("hiddenyears:enhanced_1") ||
    player.hasTag("hiddenyears:enhanced_2") ||
    player.hasTag("hiddenyears:enhanced_3")
  );
}

function enhancePlayer(player: Player) {
  player.addTag("hiddenyears:enhanced_1");
  player.addTag("hiddenyears:enhanced_2");
  player.addTag("hiddenyears:enhanced_3");
}

function consumeEnhance(player: Player) {
  if (player.hasTag("hiddenyears:enhanced_3"))
    return player.removeTag("hiddenyears:enhanced_3");
  if (player.hasTag("hiddenyears:enhanced_2"))
    return player.removeTag("hiddenyears:enhanced_2");
  if (player.hasTag("hiddenyears:enhanced_1"))
    return player.removeTag("hiddenyears:enhanced_1");
}

export const magicArcher = new Job(
  "hiddenyears:magic_archer",
  { translate: "job.hiddenyears:magic_archer" },
  { translate: "job.hiddenyears:magic_archer.desc" },
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
  "hiddenyears:magic_archer_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.magic_archer.1"
  },
  {
    text: "？？？"
  },
  0
);

const skill2 = new JobSkill(
  "hiddenyears:magic_archer_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.magic_archer.2"
  },
  {
    text: "？？？"
  },
  15 * TicksPerSecond
);

skill1.onRelease((arg) => {
  const player = arg.source;
  enhancePlayer(player);
});

skill2.onRelease((arg) => {
  const player = arg.source;
  new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 10,
    families: ["monster"]
  }).tryOperateEntity((entity) => {
    entity.addTag("hiddenyears:element_mark");
  });
});

magicArcher.config.skills = [skill1, skill2];

// 已严肃修复漏洞：属性“onProjectHitEntity”在类型“Job”上不存在。你是否指的是“onProjectileHitEntity”? —AAA 漓江猫猫批发方总
magicArcher.onProjectileHitEntity((arg) => {
  const hurtEntity = arg.getEntityHit().entity;
  const player = arg.source as Player;
  if (!hurtEntity.isValid) return;
  if (hurtEntity.hasTag("hiddenyears:element_mark")) {
    new RandomEvent(0.85, () => {
      hurtEntity.dimension.createExplosion(hurtEntity.location, 1.5, {
        causesFire: false,
        breaksBlocks: false,
        allowUnderwater: true
      });
    });
  }
  const eventData: EventListData[] = [
    // 注释：如果实体已经着火，这个P用没有
    { weight: 2, event: () => hurtEntity.setOnFire(2) },
    {
      weight: 2,
      event: () => hurtEntity.addEffect("minecraft:nausea", 2 * TicksPerSecond)
    },
    {
      weight: 2,
      event: () => hurtEntity.addEffect("minecraft:poison", 2 * TicksPerSecond)
    },
    { weight: 24 }
  ];
  new EventList(eventData).call();
  if (hasEnhanced(player)) {
    hurtEntity.applyDamage(0.8 * magicArcher.getLevel(player), {
      cause: EntityDamageCause.magic,
      damagingEntity: null
    });
  }
  if (player.hasTag("hiddenyears:magic_archer_skill_2")) {
    hurtEntity.applyDamage(0.6 * magicArcher.getLevel(player), {
      cause: EntityDamageCause.magic,
      damagingEntity: null
    });
  }
});
