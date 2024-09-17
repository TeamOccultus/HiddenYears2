import { ItemStack } from "@minecraft/server";
import { Quest } from "lazuli-mc";

/**
 * 任务-树上新生枝桠
 */
export const BEGINNING: Quest = new Quest(
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
        itemStack: new ItemStack("stick"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.bread.name",
        },
        itemStack: new ItemStack("bread", 3),
      },
    },
  }
);

/**
 * 任务-这是工作台
 */
export const CRAFTING_TABLE: Quest = new Quest(
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
        itemStack: new ItemStack("crafting_table"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.bread.name",
        },
        itemStack: new ItemStack("bread", 5),
      },
    },
  }
);

/**
 * 任务-石头工艺
 */
export const OLDB: Quest = new Quest(
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
        itemStack: new ItemStack("cobblestone"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.torch.name",
        },
        itemStack: new ItemStack("torch", 5),
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
export const BONE_PIECE: Quest = new Quest(
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
        itemStack: new ItemStack("hy:bone_piece"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        itemStack: new ItemStack("hy:copper_coin", 3),
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
export const COPPER_INGOT: Quest = new Quest(
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
        itemStack: new ItemStack("copper_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        itemStack: new ItemStack("hy:copper_coin", 5),
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
export const TIN_INGOT: Quest = new Quest(
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
        itemStack: new ItemStack("hy:tin_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        itemStack: new ItemStack("hy:copper_coin", 10),
      },
    },
  }
);

/**
 * 任务-水晶般晶莹
 */
export const AMETHYST_INGOT: Quest = new Quest(
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
        itemStack: new ItemStack("hy:amethyst_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        itemStack: new ItemStack("hy:copper_coin", 12),
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
export const OVER_METAL_INGOT: Quest = new Quest(
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
        itemStack: new ItemStack("hy:over_metal_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        itemStack: new ItemStack("hy:copper_coin", 15),
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
export const IRON_INGOT: Quest = new Quest(
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
        itemStack: new ItemStack("iron_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.block.lab_table",
        },
        itemStack: new ItemStack("hy:lab_table"),
      },
    },
    tips: {
      translate: "hy.quest.iron_ingot.tips",
    },
  }
);

/**
 * 任务-腐蚀之锭
 */
export const CORROSION_INGOT: Quest = new Quest(
  "corrosion_ingot",
  { translate: "hy.quest.corrosion_ingot.title" },
  { translate: "hy.quest.corrosion_ingot.body" },
  {
    iconPath: "textures/items/corrosion_ingot",
    condition: {
      item: {
        name: {
          translate: "hy.item.corrosion_ingot",
        },
        itemStack: new ItemStack("hy:corrosion_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_coin",
        },
        itemStack: new ItemStack("hy:copper_coin", 18),
      },
    },
  }
);

/**
 * 任务-撬棍撬撬撬
 */
export const IRON_CROWBAR: Quest = new Quest(
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
        itemStack: new ItemStack("hy:iron_crowbar"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.sweet_berries.name",
        },
        itemStack: new ItemStack("sweet_berries", 16),
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
export const IRON_HAMMER: Quest = new Quest(
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
        itemStack: new ItemStack("hy:iron_hammer"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.cooked_beef.name",
        },
        itemStack: new ItemStack("cooked_beef", 2),
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
export const IRON_AWL: Quest = new Quest(
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
        itemStack: new ItemStack("hy:iron_awl"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.muttonCooked.name",
        },
        itemStack: new ItemStack("cooked_mutton", 4),
      },
    },
  }
);

/**
 * 任务-出其不意
 */
export const IRON_KNIFE: Quest = new Quest(
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
        itemStack: new ItemStack("hy:iron_knife"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.cooked_porkchop.name",
        },
        itemStack: new ItemStack("cooked_porkchop", 6),
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
export const IRON_DAGGER: Quest = new Quest(
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
        itemStack: new ItemStack("hy:iron_dagger"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.copper_apple",
        },
        itemStack: new ItemStack("hy:copper_apple", 6),
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
export const IRON_SWORD: Quest = new Quest(
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
        itemStack: new ItemStack("iron_sword"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.enchanted_copper_apple",
        },
        itemStack: new ItemStack("hy:enchanted_copper_apple", 3),
      },
    },
    tips: {
      translate: "hy.quest.iron_sword.tips",
    },
  }
);

/**
 * 任务-扣下悬刀
 */
export const CROSSBOW: Quest = new Quest(
  "crossbow",
  { translate: "hy.quest.crossbow.title" },
  { translate: "hy.quest.crossbow.body" },
  {
    iconPath: "textures/items/crossbow_standby",
    condition: {
      item: {
        name: {
          translate: "item.crossbow.name",
        },
        itemStack: new ItemStack("crossbow"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.enchanted_copper_apple",
        },
        itemStack: new ItemStack("hy:enchanted_copper_apple", 5),
      },
    },
  }
);

/**
 * 任务-不吃这套，谢谢
 */
export const SHIELD: Quest = new Quest(
  "shield",
  { translate: "hy.quest.shield.title" },
  { translate: "hy.quest.shield.body" },
  {
    iconPath: "textures/ui/quest/shield",
    condition: {
      item: {
        name: {
          translate: "item.shield.name",
        },
        itemStack: new ItemStack("shield"),
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.enchanted_copper_apple",
        },
        itemStack: new ItemStack("hy:enchanted_copper_apple", 7),
      },
    },
  }
);

/**
 * 任务-闪闪发光的金子
 */
export const FLASH_METAL_INGOT: Quest = new Quest(
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
        itemStack: new ItemStack("hy:flash_metal_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.golden_apple.name",
        },
        itemStack: new ItemStack("golden_apple", 3),
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
export const FLASH_COPPER_INGOT: Quest = new Quest(
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
        itemStack: new ItemStack("hy:flash_metal_ingot"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.golden_apple.name",
        },
        itemStack: new ItemStack("golden_apple", 5),
      },
    },
  }
);

