import { Player } from "@minecraft/server";
import { ModalFormData, ModalFormResponse } from "@minecraft/server-ui";
import { UnifiedCurrencyValue } from "../server/item/UCV";

export class UCVForm {
  static display(player: Player) {
    const form = new ModalFormData()
      .title({ translate: "ui.ucv" })
      .label({
        translate: "ui.ucv.own",
        with: [UnifiedCurrencyValue.get(player).toString()],
      });
  }
}
