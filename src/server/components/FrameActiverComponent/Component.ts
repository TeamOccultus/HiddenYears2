import { system } from "@minecraft/server";
import { FrameEvents } from "../../events/FrameEvents";

export class FrameActiverComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUseOn(arg0, arg1) {
          FrameEvents.onUseOn(arg0, arg1);
        }
      });
    });
  }
}
