import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { parseCredits } from "../server/credits/parseCredits";
import { Credits } from "../server/credits/Credits";
import { ProfileForm } from "./ProfileForm";

export class CreditsForm {
  static display(player: Player, data: Credits, backTo = false) {
    const creditForm = new ActionFormData()
      .title({ translate: "ui.credits" })
      .body(parseCredits(data))
      .button({ translate: "gui.back" });
    // @ts-ignore
    creditForm.show(player).then((response) => {
      if (backTo) ProfileForm.display(player);
    });
  }
}
