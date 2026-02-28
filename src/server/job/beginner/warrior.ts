import {
  EntitiesUtils,
  giveItem,
  isInCooldown,
  ItemConditions,
  Job,
  JobSkill,
  RandomEvent,
  startCooldown
} from "@occultus/api";
import { assassin } from "../advanced/assassin";
import { berserker } from "../advanced/berserker";
import { swordman } from "../advanced/swordman";
import {
  EntityDamageCause,
  ItemStack,
  TicksPerSecond
} from "@minecraft/server";
import { getJobDescription } from "../toolkit";
import { UnifiedCurrencyValueConditions } from "../../conditions/UCV";

export const warrior = new Job(
  "hiddenyears:warrior",
  { translate: "job.hiddenyears:warrior" },
  getJobDescription("hiddenyears:warrior"),
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 5,
        condition: [new UnifiedCurrencyValueConditions(1200, true)]
      },
      {
        min: 6,
        max: 10,
        condition: [new UnifiedCurrencyValueConditions(2000, true)]
      }
    ],
    transform: [
      {
        job: assassin,
        condition: new ItemConditions("hiddenyears:warrior_gem", 1, true)
      },
      {
        job: berserker,
        condition: new ItemConditions("hiddenyears:warrior_gem", 1, true)
      },
      {
        job: swordman,
        condition: new ItemConditions("hiddenyears:warrior_gem", 1, true)
      }
    ]
  }
);

const skill1 = new JobSkill(
  "hiddenyears:warrior_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.warrior.1"
  },
  {
    text: "？？？"
  },
  8 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:warrior_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.warrior.2"
  },
  {
    text: "？？？"
  },
  10 * TicksPerSecond
);

skill2.onRelease((arg) => {
  const { source } = arg;
  const entities = new EntitiesUtils(source.dimension, {
    location: source.location,
    maxDistance: 5,
    families: ["monster"]
  });
  entities.applyDamage(6, {
    cause: EntityDamageCause.none
  });
  entities.tryOperateEntity((entity) => {
    entity.dimension.spawnParticle(
      "minecraft:critical_hit_emitter",
      entity.location
    );
  });
});

warrior.config.skills = [skill1, skill2];

warrior.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:warrior_gem"));
  }
});

warrior.onHitEntity((_arg, player) => {
  if (new RandomEvent(warrior.getLevel(player) * 0.1, () => {}).call()) {
    player.addEffect("strength", 3 * TicksPerSecond, { amplifier: 2 });
  }
});

warrior.onCauseDamage((arg, player) => {
  const { damageSource, hurtEntity } = arg;
  if (damageSource.cause !== EntityDamageCause.entityAttack) return;
  if (skill1.isReleasing(player)) {
    hurtEntity.applyDamage(warrior.getLevel(player) * 0.6, {
      cause: EntityDamageCause.none
    });
    hurtEntity.dimension.spawnParticle(
      "minecraft:critical_hit_emitter",
      hurtEntity.location
    );
  }
  if (skill2.isReleasing(player)) {
    const entities = new EntitiesUtils(player.dimension, {
      location: player.location,
      maxDistance: 8,
      families: ["monster"]
    });
    entities.applyDamage(warrior.getLevel(player) * 0.8, {
      cause: EntityDamageCause.none
    });
    entities.tryOperateEntity((entity) => {
      entity.dimension.spawnParticle(
        "minecraft:critical_hit_emitter",
        entity.location
      );
    });
  }
});
