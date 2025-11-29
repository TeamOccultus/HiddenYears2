import { Player, WeatherType, EquipmentSlot } from "@minecraft/server";
import { BossSkill, RandomEvent, getEquipmentItem, Boss } from "@occultus/api";
import { listenIsisMonologue } from "../../data/monologues";

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
      boss.dimension.spawnEntity("hiddenyears:drift_sand_bodyguard", {
        x: boss.location.x,
        y: boss.location.y,
        z: boss.location.z + 2,
      });
      boss.dimension.spawnEntity("hiddenyears:drift_sand_bodyguard", {
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

export const muatsWarth = new Boss("hiddenyears:mutas_wrath", [
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
