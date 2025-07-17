import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  Dimension,
  Vector3,
  ItemStack,
} from "@minecraft/server";
import { EntityUtils } from "@starock/entity";
import { loot } from "@starock/loot";
import { TrophyBundleParam } from "../components/TrophyBundleComponent/Params";

/**
 * 战利品袋的相关事件
 *
 * @category Events
 */
export class TrophyBundleEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const { source, itemStack } = arg0;
    if (!itemStack) return;
    EntityUtils.setEquipmentItem(source);
    source.playSound("bundle.drop_contents");
    const p = arg1.params as TrophyBundleParam;
    loot(
      source.dimension,
      source.location,
      TrophyBundleEvents.getLootTable(itemStack, p)
    );
  }
  static getLootTable(itemStack: ItemStack, params: TrophyBundleParam) {
    if (params.table_source === "hardcode") {
      return params.loot_table;
    }
    const table = itemStack.getDynamicProperty("hiddenyears:loot_table");
    if (typeof table === "string") return table;
    throw new Error("Invalid loot table!");
  }
}
