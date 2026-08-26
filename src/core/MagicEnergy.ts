import { ItemStack, Player } from "@minecraft/server";
import { giveItem } from "@occultus/api";

/**
 * 管理魔法能源的类
 */
export class MagicEnergy {
  private constructor() {}
  static display(player: Player) {
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:me_remain",
      with: [this.get(player).toString()]
    });
  }
  /**
   * 尝试消耗玩家的魔法能源
   * @param player 
   * @param value 
   * @return `true`代表玩家魔法能源足够消耗并且游戏已经执行了消耗操作，`false`代表玩家魔法能源不足
   */
  static tryConsume(player: Player, value: number): boolean {
    if (this.get(player) >= value) {
      this.set(player, this.get(player) - value);
      return true;
    }
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:need_ucv",
      with: [String(value)]
    });
    return false;
  }
  /**
   * 获取玩家的魔法能源
   * @param player 要获取货币值的玩家
   * @return 玩家的魔法能源
   */
  static get(player: Player): number {
    const me = player.getDynamicProperty("hiddenyears:ucv");
    if (typeof me !== "number") {
      player.setDynamicProperty("hiddenyears:ucv", 0);
      return 0;
    }
    return Math.round(me);
  }
  /**
   * 设置玩家的魔法能源
   * @param player 要设置货币值的玩家
   * @param value 要设置的货币值
   */
  static set(player: Player, value: number): void {
    player.setDynamicProperty("hiddenyears:ucv", Math.round(value));
    this.display(player);
    return;
  }
  /**
   * 增加玩家的魔法能源
   * @param player 要增加货币值的玩家
   * @param value 要增加的货币值
   */
  static add(player: Player, value: number, sound = true): number {
    const ucv = player.getDynamicProperty("hiddenyears:ucv");
    if (sound) player.playSound("use.coin");
    if (typeof ucv !== "number") {
      player.setDynamicProperty("hiddenyears:ucv", Math.round(value));
      return value;
    }
    player.setDynamicProperty("hiddenyears:ucv", ucv + Math.round(value));
    this.display(player);
    return ucv + Math.round(value);
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
    return Math.round(total);
  }
}

export type CoinOrder = {
  item: string;
  ucv: number;
  itemCount: number;
};
