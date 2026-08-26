import { system } from "@minecraft/server";
import { WeaponEvent } from "../../events/WeaponEvent";

export class WeaponTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onHitEntity(arg0, arg1) {
          WeaponEvent.onHitEntity(arg0, arg1);
        },
      });
    });
  }
}
