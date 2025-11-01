export type HiddenEffectFoodParams = {
  type: "give" | "remove";
  effect: HiddenEffects;
  duration: number;
  amplifier: number;
};

export type HiddenEffects = "tetanus" | "bleed" | "dehydration" | "drought";
