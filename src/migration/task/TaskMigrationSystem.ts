import { Player } from "@minecraft/server";
import { legacyQuests } from "./legacyQuests";

/**
 * 用于迁移旧任务系统（Quest）到新任务系统（Task）的类
 */
export class TaskMigrationSystem {
  /**
   * 判断玩家是否拥有旧任务系统（Quest）的任务
   * @param player 用于判断的玩家
   * @returns
   */
  static hasLegacyQuest(player: Player): boolean {
    return player.getTags().some((tag) => {
      return legacyQuests.has(tag);
    });
  }
  /**
   * 迁移旧任务系统（Quest）的任务到新任务系统（Task）
   * @param player 要进行迁移的玩家
   * @returns
   */
  static migrateTasks(player: Player) {
    const result: MigrationResult = {
      success: 0,
      failed: 0,
      all: 0,
    };
    player.getTags().forEach((tag) => {
      if (!tag.startsWith("hy-q:")) return;
      if (!legacyQuests.has(tag)) {
        result.failed++;
        return;
      }
      player.removeTag(tag);
      player.addTag("done:" + legacyQuests.get(tag)!);
      result.success++;
    });
    result.all = result.success + result.failed;
    return result;
  }
}

export type MigrationResult = {
  success: number;
  failed: number;
  all: number;
};
