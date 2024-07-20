import { ItemStack } from "@minecraft/server";
import { transform } from "esbuild";
import { ClassicQuest as quest } from "project-lantern";

/**
 * 任务-树上新生枝桠
 */
export const BEGINNING: quest.Quest = new quest.Quest(
  "stick",
  { translate: "hy.quest.beginning.title" },
  { translate: "hy.quest.beginning.body" },
  {
    iconPath: "textures/items/stick",
    condition: {
      item: {
        name: {
          translate: "item.stick.name",
        },
        item: new ItemStack("stick"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.bread.name",
        },
        item: new ItemStack("bread", 3),
      },
    },
  }
);

/**
 * 任务-石头工艺
 */
export const OLDB: quest.Quest = new quest.Quest(
  "bakabee",
  { translate: "hy.quest.oldb.title" },
  { translate: "hy.quest.oldb.body" },
  {
    iconPath: "textures/ui/quest/cobblestone",
    condition: {
      item: {
        name: {
          translate: "tile.cobblestone.name",
        },
        item: new ItemStack("cobblestone"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.torch.name",
        },
        item: new ItemStack("torch", 5),
      },
    },
    tips: {
      translate: "hy.quest.oldb.tips",
    },
  }
);

/**
 * 任务-甲骨器
 */
export const BONE_PIECE: quest.Quest = new quest.Quest(
  "bone_piece",
  { translate: "hy.quest.bone_piece.title" },
  { translate: "hy.quest.bone-PIECE.body" },
  {
    iconPath: "textures/items/bone_piece",
    condition: {
      item: {
        name: {
          translate: "hy.item.bone_piece",
        },
        item: new ItemStack("hy:bone_piece"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.apple.name",
        },
        item: new ItemStack("apple", 5),
      },
    },
    tips: {
      translate: "hy.quest.bone_piece.tips",
    },
  }
);

/**
 * 任务-红橙的光泽
 */
