import { system } from "@minecraft/server";
import { CoinEvents } from "../../events/CoinEvents";

/**
 * @deprecated 请使用 MagicEnergySourceComponent 实现相关功能
 */
export class CoinComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          CoinEvents.onUse(arg0, arg1);
        }
      });
    });
  }
}
