import { bleedEffect } from "./effects/bleed";
import { droughtEffect } from "./effects/drought";
import { dehydrationEffect } from "./effects/dehydration";
import { tetanusEffect } from "./effects/tetanus";

/**
 * 注册模拟状态效果
 */
export function registryEffect() {
  bleedEffect.startTrigger();
  droughtEffect.startTrigger();
  dehydrationEffect.startTrigger();
  tetanusEffect.startTrigger();
}
