import { RawMessage } from "@minecraft/server";

export const adventurerNoteBody: Map<number, string | RawMessage> = new Map();
adventurerNoteBody.set(0, {
  rawtext: [
    { translate: "article.adventurer_note.chapter1.body1" },
    { text: "\n" },
    { translate: "article.adventurer_note.chapter1.body2" },
    { text: "\n" },
    { translate: "article.adventurer_note.chapter1.body3" },
    { text: "\n" },
    { translate: "article.adventurer_note.chapter1.body4" },
    { text: "\n\n" },
    { translate: "article.adventurer_note.chapter1.body5" },
    { text: "\n" },
    { translate: "article.adventurer_note.chapter1.body6" },
    { text: "\n" },
    { translate: "article.adventurer_note.chapter1.body7" },
    { text: "\n" },
    { translate: "article.adventurer_note.chapter1.body8" },
    { text: "\n" },
    { translate: "article.adventurer_note.chapter1.body9" },
    { text: "\n\n" },
    { translate: "article.adventurer_note.chapter1.body10" }
  ]
});

export const adventurerNoteTitle: Map<number, string | RawMessage> = new Map();
adventurerNoteTitle.set(0, {
  translate: "article.adventurer_note.chapter1.title"
});