/**
 * 任务-这是？钻石！
 */
export const DIAMOND: Quest = new Quest(
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
        itemStack: new ItemStack("diamond"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.appleEnchanted.name",
        },
        itemStack: new ItemStack("enchanted_golden_apple", 5),
      },
    },
  }
);

export const STEEL_INGOT = new Quest(
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
        itemStack: new ItemStack("hy:steel_ingot"),
      },
    },
    award: {
      item: {
        itemStack: new ItemStack("golden_carrot", 5),
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

export const NETHERITE_SCRAP = new Quest(
  "netherite_scrap",
  { translate: "hy.quest.netherite_scrap.title" },
  { translate: "hy.quest.netherite_scrap.body" },
  {
    condition: {
      item: {
        name: {
          translate: "item.netherite_scrap.name",
        },
        itemStack: new ItemStack("netherite_scrap"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.netherite_upgrade_smithing_template.name",
        },
        itemStack: new ItemStack("netherite_upgrade_smithing_template"),
      },
    },
    iconPath: "textures/items/netherite_scrap",
  }
);

export const FUEL_METAL = new Quest(
  "fuel_metal",
  { translate: "hy.quest.fuel_metal.title" },
  { translate: "hy.quest.fuel_metal.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:fuel_metal"),
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
        itemStack: new ItemStack("hy:gold_coin", 5),
      },
    },
    iconPath: "textures/items/fuel",
  }
);

export const SUFFERING_SWORD = new Quest(
  "suffering_sword",
  { translate: "hy.quest.suffering_sword.title" },
  { translate: "hy.quest.suffering_sword.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:suffering_sword"),
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
        itemStack: new ItemStack("hy:gold_coin", 10),
      },
    },
    iconPath: "textures/items/suffering_sword",
    tips: {
      translate: "hy.quest.suffering_sword.tips",
    },
  }
);

export const SMARAGDUS = new Quest(
  "smaragdus",
  { translate: "hy.quest.smaragdus.title" },
  { translate: "hy.quest.smaragdus.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:smaragdus"),
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
        itemStack: new ItemStack("hy:gold_coin", 25),
      },
    },
    iconPath: "textures/items/smaragdus",
  }
);

export const TOTEM = new Quest(
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
        itemStack: new ItemStack("totem_of_undying"),
      },
    },
    award: {
      exp: 30,
      item: {
        name: {
          translate: "hy.item.story_book",
        },
        itemStack: new ItemStack("hy:story_book"),
      },
    },
    iconPath: "textures/items/totem",
  }
);

export const RUBY = new Quest(
  "ruby",
  { translate: "hy.quest.ruby.title" },
  { translate: "hy.quest.ruby.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:ruby"),
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
        itemStack: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/ruby",
  }
);

export const RUBY_CHESTPLATE = new Quest(
  "ruby_chestplate",
  { translate: "hy.quest.ruby_chestplate.title" },
  { translate: "hy.quest.ruby_chestplate.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:ruby_chestplate"),
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
        itemStack: new ItemStack("diamond", 5),
      },
    },
    iconPath: "textures/items/ruby_chestplate",
  }
);

