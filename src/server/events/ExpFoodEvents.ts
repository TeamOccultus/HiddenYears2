import {
  CustomComponentParameters,
  ItemComponentConsumeEvent,
  ItemComponentUseEvent,
  Player,
  world,
} from "@minecraft/server";
import { ExpFoodComponentParams } from "../components/ExpFoodComponent/Params";


export class ExpFoodEvents {
  static onUse(arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) {
    const { source, itemStack } = arg0;
    const p = arg1.params as ExpFoodComponentParams;
    if(!(source instanceof Player)) return;
    source.addExperience(p.exp);
    source.playSound("random.orb");
  }
}
