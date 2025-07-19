import { Player } from "@minecraft/server";

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
    player.playSound("use.coin")
    if (typeof ucv !== "number") {
      player.setDynamicProperty("hiddenyears:ucv", value);
      return value;
    }
    player.setDynamicProperty("hiddenyears:ucv", ucv + value);
    return ucv + value;
  }
}
