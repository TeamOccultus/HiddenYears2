import {
  EntityHealthComponent,
  EquipmentSlot,
  system,
  world
} from "@minecraft/server";
import { ArmorTypeParams } from "./Params";
import { getEquipmentItem } from "@occultus/api";
import { ArmorEvents } from "../../events/ArmorEvents";

export class ArmorTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {});
    });

    // TODO: 重构盔甲效果相关代码
    /*world.afterEvents.entityHealthChanged.subscribe((event) => {
      ArmorEvents.onEntityHealthChanged(componentName, event);
    });*/
  }
}
