import { ItemStack, world } from "@minecraft/server";
import { bundlesBossLoot, bundlesLoot } from "../../data/bundle";
import {
  randomInteger,
  withPercentChance,
} from "@grindstone/utils";

/**
 * 注册自定义战利品表
 */
export function registryLoot() {
  world.afterEvents.entityDie.subscribe((event) => {
    const entity = event.deadEntity;
    if (bundlesLoot.has(entity.typeId)) {
      const res = withPercentChance({
        chance: randomInteger(40, 25) / 100,
        event: () => {
          const bundle = new ItemStack("hy:trophy_bundle");
          bundle.setDynamicProperty(
            "hy:loot_table",
            bundlesLoot.get(entity.typeId),
          );
          entity.dimension.spawnItem(bundle, entity.location);
        },
      });
      console.log(res);
    }
    if (bundlesBossLoot.has(entity.typeId)) {
      const bundle = new ItemStack("hy:trophy_bundle");
      bundle.setDynamicProperty(
        "hy:loot_table",
        bundlesBossLoot.get(entity.typeId),
      );
      entity.dimension.spawnItem(bundle, entity.location);
    }
  });
}
