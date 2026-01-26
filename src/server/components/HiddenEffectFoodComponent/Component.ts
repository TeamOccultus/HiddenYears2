import { Player, system } from "@minecraft/server";
import { HiddenEffectFoodParams } from "./Params";
import { HiddenEffectFoodEvent } from "../../events/HiddenEffectFoodEvent";

/**
 * 为食物添加食用后的自定义模拟效果
 */
export class HiddenEffectFoodComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onConsume(arg0, arg1) {
          const { itemStack } = arg0;
          if (!itemStack) return;
          HiddenEffectFoodEvent.onConsume(arg0, arg1);
        },
      });
    });
  }
}
