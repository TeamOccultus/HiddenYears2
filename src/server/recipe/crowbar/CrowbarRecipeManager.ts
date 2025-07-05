import { ItemStack, system } from "@minecraft/server";
import { CrowbarRecipe } from "./CrowbarRecipeType";
import {
  crowbarIngredientData,
  crowbarRecipesData,
} from "./CrowbarRecipeData";

export class CrowbarRecipeManager {
  static ingredients: string[] = crowbarIngredientData;
  static recipes: CrowbarRecipe[] = crowbarRecipesData;
  static getResult(ingredient: string): ItemStack | null {
    for (const recipe of this.recipes) {
      if (recipe.ingredient === ingredient) {
        return new ItemStack(recipe.output, recipe.amount);
      }
    }
    return null;
  }
  static addRecipe(recipe: CrowbarRecipe) {
    this.recipes.push(recipe);
    this.ingredients.push(recipe.ingredient);
  }
  /**
   * 允许第三方插件添加新的碎石机配方
   * @example
   * /scriptevent hiddenyears:addCrowbarRecipe {"ingredient":"minecraft:brick_block","output":"minecraft:brick","amount":12}
   */
  static openToPlugin() {
    system.afterEvents.scriptEventReceive.subscribe((arg) => {
      if (arg.id !== "hiddenyears:addCrowbarRecipe") return;
      const data = JSON.parse(arg.message) as CrowbarRecipe;
      this.addRecipe(data);
      console.log(
        `[隐藏之年] 已添加新的碎石机配方: ${data.ingredient} -> ${data.output} x${data.amount}`
      );
    });
  }
}
