import { system } from "@minecraft/server";
import { getEquipmentItem } from "../utils/player";
import { loot } from "../utils/loot";

export class DestroyConditionRuntime {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      init.blockComponentRegistry.registerCustomComponent(this.componentName, {
        onPlayerDestroy(callback, param) {
          const p = param.params as DestroyConditionSchema;
          if (!callback.player) return;
          if (getEquipmentItem(callback.player)?.typeId === p.item) {
            loot(callback.dimension, callback.block.location, p.lootTable);
            return;
          }
          if (getEquipmentItem(callback.player)?.hasTag(p.tag)) {
            loot(callback.dimension, callback.block.location, p.lootTable);
            return;
          }
        },
      });
    });
  }
}

export type DestroyConditionSchema = {
  lootTable: string;
  tag: string;
  item: string;
};
