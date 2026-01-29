import { Player, RawMessage, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import {
  adventurerNoteBody,
  adventurerNoteTitle
} from "../../data/playerStory";

export class AdventurerNote {
  constructor(readonly id: string) {}
  display(player: Player, backTo?: AdventurerNote[]) {
    const contentForm = new ActionFormData()
      .title({ translate: "article.adventurer_note.title" })
      .body({
        rawtext: [
          { translate: "article.adventurer_note.content1" },
          { text: "\n" },
          { translate: "article.adventurer_note.content2" }
        ]
      })
      .button(
        { translate: "article.adventurer_note.chapter1.title" },
        "textures/items/feather"
      );
    // @ts-ignore
    contentForm.show(player).then((response) => {
      if (response.canceled || response.selection === undefined) {
        if (backTo) backTo[0].display(player, backTo.slice(1));
        return;
      }
      const [title, body] = [
        adventurerNoteTitle.get(response.selection),
        adventurerNoteBody.get(response.selection)
      ];
      if (!title || !body) return;
      const chapterForm = new ActionFormData()
        .title(title)
        .body(body)
        .button({ translate: "gui.back" });
      // @ts-ignore
      chapterForm.show(player).then((response) => {
        if (response.selection === 0) {
          this.display(player, backTo);
        }
      });
    });
  }
  registry() {
    system.beforeEvents.startup.subscribe((init) => {
      const that = this;
      init.itemComponentRegistry.registerCustomComponent(this.id, {
        onUse(arg) {
          that.display(arg.source);
        }
      });
    });
  }
  hasReadPremission(player: Player, chapter: number) {
    if (chapter === 0) return true;
    return false;
  }
}
