import * as mc from "@minecraft/server";

/**
 * 隐藏之年 物品锈蚀 的对应表
 */
export const HyCorrosionMap = {
  copper_axe: new mc.ItemStack("hy:exposed_copper_axe"),
  exposed_copper_axe: new mc.ItemStack("hy:weathered_copper_axe"),
  weathered_copper_axe: new mc.ItemStack("hy:oxidized_copper_axe"),
  copper_hammer: new mc.ItemStack("hy:exposed_copper_hammer"),
  exposed_copper_hammer: new mc.ItemStack("hy:weathered_copper_hammer"),
  weathered_copper_hammer: new mc.ItemStack("hy:oxidized_copper_hammer"),
  copper_hoe: new mc.ItemStack("hy:exposed_copper_hoe"),
  exposed_copper_hoe: new mc.ItemStack("hy:weathered_copper_hoe"),
  weathered_copper_hoe: new mc.ItemStack("hy:oxidized_copper_hoe"),
  copper_knife: new mc.ItemStack("hy:exposed_copper_knife"),
  exposed_copper_knife: new mc.ItemStack("hy:weathered_copper_knife"),
  weathered_copper_knife: new mc.ItemStack("hy:oxidized_copper_knife"),
  copper_pickaxe: new mc.ItemStack("hy:exposed_copper_pickaxe"),
  exposed_copper_pickaxe: new mc.ItemStack("hy:weathered_copper_pickaxe"),
  weathered_copper_pickaxe: new mc.ItemStack("hy:oxidized_copper_pickaxe"),
  copper_shovel: new mc.ItemStack("hy:exposed_copper_shovel"),
  exposed_copper_shovel: new mc.ItemStack("hy:weathered_copper_shovel"),
  weathered_copper_shovel: new mc.ItemStack("hy:oxidized_copper_shovel"),
  copper_sword: new mc.ItemStack("hy:exposed_copper_sword"),
  exposed_copper_sword: new mc.ItemStack("hy:weathered_copper_sword"),
  weathered_copper_sword: new mc.ItemStack("hy:oxidized_copper_sword"),
};

export const HyQuestAward = {
  netheriteIngot3: {
    item: {
      name: "下界合金锭",
      item: new mc.ItemStack("netherite_ingot", 3),
    },
  },
  diamond1: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 1),
    },
  },
  diamond2: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 2),
    },
  },
  diamond5: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 5),
    },
  },
  diamond4: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 4),
    },
  },
  diamond6: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 6),
    },
  },
  letter1: {
    item: {
      name: "散落的信纸·淬血的刚玉",
      item: new mc.ItemStack("hy:letter_1"),
    },
  },
  diamondBlock6: {
    item: {
      name: "钻石块",
      item: new mc.ItemStack("diamond_block", 6),
    },
  },
  netheriteBlock6: {
    item: {
      name: "下界合金块",
      item: new mc.ItemStack("netherite_block", 6),
    },
  },
  enchantedGoldenApple3: {
    item: {
      name: "金光闪闪而又充满魔法的苹果",
      item: new mc.ItemStack("enchanted_golden_apple", 3),
    },
  },
  goldenApple3: {
    item: {
      name: "金光闪闪的苹果",
      item: new mc.ItemStack("golden_apple", 3),
    },
  },
  goldenApple5: {
    item: {
      name: "金光闪闪的苹果",
      item: new mc.ItemStack("golden_apple", 5),
    },
  },
  diamondCoin3: {
    item: {
      name: "钻石币",
      item: new mc.ItemStack("hy:diamond_coin", 3),
    },
  },
  diamondCoin9: {
    item: {
      name: "钻石币",
      item: new mc.ItemStack("hy:diamond_coin", 9),
    },
  },
  dirt12: {
    item: {
      name: "泥土",
      item: new mc.ItemStack("dirt", 12),
    },
  },
  goldCoin5: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 5),
    },
  },
  goldCoin6: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 6),
    },
  },
  goldCoin10: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 10),
    },
  },
  questBook1: {
    item: {
      name: "奇怪的书",
      item: new mc.ItemStack("hy:quest_book1"),
    },
  },
  goldCoin12: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 12),
    },
  },
  goldCoin16: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 16),
    },
  },
  goldCoin18: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 18),
    },
  },
  goldCoin20: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 20),
    },
  },
  goldCoin25: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 25),
    },
  },
  goldCoin30: {
    item: {
      name: "金币",
      item: new mc.ItemStack("hy:gold_coin", 30),
    },
  },
  labTable: {
    item: {
      name: "炼金台",
      item: new mc.ItemStack("hy:lab_table"),
    },
  },
  storyBook: {
    item: {
      name: "旧书",
      item: new mc.ItemStack("hy:story_book"),
    },
  },
  netheriteTemplate: {
    item: {
      name: "下界合金升级模板",
      item: new mc.ItemStack("netherite_upgrade_smithing_template"),
    },
  },
  copperBadge: {
    item: {
      name: "铜徽章",
      item: new mc.ItemStack("hy:copper_badge"),
    },
  },
  goldenBadge: {
    item: {
      name: "金徽章",
      item: new mc.ItemStack("hy:golden_badge"),
    },
  },
  diamondBadge: {
    item: {
      name: "钻石徽章",
      item: new mc.ItemStack("hy:diamond_badge"),
    },
  },
  enderEye4: {
    item: {
      name: "末影珍珠",
      item: new mc.ItemStack("ender_eye", 4),
    },
  },
};

