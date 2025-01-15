import { EquipmentSlot, system, world } from "@minecraft/server";
import { getEquipmentItem, vanillaDimensions } from "@lazuli/ldk2";

/**
 * 流血效果
 */
export function bleedEffectMonitor() {
  vanillaDimensions.forEach((dimension) => {
    dimension.getEntities({ tags: ["hy:bleed_lv1"] }).forEach((entity) => {
      const num1 = system.runInterval(() => {
        entity.applyDamage(1);
        entity.addEffect("slowness", 40, { amplifier: 1 });
      }, 40);
      system.runTimeout(() => {
        system.clearRun(num1);
      }, 160);
      world.afterEvents.entityDie.subscribe((event) => {
        if (entity.id === event.deadEntity.id) {
          system.clearRun(num1);
        }
      });
      world.afterEvents.entityRemove.subscribe((event) => {
        if (entity.id === event.removedEntityId) {
          system.clearRun(num1);
        }
      });
    });
    dimension.getEntities({ tags: ["hy:bleed_lv2"] }).forEach((entity) => {
      const num2 = system.runInterval(() => {
        entity.applyDamage(1);
        entity.addEffect("slowness", 20, { amplifier: 1 });
      }, 20);
      system.runTimeout(() => {
        system.clearRun(num2);
      }, 160);
      world.afterEvents.entityDie.subscribe((event) => {
        if (entity.id === event.deadEntity.id) {
          system.clearRun(num2);
        }
      });
      world.afterEvents.entityRemove.subscribe((event) => {
        if (entity.id === event.removedEntityId) {
          system.clearRun(num2);
        }
      });
    });
  });
}

/**
 * 干旱效果
 */
export function droughtEffectMonitor() {
  vanillaDimensions.forEach((dimension) => {
    dimension.getEntities({ tags: ["hy:drought"] }).forEach((entity) => {
      entity.addEffect("weakness", 40, {
        amplifier: 2,
      });
      entity.addEffect("nausea", 40, { amplifier: 2 });
      entity.addEffect("darkness", 40);
      entity.addEffect("poison", 40, { amplifier: 2 });
    });
  });
}

/**
 * 脱水效果
 */
export function dehydrationEffectMonitor() {
  vanillaDimensions.forEach((dimension) => {
    dimension.getEntities({ tags: ["hy:dehydration"] }).forEach((entity) => {
      entity.applyDamage(1);
      entity.addEffect("weakness", 40, {
        amplifier: 2,
      });
      entity.addEffect("nausea", 40, { amplifier: 2 });
      entity.addEffect("mining_fatigue", 40, { amplifier: 2 });
    });
  });
}

export function badgeEffectMonitor() {
  world.getAllPlayers().forEach((player) => {
    if (!getEquipmentItem(player, EquipmentSlot.Chest).hasTag("hy:badge"))
      return;
    const chestItem = getEquipmentItem(player, EquipmentSlot.Chest);
    switch (chestItem.typeId) {
      case "hy:diamond_badge":
        player.addEffect("health_boost", 40, {
          showParticles: false,
          amplifier: 2,
        });
        break;
      case "hy:golden_badge":
        player.addEffect("health_boost", 40, {
          showParticles: false,
          amplifier: 1,
        });
        break;
      case "hy:copper_badge":
        player.addEffect("health_boost", 40, { showParticles: false });
        break;
      default:
        break;
    }
  });
}

export class AffectEntity {
  constructor() {}
}
