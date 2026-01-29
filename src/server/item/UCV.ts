import { ItemStack, Player } from "@minecraft/server";
import { giveItem } from "@occultus/api";

export class UnifiedCurrencyValue {
  private constructor() {}
  /**
   * 获取玩家的统一货币值
   * @param player 要获取货币值的玩家
   * @return 玩家的统一货币值
   */
  static get(player: Player): number {
    const ucv = player.getDynamicProperty("hiddenyears:ucv");
    if (typeof ucv !== "number") {
      player.setDynamicProperty("hiddenyears:ucv", 0);
      return 0;
    }
    return ucv;
  }
  /**
   * 设置玩家的统一货币值
   * @param player 要设置货币值的玩家
   * @param value 要设置的货币值
   */
  static set(player: Player, value: number): void {
    return player.setDynamicProperty("hiddenyears:ucv", value);
  }
  /**
   * 增加玩家的统一货币值
   * @param player 要增加货币值的玩家
   * @param value 要增加的货币值
   */
  static add(player: Player, value: number): number {
    const ucv = player.getDynamicProperty("hiddenyears:ucv");
    player.playSound("use.coin");
    if (typeof ucv !== "number") {
      player.setDynamicProperty("hiddenyears:ucv", value);
      return value;
    }
    player.setDynamicProperty("hiddenyears:ucv", ucv + value);
    return ucv + value;
  }
  static processCoinOrder(player: Player, orders: CoinOrder[]): boolean {
    const total = this.getTotalUCV(orders);
    if (this.get(player) < total) {
      const need = total - this.get(player);
      player.sendMessage({
        translate: "message.hiddenyears:need_ucv",
        with: [Math.round(need).toString()]
      });
      return false;
    }
    orders.forEach((order) => {
      giveItem(player, new ItemStack(order.item, order.itemCount));
    });
    this.set(player, this.get(player) - total);
    player.sendMessage({
      translate: "message.hiddenyears:ucv_order_success",
      with: [Math.round(total).toString()]
    });
    return true;
  }
  static getTotalUCV(orders: CoinOrder[]) {
    let total = 0;
    orders.forEach((order) => {
      total += order.ucv * order.itemCount;
    });
    return total;
  }
}

export type CoinOrder = {
  item: string;
  ucv: number;
  itemCount: number;
};
