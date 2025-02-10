import {
  EntityInventoryComponent,
  ItemStack,
  system,
  world,
} from "@minecraft/server";
import { badgeEffectMonitor, isisCrownEffectMonitor } from "../core/tickEventMonitor";
import { replaceItemStack } from "@grindstone/utils";
import {
  magicExplodeTrigger,
  tetanusAttackTrigger,
  corrosionAttackTrigger,
  imitationDamageTrigger,
  trophyBundleTrigger,
  droughtEffectAtkTrigger,
  mutasStaffTrigger,
} from "../core/triggers";

export class Hy2System {
  /**
   * 事件监听
   */
  static registryTickEvent(): void {
    system.runInterval(() => {
      badgeEffectMonitor();
      isisCrownEffectMonitor();
    }, 20);
  }
  /**
   * 注册事件监听器
   */
  static registryTrigger(): void {
    magicExplodeTrigger();
    tetanusAttackTrigger();
    corrosionAttackTrigger();
    imitationDamageTrigger();
    trophyBundleTrigger();
    droughtEffectAtkTrigger();
    isisCrownEffectMonitor();
    // mutasStaffTrigger();
  }
  /**
   * 更新物品ID
   */
  static replaceOldItem() {
    world.afterEvents.playerSpawn.subscribe((event) => {
      const player = event.player;
      const inventory = player.getComponent(
        "inventory"
      ) as EntityInventoryComponent;
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
