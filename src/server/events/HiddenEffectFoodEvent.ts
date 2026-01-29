import {
  CustomComponentParameters,
  ItemComponentConsumeEvent,
  Player
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
    if (effect) {
      effect.add(source, p.duration, p.amplifier);
    }
    if (p.remove) {
      p.remove.forEach((e) => {
        const effect = effectsMap.get(e);
        if (effect) effect.remove(source);
      });
    }
  }
}
