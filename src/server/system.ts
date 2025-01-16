import { EntityInventoryComponent, ItemStack, system, world } from "@minecraft/server";
import { initializeMod } from "@grindstone/core";
import {
  badgeEffectMonitor,
  bleedEffectMonitor,
  dehydrationEffectMonitor,
  droughtEffectMonitor,
} from "../core/effects";
import { replaceItemStack } from "@grindstone/utils";

export class Hy2System {
  /**
   * 初始化模组
   */
  static initialize(): void {
    initializeMod("hy",  "HiddenYears");
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
        console.log(
          "Dynamic Property of copper food eating counts has reset to zero."
        );
      });
    }, 18000);
    system.runInterval(() => {
      bleedEffectMonitor();
      droughtEffectMonitor();
      dehydrationEffectMonitor();
      badgeEffectMonitor();
    }, 20);
  }
  /**
   * 进行向下兼容
   */
  static backwardsCompatibility() {
    world.afterEvents.playerSpawn.subscribe((event) => {
      const player = event.player;
      const inventory= player.getComponent("inventory") as EntityInventoryComponent;
      replaceItemStack(
        new ItemStack("hy:raw_flash_copper_ingot"),
        new ItemStack("hy:flash_copper_ingot"),
        inventory.container
      );
      replaceItemStack(
        new ItemStack("hy:raw_flash_metal_ingot"),
        new ItemStack("hy:flash_metal_ingot"),
        inventory.container
      );
      replaceItemStack(
        new ItemStack("hy:experience_calamity_bag"),
        new ItemStack("hy:crimson_eyes"),
        inventory.container
      );
      replaceItemStack(
        new ItemStack("hy:diamond_bone"),
        new ItemStack("hy:bone_boardsword"),
        inventory.container
      );
      replaceItemStack(
        new ItemStack("hy:gold_bone"),
        new ItemStack("hy:bone_boardsword"),
        inventory.container
      );
      replaceItemStack(
        new ItemStack("hy:iron_bone"),
        new ItemStack("hy:bone_boardsword"),
        inventory.container
      );
    });
  }
}