export const COPPER_INGOT: quest.Quest = new quest.Quest(
  "copper_ingot",
  { translate: "hy.quest.copper_ingot.title" },
  { translate: "hy.quest.copper_ingot.body" },
  {
    iconPath: "textures/items/copper_ingot",
    condition: {
      item: {
        name: {
          translate: "item.copper_ingot.name",
        },
        item: new ItemStack("copper_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        item: new ItemStack("hy:copper_coin", 5),
      },
    },
    tips: {
      translate: "hy.quest.copper_ingot.tips",
    },
  }
);

/**
 * 任务-万能磨合剂
 */
export const TIN_INGOT: quest.Quest = new quest.Quest(
  "tin_ingot",
  { translate: "hy.quest.tin_ingot.title" },
  { translate: "hy.quest.tin_ingot.body" },
  {
    iconPath: "textures/items/tin_ingot",
    condition: {
      item: {
        name: {
          translate: "hy.item.tin_ingot",
        },
        item: new ItemStack("hy:tin_ingot"),
      },
    },
    award: {
      playerXpPoint: 10,
    },
  }
);

/**
 * 任务-水晶般晶莹
 */
export const AMETHYST_INGOT: quest.Quest = new quest.Quest(
  "amethyst_ingot",
  { translate: "hy.quest.amethyst_ingot.title" },
  { translate: "hy.quest.amethyst_ingot.body" },
  {
    iconPath: "textures/items/amethyst_ingot",
    condition: {
      item: {
        name: {
          translate: "hy.item.amethyst_ingot",
        },
        item: new ItemStack("hy:amethyst_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        item: new ItemStack("hy:copper_coin", 10),
      },
    },
    tips: {
      translate: "hy.quest.amethyst_ingot.tips",
    },
  }
);

/**
 * 任务-金属的代替品
 */
export const OVER_METAL_INGOT: quest.Quest = new quest.Quest(
  "over_metal_ingot",
  { translate: "hy.quest.over_metal_ingot.title" },
  { translate: "hy.quest.over_metal_ingot.body" },
  {
    iconPath: "textures/items/over_metal_ingot",
    condition: {
      item: {
        name: {
          translate: "hy.item.over_metal_ingot",
        },
        item: new ItemStack("hy:over_metal_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        item: new ItemStack("hy:copper_coin", 15),
      },
    },
    tips: {
      translate: "hy.quest.over_metal_ingot.tips",
    },
  }
);

/**
 * 任务-陨星之结晶
 */
export const IRON_INGOT: quest.Quest = new quest.Quest(
  "iron_ingot",
  { translate: "hy.quest.iron_ingot.title" },
  { translate: "hy.quest.iron_ingot.body" },
  {
    iconPath: "textures/items/iron_ingot",
    condition: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        item: new ItemStack("iron_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.block.lab_table",
        },
        item: new ItemStack("hy:lab_table"),
      },
    },
    tips: {
      translate: "hy.quest.iron_ingot.tips",
    },
  }
);

/**
 * 任务-撬棍撬撬撬
 */
export const IRON_CROWBAR: quest.Quest = new quest.Quest(
  "iron_crowbar",
  { translate: "hy.quest.iron_crowbar.title" },
  { translate: "hy.quest.iron_crowbar.body" },
  {
    iconPath: "textures/items/iron_crowbar",
    condition: {
      item: {
        name: {
          translate: "hy.item.iron_crowbar",
        },
        item: new ItemStack("hy:iron_crowbar"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 3),
      },
    },
    tips: {
      translate: "hy.quest.iron_crowbar.tips",
    },
  }
);

/**
 * 任务-最高效的工具
 */
export const IRON_HAMMER: quest.Quest = new quest.Quest(
  "iron_hammer",
  { translate: "hy.quest.iron_hammer.title" },
  { translate: "hy.quest.iron_hammer.body" },
  {
    iconPath: "textures/items/iron_hammer",
    condition: {
      item: {
        name: {
          translate: "hy.item.iron_hammer",
        },
        item: new ItemStack("hy:iron_hammer"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 4),
      },
    },
    tips: {
      translate: "hy.quest.iron_hammer.tips",
    },
  }
);

/**
 * 任务-刻锥求剑
 */
export const IRON_AWL: quest.Quest = new quest.Quest(
  "iron_awl",
  { translate: "hy.quest.iron_awl.title" },
  { translate: "hy.quest.iron_awl.body" },
  {
    iconPath: "textures/items/iron_awl",
    condition: {
      item: {
        name: {
          translate: "hy.item.iron_awl",
        },
        item: new ItemStack("hy:iron_awl"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 5),
      },
    },
  }
);

/**
 * 任务-出其不意
 */
export const IRON_KNIFE: quest.Quest = new quest.Quest(
  "iron_knife",
  { translate: "hy.quest.iron_knife.title" },
  { translate: "hy.quest.iron_knife.body" },
  {
    iconPath: "textures/items/iron_knife",
    condition: {
      item: {
        name: {
          translate: "hy.item.iron_knife",
        },
        item: new ItemStack("hy:iron_knife"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 7),
      },
    },
    tips: {
      translate: "hy.quest.iron_knife.tips",
    },
  }
);

/**
 * 任务-致命一击
 */
export const IRON_DAGGER: quest.Quest = new quest.Quest(
  "iron_dagger",
  { translate: "hy.quest.iron_dagger.title" },
  { translate: "hy.quest.iron_dagger.body" },
  {
    iconPath: "textures/items/iron_dagger",
    condition: {
      item: {
        name: {
          translate: "hy.item.iron_dagger",
        },
        item: new ItemStack("hy:iron_dagger"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_apple",
        },
        item: new ItemStack("hy:copper_apple", 3),
      },
    },
    tips: {
      translate: "hy.quest.iron_dagger.tips",
    },
  }
);

/**
 * 任务-赶尽杀绝
 */
export const IRON_SWORD: quest.Quest = new quest.Quest(
  "iron_sword",
  { translate: "hy.quest.iron_sword.title" },
  { translate: "hy.quest.iron_sword.body" },
  {
    iconPath: "textures/items/iron_sword",
    condition: {
      item: {
        name: {
          translate: "item.iron_sword.name",
        },
        item: new ItemStack("iron_sword"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.golden_apple.name",
        },
        item: new ItemStack("golden_apple", 3),
      },
    },
    tips: {
      translate: "hy.quest.iron_sword.tips",
    },
  }
);

/**
 * 任务-闪闪发光的金子
 */
export const FLASH_METAL_INGOT: quest.Quest = new quest.Quest(
  "flash_metal_ingot",
  { translate: "hy.quest.flash_metal_ingot.title" },
  { translate: "hy.quest.flash_metal_ingot.body" },
  {
    iconPath: "textures/items/flash_metal_ingot",
    condition: {
      item: {
        name: {
          translate: "hy.item.flash_metal_ingot",
        },
        item: new ItemStack("hy:flash_metal_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.golden_apple.name",
        },
        item: new ItemStack("golden_apple", 5),
      },
    },
    tips: {
      translate: "hy.quest.flash_metal_ingot.tips",
    },
  }
);

/**
 * 任务-闪耀的铜锭
 */
export const FLASH_COPPER_INGOT: quest.Quest = new quest.Quest(
  "flash_copper_ingot",
  { translate: "hy.quest.flash_copper_ingot.title" },
  { translate: "hy.quest.flash_copper_ingot.body" },
  {
    iconPath: "textures/items/flash_copper_ingot",
    condition: {
      item: {
        name: {
          translate: "hy.item.flash_copper_ingot",
        },
        item: new ItemStack("hy:flash_metal_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.golden_apple.name",
        },
        item: new ItemStack("golden_apple", 5),
      },
    },
  }
);

/**
 * 任务-这是？钻石！
 */
export const DIAMOND: quest.Quest = new quest.Quest(
  "diamond",
  { translate: "hy.quest.diamond.title" },
  { translate: "hy.quest.diamond.body" },
  {
    iconPath: "textures/items/diamond",
    condition: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        item: new ItemStack("diamond"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.diamond_coin",
        },
        item: new ItemStack("hy:diamond_coin", 5),
      },
    },
  }
);

