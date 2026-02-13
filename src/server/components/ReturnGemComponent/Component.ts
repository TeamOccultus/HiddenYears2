import { Player, system } from "@minecraft/server";
import { ComplexPotion } from "../../../core/ComplexPotion";
import { ReturnGemEvents } from "../../events/ReturnGemEvents";

export class ReturnGemComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          ReturnGemEvents.onUse(arg0, arg1);
        },
        onUseOn(arg0, arg1) {
          ReturnGemEvents.onUseOn(arg0, arg1);
        }
      });
    });
  }
}
