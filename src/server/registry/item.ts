/**
 * @module server/registry/item
 * @category Registry Bus
 */
import { AdditionalMaterialSystem } from "../../core/AdditionalMaterial";
import { AdventurerNote } from "../../core/AdventurerNote";

/**
 * 注册物品系统
 */
export function registryItemSystems() {
  new AdventurerNote("hiddenyears:adventurer_note").registry();
  new AdditionalMaterialSystem();
}
