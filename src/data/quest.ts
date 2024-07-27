import { ItemStack } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";
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
 * 任务-这是工作台
 */
export const CRAFTING_TABLE: quest.Quest = new quest.Quest(
  "crafting_table",
  { translate: "hy.quest.crafting_table.title" },
  { translate: "hy.quest.crafting_table.body" },
  {
    iconPath: "textures/ui/quest/crafting_table",
    condition: {
      item: {
        name: {
          translate: "tile.crafting_table.name",
        },
        item: new ItemStack("crafting_table"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.bread.name",
        },
        item: new ItemStack("bread", 5),
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
          translate: "hy.item.copper_coin",
        },
        item: new ItemStack("hy:copper_coin", 3),
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
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        item: new ItemStack("hy:copper_coin", 10),
      },
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
        item: new ItemStack("hy:copper_coin", 12),
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
 * 任务-陨星的结晶
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
          translate: "item.sweet_berries.name",
        },
        item: new ItemStack("sweet_berries", 16),
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
          translate: "item.cooked_beef.name",
        },
        item: new ItemStack("cooked_beef", 2),
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
          translate: "item.muttonCooked.name",
        },
        item: new ItemStack("cooked_mutton", 4),
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
          translate: "item.cooked_porkchop.name",
        },
        item: new ItemStack("cooked_porkchop", 6),
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
        item: new ItemStack("hy:copper_apple", 6),
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
          translate: "hy.item.enchanted_copper_apple",
        },
        item: new ItemStack("hy:enchanted_copper_apple", 3),
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
        item: new ItemStack("golden_apple", 3),
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
          translate: "item.appleEnchanted.name",
        },
        item: new ItemStack("enchanted_golden_apple", 5),
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
        item: new ItemStack("golden_carrot", 5),
        name: {
          translate: "item.golden_carrot.name",
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
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 5),
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
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 10),
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
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 25),
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

export const RUBY = new quest.Quest(
  "ruby",
  { translate: "hy.quest.ruby.title" },
  { translate: "hy.quest.ruby.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:ruby"),
        name: {
          translate: "hy.item.ruby",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        item: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/ruby",
  }
);

export const RUBY_CHESTPLATE = new quest.Quest(
  "ruby_chestplate",
  { translate: "hy.quest.ruby_chestplate.title" },
  { translate: "hy.quest.ruby_chestplate.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:ruby_chestplate"),
        name: {
          translate: "hy.item.ruby_chestplate",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        item: new ItemStack("diamond", 5),
      },
    },
    iconPath: "textures/items/ruby_chestplate",
  }
);

export const RUBY_BAG = new quest.Quest(
  "ruby_bag",
  { translate: "hy.quest.ruby_bag.title" },
  { translate: "hy.quest.ruby_bag.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:ruby_bag"),
        name: {
          translate: "hy.item.ruby_bag",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        item: new ItemStack("diamond", 8),
      },
    },
    iconPath: "textures/items/calamity_bag",
    tips: {
      translate: "hy.quest.ruby_bag.tips",
    },
  }
);

export const RUBY_RUNES = new quest.Quest(
  "ruby_runes",
  { translate: "hy.quest.ruby_runes.title" },
  {
    rawtext: [
      { translate: "hy.quest.ruby_runes.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.ruby_runes.body2" },
      { text: "\n\n" },
      { translate: "hy.quest.ruby_runes.body3" },
      { text: "\n\n" },
      { translate: "hy.quest.ruby_runes.body4" },
    ],
  },
  {
    condition: {
      item: {
        item: new ItemStack("hy:ruby_runes"),
        name: {
          translate: "hy.item.ruby_runes",
        },
      },
      playerXpLevel: 20,
    },
    award: {
      item: {
        name: {
          translate: "item.netherite_scrap.name",
        },
        item: new ItemStack("netherite_scrap", 3),
      },
      playerXpPoint: 35,
    },
    iconPath: "textures/items/ruby_helmet",
  }
);