export const STEEL_INGOT = new quest.Quest(
  "steel_ingot",
  { translate: "hy.quest.steel_ingot.title" },
  { translate: "hy.quest.steel_ingot.body" },
  {
    iconPath: "textures/items/steel_ingot",
    condition: {
      item: {
        name: {
          translate: "hy.item.steel_ingot",
        },
        item: new ItemStack("hy:steel_ingot"),
      },
    },
    award: {
      item: {
        item: new ItemStack("enchanted_golden_apple"),
        name: {
          translate: "item.appleEnchanted.name",
        },
      },
    },
    tips: {
      translate: "hy.quest.steel_ingot.tips",
    },
  }
);

export const NETHERITE_SCRAP = new quest.Quest(
  "netherite_scrap",
  { translate: "hy.quest.netherite_scrap.title" },
  { translate: "hy.quest.netherite_scrap.body" },
  {
    condition: {
      item: {
        name: {
          translate: "item.netherite_scrap.name",
        },
        item: new ItemStack("netherite_scrap"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.netherite_upgrade_smithing_template.name",
        },
        item: new ItemStack("netherite_upgrade_smithing_template"),
      },
    },
    iconPath: "textures/items/netherite_scrap",
  }
);

export const FUEL_METAL = new quest.Quest(
  "fuel_metal",
  { translate: "hy.quest.fuel_metal.title" },
  { translate: "hy.quest.fuel_metal.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:fuel_metal"),
        name: {
          translate: "hy.item.fuel_metal",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.diamond_coin",
        },
        item: new ItemStack("hy:diamond_coin", 8),
      },
    },
    iconPath: "textures/items/fuel",
  }
);

export const SUFFERING_SWORD = new quest.Quest(
  "suffering_sword",
  { translate: "hy.quest.suffering_sword.title" },
  { translate: "hy.quest.suffering_sword.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:suffering_sword"),
        name: {
          translate: "hy.item.suffering_sword",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.diamond_coin",
        },
        item: new ItemStack("hy:diamond_coin", 12),
      },
    },
    iconPath: "textures/items/suffering_sword",
    tips: {
      translate: "hy.quest.suffering_sword.tips",
    },
  }
);

