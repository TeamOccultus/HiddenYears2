import { Player, RawMessage, world } from "@minecraft/server";
import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { UI } from "../common/ui";

export class EncyclopediaEntry extends UI {
  constructor(
    readonly id: string,
    public name: string | RawMessage,
    public description: string | RawMessage,
    public iconPath?: string
  ) {
    super(id);
  }
  display(player: Player, backTo?: UI[]) {
    const form = new MessageFormData()
      .title(this.name)
      .body(this.description)
      .button1({ translate: "gui.ok" })
      .button2({ translate: "gui.back" });
    form.show(player).then((response) => {
      if (response.selection === 1 && backTo) {
        backTo[0].display(player, backTo.slice(1));
        return;
      }
    });
  }
}

export class Encyclopedia extends UI {
  constructor(
    readonly id: string,
    public name: string | RawMessage,
    public description: string | RawMessage
  ) {
    super(id);
  }
  protected entries: EncyclopediaEntry[] = [];
  addEntry(entry: EncyclopediaEntry) {
    this.entries.push(entry);
  }
  display(player: Player, backTo?: UI[]) {
    const form = new ActionFormData().title(this.name).body(this.description);
    form.button({ translate: "gui.back" });
    this.entries.forEach((entry) => {
      form.button(entry.name, entry.iconPath);
    });
    form.show(player).then((response) => {
      if (response.selection === 0 && backTo) {
        backTo[0].display(player, backTo.slice(1));
        return;
      }
      if (response.selection > 0) {
        if(backTo) backTo.unshift(this);
        this.entries[response.selection - 1].display(player, backTo);
        return;
      }
    });
  }
  subscribe() {
    world.afterEvents.itemUse.subscribe((event) => {
      if (event.itemStack.typeId === this.id) {
        this.display(event.source);
      }
    })
  }
}
