import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  system
} from "@minecraft/server";
import { consumeEquipmentAmount } from "@occultus/api";
import { MagicEnergy } from "../../../core/MagicEnergy";
import { MagicEnergyParams } from "./Params";

export class MagicEnergyComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          itemOnUse(arg0, arg1);
        }
      });
    });
  }
}

function itemOnUse(
  arg0: ItemComponentUseEvent,
  arg1: CustomComponentParameters
) {
  const { source, itemStack } = arg0;
  const p = arg1.params as MagicEnergyParams;
  let num: number = 1;
  if (source.isSneaking) num = itemStack.amount;
  consumeEquipmentAmount(source, num);
  source.onScreenDisplay.setActionBar({
    translate: "message.hiddenyears:ucv_add",
    with: [(p.magic_energy * num).toString()]
  });
  MagicEnergy.add(source, p.magic_energy * num);
}
