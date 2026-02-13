export type ArmorTypeParams = ArmorType[];

/**
 * 盔甲类型
 */
export type ArmorType = {
  /**
   * 盔甲对应的盔甲预设
   */
  present: ArmorPresent;
  /**
   * 盔甲预设的等级
   */
  level?: number;
};

export type ArmorPresent = "isis_crown" | "rebirth" | "unyielding";
