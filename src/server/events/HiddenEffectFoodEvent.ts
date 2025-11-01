import {
  CustomComponentParameters,
  ItemComponentConsumeEvent,
  Player,
} from "@minecraft/server";
import { HiddenEffectFoodParams } from "../components/HiddenEffectFoodComponent/Params";
import effectsMap from "../../data/effects";

export class HiddenEffectFoodEvent {
  static onConsume(
    arg0: ItemComponentConsumeEvent,
    arg1: CustomComponentParameters
  ) {
    const { source } = arg0;
    const p = arg1.params as HiddenEffectFoodParams;
    if (!(source instanceof Player)) return;
    const effect = effectsMap.get(p.effect);
    if (!effect) return;
    if (p.type === "give") {
      effect.add(source, p.duration, p.amplifier);
    } else {
      effect.remove(source);
    }
  }
}
