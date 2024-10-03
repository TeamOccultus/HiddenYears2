import { Entity, Player, system } from "@minecraft/server";
import { randomInteger } from "lazuli-devkit";

/**
 * Special skill of hammer.
 * @param entity
 * @param attacker
 */
export function hammerSkill(entity: Entity, attacker?: Player) {
  const CHANCE: number = randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 30) {
    entity.addEffect("mining_fatigue", 600);
    entity.addEffect("weakness", 300);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.hammer.1",
    });
  } else if (CHANCE > 95) {
    entity.addEffect("mining_fatigue", 600);
    entity.addEffect("weakness", 300);
    entity.addEffect("darkness", 200);
    entity.applyDamage(2);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.hammer.2",
    });
  }
}

/**
 * Special skill of crowbar.
 * @param entity
 * @param attacker
 */
export function crowbarSkill(entity: Entity, attacker?: Player) {
  const CHANCE: number = randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 50) {
    entity.applyDamage(3);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.crowbar.1",
    });
  } else if (CHANCE > 90) {
    entity.applyDamage(5);
    entity.addEffect("slowness", 400, { amplifier: 1 });
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.crowbar.2",
    });
  }
}

/**
 * Special skill of awl.
 * @param entity
 * @param attacker
 */
export function awlSkill(entity: Entity, attacker?: Player) {
  const CHANCE: number = randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 90) {
    entity.applyDamage(1);
    entity.addEffect("poison", 100);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.awl.1",
    });
  }
  if (CHANCE < 50) {
    entity.applyDamage(2);
    entity.addEffect("poison", 140);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.awl.2",
    });
  }
}

/**
 * Special skill of knife.
 * @param entity
 * @param attacker
 */
export function knifeSkill(entity: Entity, attacker?: Player) {
  const CHANCE: number = randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 50) {
    entity.addTag("hy:bleed_lv1");
    system.runTimeout(() => {
      if (entity.isValid()) {
        entity?.removeTag("hy:bleed_lv1");
      }
    }, 160);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.knife.1",
    });
  } else if (CHANCE > 90) {
    entity.addTag("hy:bleed_lv2");
    system.runTimeout(() => {
      if (entity.isValid()) {
        entity?.removeTag("hy:bleed_lv2");
      }
    }, 160);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.knife.2",
    });
  }
}

/**
 * Special skill of knife.
 * @param entity
 * @param attacker
 */
export function boardswordSkill(entity: Entity, attacker?: Player) {
  const CHANCE: number = randomInteger(100);
  console.warn(`Attack chance is ${CHANCE}.`);
  if (CHANCE < 20) {
    attacker?.addExperience(10);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.boardsword.1",
    });
  } else if (CHANCE > 95) {
    entity.applyDamage(2);
    attacker?.addLevels(1);
    attacker?.onScreenDisplay.setActionBar({
      translate: "hy.itemSkill.boardsword.2",
    });
  }
}
