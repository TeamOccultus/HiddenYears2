import { Player, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { WayStone } from "../server/block/WayStone";
import { Color, toVec3 } from "@occultus/api";

export class WayStoneForm {
  static display(player: Player): void {
    const list = WayStone.getWayStoneList(player);
    if (list.length === 0) {
      player.sendMessage({
        rawtext: [{ text: Color.gray }, { translate: "ui.waystone.empty" }]
      });
      return;
    }
    const form = new ActionFormData()
      .title({ translate: "ui.waystone.title" })
      .body({ translate: "ui.waystone.body" });
    list.forEach((wayStone) => {
      form.button(wayStone.name, wayStone.icp);
    });
    form.show(player).then((result) => {
      if (result.canceled) return;
      if (result.selection === undefined) return;
      const selection = list[result.selection];
      player.teleport(
        toVec3(selection.loc[0], selection.loc[1] + 1, selection.loc[2]),
        { dimension: world.getDimension(selection.dim) }
      );
    });
  }
}
