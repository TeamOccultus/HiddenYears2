import { GameMode, Player, system } from "@minecraft/server";
import { RandomEvent } from "@occultus/api";

/**
 * 隐藏之年矿石的相关事件
 *
 * 占用的动态属性：
 * - `hiddenyears:destroy_ruby_count`：玩家已破坏的红宝石矿石数量
 *
 * @category Events
 * @category OwnedDynamicProperties
 */
export class OreEvents {
  static sandcaust(player: Player) {
    new RandomEvent(0.2, () => {
      player.dimension.spawnEntity(
        "hiddenyears:sandcaust_silverfish",
        player.location
      );
      player.sendMessage({ translate: "message.hiddenyears:sand_silverfish" });
    });
  }
  /**
   * 挖掘红宝石矿石后对玩家造成的「精神影响」
   * @param player 挖掘红宝石矿石的玩家
   */
  static mentalAffect(player: Player) {
    if (player.getGameMode() === GameMode.Creative) return;
    const num = player.getDynamicProperty("hiddenyears:destroy_ruby_count");
    if (num === 0 || !num) {
      player.addLevels(1);
      player.playSound("ambient.cave");
      player.addEffect("minecraft:darkness", 200);
      player.sendMessage({
        translate: "message.hiddenyears:first_destroy_ruby",
      });
    }
    if (num === 10) {
      player.playSound("ambient.cave");
      player.addEffect("minecraft:darkness", 300);
      player.sendMessage({
        translate: "message.hiddenyears:tenth_destroy_ruby.1",
      });
      player.sendMessage({
        translate: "message.hiddenyears:tenth_destroy_ruby.2",
      });
    }
    if (num === 50) {
      player.playSound("ambient.cave");
      player.addEffect("minecraft:darkness", 400);
      player.sendMessage({
        translate: "message.hiddenyears:fiftieth_destroy_ruby.1",
      });
      system.runTimeout(() => {
        player.sendMessage({
          translate: "message.hiddenyears:fiftieth_destroy_ruby.2",
        });
        player.sendMessage({
          translate: "message.hiddenyears:fiftieth_destroy_ruby.3",
        });
      }, 50);
    }
    if (typeof num !== "number")
      throw new Error("Invalid dynamic property type!");
    player.setDynamicProperty("hiddenyears:destroy_ruby_count", num + 1);
  }
}
