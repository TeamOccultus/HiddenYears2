import { ItemStack, system, world } from "@minecraft/server";
import { initializeMod, LoggerManager, replaceItemStack } from "lazuli-mc";
import { bleedEffectMonitor } from "../core/effects";

export class System {
  /**
   * 初始化模组
   */
  static initialize(): void {
    initializeMod("hy", {name: "HiddenYears"}, {
      questNameSpace: "hy-q",
      watchdogDisabled: true,
    });
  }
  static startLogger() {
    return LoggerManager.getLogger("hy:logger");
  }
  /**
   * 监听系统事件
   */
  static eventMonitor(): void {
    /** 清除铜食物食用次数 */
    system.runInterval(() => {
      const PLAYERS = world.getPlayers();
      PLAYERS.forEach((players) => {
        players.setDynamicProperty("hy:copper_foods", 0);
        console.warn(
          "Dynamic Property of copper food eating counts has reset to zero."
        );
      });
    }, 18000);
  }
  /**
   * 注册每秒运行一次的事件
   */
  static secondEventRegister() {
    system.runInterval(() => {
      bleedEffectMonitor();
    }, 20);
  }
  /**
   * 兼容性测试
   */
  static compatibleTest() {
    world.afterEvents.playerSpawn.subscribe((event) => {
      const PLAYER = event.player;
      replaceItemStack(
        new ItemStack("hy:raw_flash_copper_ingot"),
        new ItemStack("hy:flash_copper_ingot"),
        PLAYER.getComponent("inventory").container
      );
      replaceItemStack(
        new ItemStack("hy:raw_flash_metal_ingot"),
        new ItemStack("hy:flash_metal_ingot"),
        PLAYER.getComponent("inventory").container
      );
    });
  }
}
