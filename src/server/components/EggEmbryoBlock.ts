import { system } from "@minecraft/server";
import {
  consumeEquipmentAmount,
  EventList,
  getEquipmentItem
} from "@occultus/api";

type EggEmbryoBlockParams = {
  transform_to: string;
  transform_item: string;
  particle?: string;
  tips?: string[];
};

export class EggEmbryoBlockComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.blockComponentRegistry.registerCustomComponent(componentName, {
        onPlayerInteract(arg0, arg1) {
          const { player, block, dimension } = arg0;
          const parmas = arg1.params as EggEmbryoBlockParams;
          if (!player) return;
          if (getEquipmentItem(player)?.typeId !== parmas.transform_item) {
            if (!parmas.tips || parmas.tips.length === 0) return;
            const list = new EventList([]);
            parmas.tips.forEach((str) => {
              list.data.push({
                weight: 10,
                event: () => {
                  player.sendMessage({ translate: str });
                }
              });
            });
            list.call();
            return;
          }
          block.setType(parmas.transform_to);
          consumeEquipmentAmount(player, 1);
          dimension.spawnParticle(
            parmas.particle ?? "minecraft:crop_growth_emitter",
            block.location
          );
        }
      });
    });
  }
}
