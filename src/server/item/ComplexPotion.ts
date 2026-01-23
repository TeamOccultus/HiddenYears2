import { ItemStack } from "@minecraft/server";

/**
 * 高级魔法药水系统
 */
export class ComplexPotion {
  /**
   * 返回物品是否为高级魔法药水
   * @param item 要进行判断的物品
   * @return 表示物品是否为高级魔法药水的布尔值
   */
  static isMagicPotion(item: ItemStack): boolean {
    return item.hasTag("hiddenyears:complex_potion");
  }
  /**
   * 获取复合药水拥有的药水类型
   * @param item
   * @returns
   */
  static getPotionType(item: ItemStack): ComplexPotionType[] {
    let potionType: ComplexPotionType[] = [];
    item.getDynamicPropertyIds().forEach((id) => {
      if (id.startsWith("complex_potion:")) {
        const rawData = item.getDynamicProperty(id) as string;
        const [effect, duration, amplifier] = [
          id.split(":")[1],
          rawData.split(":")[0],
          rawData.split(":")[1],
        ];
        potionType.push({
          effect: effect,
          duration: parseInt(duration),
          amplifier: parseInt(amplifier),
        });
      }
    });
    return potionType;
  }
  /**
   * 向复合魔法药水添加药水类型
   * @param item
   * @param type
   */
  static addPotionType(item: ItemStack, type: ComplexPotionType) {
    item.setDynamicProperty(
      `complex_potion:${type.effect}`,
      `${type.duration}:${type.amplifier}`,
    );
  }
}

/**
 * 复合药水类型
 */
export type ComplexPotionType = {
  effect: string;
  amplifier: number;
  duration: number;
};
