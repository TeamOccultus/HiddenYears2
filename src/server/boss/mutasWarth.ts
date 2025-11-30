import { Player, WeatherType, EquipmentSlot, system } from "@minecraft/server";
import {
  BossSkill,
  RandomEvent,
  getEquipmentItem,
  Boss,
  Vector3Utils,
} from "@occultus/api";
import { listenIsisMonologue } from "../../data/monologues";

const kahe = new BossSkill(
  "kahe",
  200,
  (boss, entities) => {
    boss.playAnimation("animation.mutas_wrath.kahe_skill");
    entities.forEach((entity) => {
      if (!entity.isValid) return;
      if (entity.matches({ families: ["boss", "mutas_friend"] })) return;
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
    entities.forEach((entity) => {
      if (entity instanceof Player) {
        entity.playSound("mob.shulker.shoot");
        entity.sendMessage({
          translate: "message.hiddenyears:boss.mutas_wrath.osiris",
        });
      }
    });
    boss.isSneaking = true;
    console.warn(boss.isSneaking);
    boss.playAnimation("animation.mutas_wrath.osiris_skill");
    system.runTimeout(() => {
      if (boss.isValid) boss.isSneaking = false;
    }, 30);
    boss.dimension.spawnEntity(
      "hiddenyears:mummy",
      Vector3Utils.add(boss.location, { x: 4, y: 0, z: 0 })
    );
    boss.dimension.spawnEntity(
      "hiddenyears:mummy",
      Vector3Utils.add(boss.location, { x: -4, y: 0, z: 0 })
    );
    boss.dimension.spawnEntity(
      "hiddenyears:drift_sand_bodyguard",
      Vector3Utils.add(boss.location, { x: 0, y: 0, z: 4 })
    );
    boss.dimension.spawnEntity(
      "hiddenyears:drift_sand_bodyguard",
      Vector3Utils.add(boss.location, { x: 0, y: 0, z: -4 })
    );
  },
  5
);

const isis = new BossSkill(
  "isis",
  800,
  (boss, entities) => {
    boss.playAnimation("animation.mutas_wrath.kahe_skill");
    boss.dimension.setWeather(WeatherType.Thunder);
    entities.forEach((entity) => {
      if (!entity.isValid) return;
      if (entity.matches({ families: ["boss", "mutas_friend"] })) return;
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
    boss.isSneaking = true;
    boss.playAnimation("animation.mutas_wrath.muta_skill");
    system.runTimeout(() => {
      if (boss.isValid) boss.isSneaking = false;
    }, 85);
    entities.forEach((entity) => {
      if (!entity.isValid) return;
      if (entity.matches({ families: ["boss", "mutas_friend"] })) return;
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
        entity.applyDamage(10);
        return;
      }
      entity.applyDamage(20);
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

export { muatsWarth };
