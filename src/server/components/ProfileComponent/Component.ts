import { system } from "@minecraft/server";
import { ProfileForm } from "../../../ui/ProfileForm";

export class ProfileComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0) {
          ProfileForm.display(arg0.source);
        },
      });
    });
  }
}
