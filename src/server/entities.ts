import { world, Player, system } from "@minecraft/server";
import { getEquipmentItem, randomInteger } from "lazuli-mc";
import { HyRewardTypes } from "../data/data";
import { rubyKingSkill } from "../core/entitySkills";

export class Entity {
  /**
   * 监听实体事件
   */
  static eventsMonitor(): void {
    /** 实体击打实体时的事件 */
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const [ATTACKER, TARGET, ITEM] = [
        event.damagingEntity,
        event.hitEntity,
        getEquipmentItem(event.damagingEntity),
      ];
      switch (ITEM?.typeId) {
        case "hy:ruby_boardsword":
          /** 红宝石阔剑会给予玩家经验值 */
          if (ATTACKER instanceof Player)
            ATTACKER.addExperience(randomInteger(4, 0));
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
  /**
   * 监听生成事件
   */
  static spawnMonitor(): void {
    world.afterEvents.playerSpawn.subscribe((event) => {
      const PLAYER = event.player;
      if (!PLAYER.hasTag("hy:get_quest_book")) {
        HyRewardTypes.questBook1st.keepOnDeath = true;
        PLAYER.dimension.spawnItem(HyRewardTypes.questBook1st, PLAYER.location);
        PLAYER.addTag("hy:get_quest_book");
      }
      if (!PLAYER.hasTag("hy:get_first_letter")) {
        PLAYER.dimension.spawnItem(HyRewardTypes.letter1st, PLAYER.location);
        PLAYER.addTag("hy:get_first_letter");
      }
    });
    /**
     * 监听生物生成事件
     */
    world.afterEvents.entitySpawn.subscribe((event) => {
      const ENTITY = event.entity;
      if (ENTITY.typeId === "hy:ruby_guardian") {
        const num1 = system.runTimeout(() => {
          ENTITY.remove();
        }, 600);
        world.afterEvents.entityDie.subscribe(event=>{
          if(event.deadEntity.id===ENTITY.id){
            system.clearRun(num1);
          }
        })
        world.afterEvents.entityRemove.subscribe(event=>{
          if(event.removedEntityId===ENTITY.id){
            system.clearRun(num1);
          }
        })
      }
    });
  }
  /**
   * 注册实体技能
   */
  static skillRegister() {
    world.afterEvents.entityLoad.subscribe((event) => {
      if (event.entity.typeId === "hy:king_of_ruby") {
        rubyKingSkill(event.entity);
      }
    });
    world.afterEvents.entitySpawn.subscribe((event) => {
      if (event.entity.typeId === "hy:king_of_ruby") {
        rubyKingSkill(event.entity);
      }
    });
  }
}
