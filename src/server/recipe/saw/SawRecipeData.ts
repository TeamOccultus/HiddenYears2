import { SawRecipe } from "./SawRecipeType";
import { default as builtinData } from "../../../../config/recipes/saw.json";

export const sawRecipesData: SawRecipe[] = builtinData;

export const sawIngredientData: string[] = sawRecipesData.map(
  (recipe) => recipe.ingredient
);
