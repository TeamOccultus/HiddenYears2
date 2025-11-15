import { Player, world } from "@minecraft/server";

/**
 * 用于管理隐藏之年的调试模式的类
 */
export class DebugMode {
    /**
     * 给予玩家或全局调试模式的权限
     * @param player 要给予权限的玩家（可选）
     * @returns 
     */
  static givePermission(player?: Player): void {
   if (player) {
      player.setDynamicProperty("hiddenyears:debug_mode", true);
      return;
    }
    return world.setDynamicProperty("hiddenyears:debug_mode", true);
  }
  /**
   * 检查玩家或全局是否具有调试模式的权限
   * @param player 要检查的玩家（可选）
   * @return 玩家或全局是否具有调试模式的权限
   */
  static hasPermission(player?: Player): boolean {
    if (player)
      return player.getDynamicProperty("hiddenyears:debug_mode") === true;
    return world.getDynamicProperty("hiddenyears:debug_mode") === true;
  }
  static log(message: string, ...data: unknown[]): void {
    console.log("[Debug][Log]", message, data);
    if (this.hasPermission()) {
      world.getPlayers().forEach((player) => {
        player.sendMessage(`[Debug][Log] ${message} ${data.join(" ")}`);
      });
      return;
    }
    world.getPlayers().forEach((player) => {
      if (this.hasPermission(player)) {
        player.sendMessage(`[Debug][Log] ${message} ${data.join(" ")}`);
      }
    });
  }
}