export const SMARAGDUS = new quest.Quest(
  "smaragdus",
  { translate: "hy.quest.smaragdus.title" },
  { translate: "hy.quest.smaragdus.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:smaragdus"),
        name: {
          translate: "hy.item.smaragdus",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.diamond_coin",
        },
        item: new ItemStack("hy:diamond_coin", 25),
      },
    },
    iconPath: "textures/items/smaragdus",
  }
);

export const TOTEM = new quest.Quest(
  "totem",
  { translate: "hy.quest.totem.title" },
  {
    rawtext: [
      { translate: "hy.quest.totem.body0" },
      { text: "\n\n" },
      { translate: "hy.quest.totem.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.totem.body2" },
      { text: "\n\n" },
      { translate: "hy.quest.totem.body3" },
      { text: "\n\n" },
      { translate: "hy.quest.totem.body4" },
    ],
  },
  {
    condition: {
      playerXpLevel: 12,
      item: {
        name: {
          translate: "item.totem.name",
        },
        item: new ItemStack("totem_of_undying"),
      },
    },
    award: {
      playerXpPoint: 30,
      item: {
        name: {
          translate: "hy.item.story_book",
        },
        item: new ItemStack("hy:story_book"),
      },
    },
    iconPath: "textures/items/totem",
  }
);

