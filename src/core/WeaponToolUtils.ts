import { Player } from "@minecraft/server";
import { warrior } from "../server/job/beginner/warrior";
import { berserker } from "../server/job/advanced/berserker";
import { assassin } from "../server/job/advanced/assassin";
import { WeaponTypeParams } from "../server/components/WeaponTypeComponent/Params";
import { Random } from "@occultus/api";
import { StaffParams } from "../server/components/StaffComponent/Params";
import { wizard } from "../server/job/beginner/wizard";
import { conjureWizard } from "../server/job/advanced/conjureWizard";
import { arcaneWizard } from "../server/job/advanced/arcaneWizard";

/**
 * 获取玩家攻击敌人时触发战锤技能的概率
 * @param player
 */
export function getSledgehammerSkillChance(player: Player) {
  let basicChance = 0.125;
  if (warrior.isOwned(player)) {
    basicChance = basicChance + warrior.getLevel(player) * 0.02;
  }
  if (berserker.isOwned(player)) {
    basicChance = basicChance + berserker.getLevel(player) * 0.05;
  }
  return basicChance;
}

/**
 * 获取玩家攻击敌人时触发重锤技能的概率
 * @param player
 */
export function getHammerSkillChance(player: Player) {
  let basicChance = 0.225;
  if (warrior.isOwned(player)) {
    basicChance = basicChance + warrior.getLevel(player) * 0.02;
  }
  if (berserker.isOwned(player)) {
    basicChance = basicChance + berserker.getLevel(player) * 0.05;
  }
  return basicChance;
}

/**
 * 获取玩家攻击敌人时触发匕首额外伤害的概率
 * @param player
 * @returns
 */
export function getDaggerSkillChance(player: Player) {
  let basicChance = 0.4;
  if (warrior.isOwned(player)) {
    basicChance = basicChance + warrior.getLevel(player) * 0.02;
  }
  if (assassin.isOwned(player)) {
    basicChance = 0.6;
    basicChance = basicChance + assassin.getLevel(player) * 0.02;
  }
  return basicChance;
}

/**
 * 获取匕首额外伤害值
 * @param params
 * @return
 */
export function getDaggerAttack(params: WeaponTypeParams) {
  const basic = params.basic_damage ?? 0;
  return Random.integer(basic + 6, basic + 2);
}

/**
 * 获取法杖的伤害
 * @param player 使用法杖的玩家
 * @param params 法杖的物品组件参数
 * @return 
 */
export function getStaffAttack(player: Player, params: StaffParams) {
  if (params.staff_preset !== "legacy_staff") return params.damage;
  if (wizard.isOwned(player))
    return params.damage + wizard.getLevel(player) * 0.3;
  if (conjureWizard.isOwned(player))
    return params.damage + conjureWizard.getLevel(player) * 0.5;
  if (arcaneWizard.isOwned(player))
    return params.damage + arcaneWizard.getLevel(player) * 0.5;
  return params.damage
}
