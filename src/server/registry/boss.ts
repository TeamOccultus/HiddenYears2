import { Player } from "@minecraft/server";
import { Boss, BossServer, BossSkill } from "@occultus/api";

const stealExperience = new BossSkill(
  "steal_exp",
  300,
  (excu, entities) => {
    let stolen = 0;
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.king_of_ruby.steal_exp",
        });
        entity.addExperience(-99999);
        stolen += entity.getTotalXp();
      }
    });
    const health =
      excu.getComponent("minecraft:health").currentValue + stolen / 50;
    if (health >= excu.getComponent("minecraft:health").effectiveMax) {
      excu.getComponent("minecraft:health").resetToMaxValue();
      return;
    }
    excu.getComponent("minecraft:health").setCurrentValue(health);
  },
  15
);

const spawnGuardian = new BossSkill(
  "spawn_guardian",
  500,
  (excu, entities) => {
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.king_of_ruby.spawn_guardian",
        });
      }
    });
    excu?.dimension.spawnEntity("hy:ruby_guardian", {
      x: excu.location.x + 1,
      y: excu.location.y,
      z: excu.location.z,
    });
    excu?.dimension.spawnEntity("hy:ruby_guardian", {
      x: excu.location.x - 1,
      y: excu.location.y,
      z: excu.location.z,
    });
    excu?.dimension.spawnEntity("hy:ruby_guardian", {
      x: excu.location.x,
      y: excu.location.y,
      z: excu.location.z + 1,
    });
    excu?.dimension.spawnEntity("hy:ruby_guardian", {
      x: excu.location.x,
      y: excu.location.y,
      z: excu.location.z - 1,
    });
  },
  15
);

const lightningFromPast = new BossSkill(
  "past_lightning",
  800,
  (excu, entities) => {
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.king_of_ruby.past_lightning",
        });
      }
      if (!entity.matches({ families: ["ruby"] })) {
        entity.dimension.spawnEntity("lightning_bolt", entity.location);
      }
    });
  },
  15
);

const kingOfRuby = new Boss(
  "hiddenyears:king_of_ruby",
  [stealExperience, spawnGuardian, lightningFromPast],
  { trackId: "music.boss.ruby", radius: 20 }
);

export function registryBoss() {
  const server = new BossServer();
  server.addBoss(kingOfRuby);
}