/**
export const COPPER_APPLE = new quest.Quest(
  "copper_apple",
  { translate: "hy.quest.copper_apple.title" },
  { translate: "hy.quest.copper_apple.body" },
  {
    condition: HyQuestCondition.copperApple,
    award: HyQuestAward.goldenApple3,
    iconPath: "textures/items/copper_apple",
  }
);
export const METAL_STAR = new quest.Quest(
  "metal_star",
  { translate: "hy.quest.metal_star.title" },
  { translate: "hy.quest.metal_star.body" },
  {
    condition: HyQuestCondition.metalStar,
    award: HyQuestAward.diamondCoin9,
    iconPath: "textures/items/metal_star",
  }
);
export const COPPER_ESSENCE = new quest.Quest(
  "copper_essence",
  { translate: "hy.quest.copper_essence.title" },
  { translate: "hy.quest.copper_essence.body" },
  {
    condition: HyQuestCondition.copperEssence,
    award: HyQuestAward.dirt12,
    iconPath: "textures/items/copper_essence",
  }
);

export const OVER_METAL_INGOT = new quest.Quest(
  "over_metal_ingot",
  { translate: "hy.quest.over_metal_ingot.title" },
  { translate: "hy.quest.over_metal_ingot.body" },
  {
    condition: HyQuestCondition.overMetalIngot,
    award: HyQuestAward.goldCoin6,
    iconPath:
      "textures/items/over_metal_ingot",
  }
);

export const IRON_INGOT = new quest.Quest(
  "iron_ingot",
  { translate: "hy.quest.iron_ingot.title" },
  { translate: "hy.quest.iron_ingot.body" },
  {
    condition: HyQuestCondition.ironIngot,
    award: HyQuestAward.goldCoin10,
    iconPath: "textures/items/iron_ingot",
  }
);

export const COPPER_INGOT = new quest.Quest(
  "copper_ingot",
  { translate: "hy.quest.copper_ingot.title" },
  { translate: "hy.quest.copper_ingot.body" },
  {
    condition: HyQuestCondition.copperIngot,
    award: HyQuestAward.questBook1,
    iconPath: "textures/items/copper_ingot",
  }
);

export const IRON_HAMMER = new quest.Quest(
  "iron_hammer",
  { translate: "hy.quest.iron_hammer.title" },
  { translate: "hy.quest.iron_hammer.body" },
  {
    condition: HyQuestCondition.ironHammer,
    award: HyQuestAward.goldCoin12,
    iconPath: "textures/items/iron_hammer",
  }
);

export const IRON_CROWBAR = new quest.Quest(
  "iron_crowbar",
  { translate: "hy.quest.iron_crowbar.title" },
  { translate: "hy.quest.iron_crowbar.body" },
  {
    condition: HyQuestCondition.ironCrowbar,
    award: HyQuestAward.goldCoin16,
    iconPath: "textures/items/iron_crowbar",
  }
);

export const IRON_KNIFE = new quest.Quest(
  "iron_knife",
  { translate: "hy.quest.iron_knife.title" },
  { translate: "hy.quest.iron_knife.body" },
  {
    condition: HyQuestCondition.ironKnife,
    award: HyQuestAward.goldCoin18,
    iconPath: "textures/items/iron_knife",
  }
);

export const IRON_DAGGER = new quest.Quest(
  "iron_dagger",
  { translate: "hy.quest.iron_dagger.title" },
  { translate: "hy.quest.iron_dagger.body" },
  {
    condition: HyQuestCondition.ironDagger,
    award: HyQuestAward.goldCoin20,
    iconPath: "textures/items/iron_dagger",
  }
);

export const IRON_SWORD = new quest.Quest(
  "iron_sword",
  { translate: "hy.quest.iron_sword.title" },
  { translate: "hy.quest.iron_sword.body" },
  {
    condition: HyQuestCondition.ironSword,
    award: HyQuestAward.goldenApple3,
    iconPath: "textures/items/iron_sword",
  }
);



export const NIGHTMARE_FUEL_METAL = new quest.Quest(
  "nightmare_fuel_metal",
  { translate: "hy.quest.nightmare_fuel_metal.title" },
  { translate: "hy.quest.nightmare_fuel_metal.body" },
  {
    condition: HyQuestCondition.nightmareFuelMetal,
    award: HyQuestAward.labTable,
    iconPath: "textures/items/fuel",
  }
);


export const OBSIDIAN = new quest.Quest(
  "obsidian",
  { translate: "hy.quest.obsidian.title" },
  { translate: "hy.quest.obsidian.body" },
  {
    condition: HyQuestCondition.obsidian,
    award: HyQuestAward.diamondCoin3,
    iconPath: "textures/ui/quest/obsidian",
  }
);

export const GOLD_INGOT = new quest.Quest(
  "gold_ingot",
  { translate: "hy.quest.gold_ingot.title" },
  { translate: "hy.quest.gold_ingot.body" },
  {
    condition: HyQuestCondition.goldIngot,
    award: HyQuestAward.goldCoin12,
    iconPath: "textures/items/gold_ingot",
  }
);

export const GHAST_TEAR = new quest.Quest(
  "ghast_tear",
  { translate: "hy.quest.ghast_tear.title" },
  { translate: "hy.quest.ghast_tear.body" },
  {
    condition: HyQuestCondition.ghastTear,
    award: HyQuestAward.goldenApple5,
    iconPath: "textures/items/ghast_tear",
  }
);

export const LODESTONE = new quest.Quest(
  "lodestone",
  { translate: "hy.quest.lodestone.title" },
  { translate: "hy.quest.lodestone.body" },
  {
    condition: HyQuestCondition.lodestone,
    award: HyQuestAward.goldCoin30,
    iconPath: "textures/ui/quest/lodestone",
  }
);

export const RESPAWN_ANCHOR = new quest.Quest(
  "respawn_anchor",
  { translate: "hy.quest.respawn_anchor.title" },
  { translate: "hy.quest.respawn_anchor.body" },
  {
    condition: HyQuestCondition.respawnAnchor,
    award: HyQuestAward.copperBadge,
    iconPath: "textures/ui/quest/respawn_anchor",
  }
);

export const BLAZE_ROD = new quest.Quest(
  "blaze_rod",
  { translate: "hy.quest.blaze_rod.title" },
  { translate: "hy.quest.blaze_rod.body" },
  {
    condition: HyQuestCondition.blazeRod,
    award: HyQuestAward.goldenBadge,
    iconPath: "textures/items/blaze_rod",
  }
);

export const NETHER_STAR = new quest.Quest(
  "nether_star",
  { translate: "hy.quest.end1.title" },
  {
    rawtext: [
      { translate: "hy.quest.end1.body0" },
      { text: "\n\n" },
      { translate: "hy.quest.end1.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.end1.body2" },
    ],
  },
  {
    condition: HyQuestCondition.netherStar,
    award: HyQuestAward.diamondBlock6,
    iconPath: "textures/items/nether_star",
  }
);

export const ENDER_PEARL = new quest.Quest(
  "ender_pearl",
  { translate: "hy.quest.ender_pearl.title" },
  { translate: "hy.quest.ender_pearl.body" },
  {
    condition: HyQuestCondition.enderPearl,
    award: HyQuestAward.enderEye4,
    iconPath: "textures/items/ender_pearl",
  }
);

export const DRAGON_BREATH = new quest.Quest(
  "dragon_breath",
  { translate: "hy.quest.dragon_breath.title" },
  { translate: "hy.quest.dragon_breath.body" },
  {
    condition: HyQuestCondition.dragonBreath,
    award: HyQuestAward.diamondBadge,
    iconPath: "textures/items/dragons_breath",
  }
);

export const DRAGON_EGG = new quest.Quest(
  "dragon_egg",
  { translate: "hy.quest.end2.title" },
  {
    rawtext: [
      { translate: "hy.quest.end2.body0" },
      { text: "\n\n" },
      { translate: "hy.quest.end2.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.end2.body2" },
    ],
  },
  {
    condition: HyQuestCondition.dragonEgg,
    award: HyQuestAward.netheriteBlock6,
    iconPath: "textures/ui/quest/dragon_head",
  }
);

export const RUBY = new quest.Quest(
  "ruby",
  { translate: "hy.quest.ruby.title" },
  { translate: "hy.quest.ruby.body" },
  {
    condition: HyQuestCondition.ruby,
    award: HyQuestAward.diamond2,
    iconPath: "textures/items/ruby",
  }
);

export const RUBY_CHESTPLATE = new quest.Quest(
  "ruby_chestplate",
  { translate: "hy.quest.ruby_chestplate.title" },
  { translate: "hy.quest.ruby_chestplate.body" },
  {
    condition: HyQuestCondition.rubyChestplate,
    award: HyQuestAward.diamond4,
    iconPath: "textures/items/ruby_chestplate",
  }
);

export const RUBY_BAG = new quest.Quest(
  "ruby_bag",
  { translate: "hy.quest.ruby_bag.title" },
  { translate: "hy.quest.ruby_bag.body" },
  {
    condition: HyQuestCondition.rubyBag,
    award: HyQuestAward.diamond6,
    iconPath: "textures/items/calamity_bag",
  }
);

export const RUBY_RUNES = new quest.Quest(
  "ruby_runes",
  { translate: "hy.quest.end3.title" },
  {
    rawtext: [
      { translate: "hy.quest.end3.body0" },
      { text: "\n\n" },
      { translate: "hy.quest.end3.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.end3.body2" },
    ],
  },
  {
    condition: HyQuestCondition.rubyRunes,
    award: HyQuestAward.netheriteIngot3,
    iconPath: "textures/items/ruby_runes",
  }
);

export const STORY_BOOK = new quest.Quest(
  "story_book",
  { translate: "hy.quest.readings1.title" },
  { translate: "hy.quest.readings1.body" },
  {
    condition: HyQuestCondition.storyBook,
    award: HyQuestAward.diamond1,
    iconPath: "textures/items/story_book",
  }
);

export const LETTER_0 = new quest.Quest(
  "letter_0",
  { translate: "hy.quest.readings2.title" },
  { translate: "hy.quest.readings2.body" },
  {
    condition: HyQuestCondition.letter0,
    award: HyQuestAward.diamond2,
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_11 = new quest.Quest(
  "letter_11",
  { translate: "hy.quest.readings3.title" },
  { translate: "hy.quest.readings3.body" },
  {
    condition: HyQuestCondition.letter11,
    award: HyQuestAward.diamond2,
    iconPath: "textures/items/lost_letter",
  }
);
*/
