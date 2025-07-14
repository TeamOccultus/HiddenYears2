import { ItemStack } from "@minecraft/server";

export class AdditionalMaterialSystem {
    
  /**
   * 获取物品的附加材料类型
   * @param item 要获取类型的物品
   * @return
   */  
  static getType(item: ItemStack): AdditionalMaterialType | undefined {
    const type = item.getDynamicProperty(
      "hiddenyears:additional_material_type"
    );
    if (type === "erosion" || type === "sparkling_copper") {
      return type as AdditionalMaterialType;
    }
    return;
  }
  /**
   * 设置物品的附加材料类型
   * @param item 要设置类型的物品
   * @param type 要设置给物品的附加材料类型
   */
  setType(item: ItemStack, type: AdditionalMaterialType) {
    item.setDynamicProperty("hiddenyears:additional_material_type", type);
  }
}

export type AdditionalMaterialType = "erosion" | "sparkling_copper";
