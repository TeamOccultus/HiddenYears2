import { ItemComponentUseEvent, system } from "@minecraft/server";
import { dehydrationEffect } from "../effects/dehydration";
import { droughtEffect } from "../effects/drought";
import { setEquipmentItem } from "@occultus/api";

/**
 * **内部组件**
 *
 * 使物品获得雨之神的祝福的功能
 */
export class BlessingComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onUse(arg0, arg1) {
          onUseCallback(arg0);
        }
      });
    });
  }
}

function onUseCallback(arg0: ItemComponentUseEvent) {
  const player = arg0.source;
  droughtEffect.remove(player);
  dehydrationEffect.remove(player);
  setEquipmentItem(player);
  player.addTag("hy:immune_desert_debuff");
  player.onScreenDisplay.setActionBar({
    translate: "message.hiddenyears:immune_desert_debuff.get"
  });
  system.runTimeout(() => {
    if (player.isValid) {
      player.removeTag("hiddenyears:immune_desert_debuff");
      player.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:immune_desert_debuff.remove"
      });
    }
  }, 900);
}
