import { system } from "@minecraft/server";
import { EffectData } from "../core";
import { applyEffectData } from "../utils/entity";

/**
 * 自定义食物组件的运行时
 * @example
 * new FoodRuntime("example:food");
 */
export class FoodRuntime {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const that = this;
      init.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onConsume(callback, param) {
          const p = param.params as FoodCompoentSchema;
          applyEffectData(callback.source, that.parse(p));
        },
      });
    });
  }
  protected parse(data: FoodCompoentSchema): EffectData[] {
    let effects: EffectData[] = [];
    if (typeof data.effect === "string") {
      if (
        Array.isArray(data.duration) ||
        Array.isArray(data.amplifier) ||
        Array.isArray(data.showParticles)
      ) {
        throw new Error("Invalid food component data");
      }
      effects.push({
        effectType: data.effect,
        duration: data.duration,
        amplifier: data.amplifier,
        showParticles: data.showParticles,
      });
      return effects;
    }
    if (Array.isArray(data.effect)) {
      data.effect.forEach((effect, index) => {
        effects.push({
          effectType: effect,
          duration: Array.isArray(data.duration)
            ? data.duration[index]
            : data.duration,
          amplifier: Array.isArray(data.amplifier)
            ? data.amplifier[index]
            : data.amplifier,
          showParticles: Array.isArray(data.showParticles)
            ? data.showParticles[index]
            : data.showParticles,
        });
      });
      return effects;
    }
  }
}

/**
 * 食物组件数据
 */
export type FoodCompoentSchema = {
  /**
   * 状态效果类型
   */
  effect: string | string[];
  /**
   * 状态效果持续时间，以刻为单位 *（20刻=1秒）*
   *
   * 其值必须在范围`[0, 20000000]`内
   */
  duration: number | number[];
  /**
   * 状态效果等级
   */
  amplifier?: number | number[];
  /**
   * 是否展示状态效果粒子
   */
  showParticles?: boolean | boolean[];
};
