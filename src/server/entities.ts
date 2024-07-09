import { world, ItemLockMode, Player } from "@minecraft/server";
import { utils } from "project-lantern";
import { HyRewardTypes } from "../data/data";

/**
 * 监听玩家生成事件
 */
export function playerSpawnMonitor(): void {
  world.afterEvents.playerSpawn.subscribe((event) => {
    const PLAYER = event.player;
    if (!PLAYER.hasTag("hy:get_quest_book")) {
      HyRewardTypes.questBook1st.keepOnDeath = true;
      HyRewardTypes.questBook1st.lockMode = ItemLockMode.inventory;
      PLAYER.dimension.spawnItem(HyRewardTypes.questBook1st, PLAYER.location);
      PLAYER.addTag("hy:get_quest_book");
    }
    if (!PLAYER.hasTag("hy:get_first_letter")) {
      PLAYER.dimension.spawnItem(HyRewardTypes.letter1st, PLAYER.location);
      PLAYER.addTag("hy:get_first_letter");
    }
  });
}

/**
 * 监听实体事件
 */
export function entityEventsMonitor(): void {
  /** 实体击打实体时的事件 */
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const [ATTACKER, TARGET, ITEM] = [
      event.damagingEntity,
      event.hitEntity,
      utils.getEquipmentItem(event.damagingEntity),
    ];
    switch (ITEM?.typeId) {
      case "hy:ruby_boardsword":
        /** 红宝石阔剑会给予玩家经验值 */
        if (ATTACKER instanceof Player)
          ATTACKER.addExperience(utils.randomInteger(4, 0));
        break;
      case "hy:suffering_sword":
        TARGET.addEffect("poison", 100);
        TARGET.addEffect("weakness", 100);
        TARGET.addEffect("darkness", 40);
        break;
      default:
        break;
    }
    switch (ATTACKER.typeId) {
      case "hy:king_of_ruby":
        /** 红宝石之王攻击玩家时会剥夺玩家经验值 */
        if (TARGET instanceof Player) TARGET.addExperience(-15);
        break;
      default:
        break;
    }
  });
}
