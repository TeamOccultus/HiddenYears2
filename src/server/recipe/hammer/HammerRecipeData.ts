import { HammerRecipe } from "./HammerRecipeType";
import { Random } from "@starock/math";

/**
 * 锤子内置配方
 * @todo 适配隐年的特定矿物
 */
export let hammerRecipesData: HammerRecipe[] = [
  {
    ingredient: "minecraft:stone",
    output: "hiddenyears:cobblestone",
    amount: Random.integer(4,2),
  },
  {
    ingredient: "minecraft:diamond_ore",
    output: "minecraft:diamond",
    amount: Random.integer(3,1),
  },
  {
    ingredient: "minecraft:deepslate_diamond_ore",
    output: "minecraft:diamond",
    amount: Random.integer(3,1),
  },
  {
    ingredient: "minecraft:coal_ore",
    output: "minecraft:coal",
    amount: Random.integer(6,2),
  },
  {
    ingredient: "minecraft:deepslate_coal_ore",
    output: "minecraft:coal",
    amount: Random.integer(6,2),
  },
  {
    ingredient: "minecraft:copper_ore",
    output: "minecraft:raw_copper",
    amount: Random.integer(4,2),
  },
  {
    ingredient: "minecraft:deepslate_copper_ore",
    output: "minecraft:raw_copper",
    amount: Random.integer(4,2),
  },
  {
    ingredient: "minecraft:emerald_ore",
    output: "minecraft:emerald",
    amount: Random.integer(4,2),
  },
  {
    ingredient: "minecraft:deepslate_emerald_ore",
    output: "minecraft:emerald",
    amount: Random.integer(4,2),
  },
  {
    ingredient: "minecraft:lapis_ore",
    output: "minecraft:lapis_lazuli",
    amount: Random.integer(6,2),
  },
  {
    ingredient: "minecraft:deepslate_lapis_ore",
    output: "minecraft:lapis_lazuli",
    amount: Random.integer(6,2),
  },
];

export let hammerIngredientData: string[] = hammerRecipesData.map((recipe) => recipe.ingredient);
