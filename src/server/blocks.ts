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
