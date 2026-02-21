import { Player, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { WayStone } from "../server/block/WayStone";
import { Color, FormLike, toVec3 } from "@occultus/api";

export class WayStoneForm extends FormLike {
  display(player: Player, backTo: FormLike[]): void {
    const list = WayStone.getWayStoneList(player);
    if (list.length === 0) {
      player.sendMessage({
        rawtext: [{ text: Color.gray }, { translate: "ui.waystone.empty" }]
      });
      return;
    }
    const form = new ActionFormData()
      .title({ translate: "ui.waystone.title" })
      .body({ translate: "ui.waystone.body" })
      .button({ translate: "gui.delete" }, "textures/ui/cancel");
    list.forEach((wayStone) => {
      form.button(wayStone.name, wayStone.icp);
    });
    form.show(player).then((result) => {
      if (result.canceled) return this.quit(player, backTo);
      if (result.selection === undefined) return this.quit(player, backTo);
      if (result.selection === 0) {
        return this.jumpTo(player, new WayStoneDeleteForm(), backTo);
      }
      const selection = list[result.selection - 1];
      player.teleport(
        toVec3(selection.loc[0], selection.loc[1] + 1, selection.loc[2]),
        { dimension: world.getDimension(selection.dim) }
      );
      return this.quit(player, backTo);
    });
  }
}

export class WayStoneDeleteForm extends FormLike {
  display(player: Player, backTo: FormLike[]): void {
    const list = WayStone.getWayStoneList(player);
    const form = new ActionFormData()
      .title({ translate: "gui.delete" })
      .body({ translate: "ui.waystone.delete.body" });
    list.forEach((wayStone) => {
      form.button(wayStone.name, wayStone.icp);
    });
    form.show(player).then((result) => {
      if (result.canceled) return this.quit(player, backTo);
      if (result.selection === undefined) return this.quit(player, backTo);
      WayStone.removeWayStone(player, toVec3(...list[result.selection].loc));
      return this.quit(player, backTo);
    });
  }
}
