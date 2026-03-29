import { Player, RawMessage } from "@minecraft/server";
import { amnestyPastor } from "./advanced/amnestyPastor";
import { orisonPastor } from "./advanced/orisonPastor";
import { pastor } from "./beginner/pastor";

export function getJobDescription(jobName: string): RawMessage {
  return {
    rawtext: [
      { translate: `job.${jobName}.desc` },
      { text: "\n\n" },
      { translate: `job.${jobName}.skill.0` },
      { text: "\n\n" },
      { translate: `job.${jobName}.skill.1` },
      { text: "\n\n" },
      { translate: `job.${jobName}.skill.2` }
    ]
  };
}

/**
 * 获取玩家的牧师类职业等级
 * @param player 
 * @returns 
 */
export function getPastorLevel(player: Player): number {
  return (
    amnestyPastor.getLevel(player) ||
    orisonPastor.getLevel(player) ||
    pastor.getLevel(player) ||
    0
  );
}
