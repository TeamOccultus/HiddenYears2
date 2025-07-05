import { Crusher } from "../block/Crusher";
import { CrusherRecipeManager } from "../recipe/CrusherRecipeManager";

/**
 * 注册配方
 */
export function registryCustomRecipe() {
  new Crusher();
  CrusherRecipeManager.openToPlugin();
}
