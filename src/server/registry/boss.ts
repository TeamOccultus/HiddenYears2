/**
 * @module server/registry/boss
 * @category Registry Bus
 */
import {
  BlockVolume,
  EquipmentSlot,
  Player,
  system,
  WeatherType,
} from "@minecraft/server";
import {
  Boss,
  BossServer,
  BossSkill,
  getAllExp,
  getEquipmentItem,
  RandomEvent,
} from "@occultus/api";
import { DebugMode } from "../../debug/Debug";
import { droughtEffect } from "../effects/drought";
import { listenIsisMonologue } from "../../data/monologues";

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
          translate: "message.hiddenyears:boss.king_of_ruby.steal_exp",
        });
        DebugMode.log(getAllExp(entity).toString());
        stolen += getAllExp(entity);
        entity.resetLevel();
      }
    });
    const health =
      excu.getComponent("minecraft:health").currentValue + stolen / 5;
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
    excu.playAnimation("animation.humanoid.celebrating");
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.king_of_ruby.spawn_guardian",
        });
      }
    });
    system.runTimeout(() => {
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x + 2,
        y: excu.location.y,
        z: excu.location.z,
      });
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x - 2,
        y: excu.location.y,
        z: excu.location.z,
      });
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x,
        y: excu.location.y,
        z: excu.location.z + 2,
      });
      excu?.dimension.spawnEntity("hiddenyears:ruby_guardian", {
        x: excu.location.x,
        y: excu.location.y,
        z: excu.location.z - 2,
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
          translate: "message.hiddenyears:boss.king_of_ruby.past_lightning",
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

const kingOfRuby = new Boss(
  "hiddenyears:king_of_ruby",
  [stealExperience, spawnGuardian, lightningFromPast],
  { trackId: "music.boss.ruby", radius: 20 }
);

const sandGuardian = new BossSkill(
  "summon_sand_guardian",
  600,
  (boss, entities) => {
    boss?.dimension.spawnEntity("hiddenyears:drift_sand_guardian", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z + 2,
    });
    boss?.dimension.spawnEntity("hiddenyears:drift_sand_guardian", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z - 2,
    });
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.ghost.guardian",
        });
      }
    });
  },
  15
);

const mummy = new BossSkill(
  "summon_mummy",
  800,
  (boss, entities) => {
    boss?.dimension.spawnEntity("hiddenyears:mummy", {
      x: boss.location.x + 2,
      y: boss.location.y,
      z: boss.location.z,
    });
    boss?.dimension.spawnEntity("hiddenyears:mummy", {
      x: boss.location.x - 2,
      y: boss.location.y,
      z: boss.location.z,
    });
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.ghost.mummy",
        });
      }
    });
  },
  15
);

const drought = new BossSkill(
  "drought",
  1200,
  (boss, entities) => {
    entities.forEach((entity) => {
      droughtEffect.add(entity, 300, 1);
    });
  },
  25
);

const caughtInSand = new BossSkill(
  "caught_in_sand",
  1400,
  (boss, entities) => {
    entities.forEach((entity) => {
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
          translate: "message.hiddenyears:boss.ghost.caughtsand",
        });
      }
    });
  },
  10
);

const pharaohsGhost = new Boss(
  "hiddenyears:pharaohs_ghost",
  [sandGuardian, mummy, drought, caughtInSand],
  { trackId: "music.boss.pharaohs_ghost", radius: 20 }
);

const kahe = new BossSkill(
  "kahe",
  200,
  (boss, entities) => {
    if (boss) boss.playAnimation("animation.mutas_wrath.kahe_skill");
    entities.forEach((entity) => {
      if (!entity.isValid) return;
      if (entity instanceof Player) {
        entity.playSound("mob.shulker.shoot");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.mutas_wrath.kahe",
        });
      }
      entity.addEffect("weakness", 400, { amplifier: 2 });
      entity.addEffect("poison", 400);
    });
  },
  10
);

const osiris = new BossSkill(
  "osiris",
  400,
  (boss, entities) => {
    if (boss) {
      boss.playAnimation("animation.mutas_wrath.kahe_skill");
      boss.dimension.spawnEntity("hiddenyears:mummy", {
        x: boss.location.x + 2,
        y: boss.location.y,
        z: boss.location.z,
      });
      boss.dimension.spawnEntity("hiddenyears:mummy", {
        x: boss.location.x - 2,
        y: boss.location.y,
        z: boss.location.z,
      });
      boss.dimension.spawnEntity("hiddenyears:drift_sand_guardian", {
        x: boss.location.x,
        y: boss.location.y,
        z: boss.location.z + 2,
      });
      boss.dimension.spawnEntity("hiddenyears:drift_sand_guardian", {
        x: boss.location.x,
        y: boss.location.y,
        z: boss.location.z - 2,
      });
    }
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("mob.shulker.shoot");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.mutas_wrath.osiris",
        });
      }
    });
  },
  5
);

const isis = new BossSkill(
  "isis",
  800,
  (boss, entities) => {
    if (boss) {
      boss.playAnimation("animation.mutas_wrath.kahe_skill");
      boss.dimension.setWeather(WeatherType.Thunder);
    }
    entities.forEach((entity) => {
      if (!entity.isValid) return;
      if (entity instanceof Player) {
        entity.sendMessage({
          translate: "message.hiddenyears:boss.mutas_wrath.isis",
        });
        entity.playSound("mob.shulker.shoot");
      }
      new RandomEvent(0.9, () => {
        entity.dimension.spawnEntity("lightning_bolt", entity.location);
      }).call();
    });
  },
  10
);

const muta = new BossSkill(
  "muta",
  1200,
  (boss, entities) => {
    if (boss) {
      boss.playAnimation("animation.mutas_wrath.kahe_skill");
    }
    entities.forEach((entity) => {
      if (!entity.isValid) return;
      if (entity instanceof Player) {
        entity.playSound("mob.shulker.shoot");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.mutas_wrath.muta",
        });
      }
      if (
        getEquipmentItem(entity, EquipmentSlot.Head)?.typeId ===
        "hiddenyears:drift_sand_coronet"
      ) {
        entity.applyDamage(8);
        return;
      }
      entity.applyDamage(18);
    });
  },
  20
);

const muatsWarth = new Boss("hiddenyears:mutas_wrath", [
  kahe,
  osiris,
  isis,
  muta,
]);
muatsWarth.onDie((arg) => {
  const dim = arg.deadEntity.dimension;
  const boss = arg.deadEntity;
  dim
    .getEntities({ location: boss.location, minDistance: 0, maxDistance: 20 })
    .forEach((entity) => {
      if (entity instanceof Player) {
        if (
          entity.getDynamicProperty("hiddenyears:has_listened_isis_monologue")
        ) {
          return;
        }
        listenIsisMonologue(entity);
      }
    });
});

export function registryBoss() {
  const server = new BossServer();
  server.addBoss(kingOfRuby);
}
