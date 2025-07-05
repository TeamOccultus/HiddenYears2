import { Food } from "@starock/item";
import { OreBlock, InteractableBlock } from "@starock/block";
import { OreTypeComponent } from "../components/OreTypeComponent";

/**
 * 注册自定义组件
 */
export function registryComponents() {
  new InteractableBlock("hiddenyears:interact");
  new OreTypeComponent("hiddenyears:ore_type");
  new Food("hiddenyears:effective_food");
  new OreBlock("hiddenyears:custom_ore");
}
