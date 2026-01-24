/**
 * 复合药水配方数据类型
 */
export type ComplexPotionRecipeType = {
  ingredient: string;
  effect: string;
  duration: number;
  amplifier: number;
  can_always_use?: boolean;
};
