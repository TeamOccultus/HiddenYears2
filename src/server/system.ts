import { system, world } from "@minecraft/server";

/**
 * 监听系统事件
 */
export function systemMonitor(): void {
  /** 清除铜食物食用次数 */
  system.runInterval(() => {
    const PLAYERS = world.getPlayers();
    PLAYERS.forEach((players) => {
      players.setDynamicProperty("hy:copper_foods", 0);
      console.warn("[hy2]铜食物使用次数已归零");
    });
  }, 18000);
}
