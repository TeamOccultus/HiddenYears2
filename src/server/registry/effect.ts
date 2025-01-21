import { bleedEffect } from "./effects/bleed";
import { droughtEffect } from "./effects/drought";
import { dehydrationEffect } from "./effects/dehydration";

/**
 * 注册模拟状态效果
 */
export function registryEffect() {
  bleedEffect.startTrigger();
  droughtEffect.startTrigger();
  dehydrationEffect.startTrigger();
}
