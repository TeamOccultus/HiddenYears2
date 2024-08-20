import { world, Player } from "@minecraft/server";
import {
  awlSkill,
  boardswordSkill,
  crowbarSkill,
  hammerSkill,
  knifeSkill,
} from "../../core/itemSkills";
import { getEquipmentItem } from "lazuli-mc";
import { rubyKingSkill } from "../../core/entitySkills";

export function registryItemSkill() {
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const [ATTACKER, ENTITY, ITEM] = [
      event.damagingEntity,
      event.hitEntity,
      getEquipmentItem(event.damagingEntity),
    ];
    /**
     * @tag hy:is_hammer-判断攻击物品是否为锤子
     */
    if (ITEM?.hasTag("hy:is_hammer")) {
      hammerSkill(ENTITY, ATTACKER instanceof Player ? ATTACKER : undefined);
    }
    /**
     * @tag hy:is_corwbar-判断攻击物品是否为撬棍
     */
    if (ITEM?.hasTag("hy:is_crowbar")) {
      crowbarSkill(ENTITY, ATTACKER instanceof Player ? ATTACKER : undefined);
    }
    /**
     * @tag hy:is_awl-判断攻击物品是否为锥
     */
    if (ITEM?.hasTag("hy:is_awl")) {
      awlSkill(ENTITY, ATTACKER instanceof Player ? ATTACKER : undefined);
    }
    /**
     * @tag hy:is_knife-判断攻击物品是否为小刀
     */
    if (ITEM?.hasTag("hy:is_knife")) {
      knifeSkill(ENTITY, ATTACKER instanceof Player ? ATTACKER : undefined);
    }
    /**
     * @tag hy:magic_explode-判断物品是否可以进行法术爆发
     */
    if (ITEM?.hasTag("hy:magic_explode")) {
      boardswordSkill(
        ENTITY,
        ATTACKER instanceof Player ? ATTACKER : undefined
      );
    }
    /**
     * @tag hy:corrosion_weapon-判断物品是否可以进行腐蚀攻击
     */
    if (ITEM?.hasTag("hy:corrosion_weapon")) {
      ENTITY.addEffect("poison", 200, { amplifier: 1 });
    }
  });
}

export function registryEntitySkill() {
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
