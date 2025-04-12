/**
 * 状态效果组
 * @see https://zh.minecraft.wiki/w/状态效果
 */
export enum EffectGroups {
  /**
   * 正面效果
   */
  GOOD = 0,
  /**
   * 负面效果
   */
  BAD = 1,
  /**
   * 中性效果
   */
  NEUTRAL = 2,
  /**
   *
   * 所有效果
   */
  ALL = 3,
}

/**
 * 所有中性效果的ID
 */
export const neutralEffectsId: string[] = [
  "bad_omen",
  "trial_omen",
  "raid_omen",
];

/**
 * 所有负面效果的ID
 */
export const negativeEffectsId: string[] = [
  "slowness",
  "mining_fatigue",
  "instant_damage",
  "nausea",
  "blindness",
  "hunger",
  "weakness",
  "poison",
  "wither",
  "fatal_poison",
  "levitation",
  "darkness",
  "wind_charged",
  "weaving",
  "oozing",
  "infested",
];

/**
 * 所有正面效果的ID
 */
export const positiveEffectsId: string[] = [
  "speed",
  "haste",
  "strength",
  "instant_health",
  "regeneration",
  "jump_boost",
  "invisibility",
  "water_breathing",
  "health_boost",
  "night_vision",
  "saturation",
  "absorption",
  "village_hero",
  "conduit_power",
  "slow_falling",
];

/**
 * 状态效果表
 */
export const effectGroupMap = {
  [EffectGroups.ALL]: [...positiveEffectsId, ...negativeEffectsId, ...neutralEffectsId],
  [EffectGroups.BAD]: negativeEffectsId,
  [EffectGroups.GOOD]: positiveEffectsId,
  [EffectGroups.NEUTRAL]: neutralEffectsId,
};
