import { Player } from "@minecraft/server";
import { warrior } from "../server/job/beginner/warrior";
import { berserker } from "../server/job/advanced/berserker";

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
export function getHammerSkillChance(player: Player){
let basicChance = 0.225;
  if (warrior.isOwned(player)) {
    basicChance = basicChance + warrior.getLevel(player) * 0.02;
  }
  if (berserker.isOwned(player)) {
    basicChance = basicChance + berserker.getLevel(player) * 0.05;
  }
  return basicChance;
}