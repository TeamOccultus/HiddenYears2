import {
  BlockRegistries,
  BlockWithDestroyCondition,
  FoodMaterial,
  InteractableBlock,
  ItemRegistries,
  OreBlock,
  ToolMaterial,
  WeaponMaterial,
} from "@occultus/api";
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
  const [item, block] = [new ItemRegistries(), new BlockRegistries()];
  new OreTypeComponent("hiddenyears:ore_type");
  new ToolTypeComponent("hiddenyears:tool_type");
  new WeaponTypeComponent("hiddenyears:weapon_type");
  new CrossbowComponent("hiddenyears:custom_crossbow");
  new ArrowPresentComponent("hiddenyears:arrow_present");
  new TrophyBundleComponent("hiddenyears:trophy_bundle");
  new ExpFoodComponent("hiddenyears:exp_food");
  new CoinComponent("hiddenyears:coin");
  item.add(new FoodMaterial("hiddenyears:effective_food"));
  item.add(new ToolMaterial("hiddenyears:custom_tool"));
  item.add(new WeaponMaterial("hiddenyears:custom_weapon"));
  block.add(new InteractableBlock("hiddenyears:interactable"));
  block.add(new OreBlock("hiddenyears:custom_ore"));
  block.add(new BlockWithDestroyCondition("hiddenyears:destroy_condition"));
  item.register();
  block.register();
}
