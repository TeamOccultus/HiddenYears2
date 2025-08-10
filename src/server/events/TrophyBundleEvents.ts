import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  ItemStack,
  world,
  system,
} from "@minecraft/server";
import { TrophyBundleParam } from "../components/TrophyBundleComponent/Params";
import { bundlesLoot, bundlesBossLoot } from "../../data/bundle";
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

    const p = arg1.params as TrophyBundleParam;
    system.runTimeout(() => {
      source.playSound("bundle.drop_contents");
      loot(
        source.dimension,
        source.location,
        TrophyBundleEvents.getLootTable(itemStack, p)
      );
    }, 10);
  }
  static getLootTable(itemStack: ItemStack, params: TrophyBundleParam) {
    if (params.table_source === "hardcode") {
      return params.loot_table;
    }
    const table = itemStack.getDynamicProperty("hiddenyears:loot_table");
    if (typeof table === "string") return table;
    throw new Error("Invalid loot table!");
  }
  static registryLoot() {
    world.afterEvents.entityDie.subscribe((event) => {
      const entity = event.deadEntity;
      if (bundlesLoot.has(entity.typeId)) {
        const res = new RandomEvent(1.0, () => {
          const bundle = new ItemStack("hiddenyears:trophy_bundle");
          bundle.setDynamicProperty(
            "hiddenyears:loot_table",
            bundlesLoot.get(entity.typeId)
          );
          entity.dimension.spawnItem(bundle, entity.location);
        });
        res.call();
      }
      if (bundlesBossLoot.has(entity.typeId)) {
        const bundle = new ItemStack("hiddenyears:trophy_bundle");
        bundle.setDynamicProperty(
          "hiddenyears:loot_table",
          bundlesBossLoot.get(entity.typeId)
        );
        entity.dimension.spawnItem(bundle, entity.location);
      }
    });
  }
}
