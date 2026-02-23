import {
  EntitiesUtils,
  giveItem,
  ItemConditions,
  Job,
  JobSkill
} from "@occultus/api";
import { arcaneWizard } from "../advanced/arcaneWizard";
import { conjureWizard } from "../advanced/conjureWizard";
import {
  EntityDamageCause,
  ItemStack,
  MolangVariableMap,
  Player,
  TicksPerSecond
} from "@minecraft/server";
import { getJobDescription } from "../toolkit";
import { UnifiedCurrencyValueConditions } from "../../conditions/UCV";

export const wizard = new Job(
  "hiddenyears:wizard",
  { translate: "job.hiddenyears:wizard" },
  getJobDescription("hiddenyears:wizard"),
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
        job: arcaneWizard,
        condition: new ItemConditions("hiddenyears:wizard_gem", 1, true)
      },
      {
        job: conjureWizard,
        condition: new ItemConditions("hiddenyears:wizard_gem", 1, true)
      }
    ]
  }
);

const skill1 = new JobSkill(
  "hiddenyears:wizard_skill_1",
  "hiddenyears:job_skill",
  {
    translate: "skill.wizard.1"
  },
  {
    text: "？？？"
  },
  8 * TicksPerSecond
);

const skill2 = new JobSkill(
  "hiddenyears:wizard_skill_2",
  "hiddenyears:job_skill",
  {
    translate: "skill.wizard.2"
  },
  {
    text: "？？？"
  },
  0
);

skill2.onRelease((arg) => {
  const player = arg.source;
  const entities = new EntitiesUtils(player.dimension, {
    location: player.location,
    maxDistance: 8,
    families: ["monster"]
  });
  entities.applyDamage(wizard.getLevel(player) * 1.25, {
    cause: EntityDamageCause.magic
  });
  const molang = new MolangVariableMap();
  const rand = Math.random;
  molang.setColorRGBA("variable", {
    red: rand(),
    green: rand(),
    blue: rand(),
    alpha: rand()
  });
  entities.tryOperateEntity((entity) => {
    entity.dimension.spawnParticle(
      "minecraft:splash_spell_emitter",
      entity.location,
      molang
    );
  });
});

wizard.config.skills = [skill1, skill2];

wizard.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:wizard_gem"));
  }
});

// TODO!!! TODO!!! TODO!!! 26.10会增加EntityHurtBeforeEvent！完全的上位替代！但是现在根本没有哈哈。草泥马MS
wizard.onCauseDamage((arg) => {
  if (arg.damageSource.cause != EntityDamageCause.magic) return;
  const hurtEntity = arg.hurtEntity;
  const player = arg.damageSource.damagingEntity as Player;
  // 已经被移除
  if (!hurtEntity.isValid) return;
  hurtEntity.applyDamage(wizard.getLevel(player) * 0.6, {
    cause: EntityDamageCause.none
  });
  if (skill1.isReleasing(player)) {
    const entities = new EntitiesUtils(player.dimension, {
      location: player.location,
      maxDistance: 5,
      families: ["monster"]
    });
    entities.applyDamage(wizard.getLevel(player) * 1.2, {
      cause: EntityDamageCause.none
    });
  }
});
