/**
 * @module server/initialize
 * @category Initialize
 */
import { ModInitializer } from "@starock/core";
import { registryItemSystems } from "./registry/item";
import { registryComponents } from "./registry/components";
import { registryMusicDisc } from "./registry/record";
import { registryCustomRecipe } from "./registry/recipe";
import { registryCommands } from "./registry/commands";

/**
 * 初始化模组脚本环境以及其他实例
 */
export function initialize() {
  new ModInitializer(
    "hiddenyears",
    "Hidden Years²: Governor at the Skyline",
    "3.0.0-alpha.2"
  );
  registryCommands();
  registryCustomRecipe();
  registryItemSystems();
  registryComponents();
  registryMusicDisc();
}
