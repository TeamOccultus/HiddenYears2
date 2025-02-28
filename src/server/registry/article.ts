import { ItemStack, world } from "@minecraft/server";
import { Article, ArticleCenter } from "@grindstone/article-kit";
import {
  HyLetterBody,
  HiddenStoryTitle,
  HiddenStoryBody,
} from "../../data/lang";
import { giveItem } from "@grindstone/utils";

const LETTER_1 = new Article(
  `hy:letter_1`,
  { translate: "article.1.title" },
  HyLetterBody[1],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_2 = new Article(
  `hy:letter_2`,
  { translate: "article.2.title" },
  HyLetterBody[2],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_3 = new Article(
  `hy:letter_3`,
  { translate: "article.3.title" },
  HyLetterBody[3],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_4 = new Article(
  `hy:letter_4`,
  { translate: "article.4.title" },
  HyLetterBody[4],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_5 = new Article(
  `hy:letter_5`,
  { translate: "article.5.title" },
  HyLetterBody[5],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_6 = new Article(
  `hy:letter_6`,
  { translate: "article.6.title" },
  HyLetterBody[6],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_7 = new Article(
  `hy:letter_7`,
  { translate: "article.7.title" },
  HyLetterBody[7],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_8 = new Article(
  `hy:letter_8`,
  { translate: "article.8.title" },
  HyLetterBody[8],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_9 = new Article(
  `hy:letter_9`,
  { translate: "article.9.title" },
  HyLetterBody[9],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_10 = new Article(
  `hy:letter_10`,
  { translate: "article.10.title" },
  HyLetterBody[10],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_11 = new Article(
  `hy:letter_11`,
  { translate: "article.11.title" },
  HyLetterBody[11],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_12 = new Article(
  `hy:letter_12`,
  { translate: "article.12.title" },
  HyLetterBody[12],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_13 = new Article(
  `hy:letter_13`,
  { translate: "article.13.title" },
  HyLetterBody[13],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_14 = new Article(
  `hy:letter_14`,
  { translate: "article.14.title" },
  HyLetterBody[14],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_15 = new Article(
  `hy:letter_15`,
  { translate: "article.15.title" },
  HyLetterBody[15],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_16 = new Article(
  `hy:letter_16`,
  { translate: "article.16.title" },
  HyLetterBody[16],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_17 = new Article(
  `hy:letter_17`,
  { translate: "article.17.title" },
  HyLetterBody[17],
  undefined,
  "textures/items/desert_mythology",
);
const LETTER_18 = new Article(
  `hy:letter_18`,
  { translate: "article.18.title" },
  HyLetterBody[18],
  undefined,
  "textures/items/lost_letter",
);
const LETTER_19 = new Article(
  `hy:letter_19`,
  { translate: "article.19.title" },
  HyLetterBody[19],
  undefined,
  "textures/items/lost_letter",
);
const HIDDEN_STORIES = new Article(
  "hy:story_book",
  { translate: "hy.item.story_book" },
  { translate: "hy.story.hs.body" },
  [
    {
      title: HiddenStoryTitle[0],
      body: HiddenStoryBody[0],
    },
    {
      title: HiddenStoryTitle[1],
      body: HiddenStoryBody[1],
    },
    {
      title: HiddenStoryTitle[2],
      body: HiddenStoryBody[2],
    },
  ],
  "textures/items/story_book",
);
const COLLECTION = new ArticleCenter(
  "hy:article_collection",
  { translate: "hy.collection.title" },
  { translate: "hy.collection.body" },
  true,
);

export function registryArticle() {
  world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.player.hasTag("hy:get_collection")) {
      giveItem([event.player], new ItemStack("hy:collection_book"));
      event.player.addTag("hy:get_collection");
    }
  });
  HIDDEN_STORIES.registryComponent("hy:hidden_story");
  LETTER_1.registryComponent("hy:letter_1");
  LETTER_2.registryComponent("hy:letter_2");
  LETTER_3.registryComponent("hy:letter_3");
  LETTER_4.registryComponent("hy:letter_4");
  LETTER_5.registryComponent("hy:letter_5");
  LETTER_6.registryComponent("hy:letter_6");
  LETTER_7.registryComponent("hy:letter_7");
  LETTER_8.registryComponent("hy:letter_8");
  LETTER_9.registryComponent("hy:letter_9");
  LETTER_10.registryComponent("hy:letter_10");
  LETTER_11.registryComponent("hy:letter_11");
  LETTER_12.registryComponent("hy:letter_12");
  LETTER_13.registryComponent("hy:letter_13");
  LETTER_14.registryComponent("hy:letter_14");
  LETTER_15.registryComponent("hy:letter_15");
  LETTER_16.registryComponent("hy:letter_16");
  LETTER_17.registryComponent("hy:letter_17");
  LETTER_18.registryComponent("hy:letter_18");
  LETTER_19.registryComponent("hy:letter_19");
  COLLECTION.registryComponent("hy:article_center");
}
