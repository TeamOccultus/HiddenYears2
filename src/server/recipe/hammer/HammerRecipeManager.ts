import { ItemStack, system } from "@minecraft/server";
import { HammerRecipe } from "./HammerRecipeType";
import { hammerIngredientData, hammerRecipesData } from "./HammerRecipeData";

export class HammerRecipeManager {
  static ingredients: string[] = hammerIngredientData;
  static recipes: HammerRecipe[] = hammerRecipesData;
  static getResult(ingredient: string): ItemStack | null {
    for (const recipe of this.recipes) {
      if (recipe.ingredient === ingredient) {
        return new ItemStack(recipe.output, recipe.amount);
      }
    }
    return null;
  }
  static addRecipe(recipe: HammerRecipe) {
    this.recipes.push(recipe);
    this.ingredients.push(recipe.ingredient);
  }
  /**
   * 允许第三方插件添加新的锤子配方
   * @example
   * /scriptevent hiddenyears:addHammerRecipe {"ingredient":"minecraft:brick_block","output":"minecraft:brick","amount":12}
   */
  static openToPlugin() {
    system.afterEvents.scriptEventReceive.subscribe((arg) => {
      if (arg.id !== "hiddenyears:addHammerRecipe") return;
      const data = JSON.parse(arg.message) as HammerRecipe;
      this.addRecipe(data);
      console.log(
        `[隐藏之年] 已添加新的碎石机配方: ${data.ingredient} -> ${data.output} x${data.amount}`
      );
    });
  }
}
