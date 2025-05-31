import { DestroyConditionComponent, FoodCompoent, OreComponent } from "@starock/component";
import {OreTypeComponent} from "../components/OreTypeComponent"

/**
 * 注册自定义组件
 */
export function registryComponents() {
  new OreTypeComponent("hiddenyears:ore_type");
  new FoodCompoent("hiddenyears:effective_food");
  new DestroyConditionComponent("hiddenyears:destroy_condition");
  new OreComponent("hiddenyears:custom_ore");
}
