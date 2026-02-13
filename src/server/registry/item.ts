/**
 * @module server/registry/item
 * @category Registry Bus
 */
import { AdditionalMaterialSystem } from "../../core/AdditionalMaterial";
import { PlayerStory } from "../../core/PlayerStory";

/**
 * 注册物品系统
 */
export function registryItemSystems() {
  new PlayerStory("hiddenyears:adventurer_note").registry();
  new AdditionalMaterialSystem();
}
