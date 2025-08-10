import { SawRecipe } from "./SawRecipeType";
import { Random } from "@occultus/api";

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

export const sawIngredientData: string[] = sawRecipesData.map((recipe) => recipe.ingredient);