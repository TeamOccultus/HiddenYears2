import {
  BlockEntity,
  BlockWithEntity,
  consumeAmount,
  consumeEquipmentAmount,
  setEquipmentItem,
  toVec3,
  Vector3Utils,
} from "@occultus/api";
import {
  DataDrivenEntityTriggerAfterEvent,
  ItemStack,
  PlayerInteractWithBlockAfterEvent,
  system,
} from "@minecraft/server";
import { ComplexPotionRecipeManager } from "../recipe/complexPotion/ComplexPotionRecipeManager";
import { ComplexPotionRecipeType } from "../recipe/complexPotion/ComplexPotionRecipeType";


function setLore(item: ItemStack, recipe: ComplexPotionRecipeType) {
  let lore = item.getLore();
  if (lore.length === 0) {
    item.setLore([
      "§r§9状态效果：",
      `§r§f${recipe.effect} ${recipe.amplifier + 1} (${recipe.duration / 20}秒)`,
    ]);
    return;
  }
  lore.push(
    `§r§f${recipe.effect} ${recipe.amplifier + 1} (${recipe.duration / 20}秒)`,
  );
  item.setLore(lore);
}

export class MagicBrewingStand extends BlockWithEntity {
  constructor() {
    super(
      "hiddenyears:magic_brewing_stand",
      "hiddenyears:magic_brewing_stand",
      "hiddenyears:magic_brewing_stand_tick",
    );
  }
  onInteract(event: PlayerInteractWithBlockAfterEvent): void {
    // Basic check
    const [item, entityData, player, block] = [
      event.beforeItemStack,
      this.getBlockEntityData(event.block),
      event.player,
      event.block,
    ];
    if (!item) return;
    if (!entityData) return;
    const filledItem = BlockEntity.getStoredItem(entityData);
    if (Array.isArray(filledItem)) return;

    // When empty: add ingredient
    if (!filledItem) {
      if (!ComplexPotionRecipeManager.ingredients.includes(item?.typeId)) {
        player.sendMessage({
          translate: "message.hiddenyears:not_a_ingredient",
        });
        return;
      }
      BlockEntity.storeItem(new ItemStack(item.typeId), entityData);
      consumeEquipmentAmount(player, 1);
      player.playSound("fall.stone");
      return;
    }

    if (item?.hasTag("hiddenyears:complex_basic")) {
      const recipe = ComplexPotionRecipeManager.getRecipe(filledItem.typeId);
      if (!recipe) return;
      if (!ComplexPotionRecipeManager.canBeAdded(recipe, item)) return;
      console.log("canBeAdded");
      const result = ComplexPotionRecipeManager.getResultItem(item, recipe);
      setLore(result, recipe);
      consumeEquipmentAmount(player, 1);
      system.waitTicks(10).then(() => {
        player.dimension.spawnItem(
          result,
          Vector3Utils.add(block.location, toVec3(0, 1, 0)),
        );
        player.playSound("random.potion.brewed");
        BlockEntity.clearStoredItem(entityData);
      });
    }
  }
  onTick(args: DataDrivenEntityTriggerAfterEvent): void {
    const entityData = BlockEntity.getData(args.entity);
    if (!entityData) return;
    const filledItem = BlockEntity.getStoredItem(entityData);
    if (!filledItem) return;
    if (Array.isArray(filledItem)) return;
    const { x, y, z } = entityData.block.location;
    entityData.entity.dimension.spawnParticle(filledItem.typeId, {
      x: x,
      y: y + 1,
      z: z,
    });
  }
}
