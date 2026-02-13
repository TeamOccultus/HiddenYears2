import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  ItemStack,
  world,
  system
} from "@minecraft/server";
import { TrophyBundleParams } from "../components/TrophyBundleComponent/Params";
import { setEquipmentItem, loot, RandomEvent } from "@occultus/api";

/**
 * 战利品袋的相关事件
 *
 * @category Events
 */
export class TrophyBundleEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const { source, itemStack } = arg0;
    if (!itemStack) return;
    setEquipmentItem(source);

    const p = arg1.params as TrophyBundleParams;
    system.runTimeout(() => {
      source.playSound("bundle.drop_contents");
      loot(
        source.dimension,
        source.location,
        TrophyBundleEvents.getLootTable(itemStack, p)
      );
    }, 10);
  }
  static getLootTable(itemStack: ItemStack, params: TrophyBundleParams) {
    if (params.table_source === "hardcode") {
      return params.loot_table;
    }
    const table = itemStack.getDynamicProperty("hiddenyears:loot_table");
    if (typeof table === "string") return table;
    throw new Error("Invalid loot table!");
  }
  /**
   * @deprecated
   */
  static registryLoot() {}
}
