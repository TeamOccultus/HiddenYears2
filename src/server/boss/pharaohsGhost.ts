import { Player, BlockVolume } from "@minecraft/server";
import { BossSkill, Boss } from "@occultus/api";
import { droughtEffect } from "../effects/drought";

const sandGuardian = new BossSkill(
  "summon_sand_guardian",
  600,
  (boss, entities) => {
    boss?.dimension.spawnEntity("hiddenyears:drift_sand_bodyguard", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z + 2
    });
    boss?.dimension.spawnEntity("hiddenyears:drift_sand_bodyguard", {
      x: boss.location.x,
      y: boss.location.y,
      z: boss.location.z - 2
    });
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.ghost.guardian"
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
      z: boss.location.z
    });
    boss?.dimension.spawnEntity("hiddenyears:mummy", {
      x: boss.location.x - 2,
      y: boss.location.y,
      z: boss.location.z
    });
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.ghost.mummy"
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
              z: entity.location.z
            },
            {
              x: entity.location.x,
              y: entity.location.y + 4,
              z: entity.location.z
            }
          ),
          "sand"
        );
        entity.playSound("boss_skill.ruby");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.ghost.caughtsand"
        });
      }
    });
  },
  10
);

export const pharaohsGhost = new Boss(
  "hiddenyears:pharaohs_ghost",
  [sandGuardian, mummy, drought, caughtInSand],
  { trackId: "music.boss.pharaohs_ghost", radius: 20 }
);
