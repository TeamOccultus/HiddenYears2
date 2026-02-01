import {
  Entity,
  EntityHealthChangedAfterEvent,
  EntityHealthComponent,
  EquipmentSlot,
  Player
} from "@minecraft/server";
import { getEquipmentItem, Random, RandomEvent } from "@occultus/api";
import {
  ArmorPresent,
  ArmorTypeParams
} from "../components/ArmorTypeComponent/Params";

export class ArmorEvents {
  /**
   * 盔甲效果将会搜索的效果栏
   */
  static serachSlots = [
    EquipmentSlot.Head,
    EquipmentSlot.Chest,
    EquipmentSlot.Legs,
    EquipmentSlot.Feet
  ];
  static onEntityHealthChanged(
    componentName: string,
    event: EntityHealthChangedAfterEvent
  ) {
    if (!event.entity.isValid) return;
    if (!(event.entity instanceof Player)) return;
    if (Random.integer(100, 0) >= 85) return;
    const changedValue = event.newValue - event.oldValue;
    if (changedValue >= 0) return;
    if (this.simpleDetector("isis_crown", componentName, event.entity)) {
      this.isisArmor(changedValue, event.entity);
    }
    if (this.unyieldingArmorDetector(componentName, event.entity) > 0) {
      const level = this.unyieldingArmorDetector(componentName, event.entity);
      this.unyieldingArmor(event.entity, level);
    }
    if (this.simpleDetector("rebirth", componentName, event.entity)) {
      this.rebirthArmor(event.entity);
    }
  }
  /**
   * 简单检测器，检测玩家四个部位中是否至少有一个含有某盔甲效果
   * @param name 盔甲效果名称
   * @param componentName
   * @param entity
   * @returns
   */
  static simpleDetector(
    name: ArmorPresent,
    componentName: string,
    entity: Entity
  ): boolean {
    return this.serachSlots.some((slot) => {
      const item = getEquipmentItem(entity, slot);
      if (!item) return false;
      if (!item.getComponent(componentName)) return false;
      const params = item.getComponent(componentName).customComponentParameters
        .params as ArmorTypeParams;
      params.some((p) => {
        if (p.present === name) return true;
      });
    });
  }
  /**
   * 检测玩家装备盔甲不屈效果的最大等级
   * @param componentName
   * @param entity
   * @returns
   */
  static unyieldingArmorDetector(
    componentName: string,
    entity: Entity
  ): number {
    const levels: [number, number, number, number] = [0, 0, 0, 0];
    console.log("start");
    this.serachSlots.forEach((slot, index) => {
      const item = getEquipmentItem(entity, slot);
      if (!item) return;
      if (!item.getComponent(componentName)) return;
      const params = item.getComponent(componentName).customComponentParameters
        .params as ArmorTypeParams;
      params.forEach((p) => {
        if (p.present === "unyielding") {
          levels[index] = p.level;
        }
      });
    });
    let newLevel = levels.sort((a, b) => b - a);
    console.log(newLevel);
    console.log(newLevel[0]);
    return newLevel[0];
  }
  /**
   * 盔甲效果-不屈
   * @param entity
   * @param level
   */
  static unyieldingArmor(entity: Entity, level: number = 1) {
    entity.addEffect("minecraft:resistance", 300 * level, {
      amplifier: level - 1,
      showParticles: false
    });
    entity.addEffect("minecraft:strength", 300 * level, {
      amplifier: level - 1,
      showParticles: false
    });
    entity.addEffect("minecraft:speed", 300 * level, {
      amplifier: level - 1,
      showParticles: false
    });
    if (entity instanceof Player) {
      entity.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:unyielding"
      });
    }
  }
  /**
   * 盔甲效果-复生
   * @param entity
   * @returns
   */
  static rebirthArmor(entity: Entity) {
    const health = entity.getComponent("health");
    if (health.currentValue > 5) return;
    health.setCurrentValue(health.currentValue + 5);
    new RandomEvent(0.5, () => {
      health.resetToMaxValue();
    });
    if (entity instanceof Player) {
      entity.onScreenDisplay.setActionBar({
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
