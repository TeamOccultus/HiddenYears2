/**
 * @module server/registry/recipe
 * @category Registry Bus
 */
import { Crusher } from "../block/Crusher";
import { CrusherRecipeManager } from "../recipe/crusher/CrusherRecipeManager";
import { SawRecipeManager } from "../recipe/saw/SawRecipeManager";
import { CrowbarRecipeManager } from "../recipe/crowbar/CrowbarRecipeManager";
import { MagicSmithingTable } from "../block/MagicSmithingTable";

/**
 * 注册配方
 */
export function registryCustomRecipe() {
  new Crusher();
  new MagicSmithingTable();
  CrusherRecipeManager.openToPlugin();
  SawRecipeManager.openToPlugin();
  CrowbarRecipeManager.openToPlugin();
}
