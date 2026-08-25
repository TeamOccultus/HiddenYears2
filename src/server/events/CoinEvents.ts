import {
  CustomComponentParameters,
  ItemComponentUseEvent
} from "@minecraft/server";

/**
 * @deprecated
 */
export class CoinEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    console.warn(
      "The coin component has been deprecated, please use magic energy component!"
    );
  }
}
