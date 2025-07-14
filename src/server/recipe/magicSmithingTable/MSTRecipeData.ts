import { Random } from "@starock/math";
import { MagicSmithingTableRecipe } from "./MSTType";

/**
 * 粉碎机内置配方
 */
export let MSTRecipesData: MagicSmithingTableRecipe[] = [

];

export let MSTBaseData: string[] = MSTRecipesData.map((recipe) => recipe.base);

export let MSTAddtionData: string[] = MSTRecipesData.map((recipe) => recipe.addition);
