import { Player } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { Format } from "@occultus/api";

export class WarningForm {
  static display(player: Player) {
    const form = new MessageFormData()
      .title({
        translate: "ui.warn"
      })
      .body({
        rawtext: [
          { translate: "ui.warn.desc_1" },
          { text: Format.newLine },
          { translate: "ui.warn.desc_1" }
        ]
      })
      .button1({
        translate: "gui.confirm"
      })
      .button2({
        translate: "gui.cancel"
      });

    return form.show(player)
  }
}
