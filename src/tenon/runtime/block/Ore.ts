import { Player, system } from "@minecraft/server";
import { getEquipmentItem } from "../../utils/player";
import { loot } from "../../utils/loot";
import { hasItemTier, ItemTiers } from "../../utils/tier";

export class OreRuntime {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      init.blockComponentRegistry.registerCustomComponent(this.componentName, {
        onPlayerDestroy(callback, param) {
          const p = param.params as OreSchema;
          if (!callback.player) return;
          if (this.checkCondition(callback.player, p)) {
            loot(callback.dimension, callback.block.location, p.lootTable);
            if (p.exp) callback.player.addExperience(p.exp);
          }
        },
      });
    });
  }
  protected checkCondition(player: Player, data: OreSchema): boolean {
    const item = getEquipmentItem(player);
    if (!item) return false;
    if (data.typeId) return item.typeId === data.typeId;
    if (data.tag) return item.hasTag(data.tag);
    if (data.itemTier) return hasItemTier(data.itemTier, item);
    return false;
  }
}

export type OreSchema = {
  lootTable: string;
  itemTier?: ItemTiers;
  tag?: string;
  typeId?: string;
  exp?: number;
};