export const HyQuestCondition = {
  copperApple: {
    item: {
      name: "铜苹果",
      item: new mc.ItemStack("hy:copper_apple"),
    },
  },
  metalStar: {
    item: {
      name: "金属之星",
      item: new mc.ItemStack("hy:metal_star"),
    },
  },
  copperEssence: {
    item: {
      name: "铜之精华",
      item: new mc.ItemStack("hy:copper_essence"),
    },
  },
  stick: {
    item: {
      name: "木棍",
      item: new mc.ItemStack("stick"),
    },
  },
  overMetalIngot: {
    item: {
      name: "岩金锭",
      item: new mc.ItemStack("hy:over_metal_ingot"),
    },
  },
  ironIngot: {
    item: {
      name: "铁锭",
      item: new mc.ItemStack("iron_ingot"),
    },
  },
  copperIngot: {
    item: {
      name: "铜锭",
      item: new mc.ItemStack("copper_ingot"),
    },
  },
  ironHammer: {
    item: {
      name: "铁锤",
      item: new mc.ItemStack("hy:iron_hammer"),
    },
  },
  ironCrowbar: {
    item: {
      name: "铁撬棍",
      item: new mc.ItemStack("hy:iron_crowbar"),
    },
  },
  ironKnife: {
    item: {
      name: "铁小刀",
      item: new mc.ItemStack("hy:iron_knife"),
    },
  },
  ironDagger: {
    item: {
      name: "铁匕首",
      item: new mc.ItemStack("hy:iron_dagger"),
    },
  },
  ironSword: {
    item: {
      name: "铁剑",
      item: new mc.ItemStack("iron_sword"),
    },
  },
  fuelMetal: {
    item: {
      name: "燃金",
      item: new mc.ItemStack("hy:fuel_metal"),
    },
  },
  nightmareFuelMetal: {
    item: {
      name: "魇化燃金",
      item: new mc.ItemStack("hy:nightmare_fuel_metal"),
    },
  },
  steelIngot: {
    item: {
      name: "钢锭",
      item: new mc.ItemStack("hy:steel_ingot"),
    },
  },
  totem: {
    item: {
      name: "不死图腾",
      item: new mc.ItemStack("totem_of_undying"),
    },
  },
  obsidian: {
    item: {
      name: "黑曜石",
      item: new mc.ItemStack("obsidian"),
    },
  },
  goldIngot: {
    item: {
      name: "金锭",
      item: new mc.ItemStack("gold_ingot"),
    },
  },
  ghastTear: {
    item: {
      name: "恶魂之泪",
      item: new mc.ItemStack("ghast_tear"),
    },
  },
  netheriteScrap: {
    item: {
      name: "下界合金碎片",
      item: new mc.ItemStack("netherite_scrap"),
    },
  },
  lodestone: {
    item: {
      name: "磁石",
      item: new mc.ItemStack("lodestone"),
    },
  },
  respawnAnchor: {
    item: {
      name: "重生猫",
      item: new mc.ItemStack("respawn_anchor"),
    },
  },
  blazeRod: {
    item: {
      name: "烈焰棒",
      item: new mc.ItemStack("blaze_rod"),
    },
  },
  netherStar: {
    item: {
      name: "下界之星",
      item: new mc.ItemStack("nether_star"),
    },
  },
  enderPearl: {
    item: {
      name: "末影珍珠",
      item: new mc.ItemStack("ender_pearl"),
    },
  },
  dragonBreath: {
    item: {
      name: "龙息",
      item: new mc.ItemStack("dragon_breath"),
    },
  },
  dragonEgg: {
    item: {
      name: "龙蛋",
      item: new mc.ItemStack("dragon_egg"),
    },
  },
  ruby: {
    item: {
      name: "红宝石",
      item: new mc.ItemStack("hy:ruby"),
    },
  },
  rubyChestplate: {
    item: {
      name: "红宝石胸甲",
      item: new mc.ItemStack("hy:ruby_chestplate"),
    },
  },
  rubyBag: {
    item: {
      name: "红宝石谜袋",
      item: new mc.ItemStack("hy:ruby_bag"),
    },
  },
  rubyRunes: {
    item: {
      name: "红宝石符文",
      item: new mc.ItemStack("hy:ruby_runes"),
    },
  },
  sufferingSword: {
    item: {
      name: "痛苦之剑",
      item: new mc.ItemStack("hy:suffering_sword"),
    },
  },
  storyBook: {
    item: {
      name: "隐藏的故事",
      item: new mc.ItemStack("hy:story_book"),
    },
  },
  letter0: {
    item: {
      name: "散落的信纸·千里之行与脚下之路",
      item: new mc.ItemStack("hy:letter_0"),
    },
  },
  letter11: {
    item: {
      name: "散落的信纸·精灵史摘要",
      item: new mc.ItemStack("hy:letter_11"),
    },
  },
};

/**
 * 隐藏之年 物品奖励 的数据
 */
export const HyRewardTypes = {
  questBook1st: new mc.ItemStack("hy:quest_book"),
  letter1st: new mc.ItemStack("hy:letter_0"),
  diamondBlock: new mc.ItemStack("minecraft:diamond_block", 2),
  goldBlock: new mc.ItemStack("minecraft:gold_block", 3),
  scrap: new mc.ItemStack("minecraft:netherite_scrap"),
  template: new mc.ItemStack("minecraft:netherite_upgrade_smithing_template"),
  apple: new mc.ItemStack("minecraft:enchanted_golden_apple", 5),
  nightmareFuel: new mc.ItemStack("hy:nightmare_fuel_metal", 2),
};
