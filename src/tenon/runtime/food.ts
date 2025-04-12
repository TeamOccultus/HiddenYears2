import { Entity, system } from "@minecraft/server";
import { EffectData } from "../core";
import { applyEffectData } from "../utils/entity";
import { effectGroupMap, EffectGroups } from "../common/effect";

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
          if (that.parse(p)) applyEffectData(callback.source, that.parse(p));
          that.clearEffects(callback.source, p);
        },
      });
    });
  }
  /**
   * 解析组件参数
   * @param data
   * @returns
   */
  parse(data: FoodCompoentSchema): EffectData[] | undefined {
    if (!data.effect) return;
    let effects: EffectData[] = [];
    function pushEffectData(
      type: string,
      duration: number | number[],
      amplifier: number | number[],
      particle: boolean | boolean[],
      index = 0
    ) {
      effects.push({
        effectType: type,
        duration: Array.isArray(duration) ? duration[index] : duration,
        amplifier: Array.isArray(amplifier) ? amplifier[index] : amplifier,
        showParticles: Array.isArray(particle) ? particle[index] : particle,
      });
    }
    if (typeof data.effect === "string") {
      if (effectGroupMap[data.effect as EffectGroups]) {
        const groupEffects = effectGroupMap[data.effect as EffectGroups];
        groupEffects.forEach((effect) => {
          pushEffectData(
            effect,
            data.duration,
            data.amplifier,
            data.showParticles
          );
        });
        return effects;
      }
      pushEffectData(
        data.effect,
        data.duration,
        data.amplifier,
        data.showParticles
      );
      return effects;
    }
    if (Array.isArray(data.effect)) {
      data.effect.forEach((effect, index) => {
        pushEffectData(
          effect,
          data.duration,
          data.amplifier,
          data.showParticles,
          index
        );
      });
      return effects;
    }
  }
  clearEffects(entity: Entity, data: FoodCompoentSchema): void {
    const clear = data.clear;
    if (!clear) return;
    if (effectGroupMap[clear as EffectGroups]) {
      const groupEffects = effectGroupMap[clear as EffectGroups];
      groupEffects.forEach((effect) => {
        entity.removeEffect(effect);
      });
      return;
    }
    if (Array.isArray(clear)) {
      clear.forEach((effect) => {
        entity.removeEffect(effect);
      });
      return;
    }
    entity.removeEffect(clear);
  }
}

/**
 * 食物组件数据
 */
export type FoodCompoentSchema = {
  /**
   * 状态效果类型
   *
   * 其可以填形如`ALL`、`GOOD`、`BAD`的状态效果组
   *
   * **若类型为字符串，且持续时间、等级、是否展示粒子效果为数组，那么将会取数组中第一个值，其余的值将会被忽略**
   */
  effect: string | string[] | EffectGroups;
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
  /**
   * 要移除的状态效果类型
   *
   * 其可以填形如`ALL`、`GOOD`、`BAD`的状态效果组
   */
  clear?: string | string[] | EffectGroups;
};
