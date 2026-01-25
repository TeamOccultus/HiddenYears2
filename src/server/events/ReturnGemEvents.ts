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
  Color,
} from "@occultus/api";
import { ReturnGemParam } from "../components/ReturnGemComponent/Params";
import { MessageFormData } from "@minecraft/server-ui";

export class ReturnGemEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const { source: player, itemStack } = arg0;
    const p = arg1.params as ReturnGemParam;
    if (p.back_home) {
      const home = player.getSpawnPoint();
      if (!home?.x) {
        player.sendMessage({
          rawtext: [
            { text: Color.gray },
            { translate: "message.hiddenyears:cannot_find_home" },
          ],
        });
        return;
      }
      consumeEquipmentAmount(player, 1);
      player.teleport(toVec3(home.x, home.y, home.z), {
        dimension: home.dimension,
      });
      player.playSound(p.sound_event ?? "mob.endermen.portal");
      return;
    }
    if (p.location) {
      consumeEquipmentAmount(player, 1);
      player.teleport(toVec3(p.location[0], p.location[1], p.location[2]), {
        dimension: world.getDimension(p.dimension ?? "minecraft:overworld"),
      });
      player.playSound(p.sound_event ?? "mob.endermen.portal");
      return;
    }
    if (itemStack.getDynamicProperty("hiddenyears:location")) {
      const dim = itemStack.getDynamicProperty(
        "hiddenyears:dimension",
      ) as string;
      const location = itemStack.getDynamicProperty(
        "hiddenyears:location",
      ) as Vector3;
      consumeEquipmentAmount(player, 1);
      player.teleport(location, { dimension: world.getDimension(dim) });
      player.playSound(p.sound_event ?? "mob.endermen.portal");
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
