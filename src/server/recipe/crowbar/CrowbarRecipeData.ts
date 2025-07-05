import { CrowbarRecipe } from "./CrowbarRecipeType";
import { Random } from "@starock/math";

/**
 * 粉碎机内置配方
 */
export let crowbarRecipesData: CrowbarRecipe[] = [
  {
    ingredient: "minecraft:diamond_block",
    output: "hiddenyears:diamond_nugget",
    amount: Random.integer(5, 3),
  },
  {
    ingredient: "minecraft:copper_block",
    output: "hiddenyears:copper_nugget",
    amount: Random.integer(5, 3),
  },
  {
    ingredient: "minecraft:emerald_block",
    output: "hiddenyears:emerald_nugget",
    amount: Random.integer(5, 3),
  },
  {
    ingredient: "minecraft:lapis_block",
    output: "hiddenyears:lapis_nugget",
    amount: Random.integer(5, 3),
  },
  {
    ingredient: "minecraft:netherite_block",
    output: "hiddenyears:netherite_nugget",
    amount: Random.integer(5, 3),
  },
  {
    ingredient: "minecraft:gold_block",
    output: "minecraft:gold_nugget",
    amount: Random.integer(5, 3),
  },
  {
    ingredient: "minecraft:iron_block",
    output: "minecraft:iron_nugget",
    amount: Random.integer(5, 3),
  },
];

export let crowbarIngredientData: string[] = [
  "minecraft:diamond_block",
  "minecraft:copper_block",
  "minecraft:emerald_block",
  "minecraft:lapis_block",
  "minecraft:netherite_block",
  "minecraft:gold_block",
  "minecraft:iron_block",
];
