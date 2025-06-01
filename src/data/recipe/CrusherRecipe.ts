import { ItemStack } from "@minecraft/server";

export class CrusherRecipeManager {
  static ingredients: string[] = [
    "minecraft:diamond"
  ];
  static recipes: CrusherRecipe[] = [
    {
      ingredient: "minecraft:diamond",
      output: "hiddenyears:diamond_nugget",
      amount: 12,
    },
  ];
  static getResult(ingredient: string): ItemStack | null {
    for (const recipe of this.recipes) {
      if (recipe.ingredient === ingredient) {
        return new ItemStack(recipe.output, recipe.amount);
      }
    }
    return null;
  }
  static addRecipe(recipe: CrusherRecipe) {
    this.recipes.push(recipe);
    this.ingredients.push(recipe.ingredient);
  }
}

export type CrusherRecipe = {
  ingredient: string;
  output: string;
  amount: number;
};
