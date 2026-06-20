import { Player } from "@minecraft/server";
import { MessageBox, MessageFormData } from "@minecraft/server-ui";
import { Format } from "@occultus/api";

export class WarningForm {
  static display(player: Player) {
    const form = new MessageBox(player, {
      translate: "ui.warn"
    })
      .body({
        rawtext: [
          { translate: "ui.warn.desc_1" },
          { text: "\n\n" },
          { translate: "ui.warn.desc_2" }
        ]
      })
      .button1({
        translate: "gui.confirm"
      })
      .button2({
        translate: "gui.cancel"
      });
    return form.show();
  }
}
