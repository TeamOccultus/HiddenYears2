import { ItemStack, Player, system } from "@minecraft/server";
import { ModalFormData, ModalFormResponse } from "@minecraft/server-ui";
import { CoinOrder, UnifiedCurrencyValue } from "../core/UnifiedCurrencyValue";
import { default as builtinData } from "../../config/store/coin.json";
import { FormLike } from "@occultus/core";

export class StoreForm extends FormLike {
  static items: StoreItemData[] = builtinData;
  static openToPlugin() {
    system.afterEvents.scriptEventReceive.subscribe(
      (arg) => {
        if (arg.id !== "hiddenyears:addStoreItem") return;
        const data = JSON.parse(arg.message) as StoreItemData;
        console.log(
          `[隐藏之年] 已添加新的商店项目: ${data.ucv} x UCV -> ${data.item} x ${data.count}`
        );
        StoreForm.items.push(data);
      },
      { namespaces: ["hiddenyears"] }
    );
  }
  display(player: Player, backTo: FormLike[]) {
    const form = new ModalFormData().title({ translate: "ui.ucv" }).label({
      translate: "ui.ucv.own",
      with: [UnifiedCurrencyValue.get(player).toString()]
    });
    StoreForm.items.forEach((coin) => {
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
          item: StoreForm.items[index - 1].item,
          ucv: StoreForm.items[index - 1].ucv,
          itemCount: value
        });
      });
      UnifiedCurrencyValue.processCoinOrder(player, orders);
      return this.quit(player, backTo);
    });
  }
}

export type StoreItemData = {
  item: string;
  ucv: number;
  count: number;
};
