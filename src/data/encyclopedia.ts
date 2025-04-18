import { EncyclopediaEntry } from "../tenon/game/encyclopedia";

export const welcome = new EncyclopediaEntry(
  "hy:welcome",
  { translate: "wiki.welcome.title" },
  {
    translate: "wiki.welcome.body",
  },
  "textures/items/clock",
);

export const magicPotion = new EncyclopediaEntry(
  "hy:magic_potion",
  { translate: "wiki.magic_potion.title" },
  {
    translate: "wiki.magic_potion.body",
  },
  "textures/items/medicine_1",
);
