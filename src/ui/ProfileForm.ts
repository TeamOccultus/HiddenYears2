import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { CreditsForm } from "./CreditsForm";
import { CopyrightForm } from "./CopyrightForm";
import { ArtifactForm } from "@occultus/api";
import { book } from "../server/registry/task";
import { default as credits } from "../../config/credits.json";
import { UCVForm } from "./UCVForm";

export class ProfileForm {
  static display(player: Player): void {
    const form = new ActionFormData()
      .title({ translate: "ui.profile.title" })
      .body({
        rawtext: [
          { translate: "ui.profile.player_name", with: [player.name] },
          { text: "\n" },
          {
            translate: "ui.profile.player_level",
            with: [
              player.level.toString(),
              player.totalXpNeededForNextLevel.toString(),
            ],
          },
        ],
      });
    form
      .divider()
      .label({ translate: "ui.profile.game" })
      .button({ translate: "ui.task" }, "textures/items/task_book")
      .button({ translate: "ui.artifact" }, "textures/items/diamond_badge")
      .button({ translate: "ui.ucv" }, "textures/items/gold_coin");
    form
      .divider()
      .label({ translate: "ui.profile.about" })
      .button(
        { translate: "ui.profile.copyright" },
        "textures/items/book_written",
      )
      .button({ translate: "ui.profile.credits" }, "textures/ui/credits_hat");
    form.show(player).then((result) => {
      if (result.canceled) return;
      if (result.selection === undefined) return;
      if (result.selection === 0) {
        book.display(player);
      }
      if (result.selection === 1) {
        ArtifactForm.display(player);
        return;
      }
      if (result.selection === 2) {
        UCVForm.display(player, true);
        return;
      }
      if (result.selection === 3) {
        CopyrightForm.display(player);
        return;
      }
      if (result.selection === 4) {
        CreditsForm.display(player, credits);
        return;
      }
    });
  }
}
