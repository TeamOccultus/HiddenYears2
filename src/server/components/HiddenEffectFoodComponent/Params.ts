export type HiddenEffectFoodParams = {
  effect?: HiddenEffects;
  duration?: number;
  amplifier?: number;
  remove?: HiddenEffects[];
};

export type HiddenEffects = "tetanus" | "bleed" | "dehydration" | "drought";
