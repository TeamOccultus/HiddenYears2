import { Entity } from "@minecraft/server";
import { EffectData } from "../core";

/**
 * 向实体应用状态效果数据
 * @param entity 要应用效果的实体
 * @param effectData
 */
export function applyEffectData(
  entity: Entity,
  effectData: EffectData | EffectData[],
) {
  if (Array.isArray(effectData)) {
    effectData.forEach((effect) => {
      applyEffectData(entity, effect);
    });
  } else {
    entity.addEffect(effectData.effectType, effectData.duration, {
      amplifier: effectData.amplifier,
      showParticles: effectData.showParticles,
    });
  }
}
