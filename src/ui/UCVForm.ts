import { ItemStack, Player } from "@minecraft/server";
import { ModalFormData, ModalFormResponse } from "@minecraft/server-ui";
import { CoinOrder, UnifiedCurrencyValue } from "../server/item/UCV";
import { ProfileForm } from "./ProfileForm";
import { default as coins } from "../../config/store/coin.json";

export class UCVForm {
  static display(player: Player, backTo = false) {
    const form = new ModalFormData().title({ translate: "ui.ucv" }).label({
      translate: "ui.ucv.own",
      with: [UnifiedCurrencyValue.get(player).toString()],
    });
    coins.forEach((coin) => {
      const item = new ItemStack(coin.item);
      const amount = UnifiedCurrencyValue.get(player) / coin.ucv;
      form.slider(
        { translate: item.localizationKey },
        0,
        amount > 64 ? 64 : amount,
      );
    });
    form.show(player).then((response: ModalFormResponse) => {
      const rawOrder = response.formValues;
      console.log(rawOrder);
      const orders: CoinOrder[] = [];
      if (!rawOrder) return;
      rawOrder.forEach((value, index) => {
        if (index === 0) return;
        if (value === 0) return;
        if (typeof value !== "number") value = 0;
        orders.push({
          item: coins[index - 1].item,
          ucv: coins[index - 1].ucv,
          itemCount: value,
        });
      });
      console.log(orders.toString());
      UnifiedCurrencyValue.processCoinOrder(player, orders);
      if (backTo) ProfileForm.display(player);
    });
  }
}
