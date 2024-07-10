import { HyQuestCondition, HyQuestAward } from "./data.js";
import { ClassicQuestAPI as quest } from "project-lantern";

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

export const BEGGING = new quest.Quest(
  "stick",
  { translate: "hy.quest.stick.title" },
  { translate: "hy.quest.stick.body" },
  {
    condition: HyQuestCondition.stick,
    award: HyQuestAward.goldCoin5,
    iconPath: "textures/items/stick",
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

export const FUEL_METAL = new quest.Quest(
  "fuel_metal",
  { translate: "hy.quest.fuel_metal.title" },
  { translate: "hy.quest.fuel_metal.body" },
  {
    condition: HyQuestCondition.fuelMetal,
    award: HyQuestAward.enchantedGoldenApple3,
    iconPath: "textures/items/fuel",
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

export const SUFFERING_SWORD = new quest.Quest(
  "suffering_sword",
  { translate: "hy.quest.suffering_sword.title" },
  { translate: "hy.quest.suffering_sword.body" },
  {
    condition: HyQuestCondition.sufferingSword,
    award: HyQuestAward.diamond5,
    iconPath: "textures/items/suffering_sword",
  }
);

export const STEEL_INGOT = new quest.Quest(
  "steel_ingot",
  { translate: "hy.quest.steel_ingot.title" },
  { translate: "hy.quest.steel_ingot.body" },
  {
    condition: HyQuestCondition.steelIngot,
    award: HyQuestAward.goldCoin20,
    iconPath: "textures/items/steel_ingot",
  }
);

export const TOTEM = new quest.Quest(
  "totem",
  { translate: "hy.quest.end0.title" },
  {
    rawtext: [
      { translate: "hy.quest.end0.body0" },
      { text: "\n\n" },
      { translate: "hy.quest.end0.body1" },
      { text: "\n\n" },
      { translate: "hy.quest.end0.body2" },
      { text: "\n\n" },
      { translate: "hy.quest.end0.body3" },
    ],
  },
  {
    condition: HyQuestCondition.totem,
    award: HyQuestAward.storyBook,
    iconPath: "textures/items/totem",
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

export const NETHERITE_SCRAP = new quest.Quest(
  "netherite_scrap",
  { translate: "hy.quest.netherite_scrap.title" },
  { translate: "hy.quest.netherite_scrap.body" },
  {
    condition: HyQuestCondition.netheriteScrap,
    award: HyQuestAward.netheriteTemplate,
    iconPath: "textures/items/netherite_scrap",
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
