
import { CustomBlockLoot, CustomLootServer } from "@occultus/api";
import { TrophyBundleEvents } from "../events/TrophyBundleEvents";

export function registryCustomLoot() {
  const server = new CustomLootServer()
  server.addLoot(new CustomBlockLoot("minecraft:glowstone", "gameplay/sparkling_stone"))
  TrophyBundleEvents.registryLoot();
}
