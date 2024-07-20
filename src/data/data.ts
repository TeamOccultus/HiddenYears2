import { ItemStack } from "@minecraft/server";

/**
 * 隐藏之年 物品锈蚀 的对应表
 */
export const HyCorrosionMap = {
  copper_axe: new ItemStack("hy:exposed_copper_axe"),
  exposed_copper_axe: new ItemStack("hy:weathered_copper_axe"),
  weathered_copper_axe: new ItemStack("hy:oxidized_copper_axe"),
  copper_hammer: new ItemStack("hy:exposed_copper_hammer"),
  exposed_copper_hammer: new ItemStack("hy:weathered_copper_hammer"),
  weathered_copper_hammer: new ItemStack("hy:oxidized_copper_hammer"),
  copper_hoe: new ItemStack("hy:exposed_copper_hoe"),
  exposed_copper_hoe: new ItemStack("hy:weathered_copper_hoe"),
  weathered_copper_hoe: new ItemStack("hy:oxidized_copper_hoe"),
  copper_knife: new ItemStack("hy:exposed_copper_knife"),
  exposed_copper_knife: new ItemStack("hy:weathered_copper_knife"),
  weathered_copper_knife: new ItemStack("hy:oxidized_copper_knife"),
  copper_pickaxe: new ItemStack("hy:exposed_copper_pickaxe"),
  exposed_copper_pickaxe: new ItemStack("hy:weathered_copper_pickaxe"),
  weathered_copper_pickaxe: new ItemStack("hy:oxidized_copper_pickaxe"),
  copper_shovel: new ItemStack("hy:exposed_copper_shovel"),
  exposed_copper_shovel: new ItemStack("hy:weathered_copper_shovel"),
  weathered_copper_shovel: new ItemStack("hy:oxidized_copper_shovel"),
  copper_sword: new ItemStack("hy:exposed_copper_sword"),
  exposed_copper_sword: new ItemStack("hy:weathered_copper_sword"),
  weathered_copper_sword: new ItemStack("hy:oxidized_copper_sword"),
};

/**
 * 隐藏之年 物品奖励 的数据
 */
export const HyRewardTypes = {
  questBook1st: new ItemStack("hy:quest_book"),
  letter1st: new ItemStack("hy:letter_0"),
  diamondBlock: new ItemStack("minecraft:diamond_block", 2),
  goldBlock: new ItemStack("minecraft:gold_block", 3),
  scrap: new ItemStack("minecraft:netherite_scrap"),
  template: new ItemStack("minecraft:netherite_upgrade_smithing_template"),
  apple: new ItemStack("minecraft:enchanted_golden_apple", 5),
  nightmareFuel: new ItemStack("hy:nightmare_fuel_metal", 2),
};