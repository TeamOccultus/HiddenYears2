import { BlockEntity, BlockWithEntity, consumeAmount, setEquipmentItem, Vector3Utils } from "@occultus/api";
import {
  ItemStack,
  PlayerInteractWithBlockAfterEvent,
} from "@minecraft/server";
import { CrusherRecipeManager } from "../recipe/crusher/CrusherRecipeManager";

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
    if (Array.isArray(filledItem)) return;
    console.warn(filledItem?.typeId);
    if (!filledItem) {
      if (!CrusherRecipeManager.ingredients.includes(item?.typeId)) {
        player.sendMessage({ translate: "message.hiddenyears:cant_be_crushed" });
        return;
      }
      BlockEntity.storeItem(new ItemStack(item.typeId), entityData);
      const eqItem = consumeAmount(item, 1);
      setEquipmentItem(player, eqItem);
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
      player.playSound("random.anvil_use");
      BlockEntity.clearStoredItem(entityData);
    }
  }
}
