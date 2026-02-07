import { system } from "@minecraft/server";
import { StructureEvents } from "../../events/StructureEvents";

export class StructurePlacerComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          StructureEvents.onUse(arg0, arg1);
        }
      });
    });
  }
}
