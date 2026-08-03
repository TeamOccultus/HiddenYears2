import { Player } from "@minecraft/server";
import { WelcomeNotification } from "@occultus/api";

export function registerMessage() {
  new WelcomeNotification((player: Player) => {
    return {
      rawtext: [
        { translate: "message.hiddenyears:welcome" }
        /*{ text: Format.newLine },
        { text: Color.red },
        { translate: "message.hiddenyears:is_beta" }*/
      ]
    };
  });
}