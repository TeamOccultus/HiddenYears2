import { Entity, Player, system } from "@minecraft/server";
import { utils } from "project-lantern";

/**
 * Special skill of hammer.
 * @param entity
 */
export function hammerSkill(entity: Entity) {
  const CHANCE: number = utils.randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 30) {
    entity.addEffect("mining_fatigue", 600);
    entity.addEffect("weakness", 300);
  } else if (CHANCE > 95) {
    entity.addEffect("mining_fatigue", 600);
    entity.addEffect("weakness", 300);
    entity.addEffect("darkness", 200);
    entity.applyDamage(2);
  }
}

/**
 * Special skill of crowbar.
 * @param entity
 */
export function crowbarSkill(entity: Entity) {
  const CHANCE: number = utils.randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 50) {
    entity.applyDamage(3);
  } else if (CHANCE > 90) {
    entity.applyDamage(5);
    entity.addEffect("slowness", 400, { amplifier: 1 });
  }
}

export function awlSkill(entity: Entity) {
  const CHANCE: number = utils.randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 90) {
    entity.applyDamage(1);
    entity.addEffect("poison", 100);
  }
  if (CHANCE < 50) {
    entity.applyDamage(2);
    entity.addEffect("poison", 140);
  }
}

export function knifeSkill(entity: Entity) {
  const CHANCE: number = utils.randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 50) {
    entity.addTag("hy:bleed_lv1");
    system.runTimeout(() => {
      entity.removeTag("hy:bleed_lv1");
    }, 160);
  } else if (CHANCE > 90) {
    entity.addTag("hy:bleed_lv2");
    system.runTimeout(() => {
      entity.removeTag("hy:bleed_lv2");
    }, 160);
  }
}

export function boardswordSkill(entity: Entity, attacker: Entity) {
  const CHANCE: number = utils.randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 20) {
    entity.applyDamage(2);
  } else if (CHANCE > 95) {
    entity.applyDamage(3);
    if (attacker instanceof Player) attacker.addLevels(1);
  }
}
