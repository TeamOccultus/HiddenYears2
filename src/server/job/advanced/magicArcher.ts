import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  EntitiesUtils,
  EventList,
  EventListData,
  ItemConditions,
  Job,
  JobSkill,
  RandomEvent,
  tryOperateEntity
} from "@occultus/api";
import { getJobDescription } from "../toolkit";
import { MaigcEnergyConditions } from "../../conditions/ME";

const ENHANCE_COUNT_PROPERTY = "hiddenyears:magic_archer_enhance_count";

function enhancePlayer(player: Player) {
  player.setDynamicProperty(ENHANCE_COUNT_PROPERTY, 3);
}

function tryConsumeEnhance(player: Player): boolean {
  const property = player.getDynamicProperty(ENHANCE_COUNT_PROPERTY);
  if (typeof property != "number" || property <= 0) {
    player.setDynamicProperty(ENHANCE_COUNT_PROPERTY, 0);
    return false;
  }
  player.setDynamicProperty(ENHANCE_COUNT_PROPERTY, property - 1);
  return true;
}

export const magicArcher = new Job(
  "hiddenyears:magic_archer",
  { translate: "job.hiddenyears:magic_archer" },
  getJobDescription("hiddenyears:magic_archer"),
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
// 我错了。-RRR 钻石批发生总
magicArcher.onProjectileHitEntity((arg) => {
  const hurtEntity = arg.getEntityHit().entity;
  const player = arg.source as Player;
  if (!hurtEntity.isValid) return;
  tryOperateEntity(hurtEntity, (entity) => {
    entity.applyDamage(magicArcher.getLevel(player) * 0.7, {
      cause: EntityDamageCause.magic,
      damagingProjectile: arg.projectile
    });
  });
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
  if (tryConsumeEnhance(player)) {
    hurtEntity.applyDamage(1.2 * magicArcher.getLevel(player), {
      cause: EntityDamageCause.magic,
      damagingProjectile: arg.projectile
    });
  }
  if (skill2.isReleasing(player)) {
    hurtEntity.applyDamage(0.6 * magicArcher.getLevel(player), {
      cause: EntityDamageCause.magic,
      damagingProjectile: arg.projectile
    });
  }
});
