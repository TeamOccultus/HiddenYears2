import { PlayerInteractWithBlockAfterEvent } from "@minecraft/server";
import { BlockEntity, BlockWithEntity, EntityUtils } from "@starock/entity";
import { MSTRecipeManager } from "../recipe/magicSmithingTable/MSTRecipeManager";
import { Vector3Utils } from "@starock/math";

export class MagicSmithingTable extends BlockWithEntity {
  constructor() {
    super(
      "hiddenears:magic_smithing_table",
      "hiddenyears:magic_smithing_table"
    );
  }
  onInteract(event: PlayerInteractWithBlockAfterEvent): void {
    const [item, entityData, player] = [
      event.beforeItemStack,
      this.getBlockEntityData(event.block),
      event.player,
    ];
    const baseItem = BlockEntity.getStoredItem(entityData);
    if (Array.isArray(baseItem)) return;
    if (!baseItem) {
      if (!MSTRecipeManager.base.includes(item.typeId)) {
        player.onScreenDisplay.setActionBar({
          translate: "message.hiddenyears:not_a_base_item",
        });
        return;
      }
      BlockEntity.storeItem(item, entityData);
      item.amount = item.amount - 1;
      EntityUtils.setEquipmentItem(player, item);
      return;
    }

    const recipe = MSTRecipeManager.findRecipe(baseItem, item);
    if (!recipe) {
      player.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:recipe_not_found",
      });
      return;
    }
    player.dimension.spawnItem(
      MSTRecipeManager.getResult(recipe,baseItem),
      Vector3Utils.add(event.block.location, { x: 0, y: 1, z: 0 })
    );
    player.playSound("smithing_table.use");
    BlockEntity.clearStoredItem(entityData);
    item.amount = item.amount - 1;
    EntityUtils.setEquipmentItem(player, item);
  }
}
