import {
  FoodMaterial,
  ItemRegistries,
  ToolMaterial,
  WeaponMaterial,
} from "@starock/item";
import { OreBlock, InteractableBlock, BlcokRegistries, BlockWithDestroyCondition } from "@starock/block";
import { OreTypeComponent } from "../components/OreTypeComponent";
import { ToolTypeComponent } from "../components/ToolTypeComponent";
import { WeaponTypeComponent } from "../components/WeaponTypeComponent";
import { CrossbowComponent } from "../components/CrossbowComponent";
import { ArrowPresentComponent } from "../components/ArrowPresentComponent";
import { TrophyBundleComponent } from "../components/TrophyBundleComponent/Component";
import { CoinComponent } from "../components/CoinComponent/Component";
import { ExpFoodComponent } from "../components/ExpFoodComponent/Component";

/**
 * 注册自定义组件
 */
export function registryComponents() {
  const [item, block] = [new ItemRegistries(), new BlcokRegistries()];
  new OreTypeComponent("hiddenyears:ore_type");
  new ToolTypeComponent("hiddenyears:tool_type");
  new WeaponTypeComponent("hiddenyears:weapon_type");
  new CrossbowComponent("hiddenyears:custom_crossbow");
  new ArrowPresentComponent("hiddenyears:arrow_present");
  new TrophyBundleComponent("hiddenyears:trophy_bundle");
  new ExpFoodComponent("hiddenyears:exp_food");
  new CoinComponent("hiddenyears:coin");
  item.register(
    "hiddenyears:effective_food",
    new FoodMaterial("hiddenyears:effective_food")
  );
  item.register(
    "hiddenyears:custom_tool",
    new ToolMaterial("hiddenyears:custom_tool")
  );
  item.register(
    "hiddenyears:custom_weapon",
    new WeaponMaterial("hiddenyears:custom_weapon")
  );
  block.register(
    "hiddenyears:custom_interactable_block",
    new InteractableBlock("hiddenyears:interactable")
  );
  block.register(
    "hiddenyears:custom_ore",
    new OreBlock("hiddenyears:custom_ore")
  );
  block.register(
    "hiddenyears:destroy_condition",
    new BlockWithDestroyCondition("hiddenyears:destroy_condition")
  )
}
