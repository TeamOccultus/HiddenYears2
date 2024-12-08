import { world, Player, system, ItemStack } from "@minecraft/server";
import { getEquipmentItem, giveItem, randomInteger } from "@lazuli/ldk2";
import { HyUtils } from "../core/utils";

export class Entity {
  /**
   * 监听实体事件
   */
  static eventMonitor(): void {
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
      if (ATTACKER.typeId === "hy:king_of_ruby" && TARGET instanceof Player) {
        TARGET.addExperience(-15);
      }
      // 脱水与干旱
      if (
        HyUtils.isAffectByDroughtDebuff(TARGET,ITEM)
      ) {
        if (TARGET instanceof Player) {
          TARGET.onScreenDisplay.setActionBar({
            translate: "hy.message.drought",
          });
          world.afterEvents.playerSpawn.subscribe((event) => {
            if (event.player.id === TARGET.id) {
              TARGET.removeTag("hy:drought");
            }
          });
        }
        TARGET.addTag("hy:drought");
        system.runTimeout(() => {
          if (TARGET.isValid()) TARGET.removeTag("hy:drought");
        }, 300);
      }
      if (
        HyUtils.isAffectByDehydrationDebuff(TARGET,ITEM)
      ) {
        if (TARGET instanceof Player) {
          TARGET.onScreenDisplay.setActionBar({
            translate: "hy.message.dehydration",
          });
          world.afterEvents.playerSpawn.subscribe((event) => {
            if (event.player.id === TARGET.id) {
              TARGET.removeTag("hy:dehydration");
            }
          });
        }
        TARGET.addTag("hy:dehydration");
        system.runTimeout(() => {
          if (TARGET.isValid()) TARGET.removeTag("hy:dehydration");
        }, 400);
      }
      if(HyUtils.isAffectByBloodArmor(TARGET, ATTACKER)){
        if(TARGET instanceof Player){
          TARGET.onScreenDisplay.setActionBar({translate: "hy.message.blood_armor"})
        }
        TARGET.addEffect("regeneration",6,{amplifier: 4})
      }
      if(HyUtils.isAffectByBloodCrown(TARGET, ATTACKER)){
        TARGET.addEffect("regeneration",9,{amplifier: 4})
        ATTACKER.applyDamage(2);
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
        const QUEST_BOOK = new ItemStack("hy:quest_book");
        QUEST_BOOK.keepOnDeath = true;
        giveItem(PLAYER, QUEST_BOOK);
        PLAYER.addTag("hy:get_quest_book");
      }
      if (!PLAYER.hasTag("hy:get_first_letter")) {
        const LETTER = new ItemStack("hy:letter_0");
        giveItem(PLAYER, LETTER);
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
        world.afterEvents.entityDie.subscribe((event) => {
          if (event.deadEntity.id === ENTITY.id) {
            system.clearRun(num1);
          }
        });
        world.afterEvents.entityRemove.subscribe((event) => {
          if (event.removedEntityId === ENTITY.id) {
            system.clearRun(num1);
          }
        });
      }
    });
  }
}
