/**
 * @module server/registry/recipe
 * @category Registry Bus
 */
import { Crusher } from "../block/Crusher";
import { CrusherRecipeManager } from "../recipe/crusher/CrusherRecipeManager";
import { SawRecipeManager } from "../recipe/saw/SawRecipeManager";
import { CrowbarRecipeManager } from "../recipe/crowbar/CrowbarRecipeManager";
import { MagicSmithingTable } from "../block/MagicSmithingTable";
import { ComplexPotionRecipeManager } from "../recipe/complexPotion/ComplexPotionRecipeManager";
import { MagicBrewingStand } from "../block/MagicBrewingStand";

/**
 * 注册配方
 */
export function registryCustomRecipe() {
  new Crusher();
  new MagicSmithingTable();
  new MagicBrewingStand();
  CrusherRecipeManager.openToPlugin();
  SawRecipeManager.openToPlugin();
  CrowbarRecipeManager.openToPlugin();
  ComplexPotionRecipeManager.openToPlugin();
}