export const RUBY_BAG = new Quest(
  "ruby_bag",
  { translate: "hy.quest.ruby_bag.title" },
  { translate: "hy.quest.ruby_bag.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:ruby_bag"),
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
        itemStack: new ItemStack("diamond", 8),
      },
    },
    iconPath: "textures/items/calamity_bag",
    tips: {
      translate: "hy.quest.ruby_bag.tips",
    },
  }
);

export const RUBY_RUNES = new Quest(
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
        itemStack: new ItemStack("hy:ruby_runes"),
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
        itemStack: new ItemStack("netherite_scrap", 3),
      },
      exp: 35,
    },
    iconPath: "textures/items/ruby_helmet",
  }
);

export const GOLD_INGOT = new Quest(
  "gold_ingot",
  { translate: "hy.quest.gold_ingot.title" },
  { translate: "hy.quest.gold_ingot.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("gold_ingot"),
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
        itemStack: new ItemStack("hy:gold_coin", 5),
      },
    },
    iconPath: "textures/items/gold_ingot",
  }
);

export const OBSIDIAN = new Quest(
  "obsidian",
  { translate: "hy.quest.obsidian.title" },
  { translate: "hy.quest.obsidian.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("obsidian"),
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
        itemStack: new ItemStack("hy:gold_coin", 10),
      },
    },
    iconPath: "textures/ui/quest/obsidian",
  }
);

export const GHAST_TEAR = new Quest(
  "ghast_tear",
  { translate: "hy.quest.ghast_tear.title" },
  { translate: "hy.quest.ghast_tear.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("ghast_tear"),
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
        itemStack: new ItemStack("nether_wart", 5),
      },
    },
    iconPath: "textures/items/ghast_tear",
  }
);

export const LODESTONE = new Quest(
  "lodestone",
  { translate: "hy.quest.lodestone.title" },
  { translate: "hy.quest.lodestone.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("lodestone"),
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
        itemStack: new ItemStack("compass"),
      },
    },
    iconPath: "textures/ui/quest/lodestone",
  }
);

export const RESPAWN_ANCHOR = new Quest(
  "respawn_anchor",
  { translate: "hy.quest.respawn_anchor.title" },
  { translate: "hy.quest.respawn_anchor.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("respawn_anchor"),
        name: {
          translate: "tile.respawn_anchor.name",
        },
      },
    },
    award: {
      item: {
        itemStack: new ItemStack("glowstone_dust"),
        name: {
          translate: "item.glowstone_dust.name",
        },
      },
    },
    iconPath: "textures/ui/quest/respawn_anchor",
  }
);

export const BLAZE_ROD = new Quest(
  "blaze_rod",
  { translate: "hy.quest.blaze_rod.title" },
  { translate: "hy.quest.blaze_rod.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("blaze_rod"),
        name: {
          translate: "item.blaze_rod.name",
        },
      },
    },
    award: {
      item: {
        itemStack: new ItemStack("hy:golden_badge"),
        name: {
          translate: "hy.item.golden_badge",
        },
      },
    },
    iconPath: "textures/items/blaze_rod",
  }
);

export const NETHER_STAR = new Quest(
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
        itemStack: new ItemStack("nether_star"),
        name: {
          translate: "item.nether_star.name",
        },
      },
      playerXpLevel: 25,
    },
    award: {
      item: {
        itemStack: new ItemStack("netherite_ingot", 5),
        name: {
          translate: "item.netherite_ingot.name",
        },
      },
    },
    iconPath: "textures/items/nether_star",
  }
);

export const ENDER_PEARL = new Quest(
  "ender_pearl",
  { translate: "hy.quest.ender_pearl.title" },
  { translate: "hy.quest.ender_pearl.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("ender_pearl"),
        name: {
          translate: "item.ender_pearl.name",
        },
      },
    },
    award: {
      item: {
        itemStack: new ItemStack("hy:stack_of_diamond_coin", 3),
        name: {
          translate: "hy.item.stack_of_diamond_coin",
        },
      },
    },
    iconPath: "textures/items/ender_pearl",
  }
);

export const DRAGON_BREATH = new Quest(
  "dragon_breath",
  { translate: "hy.quest.dragon_breath.title" },
  { translate: "hy.quest.dragon_breath.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("dragon_breath"),
        name: { translate: "item.dragon_breath.name" },
      },
    },
    award: {
      item: {
        itemStack: new ItemStack("hy:diamond_badge"),
        name: {
          translate: "hy.item.diamond_badge",
        },
      },
    },
    iconPath: "textures/items/dragons_breath",
  }
);

