/**
 * @module server/components/AdditionalMaterialIngredients/Params
 * @category ComponentParams
 */
import { AdditionalMaterialType } from "../../../core/AdditionalMaterial";

/**
 * `AdditionalMaterialIngredients`组件的参数类型
 *
 * @category ComponentParams
 */
export type AdditionalMaterialIngredientsParams = {
  /**
   * 该物品属于的材料类型
   */
  ingredient_type: AdditionalMaterialType;
};
