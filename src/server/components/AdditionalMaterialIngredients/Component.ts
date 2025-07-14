import { ItemStack, system, world } from "@minecraft/server";

export class AdditionalMaterialIngredientsComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {});
    });
  }
}
