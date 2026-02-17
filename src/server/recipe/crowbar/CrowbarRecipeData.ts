import { default as builtinData } from "../../../../config/recipes/crowbar.json";
import { CrowbarRecipe } from "./CrowbarRecipeType";

/**
 * 粉碎机内置配方
 */
export let crowbarRecipesData: CrowbarRecipe[] = builtinData;

export let crowbarIngredientData: string[] = crowbarRecipesData.map(
  (recipe) => recipe.ingredient
);
