import {
  CustomComponentParameters,
  ItemComponentUseEvent,
} from "@minecraft/server";
import { CoinComponentParams } from "../components/CoinComponent/Params";
import { UnifiedCurrencyValue } from "../../core/UnifiedCurrencyValue";
import {
  consumeEquipmentAmount
} from "@occultus/api";

export class CoinEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const { source, itemStack } = arg0;
    const p = arg1.params as CoinComponentParams;
    let num: number = 1;
    if (source.isSneaking) num = itemStack.amount;
    consumeEquipmentAmount(source, num);
    source.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:ucv_add",
      with: [(p.ucv_value * num).toString()]
    });
    UnifiedCurrencyValue.add(source, p.ucv_value * num);
  }
}
