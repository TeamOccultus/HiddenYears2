import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { parseCredits } from "../server/credits/parseCredits";
import { Credits } from "../server/credits/Credits";

export class CreditsForm {
  static display(player: Player, data: Credits) {
    const creditForm = new ActionFormData()
      .title({translate: "ui.credits"})
      .body(parseCredits(data))
      .button({ translate: "gui.back" });
    // @ts-ignore
    creditForm.show(player);
  }
}
