import { ItemStack, system } from "@minecraft/server";
import { CrusherRecipe } from "./CrusherRecipeType";
import {
  crusherIngredientData,
  crusherRecipesData,
} from "./CrusherRecipeData";

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
  /**
   * 允许第三方插件添加新的碎石机配方
   * @example
   * /scriptevent hiddenyears:addCrusherRecipe {"ingredient":"minecraft:brick_block","output":"minecraft:brick","amount":12}
   */
  static openToPlugin() {
    system.afterEvents.scriptEventReceive.subscribe((arg) => {
      if (arg.id !== "hiddenyears:addCrusherRecipe") return;
      const data = JSON.parse(arg.message) as CrusherRecipe;
      this.addRecipe(data);
      console.log(
        `[隐藏之年] 已添加新的碎石机配方: ${data.ingredient} -> ${data.output} x${data.amount}`
      );
    });
  }
}
