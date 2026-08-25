import { system, world } from "@minecraft/server";
import { StaffEvents } from "../../events/StaffEvents";
import { MagicEnergy } from "../../../core/MagicEnergy";
import { StaffParams } from "./Params";

export class StaffComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {});
    });
    world.beforeEvents.itemUse.subscribe((event) => {
      let { itemStack, source, cancel } = event;
      const staff = itemStack.getComponent(this.componentName);
      if (!staff) return;
      const p = staff.customComponentParameters.params as StaffParams;
      if (MagicEnergy.get(source) < p.magic_energy) {
        system.run(() => {
          source.onScreenDisplay.setActionBar({
            translate: "message:hiddenyears:need_ucv",
            with: [p.magic_energy.toString()]
          });
        });
        cancel = true;
        return;
      }
      system.run(() => {
        MagicEnergy.add(source, -p.magic_energy, false);
        StaffEvents.onRelease(event, staff.customComponentParameters);
      });
    });
  }
}
