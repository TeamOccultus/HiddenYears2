import { giveItem, ItemConditions, Job, JobSkill, Vector3Utils } from "@occultus/api";
import { magicArcher } from "../advanced/magicArcher";
import {
  EntityComponentTypes,
  EntityDamageCause,
  ItemStack,
  Player,
  system,
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
        condition: [new UnifiedCurrencyValueConditions(2000, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new UnifiedCurrencyValueConditions(2500, true)]
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
  let times = 0;
  // TODO 目前做不到等级越高伤害越高，等MS开放新的接口实现
  const shoot = () => {
    const arrow = player.dimension.spawnEntity(
      "minecraft:arrow",
      Vector3Utils.add(player.getHeadLocation(), Vector3Utils.scale(Vector3Utils.normalize(player.getViewDirection()), 0.75))
    );
    const projectileComponent = arrow.getComponent(EntityComponentTypes.Projectile);
    projectileComponent.owner = player;
    projectileComponent.shoot(Vector3Utils.scale(Vector3Utils.normalize(player.getViewDirection()), 60), { uncertainty: 0 });
    times +=1 ;
    if (times < 3) {
      system.runTimeout(shoot, 5);
    }
  };
  shoot();
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
  entity.applyDamage(archer.getLevel(player) * 0.6, {
    cause: EntityDamageCause.none
  });
  if (skill2.isReleasing(player)) {
    entity.applyDamage(archer.getLevel(player) * 1.8, {
      cause: EntityDamageCause.none
    });
    entity.addEffect("weakness", 8 * TicksPerSecond, { amplifier: 1 });
  }
});

archer.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:archer_gem"));
  }
});
