/**
 * @module server/registry/item
 * @category Registry Bus
 */
import { AdditionalMaterialSystem } from "../item/AdditionalMaterial";
import { AdventurerNote } from "../item/AdventurerNote";

/**
 * 注册物品系统
 */
export function registryItemSystems() {
  new AdventurerNote("hiddenyears:adventurer_note").registry();
  new AdditionalMaterialSystem();
}
