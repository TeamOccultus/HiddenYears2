import { Color, Format, WelcomeNotification } from "@occultus/api";

export function registryMessage() {
  new WelcomeNotification({
    rawtext: [
      { translate: "message.hiddenyears:welcome" },
      { text: Format.newLine },
      { text: Color.red },
      { translate: "message.hiddenyears:is_beta" },
    ],
  });
}
