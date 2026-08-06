import { Player, system } from "@minecraft/server";
import { BossSkill, getAllExp, Boss, heal } from "@occultus/api";

const stealExperience = new BossSkill(
  "steal_exp",
  300,
  (excu, entities) => {
    let stolen = 0;
    excu.playAnimation("animation.humanoid.celebrating");
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.king_of_ruby.steal_exp"
        });
        stolen += getAllExp(entity);
        entity.resetLevel();
      }
    });
    heal(excu, stolen / 5);
  },
  15
);

const spawnGuardian = new BossSkill(
  "spawn_guardian",
  500,
  (excu, entities) => {
    excu.playAnimation("animation.humanoid.celebrating");
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.king_of_ruby.spawn_guardian"
        });
      }
    });
    system.runTimeout(() => {
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x + 2,
        y: excu.location.y,
        z: excu.location.z
      });
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x - 2,
        y: excu.location.y,
        z: excu.location.z
      });
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x,
        y: excu.location.y,
        z: excu.location.z + 2
      });
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x,
        y: excu.location.y,
        z: excu.location.z - 2
      });
    }, 40);
  },
  15
);

const lightningFromPast = new BossSkill(
  "past_lightning",
  800,
  (excu, entities) => {
    excu.playAnimation("animation.humanoid.celebrating");
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.king_of_ruby.past_lightning"
        });
      }
      system.runTimeout(() => {
        if (!entity.matches({ families: ["ruby"] })) {
          entity.dimension.spawnEntity("lightning_bolt", entity.location);
        }
      });
    });
  },
  15
);

export const kingOfRuby = new Boss(
  "hiddenyears:king_of_ruby",
  [stealExperience, spawnGuardian, lightningFromPast],
  { trackId: "music.boss.ruby", radius: 20 }
).onDie((arg) => {
  arg.deadEntity.dimension.setBlockType(
    arg.deadEntity.location,
    "hiddenyears:ruby_griffin_egg"
  );
});
