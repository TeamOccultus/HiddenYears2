import { CrusherRecipe } from "./CrusherRecipeType";
import { default as builtinData } from "../../../../config/recipes/crusher.json";

/**
 * 粉碎机内置配方
 */
export let crusherRecipesData: CrusherRecipe[] = builtinData;

export let crusherIngredientData: string[] = crusherRecipesData.map(
  (recipe) => recipe.ingredient
);
