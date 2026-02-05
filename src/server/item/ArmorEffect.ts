import {
  Entity,
  Player,
  EntityHealthComponent,
  TicksPerSecond,
  EquipmentSlot,
  system
} from "@minecraft/server";
import { getEquipmentItem, Random, RandomEvent } from "@occultus/api";
import {
  ArmorPresent,
  ArmorTypeParams
} from "../components/ArmorTypeComponent/Params";

export class ArmorEffect {
  /**
   * 盔甲效果将会搜索的效果栏
   */
  static searchSlots = [
    EquipmentSlot.Head,
    EquipmentSlot.Chest,
    EquipmentSlot.Legs,
    EquipmentSlot.Feet
  ];
  /**
   * 盔甲效果缓存，用于限制脚本扫描盔甲栏的频率
   */
  static effectCache: Map<string, ArmorEffectResult[]> = new Map();
  /**
   * 盔甲效果-不屈
   * @param player
   * @param level
   */
  static unyieldingArmor(player: Player, level: number = 1) {
    player.addEffect("minecraft:resistance", 300 * level, {
      amplifier: level - 1,
      showParticles: false
    });
    player.addEffect("minecraft:strength", 300 * level, {
      amplifier: level - 1,
      showParticles: false
    });
    player.addEffect("minecraft:speed", 300 * level, {
      amplifier: level - 1,
      showParticles: false
    });
    if (player instanceof Player) {
      player.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:unyielding"
      });
    }
  }
  /**
   * 盔甲效果-复生
   * @param player
   * @returns
   */
  static rebirthArmor(player: Player) {
    const health = player.getComponent("health");
    if (health.currentValue > 5) return;
    health.setCurrentValue(health.currentValue + 5);
    new RandomEvent(0.5, () => {
      health.resetToMaxValue();
    });
    if (player instanceof Player) {
      player.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:rebirth"
      });
    }
  }
  /**
   * 盔甲效果-雨神之冠
   * @param changedValue
   * @param entity
   */
  static isisArmor(changedValue: number, entity: Entity) {
    const health = entity.getComponent(
      "minecraft:health"
    ) as EntityHealthComponent;
    const newHealth = health.currentValue + changedValue * 0.25;
    if (newHealth > health.defaultValue) {
      health.resetToDefaultValue();
    } else {
      health.setCurrentValue(newHealth);
    }
  }
}

export class ArmorEffectDetector {
  /**
   * 盔甲效果缓存保留的时间
   */
  static readonly cacheRemainTime = 15 * TicksPerSecond;
  static readonly cacheTag = "hiddenyears:armor_effect_cache";
  static hasValidCache(player: Player) {
    return (
      player.hasTag(this.cacheTag) &&
      ArmorEffect.effectCache.has(player.id)
    );
  }
  /**
   * 返回玩家当前所有装备的盔甲效果
   *
   * 若 {@link ArmorEffect.effectCache} 中存在 {@link ArmorEffectDetector.cacheRemainTime} 内保存的缓存数据，则直接返回缓存
   *
   * 反之，则会遍历一遍玩家的盔甲栏，并将结果保存到 {@link ArmorEffect.effectCache} 中
   * @param player
   * @returns
   */
  static detectArmorEffects(player: Player): ArmorEffectResult[] {
    const result: ArmorEffectResult[] = [];
    if (!player.isValid) return [];
    if (this.hasValidCache(player)) {
      console.log(`Valid cache detected from player(${player.id}), read data from script environment...`);
      return ArmorEffect.effectCache.get(player.id);
    }
    for (const slot of ArmorEffect.searchSlots) {
      const item = getEquipmentItem(player, slot);
      if (!item) continue;
      const component = item.getComponent("hiddenyears:armor_type");
      if (!component) continue;
      const params = component.customComponentParameters
        .params as ArmorTypeParams;
      if (params.length === 0) continue;
      for (const p of params) {
        const index = result.findIndex((e) => e.present === p.present);
        if (index === -1) {
          result.push({
            maxLevel: p.level,
            present: p.present
          });
          continue;
        }
        if (p.level > result[index].maxLevel) {
          result[index].maxLevel = p.level;
        }
      }
    }
    if (!this.hasValidCache(player)) {
      console.log(`Add player(${player.id}) cache...`);
      player.addTag(this.cacheTag);
      ArmorEffect.effectCache.set(player.id, result);
      system.runTimeout(() => {
        console.log(`Remove player(${player.id}) cache...`);
        if (player.isValid) {
          player.removeTag(this.cacheTag);
          ArmorEffect.effectCache.delete(player.id);
        }
      }, ArmorEffectDetector.cacheRemainTime);
    }
    return result;
  }
}

export type ArmorEffectResult = {
  maxLevel: number;
  present: ArmorPresent;
};
