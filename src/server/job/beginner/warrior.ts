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
  Player,
  system,
  TicksPerSecond
} from "@minecraft/server";

export const warrior = new Job(
  "hiddenyears:warrior",
  { translate: "job.hiddenyears:warrior" },
  { translate: "job.hiddenyears:warrior.desc" },
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)]
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
  }
);

skill1.onRelease((arg) => {
  const { source } = arg;
  source.addTag("hiddenyears:warrior_skill_1");
  system.runTimeout(() => {
    if (source.isValid) {
      source.removeTag("hiddenyears:warrior_skill_1");
    }
  }, 8 * 20);
});

const skill2 = new JobSkill(
  "hiddenyears:warrior_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.warrior.2"
  },
  {
    text: "？？？"
  }
);

skill2.onRelease((arg) => {
  const { source } = arg;
  const entities = new EntitiesUtils(source.dimension, {
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
  source.addTag("hiddenyears:warrior_skill_2");
  system.runTimeout(() => {
    if (source.isValid) {
      source.removeTag("hiddenyears:warrior_skill_2");
    }
  }, 10 * 20);
});

warrior.config.skills = [skill1, skill2];

warrior.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:warrior_gem"));
  }
});

warrior.onHitEntity((arg) => {
  const player = arg.damagingEntity as Player;
  if (new RandomEvent(warrior.getLevel(player) * 0.1, () => {}).call()) {
    player.addEffect("strength", 3 * TicksPerSecond, { amplifier: 2 });
  }
});

warrior.onCauseDamage((arg) => {
  const { damage, damageSource, hurtEntity } = arg;
  const entity = damageSource.damagingEntity;
  if (!damageSource.damagingEntity) return;
  if (!(entity instanceof Player)) return;
  if (damageSource.damagingEntity?.hasTag("hiddenyears:warrior_skill_1")) {
    hurtEntity.applyDamage(warrior.getLevel(entity) * 0.6, {
      cause: EntityDamageCause.none,
      damagingEntity: null
    });
    hurtEntity.dimension.spawnParticle(
      "minecraft:critical_hit_emitter",
      hurtEntity.location
    );
  }
  if (damageSource.damagingEntity?.hasTag("hiddenyears:warrior_skill_2")) {
    hurtEntity.applyDamage(warrior.getLevel(entity) * 0.8, {
      cause: EntityDamageCause.none,
      damagingEntity: null
    });
    hurtEntity.dimension.spawnParticle(
      "minecraft:critical_hit_emitter",
      hurtEntity.location
    );
  }
});
