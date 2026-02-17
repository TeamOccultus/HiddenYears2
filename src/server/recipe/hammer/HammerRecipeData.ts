import { HammerRecipe } from "./HammerRecipeType";
import { default as builtinData } from "../../../../config/recipes/hammer.json";
/**
 * 锤子内置配方
 * @todo 适配隐年的特定矿物
 */
export let hammerRecipesData: HammerRecipe[] = builtinData;

export let hammerIngredientData: string[] = hammerRecipesData.map(
  (recipe) => recipe.ingredient
);
