/**
 * @module server/registry/loot
 * @category Registry Bus
 */
import {
  CustomBlockLoot,
  CustomEntityLoot,
  CustomLootServer
} from "@occultus/api";
import { TrophyBundleEvents } from "../events/TrophyBundleEvents";
import { default as entity } from "../../../config/additions/entity.json";
import { default as block } from "../../../config/additions/block.json";

/**
 * 注册自定义掉落物
 */
export function registerCustomLoot() {
  const server = new CustomLootServer();
  entity.forEach((element) => {
    element.entities.forEach((entity) => {
      server.addLoot(new CustomEntityLoot(entity, element.loot_table));
    });
  });
  block.forEach((element) => {
    element.blocks.forEach((block) => {
      server.addLoot(new CustomBlockLoot(block, element.loot_table));
    });
  });
  TrophyBundleEvents.registryLoot();
}
