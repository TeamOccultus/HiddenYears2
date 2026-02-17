import { MagicSmithingTableRecipe } from "./MSTType";
import { default as builtinData } from "../../../../config/recipes/magic_smithing_table.json";

/**
 * 魔法锻造台内置配方
 */
// @ts-ignore
export let MSTRecipesData: MagicSmithingTableRecipe[] = builtinData;

export let MSTBaseData: string[] = MSTRecipesData.map((recipe) => recipe.base);

export let MSTAddtionData: string[] = MSTRecipesData.map(
  (recipe) => recipe.addition
);
