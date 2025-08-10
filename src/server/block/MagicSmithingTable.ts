import {
  ItemStack,
  PlayerInteractWithBlockAfterEvent,
} from "@minecraft/server";
import {
  BlockEntity,
  BlockWithEntity,
  consumeAmount,
  setEquipmentItem,
  Vector3Utils,
} from "@occultus/api";
import { MSTRecipeManager } from "../recipe/magicSmithingTable/MSTRecipeManager";

export class MagicSmithingTable extends BlockWithEntity {
  constructor() {
    super(
      "hiddenyears:magic_smithing_table",
      "hiddenyears:magic_smithing_table"
    );
  }
  synchronizedStackData(from: ItemStack, to: ItemStack) {
    if (
      to.getComponent("minecraft:durability") &&
      from.getComponent("minecraft:durability")
    ) {
      to.getComponent("minecraft:durability").damage = from.getComponent(
        "minecraft:durability"
      ).damage;
    }
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
      const inputItem = new ItemStack(item.typeId);
      this.synchronizedStackData(item, inputItem);
      BlockEntity.storeItem(inputItem, entityData);
      const eqItem = consumeAmount(item, 1);
      setEquipmentItem(player, eqItem);
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
      MSTRecipeManager.getResult(recipe, baseItem),
      Vector3Utils.add(event.block.location, { x: 0, y: 1, z: 0 })
    );
    player.playSound("smithing_table.use");
    BlockEntity.clearStoredItem(entityData);
    const eqItem = consumeAmount(item, 1);
    setEquipmentItem(player, eqItem);
  }
}
