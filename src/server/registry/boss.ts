import {
  BlockVolume,
  EquipmentSlot,
  ItemStack,
  Player,
  system,
  WeatherType,
  world,
} from "@minecraft/server";
import { Boss, BossSkill } from "@grindstone/entity-kit";
import { droughtEffect } from "./effects/drought";
import {
  getEquipmentItem,
  setEquipmentItem,
  withPercentChance,
} from "@grindstone/utils";

const STEAL_EXP = new BossSkill("steal_exp", 300, 15, {
  level: -9999,
  event: (entity) => {
    if (entity instanceof Player) {
      entity.playSound("boss_skill.ruby");
      entity.sendMessage({ translate: "hy.boosSkill.ruby.exp" });
    }
  },
});

const SPAWN_GUARDIAN = new BossSkill("spawn_guardian", 500, 15, {
  event: (entity, boss) => {
    if (entity instanceof Player) {
      entity.playSound("boss_skill.ruby");
      entity.sendMessage({
        translate: "hy.boosSkill.ruby.guardian",
      });
    }
    boss?.dimension.spawnEntity("hy:ruby_guardian", {
      x: boss.location.x + 1,
      y: boss.location.y,
      z: boss.location.z,
    });
    boss?.dimension.spawnEntity("hy:ruby_guardian", {
      x: boss.location.x - 1,
      y: boss.location.y,
      z: boss.location.z,
    });
    boss?.dimension.spawnEntity("hy:ruby_guardian", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z + 1,
    });
    boss?.dimension.spawnEntity("hy:ruby_guardian", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z - 1,
    });
  },
});

const PAST_LIGHTNING = new BossSkill("past_lightning", 800, 15, {
  event: (entity) => {
    if (entity instanceof Player) {
      entity.playSound("boss_skill.ruby");
      entity.sendMessage({
        translate: "hy.boosSkill.ruby.lightning",
      });
    }
    if (!entity.matches({ families: ["ruby"] })) {
      entity.dimension.spawnEntity("lightning_bolt", entity.location);
    }
  },
});

const RUBY_KING = new Boss(
  "hy:king_of_ruby",
  [STEAL_EXP, SPAWN_GUARDIAN, PAST_LIGHTNING],
  { trackId: "music.boss.ruby", radius: 20 }
);

const SUMMON_SAND_GUARDIAN = new BossSkill("summon_sand_guardian", 600, 15, {
  event: (entity, boss) => {
    boss?.dimension.spawnEntity("hy:drift_sand_guardian", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z + 2,
    });
    boss?.dimension.spawnEntity("hy:drift_sand_guardian", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z - 2,
    });
    if (entity instanceof Player) {
      entity.playSound("boss_skill.ruby");
      entity.sendMessage({
        translate: "hy.boosSkill.ghost.guardian",
      });
    }
  },
});

const SUMMON_MUMMY = new BossSkill("summon_mummy", 800, 15, {
  event: (entity, boss) => {
    boss?.dimension.spawnEntity("hy:mummy", {
      x: boss.location.x + 2,
      y: boss.location.y,
      z: boss.location.z,
    });
    boss?.dimension.spawnEntity("hy:mummy", {
      x: boss.location.x - 2,
      y: boss.location.y,
      z: boss.location.z,
    });
    if (entity instanceof Player) {
      entity.playSound("boss_skill.ruby");
      entity.sendMessage({
        translate: "hy.boosSkill.ghost.mummy",
      });
    }
  },
});

const DROUGHT_DEBUFF = new BossSkill("drought", 1200, 25, {
  event: (entity) => {
    droughtEffect.addLevelTemporarily(entity, 1, 300);
  },
});

const CAUGHT_IN_SAND = new BossSkill("caught_in_sand", 1400, 10, {
  event: (entity) => {
    if (entity instanceof Player) {
      entity.dimension.fillBlocks(
        new BlockVolume(
          {
            x: entity.location.x,
            y: entity.location.y + 2,
            z: entity.location.z,
          },
          {
            x: entity.location.x,
            y: entity.location.y + 4,
            z: entity.location.z,
          }
        ),
        "sand"
      );
      entity.playSound("boss_skill.ruby");
      entity.sendMessage({
        translate: "hy.boosSkill.ghost.caughtsand",
      });
    }
  },
});

const PHARAOHS_GHOST = new Boss(
  "hy:pharaohs_ghost",
  [SUMMON_SAND_GUARDIAN, SUMMON_MUMMY, DROUGHT_DEBUFF, CAUGHT_IN_SAND],
  { trackId: "music.boss.pharaohs_ghost", radius: 20 }
);

const KAHE = new BossSkill(
  "kahe",
  300,
  10,
  {
    event: (entity, boss) => {
      if (boss) boss.playAnimation("animation.mutas_wrath.kahe_skill");
      if (!entity.isValid()) return;
      entity.addEffect("weakness", 400, { amplifier: 2 });
      entity.addEffect("poison", 400);
    },
  },
  { translate: "hy.boosSkill.mutas_wrath.kahe" }
);

const OSIRIS = new BossSkill(
  "osiris",
  600,
  5,
  {
    event: (entity, boss) => {
      if (boss) boss.playAnimation("animation.mutas_wrath.osiris_skill");
      if (!entity.isValid()) return;
      if (
        getEquipmentItem(entity, EquipmentSlot.Head)?.typeId ===
        "hy:drift_sand_coronet"
      )
        return;
      entity.applyDamage(10);
    },
  },
  { translate: "hy.boosSkill.mutas_wrath.osiris" }
);

const ISIS = new BossSkill(
  "isis",
  1200,
  10,
  {
    event: (entity, boss) => {
      if (boss) {
        boss.playAnimation("animation.mutas_wrath.kahe_skill");
        boss.dimension.setWeather(WeatherType.Thunder);
      }
      if (!entity.isValid()) return;
      withPercentChance({
        chance: 0.9,
        event: () => {
          entity.dimension.spawnEntity("lightning_bolt", entity.location);
        },
      });
    },
  },
  { translate: "hy.boosSkill.mutas_wrath.isis" }
);

const MUTA = new BossSkill(
  "muta",
  100,
  15,
  {
    event: (entity, boss) => {
      if (boss) {
        setEquipmentItem(boss, new ItemStack("diamond_sword"));
        console.log(getEquipmentItem(boss)?.typeId)
        boss.playAnimation("animation.mutas_wrath.muta_skill", {
          controller: "controller.animation.mutas_wrath.none",
        });
        setEquipmentItem(boss);
      }
      if (!entity.isValid()) return;
      if (
        getEquipmentItem(entity, EquipmentSlot.Head)?.typeId ===
        "hy:drift_sand_coronet"
      )
        return;
      entity.applyDamage(18);
    },
  },
  { translate: "hy.boosSkill.mutas_wrath.muta" }
);

const MUTAS_WRATH = new Boss("hy:mutas_wrath", [KAHE, OSIRIS, ISIS, MUTA]);

export function registryBoss() {
  RUBY_KING.build();
  PHARAOHS_GHOST.build();
  MUTAS_WRATH.build();
}
