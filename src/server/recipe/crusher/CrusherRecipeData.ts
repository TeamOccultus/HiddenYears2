import { CrusherRecipe } from "./CrusherRecipeType";

/**
 * 粉碎机内置配方
 */
export let crusherRecipesData: CrusherRecipe[] = [
  {
    ingredient: "minecraft:diamond",
    output: "hiddenyears:diamond_nugget",
    amount: 15,
  },
  {
    ingredient: "minecraft:coal",
    output: "hiddenyears:coal_nugget",
    amount: 15,
  },
  {
    ingredient: "minecraft:copper_ingot",
    output: "hiddenyears:copper_nugget",
    amount: 15,
  },
  {
    ingredient: "minecraft:emerald",
    output: "hiddenyears:emerald_nugget",
    amount: 15,
  },
  {
    ingredient: "minecraft:lapis_lazuli",
    output: "hiddenyears:lapis_nugget",
    amount: 15,
  },
  {
    ingredient: "minecraft:netherite_ingot",
    output: "hiddenyears:netherite_nugget",
    amount: 15,
  },
  {
    ingredient: "hiddenyears:refined_rock_ingot",
    output: "hiddenyears:refined_rock_nugget",
    amount: 15,
  },
  {
    ingredient: "hiddenyears:silver_ingot",
    output: "hiddenyears:silver_nugget",
    amount: 15,
  },
  {
    ingredient: "minecraft:quartz",
    output: "hiddenyears:quartz_nugget",
    amount: 15,
  },
  {
    ingredient: "minecraft:stone",
    output: "hiddenyears:stone_nugget",
    amount: 15,
  },
  {
    ingredient: "hiddenyears:coal_nugget",
    output: "hiddenyears:coal_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:copper_nugget",
    output: "hiddenyears:copper_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:diamond_nugget",
    output: "hiddenyears:diamond_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:emerald_nugget",
    output: "hiddenyears:emerald_dust",
    amount: 5,
  },
  {
    ingredient: "minecraft:gold_nugget",
    output: "hiddenyears:gold_dust",
    amount: 5,
  },
  {
    ingredient: "minecraft:iron_nugget",
    output: "hiddenyears:iron_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:lapis_nugget",
    output: "hiddenyears:lapis_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:netherite_nugget",
    output: "hiddenyears:netherite_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:refined_rock_nugget",
    output: "hiddenyears:refined_rock_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:silver_nugget",
    output: "hiddenyears:silver_dust",
    amount: 5,
  },
  {
    ingredient: "hiddenyears:quartz_nugget",
    output: "hiddenyears:quartz_dust",
    amount: 5,
  },
];

export let crusherIngredientData: string[] = crusherRecipesData.map((recipe) => recipe.ingredient);