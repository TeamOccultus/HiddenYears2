import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  world
} from "@minecraft/server";
import { CoinComponentParams } from "../components/CoinComponent/Params";
import { UnifiedCurrencyValue } from "../item/UCV";
import { setEquipmentItem, consumeAmount } from "@occultus/api";

export class CoinEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const { source, itemStack } = arg0;
    const p = arg1.params as CoinComponentParams;
    setEquipmentItem(source, consumeAmount(itemStack, 1));
    source.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:ucv_add",
      with: [p.ucv_value.toString()]
    });
    UnifiedCurrencyValue.add(source, p.ucv_value);
  }
}
