import { BlockWithEntity } from "../../utils/blockEntity/BlockWithEntity";
import { BlockEntity } from "../../utils/blockEntity/BlockEntity";
import {
  Block,
  ItemStack,
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
      this.getBlockEntityData(event.block),
      event.player,
    ];
    if (!item) return;
    if (!entityData) return;
    const filledItem = BlockEntity.getStoredItem(entityData);
    if(Array.isArray(filledItem)) return;
    console.warn(filledItem?.typeId);
    if (!filledItem) {
      if (!CrusherRecipeManager.ingredients.includes(item?.typeId)) {
        player.sendMessage({ translate: "hy.message.cant_be_crushed" });
        return;
      }
      BlockEntity.storeItem(new ItemStack(item.typeId), entityData);
      item.amount = item.amount - 1;
      EntityUtils.setEquipmentItem(player, item);
      player.playSound("fall.stone");
      return;
    }
    if (item?.hasTag("minecraft:is_pickaxe")) {
      const output = CrusherRecipeManager.getResult(filledItem.typeId);
      if (!output) return;
      player.dimension.spawnItem(
        output,
        Vector3Utils.add(event.block.location, { x: 0, y: 1, z: 0 })
      );
      player.playSound("random.anvil_use")
      BlockEntity.clearStoredItem(entityData);
    }
  }
}
