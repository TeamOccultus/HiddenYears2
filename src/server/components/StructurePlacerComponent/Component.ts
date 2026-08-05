import { system } from "@minecraft/server";
import { StructureEvents } from "../../events/StructureEvents";
import { StructurePlacerComponentParams } from "./Params";
import { WarningForm } from "../../../ui/WarningForm";

export class StructurePlacerComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          const p = arg1.params as StructurePlacerComponentParams;
          if (p.show_warning) {
            WarningForm.display(arg0.source).then((response) => {
              if (response.selection === undefined || response.selection === 2) return;
              if (response.selection === 1) StructureEvents.onUse(arg0, arg1);
            });
            return;
          }
          StructureEvents.onUse(arg0, arg1);
        }
      });
    });
  }
}
