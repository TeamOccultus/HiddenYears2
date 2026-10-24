import { Player, RawMessage } from "@minecraft/server";
import { Color, Format, ModManager, WelcomeNotification } from "@occultus/api";

export function registerMessage() {
  new WelcomeNotification((player: Player) => {
    if (player.hasTag("hiddenyears:watch_welcome")) {
      const rawtexts: RawMessage[] = [
        { translate: "message.hiddenyears:welcome", with: [player.name] }
      ];
      const version = ModManager.getInitializer().getVersion();
      if (version.includes("alpha") || version.includes("beta")) {
        rawtexts.push(
          { text: Format.newLine },
          { text: Color.red },
          { translate: "message.hiddenyears:is_beta" }
        );
      }
      return {
        rawtext: rawtexts
      };
    }
    return "";
  });
}
