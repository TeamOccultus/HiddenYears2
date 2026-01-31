import {
  Entity,
  EntityHealthChangedAfterEvent,
  EntityHealthComponent,
  EquipmentSlot,
  Player
} from "@minecraft/server";
import { getEquipmentItem, RandomEvent } from "@occultus/api";
import { ArmorTypeParams } from "../components/ArmorTypeComponent/Params";

export class ArmorEvents {
  static onEntityHealthChanged(
    componentName: string,
    event: EntityHealthChangedAfterEvent
  ) {
    if (!event.entity.isValid) return;
    const changedValue = event.newValue - event.oldValue;
    if (changedValue <= 0) return;
    const headItem = getEquipmentItem(event.entity, EquipmentSlot.Head);
    if (!headItem) return;
    if (!headItem.getComponent(componentName)) return;
    const params = headItem.getComponent(componentName)
      .customComponentParameters.params as ArmorTypeParams;
    if (params.present === "isis_crown") {
      ArmorEvents.isisArmor(changedValue, event.entity);
    }
  }
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
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:unyielding"
    });
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
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:rebirth"
    });
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
