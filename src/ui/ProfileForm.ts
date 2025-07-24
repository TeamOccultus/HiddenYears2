import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { CreditsForm } from "./CreditsForm";
import { HiddenYears2Credits } from "../data/credits";
import { CopyrightForm } from "./CopyrightForm";
import { ArtifactForm } from "@starock/artifact";

export class ProfileForm {
  static display(player: Player): void {
    const form = new ActionFormData()
      .title({ translate: "ui.profile.title" })
      .body({ translate: "ui.profile.body" });
    form
      .divider()
      .label({ translate: "ui.profile.game" })
      .button({ translate: "ui.artifact" }, "textures/items/diamond_badge")
    form
      .divider()
      .label({ translate: "ui.profile.about" })
      .button({ translate: "ui.profile.copyright" }, "textures/items/book_written")
      .button({ translate: "ui.profile.credits" }, "textures/ui/credits_hat");
    form.show(player).then((result) => {
      if (result.canceled) return;
      if (result.selection === undefined) return;
      if (result.selection === 0) {
        ArtifactForm.display(player);
      }
      if (result.selection === 1) {
        CopyrightForm.display(player);
      }
      if (result.selection === 2) {
        CreditsForm.display(player, HiddenYears2Credits);
      }
    });
  }
}
