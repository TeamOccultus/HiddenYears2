import { Player, RawMessage } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

export class EncyclopediaEntry {}

export class Encyclopedia {
  constructor(
    readonly id: string,
    public name: string | RawMessage,
    public description: string | RawMessage
  ) {}
  entries: EncyclopediaEntry[] = [];
  display(player: Player) {
    const form = new ActionFormData().title(this.name).body(this.description);
    this.entries.forEach((entry) => {});
    form.button({ translate: "gui.cancle" });
    form.show(player).then((response) => {
      return;
    });
  }
}