export const GOLD_INGOT = new quest.Quest(
  "gold_ingot",
  { translate: "hy.quest.gold_ingot.title" },
  { translate: "hy.quest.gold_ingot.body" },
  {
    condition: {
      item: {
        item: new ItemStack("gold_ingot"),
        name: {
          translate: "item.gold_ingot.name",
        },
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
    iconPath: "textures/items/gold_ingot",
  }
);

export const OBSIDIAN = new quest.Quest(
  "obsidian",
  { translate: "hy.quest.obsidian.title" },
  { translate: "hy.quest.obsidian.body" },
  {
    condition: {
      item: {
        item: new ItemStack("obsidian"),
        name: {
          translate: "tile.obsidian.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.gold_coin",
        },
        item: new ItemStack("hy:gold_coin", 10),
      },
    },
    iconPath: "textures/ui/quest/obsidian",
  }
);

export const GHAST_TEAR = new quest.Quest(
  "ghast_tear",
  { translate: "hy.quest.ghast_tear.title" },
  { translate: "hy.quest.ghast_tear.body" },
  {
    condition: {
      item: {
        item: new ItemStack("ghast_tear"),
        name: {
          translate: "item.ghast_tear.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.nether_wart.name",
        },
        item: new ItemStack("nether_wart", 5),
      },
    },
    iconPath: "textures/items/ghast_tear",
  }
);

export const LODESTONE = new quest.Quest(
  "lodestone",
  { translate: "hy.quest.lodestone.title" },
  { translate: "hy.quest.lodestone.body" },
  {
    condition: {
      item: {
        item: new ItemStack("lodestone"),
        name: {
          translate: "tile.lodestone.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.compass.name",
        },
        item: new ItemStack("compass"),
      },
    },
    iconPath: "textures/ui/quest/lodestone",
  }
);

export const RESPAWN_ANCHOR = new quest.Quest(
  "respawn_anchor",
  { translate: "hy.quest.respawn_anchor.title" },
  { translate: "hy.quest.respawn_anchor.body" },
  {
    condition: {
      item: {
        item: new ItemStack("respawn_anchor"),
        name: {
          translate: "tile.respawn_anchor.name",
        },
      },
    },
    award: {
      item: {
        item: new ItemStack("glowstone_dust"),
        name: {
          translate: "item.glowstone_dust.name",
        },
      },
    },
    iconPath: "textures/ui/quest/respawn_anchor",
  }
);

export const BLAZE_ROD = new quest.Quest(
  "blaze_rod",
  { translate: "hy.quest.blaze_rod.title" },
  { translate: "hy.quest.blaze_rod.body" },
  {
    condition: {
      item: {
        item: new ItemStack("blaze_rod"),
        name: {
          translate: "item.blaze_rod.name",
        },
      },
    },
    award: {
      item: {
        item: new ItemStack("hy:golden_badge"),
        name: {
          translate: "hy.item.golden_badge",
        },
      },
    },
    iconPath: "textures/items/blaze_rod",
  }
);

export const NETHER_STAR = new quest.Quest(
  "nether_star",
  { translate: "hy.quest.nether_star.title" },
  {
    rawtext: [
      { translate: "hy.quest.nether_star.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.nether_star.body2" },
      { text: "\n\n" },
      { translate: "hy.quest.nether_star.body3" },
    ],
  },
  {
    condition: {
      item: {
        item: new ItemStack("nether_star"),
        name: {
          translate: "item.nether_star.name",
        },
      },
      playerXpLevel: 25,
    },
    award: {
      item: {
        item: new ItemStack("netherite_ingot", 5),
        name: {
          translate: "item.netherite_ingot.name",
        },
      },
    },
    iconPath: "textures/items/nether_star",
  }
);

export const ENDER_PEARL = new quest.Quest(
  "ender_pearl",
  { translate: "hy.quest.ender_pearl.title" },
  { translate: "hy.quest.ender_pearl.body" },
  {
    condition: {
      item: {
        item: new ItemStack("ender_pearl"),
        name: {
          translate: "item.ender_pearl.name",
        },
      },
    },
    award: {
      item: {
        item: new ItemStack("hy:stack_of_diamond_coin", 3),
        name: {
          translate: "hy.item.stack_of_diamond_coin",
        },
      },
    },
    iconPath: "textures/items/ender_pearl",
  }
);

export const DRAGON_BREATH = new quest.Quest(
  "dragon_breath",
  { translate: "hy.quest.dragon_breath.title" },
  { translate: "hy.quest.dragon_breath.body" },
  {
    condition: {
      item: {
        item: new ItemStack("dragon_breath"),
        name: { translate: "item.dragon_breath.name" },
      },
    },
    award: {
      item: {
        item: new ItemStack("hy:diamond_badge"),
        name: {
          translate: "hy.item.diamond_badge",
        },
      },
    },
    iconPath: "textures/items/dragons_breath",
  }
);

export const DRAGON_EGG = new quest.Quest(
  "dragon_egg",
  { translate: "hy.quest.dragon_egg.title" },
  {
    rawtext: [
      { translate: "hy.quest.dragon_egg.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.dragon_egg.body2" },
      { text: "\n\n" },
      { translate: "hy.quest.dragon_egg.body3" },
      { text: "\n\n" },
      { translate: "hy.quest.dragon_egg.body4" },
    ],
  },
  {
    condition: {
      item: {
        item: new ItemStack("dragon_egg"),
        name: {
          translate: "tile.dragon_egg.name",
        },
      },
      playerXpLevel: 25,
    },
    award: {
      item: {
        item: new ItemStack("netherite_ingot", 10),
        name: {
          translate: "item.netherite_ingot.name",
        },
      },
      playerXpLevel: 5,
    },
    iconPath: "textures/ui/quest/dragon_head",
  }
);

export const STORY_BOOK = new quest.Quest(
  "story_book",
  { translate: "hy.quest.readings1.title" },
  { translate: "hy.quest.readings1.body" },
  {
    condition: {
      item: {
        name: {
          translate: "hy.item.story_book",
        },
        item: new ItemStack("hy:story_book"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        item: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/story_book",
  }
);

export const LETTER_0 = new quest.Quest(
  "letter_0",
  { translate: "hy.quest.readings2.title" },
  { translate: "hy.quest.readings2.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:letter_0"),
        name: {
          translate: "hy.item.lost_letter",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        item: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_11 = new quest.Quest(
  "letter_11",
  { translate: "hy.quest.readings3.title" },
  { translate: "hy.quest.readings3.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:letter_11"),
        name: {
          translate: "hy.item.lost_letter",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        item: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const COPPER_APPLE = new quest.Quest(
  "copper_apple",
  { translate: "hy.quest.copper_apple.title" },
  { translate: "hy.quest.copper_apple.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:copper_apple"),
        name: {
          translate: "hy.item.copper_apple",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.bread.name",
        },
        item: new ItemStack("bread", 5),
      },
    },
    iconPath: "textures/items/copper_apple",
  }
);
export const METAL_STAR = new quest.Quest(
  "metal_star",
  { translate: "hy.quest.metal_star.title" },
  { translate: "hy.quest.metal_star.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:metal_star"),
        name: {
          translate: "hy.item.metal_star",
        },
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
    iconPath: "textures/items/metal_star",
  }
);
export const COPPER_ESSENCE = new quest.Quest(
  "copper_essence",
  { translate: "hy.quest.copper_essence.title" },
  { translate: "hy.quest.copper_essence.body" },
  {
    condition: {
      item: {
        item: new ItemStack("hy:copper_essence"),
        name: {
          translate: "hy.item.copper_essence",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.diamond_coin",
        },
        item: new ItemStack("hy:diamond_coin", 6),
      },
    },
    iconPath: "textures/items/copper_essence",
  }
);
