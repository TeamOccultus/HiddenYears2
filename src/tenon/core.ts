import { EffectType } from "@minecraft/server";

/**
 * 状态效果数据
 */
export interface EffectData {
  /**
   * 状态效果类型
   */
  effectType: EffectType | string;
  /**
   * 状态效果持续时间，以刻为单位 *（20刻=1秒）*
   *
   * 其值必须在范围`[0, 20000000]`内
   */
  duration: number;
  /**
   * 状态效果等级
   */
  amplifier?: number;
  /**
   * 是否展示状态效果粒子
   */
  showParticles?: boolean;
}
