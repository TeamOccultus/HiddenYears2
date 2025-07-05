import { Crusher } from "../block/Crusher";
import { CrusherRecipeManager } from "../recipe/CrusherRecipeManager";
import { SawRecipeManager } from "../recipe/SawRecipeManager";

/**
 * 注册配方
 */
export function registryCustomRecipe() {
  new Crusher();
  CrusherRecipeManager.openToPlugin();
  SawRecipeManager.openToPlugin();
}
