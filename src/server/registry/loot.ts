/**
 * @module server/registry/loot
 * @category Registry Bus
 */
import { CustomBlockLoot, CustomLootServer } from "@occultus/api";
import { TrophyBundleEvents } from "../events/TrophyBundleEvents";

/**
 * 注册自定义掉落物
 */
export function registryCustomLoot() {
  const server = new CustomLootServer()
  server.addLoot(new CustomBlockLoot("minecraft:glowstone", "gameplay/sparkling_stone"))
  TrophyBundleEvents.registryLoot();
}
