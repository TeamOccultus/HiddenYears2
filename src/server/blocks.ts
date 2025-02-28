import { world } from "@minecraft/server";
import { getEquipmentItem, withPercentChance } from "@grindstone/utils";

export class Hy2Block {
  /** 监听方块事件 */
  // 监听事件
  static eventMonitor() {
    // 监听玩家破坏方块事件
    world.afterEvents.playerBreakBlock.subscribe((event) => {
      // 获取事件中的方块、玩家和物品
      const [BLOCK, PLAYER, ITEM] = [
        event.brokenBlockPermutation,
        event.player,
        getEquipmentItem(event.player),
      ];
      // 如果方块有"hy:experience_ores"标签，则在玩家位置生成经验球
      if (BLOCK.hasTag("hy:experience_ores")) {
        PLAYER.dimension.spawnEntity("xp_orb", PLAYER.location);
      }
      // 如果方块有"hy:sand_ores"标签，则以0.05的概率在玩家位置生成沙银鱼，并发送消息
      if (BLOCK.hasTag("hy:sand_ores")) {
        withPercentChance({
          chance: 0.05,
          event: () => {
            PLAYER.dimension.spawnEntity("hy:sand_silverfish", PLAYER.location);
            PLAYER.sendMessage({ translate: "hy.message.sand_silverfish" });
          },
        });
      }
      if (ITEM) {
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
      }
    });
    world.afterEvents.itemUseOn.subscribe((event) => {
      const BLOCK = event.block;
      if (
        event.itemStack.typeId === "hy:drift_sand_statue" &&
        BLOCK.typeId === "hy:unknown_frame"
      ) {
        BLOCK.setType("hy:actived_unknown_frame");
        BLOCK.dimension.spawnEntity("hy:pharaohs_ghost", {
          x: BLOCK.location.x,
          y: BLOCK.location.y + 1,
          z: BLOCK.location.z,
        });
      }
    });
  }
}
