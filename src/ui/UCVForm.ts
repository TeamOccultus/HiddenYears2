import { ItemStack, Player } from "@minecraft/server";
import { ModalFormData, ModalFormResponse } from "@minecraft/server-ui";
import { CoinOrder, UnifiedCurrencyValue } from "../core/UnifiedCurrencyValue";
import { default as coins } from "../../config/store/coin.json";
import { FormLike } from "@occultus/core";

export class UCVForm extends FormLike {
  display(player: Player, backTo: FormLike[]) {
    const form = new ModalFormData().title({ translate: "ui.ucv" }).label({
      translate: "ui.ucv.own",
      with: [UnifiedCurrencyValue.get(player).toString()]
    });
    coins.forEach((coin) => {
      const item = new ItemStack(coin.item);
      const amount = UnifiedCurrencyValue.get(player) / coin.ucv;
      form.slider(
        { translate: item.localizationKey },
        0,
        amount > 64 ? 64 : amount
      );
    });
    form.show(player).then((response: ModalFormResponse) => {
      const rawOrder = response.formValues;
      const orders: CoinOrder[] = [];
      if (!rawOrder) return this.quit(player, backTo);
      rawOrder.forEach((value, index) => {
        if (index === 0) return;
        if (value === 0) return;
        if (typeof value !== "number") value = 0;
        orders.push({
          item: coins[index - 1].item,
          ucv: coins[index - 1].ucv,
          itemCount: value
        });
      });
      UnifiedCurrencyValue.processCoinOrder(player, orders);
      return this.quit(player, backTo);
    });
  }
}
