import { damageEntities, affectEntities } from "@grindstone/utils";
import { Player, EntityQueryOptions } from "@minecraft/server";

/**
 * 法术精通攻击
 */
export class MagicAimAttack {
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
