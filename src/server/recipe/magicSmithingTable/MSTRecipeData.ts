import { Random } from "@starock/math";
import { MagicSmithingTableRecipe } from "./MSTType";

/**
 * 魔法锻造台内置配方
 */
export let MSTRecipesData: MagicSmithingTableRecipe[] = [
  {
    type: "transform",
    base: "minecraft:copper_ingot",
    addition: "hiddenyears:sparkling_stone",
    output: "hiddenyears:sparkling_copper_ingot",
  },
  {
    type: "addtional",
    base: "minecraft:netherite_sword",
    addition: "hiddenyears:sparkling_copper_ingot",
    output: "sparkling_copper",
    lore: {
      translate: "lore.hiddenyears:sparkling_copper"
    }
  }
];

export let MSTBaseData: string[] = MSTRecipesData.map((recipe) => recipe.base);

export let MSTAddtionData: string[] = MSTRecipesData.map((recipe) => recipe.addition);
