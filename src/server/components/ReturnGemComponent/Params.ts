export type ReturnGemParams = {
  /**
   * 将返回晶石绑定在某一位置来源
   */
  bind_to: LocationProvider;
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

/**
 * 设置返回晶石的位置参数由何提供：
 *
 * - `script`：脚本物品动态属性
 * - `data_driven`：数据驱动中写死
 * - `home`：玩家出生点
 * - `waystone`：传送石碑
 */
export type LocationProvider = "script" | "data_driven" | "home" | "waystone";
