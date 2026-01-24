import { Player, system } from "@minecraft/server";
import { ComplexPotion } from "../../item/ComplexPotion";

export class ComplexPotionComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onConsume(arg0, arg1) {
          const { source, itemStack } = arg0;
          if (!itemStack) return;
          ComplexPotion.getPotionType(itemStack)?.forEach((potion) => {
            source.addEffect(potion.effect, potion.duration, {
              amplifier: potion.amplifier,
            });
          });
        },
      });
    });
  }
}
