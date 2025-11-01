import { Player, system } from "@minecraft/server";
import { ExpFoodComponentParams } from "./Params";

export class ExpFoodComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onConsume(arg0, arg1) {
          const { source, itemStack } = arg0;
          if (!itemStack) return;
          const p = arg1.params as ExpFoodComponentParams;
          if(source instanceof Player){
            source.addExperience(p.exp)
            source.playSound(p.sound_event ?? "random.orb")
          }
        },
      });
    });
  }
}
