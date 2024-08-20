import { Player } from "@minecraft/server";
import { Boss, BossSkill, Register } from "lazuli-mc";

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
      x: entity.location.x + 1,
      y: entity.location.y,
      z: entity.location.z,
    });
    boss?.dimension.spawnEntity("hy:ruby_guardian", {
      x: entity.location.x - 1,
      y: entity.location.y,
      z: entity.location.z,
    });
    boss?.dimension.spawnEntity("hy:ruby_guardian", {
      x: entity.location.x,
      y: entity.location.y,
      z: entity.location.z + 1,
    });
    boss?.dimension.spawnEntity("hy:ruby_guardian", {
      x: entity.location.x,
      y: entity.location.y,
      z: entity.location.z - 1,
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

export function registryBoss(){
  Register.bossRegistry(RUBY_KING);
}