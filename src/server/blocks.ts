import { world } from "@minecraft/server";
import { getEquipmentItem, withPercentChance } from "lazuli-mc";

export class Block {
  /** 监听方块事件 */
  static eventMonitor() {
    world.afterEvents.playerBreakBlock.subscribe((event) => {
      const [BLOCK, PLAYER, ITEM] = [
        event.brokenBlockPermutation,
        event.player,
        getEquipmentItem(event.player),
      ];
      if (BLOCK.hasTag("hy:experience_ores")) {
        PLAYER.dimension.spawnEntity("xp_orb", PLAYER.location);
      }
      /** 使用`hy:need_crowbar`标签来标记一个方块需要撬棍才能生成掉落物 */
      if (
        BLOCK.hasTag("hy:need_crowbar") &&
        ITEM.hasTag("minecraft:is_pickaxe")
      ) {
        PLAYER.sendMessage([{ translate: "hy.message.need_crowbar" }]);
      }
      /** 使用`hy:suspicious_ores`标签来标记一个方块为可疑的矿石 */
      if (
        BLOCK.hasTag("hy:suspicious_ores") &&
        ITEM.hasTag("minecraft:is_pickaxe")
      ) {
        withPercentChance({
          chance: 0.5,
          event: () => {
            PLAYER.dimension.spawnEntity("silverfish", PLAYER.location);
            PLAYER.dimension.spawnEntity("silverfish", PLAYER.location);
          },
        });
        withPercentChance({
          chance: 0.1,
          event: () => {
            PLAYER.dimension.createExplosion(PLAYER.location, 4, {
              causesFire: true,
              allowUnderwater: true,
            });
          },
        });
      }
    });
  }
}
