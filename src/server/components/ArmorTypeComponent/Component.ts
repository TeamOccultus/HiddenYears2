import {
  EntityHealthComponent,
  EquipmentSlot,
  system,
  world,
} from "@minecraft/server";
import { ArmorTypeParams } from "./Params";
import { getEquipmentItem } from "@occultus/api";

export class ArmorTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {});
    });
    world.afterEvents.entityHealthChanged.subscribe((event) => {
      if (!event.entity.isValid) return;
      const changedValue = event.newValue - event.oldValue;
      if (changedValue <= 0) return;
      const headItem = getEquipmentItem(event.entity, EquipmentSlot.Head);
      if (!headItem) return;
      if (!headItem.getComponent(componentName)) return;
      const params = headItem.getComponent(componentName)
        .customComponentParameters.params as ArmorTypeParams;
      if (params.present === "isis_crown") {
        const health = event.entity.getComponent(
          "minecraft:health",
        ) as EntityHealthComponent;
        const newHealth = health.currentValue + changedValue * 0.25;
        if (newHealth > health.defaultValue) {
          health.resetToDefaultValue();
        } else {
          health.setCurrentValue(newHealth);
        }
      }
    });
  }
}
