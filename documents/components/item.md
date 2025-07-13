---
title: 物品组件
group: Components
category: Components
---

# 物品组件

## hiddenyears:effective_food

```js
/**
 * 食物组件数据
 */
type FoodCompoentSchema = {
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
```
