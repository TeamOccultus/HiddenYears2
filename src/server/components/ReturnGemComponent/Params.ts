export type ReturnGemParam = {
  /**
   * 将返回位置固定为某一坐标，并禁用绑定功能
   */  
  location?: [number, number, number];
  /**
   * 将返回位置固定为某一维度，并禁用绑定功能
   */
  dimension?: string;
  sound_event?: string;
};
