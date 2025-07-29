import { system } from "@minecraft/server";


export class ExpFoodComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onConsume(arg0, arg1) {
          
        },
      });
    });
  }
}
