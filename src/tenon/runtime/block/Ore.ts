import { GameMode, Player, system } from "@minecraft/server";
import { getEquipmentItem } from "../../utils/player";
import { loot } from "../../utils/loot";
import { hasItemTier, ItemTiers, stringfyTier } from "../../utils/tier";

export class OreRuntime {
  constructor(readonly componentName: string) {
    const that = this;
    system.beforeEvents.startup.subscribe((init) => {
      init.blockComponentRegistry.registerCustomComponent(this.componentName, {
        onPlayerBreak(callback, param) {
          const p = param.params as OreSchema;
          if (!callback.player) return;
          if (callback.player.getGameMode() === GameMode.Creative) return;
          if (that.checkCondition(callback.player, p)) {
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
    if (data.itemTier) return hasItemTier(stringfyTier(data.itemTier), item);
    return false;
  }
}

export type OreSchema = {
  lootTable: string;
  itemTier?: string;
  tag?: string;
  typeId?: string;
  exp?: number;
};
