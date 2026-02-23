import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  ItemComponentUseOnEvent,
  Player,
  system,
  Vector3,
  world
} from "@minecraft/server";
import {
  setEquipmentItem,
  consumeEquipmentAmount,
  toVec3,
  Color
} from "@occultus/api";
import { ReturnGemParams } from "../components/ReturnGemComponent/Params";
import { MessageFormData, ModalFormData } from "@minecraft/server-ui";
import { WayStoneForm } from "../../ui/WayStoneForm";
import { WayPoint } from "../../core/WayPoint";

const waystoneIcons = [
  "textures/items/waystone",
  "textures/ui/waystone_chest",
  "textures/ui/waystone_home",
  "textures/ui/waystone_tower"
];

export class ReturnGemEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const p = arg1.params as ReturnGemParams;
    if (p.bind_to === "data_driven") {
      this.onBindtoDataDriven(arg0, arg1);
    }
    if (p.bind_to === "home") {
      this.onBindtoHome(arg0, arg1);
    }
    if (p.bind_to === "script") {
      this.onBindtoScript(arg0, arg1);
    }
    if (p.bind_to === "waystone") {
      this.onBindtoWaystone(arg0, arg1);
    }
  }
  static onUseOn(
    arg0: ItemComponentUseOnEvent,
    arg1: CustomComponentParameters
  ) {
    const {
      source: player,
      usedOnBlockPermutation: block,
      block: newBlock
    } = arg0;
    const p = arg1.params as ReturnGemParams;
    if (!(player instanceof Player)) return;
    if (p.bind_to !== "waystone") return;
    if (!block.hasTag("hiddenyears:waystone")) return;
    if (WayPoint.hasWayPoint(player, newBlock.location)) {
      player.sendMessage({
        rawtext: [
          { text: Color.gray },
          { translate: "message.hiddenyears:waystone_already_set" }
        ]
      });
      return;
    }
    new ModalFormData()
      .title({ translate: "ui.waystone.title" })
      .textField(
        { translate: "ui.waystone.set_name" },
        { translate: "ui.waystone.set_name.desc" },
        { defaultValue: "My WayPoint!" }
      )
      .dropdown(
        { translate: "ui.waystone.select_icon" },
        [
          { translate: "ui.waystone.icon_default" },
          { translate: "ui.waystone.icon_chest" },
          { translate: "ui.waystone.icon_home" },
          { translate: "ui.waystone.icon_tower" }
        ],
        {
          defaultValueIndex: 0
        }
      )
      .textField(
        { translate: "ui.waystone.set_icon" },
        { translate: "ui.waystone.set_icon.desc" }
      )
      .submitButton({ translate: "gui.ok" })
      .show(player)
      .then((response) => {
        let [name, selected, iconPath] = response.formValues;
        if (typeof selected !== "number") selected = 0;
        let icon: string = waystoneIcons[selected];
        if (typeof name !== "string") {
          name = "My WayPoint!";
        }
        if (iconPath && typeof iconPath === "string") icon = iconPath;
        WayPoint.addWayStone(player, {
          name: name,
          loc: [newBlock.location.x, newBlock.location.y, newBlock.location.z],
          dim: newBlock.dimension.id,
          icp: icon
        });
        player.sendMessage({
          rawtext: [
            { text: Color.gray },
            { translate: "message.hiddenyears:waystone_set", with: [name] }
          ]
        });
      });
  }
  static onBindtoDataDriven(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const { source: player, itemStack } = arg0;
    const p = arg1.params as ReturnGemParams;
    consumeEquipmentAmount(player, 1);
    player.teleport(toVec3(p.location[0], p.location[1], p.location[2]), {
      dimension: world.getDimension(p.dimension ?? "minecraft:overworld")
    });
    player.playSound(p.sound_event ?? "mob.endermen.portal");
    return;
  }
  static onBindtoHome(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const { source: player, itemStack } = arg0;
    const p = arg1.params as ReturnGemParams;
    const home = player.getSpawnPoint();
    if (!home?.x) {
      player.sendMessage({
        rawtext: [
          { text: Color.gray },
          { translate: "message.hiddenyears:cannot_find_home" }
        ]
      });
      return;
    }
    consumeEquipmentAmount(player, 1);
    player.teleport(toVec3(home.x, home.y, home.z), {
      dimension: home.dimension
    });
    player.playSound(p.sound_event ?? "mob.endermen.portal");
    return;
  }
  static onBindtoScript(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const { source: player, itemStack } = arg0;
    const p = arg1.params as ReturnGemParams;
    if (itemStack.getDynamicProperty("hiddenyears:location")) {
      const dim = itemStack.getDynamicProperty(
        "hiddenyears:dimension"
      ) as string;
      const location = itemStack.getDynamicProperty(
        "hiddenyears:location"
      ) as Vector3;
      consumeEquipmentAmount(player, 1);
      player.teleport(location, { dimension: world.getDimension(dim) });
      player.playSound(p.sound_event ?? "mob.endermen.portal");
      return;
    } else {
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
            player.dimension.id
          );
          itemStack.setLore([
            { text: "" },
            { translate: "ui.return_gem.location" },
            {
              text: `§r§f${Math.round(player.location.x)}, ${Math.round(player.location.y)}, ${Math.round(player.location.z)}`
            }
          ]);
          system.waitTicks(10).then(() => {
            setEquipmentItem(player, itemStack);
          });
        }
      });
      return;
    }
  }
  static onBindtoWaystone(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const { source: player } = arg0;
    new WayStoneForm().display(player, []);
  }
}
