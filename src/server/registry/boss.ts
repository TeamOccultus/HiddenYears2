import { BlockVolume, Player, system, world } from "@minecraft/server";
import { Boss, BossSkill, Register } from "@lazuli/ldk2";
import { HyUtils } from "../../core/utils";

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
    if (HyUtils.isAffectByBossDroughtDebuff(entity)) {
      if (entity instanceof Player) {
        entity.onScreenDisplay.setActionBar({
          translate: "hy.message.drought",
        });
        world.afterEvents.playerSpawn.subscribe((event) => {
          if (event.player.id === entity.id) {
            entity.removeTag("hy:drought");
          }
        });
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "hy.boosSkill.ghost.drought",
        });
      }
      entity.addTag("hy:drought");
      system.runTimeout(() => {
        if (entity.isValid()) entity.removeTag("hy:drought");
      }, 300);
    }
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

export function registryBoss() {
  Register.registry([RUBY_KING, PHARAOHS_GHOST]);
}
