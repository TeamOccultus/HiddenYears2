import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  system,
  Vector3,
  world,
} from "@minecraft/server";
import {
  setEquipmentItem,
  consumeEquipmentAmount,
  toVec3,
} from "@occultus/api";
import { ReturnGemParam } from "../components/ReturnGemComponent/Params";
import { MessageFormData } from "@minecraft/server-ui";

export class ReturnGemEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const { source: player, itemStack } = arg0;
    const p = arg1.params as ReturnGemParam;
    consumeEquipmentAmount(player, 1);
    if (p.location) {
      player.playSound(p.sound_event ?? "mob.endermen.portal");
      player.teleport(toVec3(p.location[0], p.location[1], p.location[2]), {
        dimension: world.getDimension(p.dimension ?? "minecraft:overworld"),
      });
      return;
    }
    if (itemStack.getDynamicProperty("hiddenyears:location")) {
      const dim = itemStack.getDynamicProperty(
        "hiddenyears:dimension",
      ) as string;
      const location = itemStack.getDynamicProperty(
        "hiddenyears:location",
      ) as Vector3;
      player.playSound(p.sound_event ?? "mob.endermen.portal");
      player.teleport(location, { dimension: world.getDimension(dim) });
      return;
    }
    const form = new MessageFormData()
      .title({ translate: "item.hiddenyears:return_gem" })
      .body({ translate: "ui.return_gem.body" })
      .button1({ translate: "gui.ok" })
      .button2({ translate: "gui.cancel" });
    form.show(player).then((response) => {
      if (response.selection === 0) {
        itemStack.setDynamicProperty("hiddenyears:location", player.location);
        itemStack.setDynamicProperty(
          "hiddenyears:dimension",
          player.dimension.id,
        );
        itemStack.setLore([
          { text: "" },
          { translate: "ui.return_gem.location" },
          {
            text: `§r§f${Math.round(player.location.x)}, ${Math.round(player.location.y)}, ${Math.round(player.location.z)}`,
          },
        ]);
        system.waitTicks(10).then(() => {
          setEquipmentItem(player, itemStack);
        });
      }
    });
  }
}
