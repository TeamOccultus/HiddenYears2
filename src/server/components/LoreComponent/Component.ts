import { system, world } from "@minecraft/server";
import { LoreComponentParams } from "./Params";
import { getContainer, pushLore } from "@occultus/api";

export class LoreComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {});
    });
    world.afterEvents.playerInventoryItemChange.subscribe((arg) => {
      if (!arg.itemStack) return;
      if (!arg.itemStack.hasTag("starock:lore")) return;
      if (arg.itemStack.getDynamicProperty("starock:has_lore")) return;
      const { itemStack, slot, player } = arg;
      const params = arg.itemStack.getComponent(this.componentName)
        .customComponentParameters.params as LoreComponentParams;
      if (!params) {
        console.warn(
          `The item(${itemStack.typeId}) has the lore tag but cannot find lore component!`
        );
        return;
      }
      const [newItem, lore] = [itemStack, itemStack.getRawLore()];
      params.tooltips.forEach((str, index) => {
        if (index === 0) {
          lore.push({ text: "§r" });
        }
        lore.push({ translate: str });
      });
      newItem.setDynamicProperty("starock:has_lore", true);
      newItem.setLore(lore);
      getContainer(player).setItem(slot, newItem);
    });
  }
}
