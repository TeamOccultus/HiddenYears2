import { Crusher } from "../block/Crusher";
import { CrusherRecipeManager } from "../recipe/crusher/CrusherRecipeManager";
import { SawRecipeManager } from "../recipe/saw/SawRecipeManager";
import { CrowbarRecipeManager } from "../recipe/crowbar/CrowbarRecipeManager";

/**
 * 注册配方
 */
export function registryCustomRecipe() {
  new Crusher();
  CrusherRecipeManager.openToPlugin();
  SawRecipeManager.openToPlugin();
  CrowbarRecipeManager.openToPlugin();
}
