import { ItemStack } from "@minecraft/server";
import { SawRecipe } from "./SawRecipeType";
import { Random } from "@starock/math";

export const sawIngredientData: string[] = [
  "minecraft:oak_log",
  "minecraft:birch_log",
  "minecraft:spruce_log",
  "minecraft:jungle_log",
  "minecraft:acacia_log",
  "minecraft:dark_oak_log",
  "minecraft:crimson_stem",
  "minecraft:warped_stem",
  "minecraft:pale_oak_log",
];

export const sawRecipesData: SawRecipe[] = [
  {
    ingredient: "minecraft:oak_log",
    output: "minecraft:oak_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:birch_log",
    output: "minecraft:birch_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:spruce_log",
    output: "minecraft:spruce_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:jungle_log",
    output: "minecraft:jungle_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:acacia_log",
    output: "minecraft:acacia_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:dark_oak_log",
    output: "minecraft:dark_oak_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:crimson_stem",
    output: "minecraft:crimson_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:warped_stem",
    output: "minecraft:warped_planks",
    amount: Random.integer(4,1),
  },
  {
    ingredient: "minecraft:pale_oak_log",
    output: "minecraft:pale_oak_planks",
    amount: Random.integer(4,1),
  }
]
