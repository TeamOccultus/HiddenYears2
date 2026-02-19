import { Player } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { ProfileForm } from "./ProfileForm";
import { FormLike, OccultusCore, StarTenon } from "@occultus/api";

export class CopyrightForm extends FormLike {
  display(player: Player, backTo: FormLike[]) {
    const form = new MessageFormData()
      .title({ translate: "ui.profile.copyright" })
      .body({
        rawtext: [
          {
            text: "Copyright (c) 2025 Team Occultus, licensed under the HY-OSS License and CC BY-SA 4.0"
          },
          { text: "\n\n" },
          {
            translate:
              "See full license at https://codeberg.org/TeamOccultus/HiddenYears2/src/LICENSE"
          },
          { text: "\n\n" },
          {
            text: `Powered by:`
          },
          { text: "\n" },
          {
            text: `Occultus Core v${OccultusCore.version}`
          },
          { text: "\n" },
          {
            text: `Occultus SDK v${StarTenon.version}`
          },
          { text: "\n" },
          {
            text: `Occultus Emoji v1.2.0`
          }
        ]
      })
      .button1({ translate: "gui.back" })
      .button2({ translate: "gui.ok" });
    form.show(player).then((_response) => {
      this.quit(player, backTo);
    });
  }
}
