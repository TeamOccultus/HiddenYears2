import { WeaponAtkSkill, WeaponMaterial } from "@grindstone/material-kit";
import { replaceLowerCopperTool } from "../../core/utils";
import { bleedEffect } from "./effects/bleed";
import { Player } from "@minecraft/server";
import { dehydrationEffect } from "./effects/dehydration";
import { droughtEffect } from "./effects/drought";

/**
 * 空技能
 */
const emptySkill = new WeaponAtkSkill(5, 0);

/**
 * 锥的技能
 */
const awlSkill = new WeaponAtkSkill(3);
awlSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    target.applyDamage(1);
    target.addEffect("poison", 100);
  }
});
awlSkill.setTips({ translate: "hy.itemSkill.awl.1" });

/**
 * 锥的终结技
 */
const awlFinalSkill = new WeaponAtkSkill(2);
awlFinalSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    target.applyDamage(2);
    target.addEffect("poison", 140);
  }
});
awlFinalSkill.setTips({ translate: "hy.itemSkill.awl.2" });

/**
 * 锤的技能
 */
const hammerSkill = new WeaponAtkSkill(3);
hammerSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    target.addEffect("mining_fatigue", 600);
    target.addEffect("weakness", 300);
  }
});
hammerSkill.setTips({ translate: "hy.itemSkill.hammer.1" });

/**
 * 锤的终结技
 */
const hammerFinalSkill = new WeaponAtkSkill(2);
hammerFinalSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    target.addEffect("mining_fatigue", 600);
    target.addEffect("weakness", 300);
    target.addEffect("darkness", 200);
  }
});
hammerFinalSkill.setTips({ translate: "hy.itemSkill.hammer.2" });

/**
 * 撬棍的技能
 */
const crowbarSkill = new WeaponAtkSkill(3);
crowbarSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    target.applyDamage(4);
  }
});
crowbarSkill.setTips({ translate: "hy.itemSkill.crowbar.1" });

/**
 * 撬棍的终结技
 */
const crowbarFinalSkill = new WeaponAtkSkill(1);
crowbarFinalSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    target.applyDamage(5);
    target.addEffect("slowness", 400, { amplifier: 1 });
    target.addEffect("weakness", 300, { amplifier: 1 });
    target.addEffect("darkness", 200, { amplifier: 1 });
  }
});
crowbarFinalSkill.setTips({ translate: "hy.itemSkill.crowbar.2" });

/**
 * 小刀的技能
 */
const knifeSkill = new WeaponAtkSkill(3);
knifeSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    bleedEffect.add(target, 100, 1);
  }
});
knifeSkill.setTips({ translate: "hy.itemSkill.knife.1" });

/**
 * 小刀的终结技
 */
const knifeFinalSkill = new WeaponAtkSkill(2);
knifeFinalSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (target) {
    bleedEffect.add(target, 120, 2);
  }
});
knifeFinalSkill.setTips({ translate: "hy.itemSkill.knife.2" });

/**
 * 阔剑的技能
 */
const boardswordSkill = new WeaponAtkSkill(3);
boardswordSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (atker instanceof Player) atker.addExperience(10);
});
boardswordSkill.setTips({ translate: "hy.itemSkill.boardsword.1" });

/**
 * 阔剑的终结技
 */
const boardswordFinalSkill = new WeaponAtkSkill(2);
boardswordFinalSkill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (atker instanceof Player) atker.addLevels(1);
});
boardswordFinalSkill.setTips({ translate: "hy.itemSkill.boardsword.2" });

/**
 * 干旱技能
 */
const droughtSkill = new WeaponAtkSkill(1);
droughtSkill.onReleased((callback) => {
  if (callback.target)
    droughtEffect.add(callback.target, 300, 1);
});

/**
 * 脱水技能
 */
const dehydrationSkill = new WeaponAtkSkill(1);
dehydrationSkill.onReleased((callback) => {
  if (callback.target)
    dehydrationEffect.add(callback.target, 300, 1);
});

/**
 * 注册武器
 */
export function registryWeapon() {
  // 通用武器材料
  new WeaponMaterial("hy:custom_weapons").onWeaponBreak((callback) => {
    replaceLowerCopperTool(callback.itemStack, callback.source);
  });
  /**
   * 武器锥
   */
  const awl = new WeaponMaterial("hy:is_awl");
  // 锥武器材料
  awl.setOption({ closeDurabilityTrigger: true });
  awl.addSkill(emptySkill, awlSkill, awlFinalSkill);
  /**
   * 武器锤
   */
  const hammer = new WeaponMaterial("hy:is_hammer");
  // 锥武器材料
  hammer.setOption({ closeDurabilityTrigger: true });
  hammer.addSkill(emptySkill, hammerSkill, hammerFinalSkill);
  /**
   * 武器撬棍
   */
  const crowbar = new WeaponMaterial("hy:is_crowbar");
  // 撬棍武器材料
  crowbar.setOption({ closeDurabilityTrigger: true });
  crowbar.addSkill(emptySkill, crowbarSkill, crowbarFinalSkill);
  /**
   * 武器小刀
   */
  const knife = new WeaponMaterial("hy:is_knife");
  // 小刀武器材料
  knife.setOption({ closeDurabilityTrigger: true });
  knife.addSkill(emptySkill, knifeSkill, knifeFinalSkill);
  /**
   * 武器阔剑
   */
  const boardsword = new WeaponMaterial("hy:is_boardsword");
  // 阔剑武器材料
  boardsword.setOption({ closeDurabilityTrigger: true });
  boardsword.addSkill(emptySkill, boardswordSkill, boardswordFinalSkill);
  /**
   * 带有干旱效果的武器
   */
  const droughtWeapon = new WeaponMaterial("hy:drought_effect");
  droughtWeapon.setOption({ closeDurabilityTrigger: true });
  droughtWeapon.addSkill(droughtSkill);
  /**
   * 带有脱水效果的武器
   */
  const dehydrationWeapon = new WeaponMaterial("hy:dehydration_effect");
  dehydrationWeapon.setOption({ closeDurabilityTrigger: true });
  dehydrationWeapon.addSkill(dehydrationSkill);
}
