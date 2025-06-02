import { ItemStack } from "@minecraft/server";
import { CrusherRecipe } from "./CrusherRecipeType";
import { crusherIngredientData, crusherRecipesData } from "../../data/recipe/crusherRecipe";

export class CrusherRecipeManager {
  static ingredients: string[] = crusherIngredientData;
  static recipes: CrusherRecipe[] = crusherRecipesData;
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


