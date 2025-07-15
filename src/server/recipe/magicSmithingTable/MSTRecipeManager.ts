import { ItemStack, system } from "@minecraft/server";
import { MagicSmithingTableRecipe } from "./MSTType";
import { MSTAddtionData, MSTBaseData, MSTRecipesData } from "./MSTRecipeData";

export class MSTRecipeManager {
  static base: string[] = MSTBaseData;
  static addtions: string[] = MSTAddtionData;
  static recipes: MagicSmithingTableRecipe[] = MSTRecipesData;
  static getResult(recipe: MagicSmithingTableRecipe, base: ItemStack): ItemStack {
    if (recipe.type === "transform") {
      const result = new ItemStack(recipe.output);
      if(recipe.lore) result.setLore([recipe.lore]);
      return result;
    }
    const itemStack = new ItemStack(recipe.base);
    if(itemStack.getComponent("minecraft:durability") && base.getComponent("minecraft:durability")) {
      itemStack.getComponent("minecraft:durability").damage = base.getComponent("minecraft:durability").damage
    }
    itemStack.setDynamicProperty("hiddenyears:additional_material_type", recipe.output);
    if(recipe.lore){ 
      itemStack.setLore([recipe.lore]);
    }
    return itemStack;
  }
  static addRecipe(recipe: MagicSmithingTableRecipe) {
    this.recipes.push(recipe);
    this.base.push(recipe.base);
    this.addtions.push(recipe.output);
  }
  static findRecipe(
    base: ItemStack,
    addition: ItemStack
  ): MagicSmithingTableRecipe | undefined {
    return this.recipes.find((recipe) => {
      return recipe.base === base.typeId && recipe.addition === addition.typeId;
    });
  }
  /**
   * 允许第三方插件添加新的碎石机配方
   * @example
   * /scriptevent hiddenyears:addMagicSmithingTableRecipe {"ingredient":"minecraft:brick_block","output":"minecraft:brick","amount":12}
   */
  static openToPlugin() {
    system.afterEvents.scriptEventReceive.subscribe((arg) => {
      if (arg.id !== "hiddenyears:addMSTRecipe") return;
      const data = JSON.parse(arg.message) as MagicSmithingTableRecipe;
      this.addRecipe(data);
      console.log(
        `[隐藏之年] 已添加新的魔法锻造台配方: ${data.base} + ${data.addition} -> ${data.output}`
      );
    });
  }
}
