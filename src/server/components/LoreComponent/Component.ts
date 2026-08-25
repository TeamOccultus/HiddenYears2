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
      if (!arg.itemStack.hasComponent(this.componentName)) return;
      if (arg.itemStack.getLore().length > 0) return;
      const { itemStack, slot, player } = arg;
      const params = arg.itemStack.getComponent(this.componentName)
        .customComponentParameters.params as LoreComponentParams;
      const [newItem, lore] = [itemStack, itemStack.getRawLore()];
      params.tooltips.forEach((str, index) => {
        if (index === 0 && !params.remove_first_blank_line) {
          lore.push({ text: "§r" });
        }
        lore.push({ translate: str });
      });
      newItem.setLore(lore);
      getContainer(player).setItem(slot, newItem);
    });
  }
}