export const DRAGON_EGG = new Quest(
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
        itemStack: new ItemStack("dragon_egg"),
        name: {
          translate: "tile.dragon_egg.name",
        },
      },
      playerXpLevel: 25,
    },
    award: {
      item: {
        itemStack: new ItemStack("netherite_ingot", 10),
        name: {
          translate: "item.netherite_ingot.name",
        },
      },
      level: 5,
    },
    iconPath: "textures/ui/quest/dragon_head",
  }
);

export const STORY_BOOK = new Quest(
  "story_book",
  { translate: "hy.quest.story_book.title" },
  { translate: "hy.quest.story_book.body" },
  {
    condition: {
      item: {
        name: {
          translate: "hy.item.story_book",
        },
        itemStack: new ItemStack("hy:story_book"),
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        itemStack: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/story_book",
    tips: {
      translate: "hy.quest.story_book.tips"
    }
  }
);

export const LETTER_0 = new Quest(
  "letter_0",
  { translate: "hy.quest.readings2.title" },
  { translate: "hy.quest.readings2.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_0"),
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
        itemStack: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_1 = new Quest(
  "letter_1",
  { translate: "hy.quest.letter_1.title" },
  { translate: "hy.quest.letter_1.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_1"),
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
        itemStack: new ItemStack("diamond", 8),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_2 = new Quest(
  "letter_2",
  { translate: "hy.quest.letter_2.title" },
  { translate: "hy.quest.letter_2.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_2"),
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
        itemStack: new ItemStack("diamond", 3),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_3 = new Quest(
  "letter_3",
  { translate: "hy.quest.letter_3.title" },
  { translate: "hy.quest.letter_3.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_3"),
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
        itemStack: new ItemStack("diamond", 3),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_4 = new Quest(
  "letter_4",
  { translate: "hy.quest.letter_4.title" },
  { translate: "hy.quest.letter_4.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_4"),
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
        itemStack: new ItemStack("diamond", 5),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_5 = new Quest(
  "letter_5",
  { translate: "hy.quest.letter_5.title" },
  { translate: "hy.quest.letter_5.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_5"),
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
        itemStack: new ItemStack("diamond", 5),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_6 = new Quest(
  "letter_6",
  { translate: "hy.quest.letter_6.title" },
  { translate: "hy.quest.letter_6.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_6"),
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
        itemStack: new ItemStack("diamond", 5),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_11 = new Quest(
  "letter_11",
  { translate: "hy.quest.readings3.title" },
  { translate: "hy.quest.readings3.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_11"),
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
        itemStack: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_12 = new Quest(
  "letter_12",
  { translate: "hy.quest.letter_12.title" },
  { translate: "hy.quest.letter_12.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_12"),
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
        itemStack: new ItemStack("diamond", 4),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const LETTER_13 = new Quest(
  "letter_13",
  { translate: "hy.quest.letter_13.title" },
  { translate: "hy.quest.letter_13.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:letter_13"),
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
        itemStack: new ItemStack("diamond", 7),
      },
    },
    iconPath: "textures/items/lost_letter",
  }
);

export const METAL_STAR = new Quest(
  "metal_star",
  { translate: "hy.quest.metal_star.title" },
  { translate: "hy.quest.metal_star.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:metal_star"),
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
        itemStack: new ItemStack("hy:diamond_coin", 5),
      },
    },
    iconPath: "textures/items/metal_star",
  }
);

export const COPPER_ESSENCE = new Quest(
  "copper_essence",
  { translate: "hy.quest.copper_essence.title" },
  { translate: "hy.quest.copper_essence.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:copper_essence"),
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
        itemStack: new ItemStack("hy:diamond_coin", 6),
      },
    },
    iconPath: "textures/items/copper_essence",
  }
);

/**
 * 任务-开垦荒地
 */
export const WHEAT = new Quest(
  "wheat",
  { translate: "hy.quest.wheat.title" },
  { translate: "hy.quest.wheat.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("wheat"),
        name: {
          translate: "item.wheat.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.amethyst_ingot",
        },
        itemStack: new ItemStack("hy:amethyst_ingot", 2),
      },
    },
    iconPath: "textures/items/wheat",
  }
);

/**
 * 任务-炎炎夏日
 */
