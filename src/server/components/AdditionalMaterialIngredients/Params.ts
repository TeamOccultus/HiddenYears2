/**
 * @module server/components/AdditionalMaterialIngredients/Params
 * @category ComponentParams
 */
import { AdditionalMaterialType } from "../../item/AdditionalMaterial";

/**
 * `AdditionalMaterialIngredients`组件的参数类型
 *
 * @category ComponentParams
 */
export type AdditionalMaterialIngredientsParam = {
  /**
   * 该物品属于的材料类型
   */
  ingredient_type: AdditionalMaterialType;
};
