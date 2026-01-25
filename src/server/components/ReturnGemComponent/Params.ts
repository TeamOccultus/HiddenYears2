export type ReturnGemParam = {
  /**
   * 强制使用物品时返回玩家出生点
   */
  back_home?: boolean;
  /**
   * 将返回位置固定为某一坐标，并禁用绑定功能
   */  
  location?: [number, number, number];
  /**
   * 将返回位置固定为某一维度，并禁用绑定功能
   */
  dimension?: string;
  /**
   * 返回时播放的音效
   */
  sound_event?: string;
};
