import { AdditionalMaterialSystem } from "../item/AdditionalMaterial";
import { AdventurerNote } from "../item/AdventurerNote";

export function registryItemSystems() {
  new AdventurerNote("hiddenyears:adventurer_note").registry();
  new AdditionalMaterialSystem()
}
