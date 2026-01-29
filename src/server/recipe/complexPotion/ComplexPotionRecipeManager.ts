import { ItemStack, system } from "@minecraft/server";
import { ComplexPotionRecipeType } from "./ComplexPotionRecipeType";
import { default as builtinData } from "../../../../config/recipes/complex_potion.json";
import { ComplexPotion, ComplexPotionType } from "../../item/ComplexPotion";

export class ComplexPotionRecipeManager {
  static recipes: ComplexPotionRecipeType[] = builtinData;
  static ingredients: string[] = builtinData.map((recipe) => recipe.ingredient);
  static getResult(ingredient: string): ComplexPotionType | undefined {
    for (const recipe of this.recipes) {
      if (recipe.ingredient === ingredient) {
        return {
          effect: recipe.effect,
          duration: recipe.duration,
          amplifier: recipe.amplifier,
          alwaysCanUse: recipe.can_always_use ?? false
        };
      }
      return null;
    }
  }
  static addRecipe(recipe: ComplexPotionRecipeType) {
    this.recipes.push(recipe);
    this.ingredients.push(recipe.ingredient);
  }
  static getRecipe(str: string): ComplexPotionRecipeType | undefined {
    return this.recipes.find((recipe) => recipe.ingredient === str);
  }
  static canBeAdded(
    recipe: ComplexPotionRecipeType,
    ingredient: ItemStack
  ): boolean {
    if (!ComplexPotion.hasPotionType(ingredient, recipe.effect)) return true;
    return recipe.can_always_use ?? false;
  }
  static getResultItem(
    item: ItemStack,
    recipe: ComplexPotionRecipeType
  ): ItemStack {
    ComplexPotion.addPotionType(item, {
      effect: recipe.effect,
      duration: recipe.duration,
      amplifier: recipe.amplifier
    });
    return item;
  }
  /**
   * 允许第三方插件添加新的碎石机配方
   * @example
   * /scriptevent hiddenyears:addPotionRecipe {"ingredient":"minecraft:brick_block","effect":"minecraft:invisibility","duration":600,"amplifier":1,"can_always_use":true  }
   */
  static openToPlugin() {
    system.afterEvents.scriptEventReceive.subscribe((arg) => {
      if (arg.id !== "hiddenyears:addPotionRecipe") return;
      const data = JSON.parse(arg.message) as ComplexPotionRecipeType;
      this.addRecipe(data);
      console.log(
        `[隐藏之年] 已添加新的复合药水配方: ${data.ingredient} -> ${data.effect}(${data.amplifier}) x ${data.duration}`
      );
    });
  }
}
