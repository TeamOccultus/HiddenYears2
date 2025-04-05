import {
  ItemCompleteUseAfterEvent,
  ItemStack,
  system,
  world,
} from "@minecraft/server";
import { EffectData } from "../core";
import { applyEffectData } from "../utils/entity";

/**
 * 在脚本层面定义一个食品
 * @example
 * const food = new Food("minecraft:apple", [{ type: "minecraft:health_boost", duration: 1000, amplifier: 1 }])
 *
 * food.subscribe();
 */
export class Food {
  protected eatEvent?: (arg: ItemCompleteUseAfterEvent) => void;
  /**
   * @param typeId 物品的 ID
   * @param statusEffects 玩家食用该食品后产生的状态效果
   * @param eatEvent 玩家食用该食品后触发的事件
   */
  constructor(
    readonly typeId: string,
    public statusEffects?: EffectData[]
  ) {}
  /**
   * 当玩家食用该食品后触发的事件
   * @param eatEvent 事件回调
   */
  onEat(eatEvent: (arg: ItemCompleteUseAfterEvent) => void) {
    this.eatEvent = eatEvent;
  }
  /**
   * 监听该食物相关事件
   */
  subscribe(): void {
    world.afterEvents.itemCompleteUse.subscribe((event) => {
      const [player, item] = [event.source, event.itemStack];
      if (!(item.typeId === this.typeId)) {
        return;
      }
      if (this.statusEffects) {
        applyEffectData(player, this.statusEffects);
      }
      if (this.eatEvent) {
        this.eatEvent(event);
      }
    });
  }
  /**
   * 将该食品注册为自定义物品组件
   */
  register() {
    system.beforeEvents.startup.subscribe((init) => {
      init.itemComponentRegistry.registerCustomComponent(this.typeId, {
        onConsume(arg) {
          if (this.statusEffects) {
            applyEffectData(arg.source, this.statusEffects);
          }
          if (this.eatEvent) {
            this.eatEvent(arg);
          }
        },
      });
    });
  }
}
