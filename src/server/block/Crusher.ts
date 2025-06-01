import { BlockWithEntity } from "../../utils/blockEntity/BlockWithEntity";
import { BlockEntity } from "../../utils/blockEntity/BlockEntity";
import {
  Block,
  PlayerInteractWithBlockAfterEvent,
  world,
} from "@minecraft/server";
import { CrusherRecipeManager } from "../../data/recipe/CrusherRecipe";
import { EntityUtils } from "@starock/entity";
import { Vector3Utils } from "@minecraft/math";

export class Crusher extends BlockWithEntity {
  constructor() {
    super("hiddenyears:crusher", "hiddenyears:crusher");
  }
  onInteract(event: PlayerInteractWithBlockAfterEvent): void {
    const [item, entityData, player] = [
      event.beforeItemStack,
      this.getBlockEntity(event.block),
      event.player,
    ];
    if (!item) return;
    if (!entityData) return;
    const filledItem = BlockEntity.getStoredItem(entityData);
    if (!filledItem) {
      if (!CrusherRecipeManager.ingredients.has(item?.typeId)) {
        player.sendMessage({ translate: "hy.message.cant_be_crushed" });
        return;
      }
      BlockEntity.storeItem(item, entityData);
      return;
    }
    if (EntityUtils.getEquipmentItem(player)?.hasTag("minecraft:is_pickaxe")) {
      const storedItem = BlockEntity.getStoredItem(entityData);
      if (!storedItem) return;
      if (Array.isArray(storedItem)) return;
      const output = CrusherRecipeManager.getResult(storedItem.typeId);
      if (!output) return;
      player.dimension.spawnItem(
        output,
        Vector3Utils.add(event.block.location, { x: 0, y: 1, z: 0 })
      );
    }
  }
}
