import { giveItem, ItemConditions, Job, JobSkill } from "@occultus/api";
import { magicArcher } from "../advanced/magicArcher";
import {
  EntityComponentTypes,
  EntityDamageCause,
  ItemStack,
  Player,
  TicksPerSecond,
  world
} from "@minecraft/server";
import { getJobDescription } from "../toolkit";
import { UnifiedCurrencyValueConditions } from "../../conditions/UCV";

export const archer = new Job(
  "hiddenyears:archer",
  { translate: "job.hiddenyears:archer" },
  getJobDescription("hiddenyears:archer"),
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 5,
        condition: [new UnifiedCurrencyValueConditions(200, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new UnifiedCurrencyValueConditions(500, true)]
      }
    ],
    transform: [
      {
        job: magicArcher,
        condition: new ItemConditions("hiddenyears:archer_gem", 1, true)
      }
    ]
  }
);

const skill1 = new JobSkill(
  "hiddenyears:archer_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.archer.1"
  },
  {
    text: "？？？"
  },
  0
);

const skill2 = new JobSkill(
  "hiddenyears:archer_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.archer.2"
  },
  {
    text: "？？？"
  },
  0
);

skill1.onRelease((arg) => {
  const player = arg.source;
  const arrow = player.dimension.spawnEntity(
    "minecraft:arrow",
    player.getHeadLocation()
  );
  // TODO: 伤害，还要射出三支，还有速度
  // 太高级了，也许可以抄TouHouLittleMaidBE
  // https://github.com/ENIACJushi/TouHouLittleMaidBE/blob/main/TouHouLittleMaid_BP/typescripts/src/danmaku/shoots/LineShoot.ts
  arrow
    .getComponent(EntityComponentTypes.Projectile)
    .shoot(player.getViewDirection(), { uncertainty: 0 });
});

skill2.onRelease((arg) => {
  const player = arg.source;
  player.addTag("hiddenyears:archer_skill_2");
});

archer.config.skills = [skill1, skill2];

// 属性“onProjectHitEntity”在类型“Job”上不存在。你是否指的是“onProjectileHitEntity”?
// 😭 - RRRRRRRawProjectileMC
archer.onProjectileHitEntity((arg, player) => {
  const entity = arg.getEntityHit().entity;
  if (!entity) return;
  if (!entity.isValid) return;
  entity.applyDamage(archer.getLevel(player) * 0.4, {
    cause: EntityDamageCause.none
  });
  if (skill2.isReleasing(player)) {
    entity.applyDamage(archer.getLevel(player) * 1.5, {
      cause: EntityDamageCause.none
    });
    entity.addEffect("weakness", 5 * TicksPerSecond, { amplifier: 1 });
  }
});

archer.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:archer_gem"));
  }
});
