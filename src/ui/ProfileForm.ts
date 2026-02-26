import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { CopyrightForm } from "./CopyrightForm";
import { ArticleServerBindings, ArtifactForm, CreditsScreen, FormLike } from "@occultus/api";
import { taskCenter } from "../server/registry/task";
import { default as credits } from "../../config/credits.json";
import { StoreForm } from "./StoreForm";
import { jobCenter } from "../server/registry/job";
import { PlayerStory } from "../core/PlayerStory";
import { tutorialCenter } from "../server/registry/tutorial";

export class ProfileForm extends FormLike {
  display(player: Player, backTo: FormLike[]): void {
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
              player.totalXpNeededForNextLevel.toString()
            ]
          }
        ]
      });
    form
      .divider()
      .label({ translate: "ui.profile.game" })
      .button({ translate: "ui.task" }, "textures/items/task_book")
      .button({ translate: "ui.artifact" }, "textures/items/diamond_badge")
      .button({ translate: "ui.ucv" }, "textures/items/gold_coin")
      .button({ translate: "ui.job.title" }, "textures/items/legacy_staff");

    form
      .divider()
      .label({ translate: "ui.guide" })
      .button({ translate: "ui.article_center" }, "textures/items/lost_letter")
      .button({ translate: "ui.player_story" }, "textures/items/book_portfolio")
      .button({ translate: "tutorial.title" }, "textures/items/encyclopedia");
    form
      .divider()
      .label({ translate: "ui.profile.about" })
      .button(
        { translate: "ui.profile.copyright" },
        "textures/items/book_written"
      )
      .button({ translate: "ui.profile.credits" }, "textures/ui/credits_hat");
    form.show(player).then((result) => {
      if (result.canceled) return this.quit(player, backTo);
      if (result.selection === undefined) return this.quit(player, backTo);
      if (result.selection === 0) {
        this.jumpTo(player, taskCenter, backTo);
      }
      if (result.selection === 1) {
        this.jumpTo(player, new ArtifactForm(), backTo);
        return;
      }
      if (result.selection === 2) {
        this.jumpTo(player, new StoreForm(), backTo)
        return;
      }
      if (result.selection === 3) {
        this.jumpTo(player, jobCenter, backTo);
        return;
      }
      if (result.selection === 4) {
        const center = ArticleServerBindings.getCenter();
        this.jumpTo(player, center, backTo);
        return;
      }
      if (result.selection === 5) {
        this.jumpTo(player, new PlayerStory("temp"), backTo);
        return;
      }
      if (result.selection === 6) {
        this.jumpTo(player, tutorialCenter, backTo);
        return;
      }
      if (result.selection === 7) {
        this.jumpTo(player, new CopyrightForm(), backTo);
        return;
      }
      if (result.selection === 8) {
        CreditsScreen.display(
          player,
          "CREDITS of Hidden Years²: Governor at the Skyline",
          credits
        );
        return;
      }
    });
  }
}
