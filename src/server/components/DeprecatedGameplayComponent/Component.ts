import { ItemStack, system, world } from "@minecraft/server";
import { getContainer, replaceItemStack } from "@occultus/api";
import { DeprecatedGameplayParams } from "./Params";

export class DeprecatedGameplayComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const [item, block] = [
        init.itemComponentRegistry,
        init.blockComponentRegistry
      ];
      item.registerCustomComponent(componentName, {});
      block.registerCustomComponent(componentName, {});
      world.afterEvents.playerSpawn.subscribe((event) => {
        const container = getContainer(event.player);
        let total: number = 0;
        for (let slot = 0; slot < container.size; slot++) {
          const itemStack: undefined | ItemStack = container.getItem(slot);
          if (!itemStack) continue;
          if (!itemStack.hasComponent(componentName)) continue;
          total++;
          const params = itemStack.getComponent(componentName)
            .customComponentParameters.params as DeprecatedGameplayParams;
          if (!params.replace_to) {
            container.setItem(slot);
            continue;
          }
          container.setItem(
            slot,
            new ItemStack(
              params.replace_to,
              params.replace_amount ?? itemStack.amount
            )
          );
        }
        console.log(
          `[HiddenYears] Deprecated Gameplay Check: ${total} items or blocks were replaced`
        );
        if (total > 0) {
          event.player.sendMessage({
            translate: "hiddenyears:message.deprecated_gameplay",
            with: [total.toString()]
          });
        }
      });
    });
  }
}
