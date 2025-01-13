import {
  affectEntities,
  damageEntities,
  getEquipmentItem,
  setEquipmentItem,
} from "@lazuli/ldk2";
import {
  Dimension,
  Entity,
  EntityQueryOptions,
  EquipmentSlot,
  ItemStack,
  Player,
  Vector3,
} from "@minecraft/server";
import { HyCorrosionMap } from "../data/data";

export class HyUtils {
  static isAffectByDroughtDebuff(target: Entity, item: ItemStack): boolean {
    return (
      item?.typeId === "hy:shattered_sand_cudgel" &&
      !target.matches({ families: ["immune_desert_debuff"] }) &&
      !target.hasTag("hy:immune_desert_debuff") &&
      !(
        target.getComponent("equippable")?.getEquipment(EquipmentSlot.Head)
          .typeId === "hy:drift_sand_coronet"
      )
    );
  }
  static isAffectByBossDroughtDebuff(target: Entity): boolean {
    return (
      !target.matches({ families: ["immune_desert_debuff"] }) &&
      !target.hasTag("hy:immune_desert_debuff") &&
      !(
        target.getComponent("equippable")?.getEquipment(EquipmentSlot.Head)
          .typeId === "hy:drift_sand_coronet"
      )
    );
  }
  /**
   * 返回实体是否会被沙漠Debuff影响
   * @param target
   * @param item
   * @returns
   */
  static isAffectByDehydrationDebuff(target: Entity, item: ItemStack): boolean {
    return (
      item?.typeId === "hy:shattered_sand_staff" &&
      !target.matches({ families: ["immune_desert_debuff"] }) &&
      !target.hasTag("hy:immune_desert_debuff") &&
      !(
        target.getComponent("equippable")?.getEquipment(EquipmentSlot.Head)
          .typeId === "hy:drift_sand_coronet"
      )
    );
  }
  static loot(dimension: Dimension, location: Vector3, path: string) {
    dimension.runCommand(
      `loot spawn ${location.x} ${location.y} ${location.z} loot "${path}"`
    );
  }
  /**
   * 判断实体是否受血色的护甲机制影响
   * @param entity
   * @param attacker
   * @returns
   */
  static isAffectByBloodArmor(entity: Entity, attacker: Entity) {
    if (
      !attacker.matches({
        families: ["ruby"],
      })
    ) {
      return false;
    }
    if (
      !(
        getEquipmentItem(entity, EquipmentSlot.Chest)?.typeId ===
        "hy:ruby_chestplate"
      )
    ) {
      return false;
    }
    if (
      !(
        getEquipmentItem(entity, EquipmentSlot.Legs)?.typeId ===
        "hy:ruby_leggings"
      )
    ) {
      return false;
    }
    if (
      !(
        getEquipmentItem(entity, EquipmentSlot.Feet)?.typeId === "hy:ruby_boots"
      )
    ) {
      return false;
    }
    console.info("This entity is affect by Blood Armor.");
    return true;
  }
  /**
   * 判断实体是否会受血色的冠冕效果影响
   * @param entity
   * @param attacker
   * @returns
   */
  static isAffectByBloodCrown(entity: Entity, attacker: Entity) {
    if (
      !attacker.matches({
        families: ["ruby"],
      })
    ) {
      return false;
    }
    if (
      getEquipmentItem(entity, EquipmentSlot.Head)?.typeId === "hy:ruby_helmet"
    ) {
      console.info("This entity is affect by Blood Crown.");
      return true;
    } else {
      return false;
    }
  }

  /**
   * 判断该物品能否锈蚀，并进行替换
   * @param item
   * @param holder
   */
  static replaceLowerCopperTool(item: ItemStack, holder: Entity) {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
      return true;
    } else {
      return false;
    }
  }
  static boneMagicExplode(player: Player) {
    if (player.level > 5) {
      const SKELETON_OPINION: EntityQueryOptions = {
        location: player.location,
        maxDistance: 18,
        families: ["skeleton"],
      };
      damageEntities(player.dimension, SKELETON_OPINION, 8);
      affectEntities(player.dimension, SKELETON_OPINION, "weakness", 300);
    } else {
      player.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
  static flashMetalExplode(player: Player) {
    if (player.level > 5) {
      const ALL_OPTION: EntityQueryOptions = {
        location: player.location,
        maxDistance: 18,
        excludeTags: ["hy.magic_explode"],
        excludeFamilies: ["noaoe"],
      };
      damageEntities(player.dimension, ALL_OPTION, 8);
      affectEntities(player.dimension, ALL_OPTION, "weakness", 300);
    } else {
      player.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
  static corrosionExplode(player: Player) {
    if (player.level > 5) {
      const UNDEAD_OPINION: EntityQueryOptions = {
        location: player.location,
        maxDistance: 18,
        families: ["undead"],
      };
      damageEntities(player.dimension, UNDEAD_OPINION, 8);
      affectEntities(player.dimension, UNDEAD_OPINION, "weakness", 300);
    } else {
      player.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
  static emeraldExplode(player: Player) {
    if (player.level > 5) {
      const ILLAGER_OPINION: EntityQueryOptions = {
        location: player.location,
        maxDistance: 18,
        families: ["illager"],
      };
      damageEntities(player.dimension, ILLAGER_OPINION, 8);
      affectEntities(player.dimension, ILLAGER_OPINION, "weakness", 300);
    } else {
      player.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
  static flashCopperExplode(player: Player) {
    if (player.level > 5) {
      const ARTHROPOD_OPINION: EntityQueryOptions = {
        location: player.location,
        maxDistance: 18,
        families: ["arthropod"],
      };
      damageEntities(player.dimension, ARTHROPOD_OPINION, 8);
      affectEntities(player.dimension, ARTHROPOD_OPINION, "weakness", 300);
    } else {
      player.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
  static amethystExplode(player: Player) {
    if (player.level > 5) {
      const POULTRY_OPINION: EntityQueryOptions = {
        location: player.location,
        maxDistance: 18,
        families: ["poultry"],
      };
      damageEntities(player.dimension, POULTRY_OPINION, 8);
      affectEntities(player.dimension, POULTRY_OPINION, "weakness", 300);
    } else {
      player.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
  static rubyExplode(player: Player) {
    if (player.level > 5) {
      const RUBY_OPINION: EntityQueryOptions = {
        location: player.location,
        maxDistance: 18,
        families: ["ruby"],
      };
      damageEntities(player.dimension, RUBY_OPINION, 8);
      affectEntities(player.dimension, RUBY_OPINION, "weakness", 300);
    } else {
      player.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
}
