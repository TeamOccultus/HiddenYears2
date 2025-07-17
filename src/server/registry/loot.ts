import { world, ItemStack } from "@minecraft/server";
import { CustomBlockLoot, LootManager } from "@starock/loot";
import { bundlesLoot, bundlesBossLoot } from "../../data/bundle";
import { Random, RandomEvent } from "@starock/math";
import { TrophyBundleEvents } from "../events/TrophyBundleEvents";

export function registryCustomLoot() {
  LootManager.initialize();
  new CustomBlockLoot("minecraft:glowstone", "gameplay/sparkling_stone");
  TrophyBundleEvents.registryLoot();
}