export const MELON_SLICE = new Quest(
  "melon_slice",
  { translate: "hy.quest.melon_slice.title" },
  { translate: "hy.quest.melon_slice.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("melon_slice"),
        name: {
          translate: "item.melon.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.amethyst_ingot",
        },
        itemStack: new ItemStack("hy:amethyst_ingot", 2),
      },
    },
    iconPath: "textures/items/melon",
  }
);

/**
 * 任务-重金属超标
 */
export const COPPER_APPLE = new Quest(
  "copper_apple",
  { translate: "hy.quest.copper_apple.title" },
  { translate: "hy.quest.copper_apple.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:copper_apple"),
        name: {
          translate: "hy.item.copper_apple",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.amethyst_ingot",
        },
        itemStack: new ItemStack("hy:amethyst_ingot", 3),
      },
    },
    iconPath: "textures/items/copper_apple",
  }
);

/**
 * 任务-不太好吃
 */
export const ROTTEN_FLESH = new Quest(
  "rotten_flesh",
  { translate: "hy.quest.rotten_flesh.title" },
  { translate: "hy.quest.rotten_flesh.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("rotten_flesh"),
        name: {
          translate: "item.rotten_flesh.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot"),
      },
    },
    iconPath: "textures/items/rotten_flesh",
  }
);

/**
 * 任务-与蜂共舞
 */
export const HONEY_BOTTLE = new Quest(
  "honey_bottle",
  { translate: "hy.quest.honey_bottle.title" },
  { translate: "hy.quest.honey_bottle.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("honey_bottle"),
        name: {
          translate: "item.honey_bottle.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/honey_bottle",
  }
);

/**
 * 任务-巧克力！
 */
export const CHOCOLATE = new Quest(
  "chocolate",
  { translate: "hy.quest.chocolate.title" },
  { translate: "hy.quest.chocolate.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:chocolate"),
        name: {
          translate: "hy.item.chocolate",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/chocolate",
  }
);

/**
 * 任务-轻飘飘的
 */
export const MARSHALLOW = new Quest(
  "marshallow",
  { translate: "hy.quest.marshallow.title" },
  { translate: "hy.quest.marshallow.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hy:marshallow"),
        name: {
          translate: "hy.item.marshallow",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/marshallow",
  }
);

/**
 * 任务-良药甜口
 */
export const MILK_BUCKET = new Quest(
  "milk_bucket",
  { translate: "hy.quest.milk_bucket.title" },
  { translate: "hy.quest.milk_bucket.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("milk_bucket"),
        name: {
          translate: "item.milk.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 3),
      },
    },
    iconPath: "textures/items/bucket_milk",
  }
);

/**
 * 任务-祝你生日快乐
 */
export const CAKE = new Quest(
  "cake",
  { translate: "hy.quest.cake.title" },
  { translate: "hy.quest.cake.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("cake"),
        name: {
          translate: "item.cake.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 4),
      },
    },
    iconPath: "textures/items/cake",
  }
);

/**
 * 任务-祝你生日快乐
 */
export const HAY_BLOCK = new Quest(
  "hay_block",
  { translate: "hy.quest.hay_block.title" },
  { translate: "hy.quest.hay_block.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hay_block", 45),
        name: {
          translate: "tile.hay_block.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        itemStack: new ItemStack("diamond", 8),
      },
    },
    iconPath: "textures/ui/quest/hay_bale",
  }
);

/**
 * 任务-知识就是力量
 */
export const CHISELED_BOOKSHELF = new Quest(
  "chiseled_bookshelf",
  { translate: "hy.quest.chiseled_bookshelf.title" },
  { translate: "hy.quest.chiseled_bookshelf.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("chiseled_bookshelf"),
        name: {
          translate: "tile.chiseled_bookshelf.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        itemStack: new ItemStack("diamond", 2),
      },
    },
    iconPath: "textures/ui/quest/chiseled_bookshelf",
  }
);

/**
 * 任务-刨根问底
 */
export const BRUSH = new Quest(
  "brush",
  { translate: "hy.quest.brush.title" },
  { translate: "hy.quest.brush.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("brush"),
        name: {
          translate: "item.brush.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hy.item.diamond_coin",
        },
        itemStack: new ItemStack("hy:diamond_coin", 4),
      },
    },
    iconPath: "textures/items/brush",
  }
);

/**
 * 任务-天空即为极限
 */
export const ELYTRA = new Quest(
  "elytra",
  { translate: "hy.quest.elytra.title" },
  { translate: "hy.quest.elytra.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("elytra"),
        name: {
          translate: "item.elytra.name",
        },
      },
    },
    award: {
      exp: 120
    },
    iconPath: "textures/items/elytra",
  }
);