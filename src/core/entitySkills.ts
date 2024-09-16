import { Entity, Player, system, world } from "@minecraft/server";

/**
 * 赋予一个实体红宝石之王的技能
 * @param entity
 * @since 2.2.3
 */

/*export function rubyKingSkill(entity: Entity) {
  entity.dimension
    .getEntities({
      location: entity.location,
      minDistance: 0,
      maxDistance: 20,
    })
    .forEach((entity) => {
      if (entity instanceof Player) {
        entity.playMusic("music.boss.ruby", {
          loop: true,
        });
      }
    });
  let num1 = system.runInterval(() => {
    entity.dimension
      .getEntities({
        location: entity.location,
        minDistance: 0,
        maxDistance: 15,
      })
      .forEach((entity) => {
        if (entity instanceof Player) {
          entity.playSound("boss_skill.ruby");
          entity.sendMessage({ translate: "hy.boosSkill.ruby.exp" });
          entity.addLevels(-9999);
        }
      });
  }, 300);
  let num2 = system.runInterval(() => {
    entity.dimension
      .getEntities({
        location: entity.location,
        minDistance: 0,
        maxDistance: 15,
      })
      .forEach((entity) => {
        if (entity instanceof Player) {
          entity.playSound("boss_skill.ruby");
          entity.sendMessage({
            translate: "hy.boosSkill.ruby.guardian",
          });
        }
      });
    entity.dimension.spawnEntity("hy:ruby_guardian", {
      x: entity.location.x + 1,
      y: entity.location.y,
      z: entity.location.z,
    });
    entity.dimension.spawnEntity("hy:ruby_guardian", {
      x: entity.location.x - 1,
      y: entity.location.y,
      z: entity.location.z,
    });
    entity.dimension.spawnEntity("hy:ruby_guardian", {
      x: entity.location.x,
      y: entity.location.y,
      z: entity.location.z + 1,
    });
    entity.dimension.spawnEntity("hy:ruby_guardian", {
      x: entity.location.x,
      y: entity.location.y,
      z: entity.location.z - 1,
    });
  }, 500);
  let num3 = system.runInterval(() => {
    entity.dimension
      .getEntities({
        location: entity.location,
        minDistance: 0,
        maxDistance: 15,
      })
      .forEach((entity) => {
        if (entity instanceof Player) {
          entity.playSound("boss_skill.ruby");
          entity.sendMessage({
            translate: "hy.boosSkill.ruby.lightning",
          });
        }
        if (!entity.matches({ families: ["ruby"] })) {
          entity.dimension.spawnEntity("lightning_bolt", entity.location);
        }
      });
  }, 800);
  world.afterEvents.entityDie.subscribe((event) => {
    if (event.deadEntity.id === entity.id) {
      console.warn("Clear all skills.");
      system.clearRun(num1);
      system.clearRun(num2);
      system.clearRun(num3);
      world.stopMusic();
      world.sendMessage([{ translate: "hy.bossdead.ruby" }]);
    }
  });
  world.afterEvents.entityRemove.subscribe((event) => {
    if (event.removedEntityId === entity.id) {
      console.warn("Clear all skills.");
      system.clearRun(num1);
      system.clearRun(num2);
      system.clearRun(num3);
      world.stopMusic();
      world.sendMessage([{ translate: "hy.bossdead.ruby" }]);
    }
  });
}
*/