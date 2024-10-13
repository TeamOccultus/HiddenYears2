import { ItemStack, world } from "@minecraft/server";
import {
  Article,
  ChapterArticle,
  ArticleCollection,
  giveItem,
  Register,
} from "@lazuli/ldk2";
import {
  HyLetterBody,
  HiddenStoryTitle,
  HiddenStoryBody,
} from "../../data/lang";

const LETTER_1 = new Article(
  `hy:letter_1`,
  { translate: "article.1.title" },
  HyLetterBody[1],
  "textures/items/lost_letter"
);
const LETTER_2 = new Article(
  `hy:letter_2`,
  { translate: "article.2.title" },
  HyLetterBody[2],
  "textures/items/lost_letter"
);
const LETTER_3 = new Article(
  `hy:letter_3`,
  { translate: "article.3.title" },
  HyLetterBody[3],
  "textures/items/lost_letter"
);
const LETTER_4 = new Article(
  `hy:letter_4`,
  { translate: "article.4.title" },
  HyLetterBody[4],
  "textures/items/lost_letter"
);
const LETTER_5 = new Article(
  `hy:letter_5`,
  { translate: "article.5.title" },
  HyLetterBody[5],
  "textures/items/lost_letter"
);
const LETTER_6 = new Article(
  `hy:letter_6`,
  { translate: "article.6.title" },
  HyLetterBody[6],
  "textures/items/lost_letter"
);
const LETTER_7 = new Article(
  `hy:letter_7`,
  { translate: "article.7.title" },
  HyLetterBody[7],
  "textures/items/lost_letter"
);
const LETTER_8 = new Article(
  `hy:letter_8`,
  { translate: "article.8.title" },
  HyLetterBody[8],
  "textures/items/lost_letter"
);
const LETTER_9 = new Article(
  `hy:letter_9`,
  { translate: "article.9.title" },
  HyLetterBody[9],
  "textures/items/lost_letter"
);
const LETTER_10 = new Article(
  `hy:letter_10`,
  { translate: "article.10.title" },
  HyLetterBody[10],
  "textures/items/lost_letter"
);
const LETTER_11 = new Article(
  `hy:letter_11`,
  { translate: "article.11.title" },
  HyLetterBody[11],
  "textures/items/lost_letter"
);
const LETTER_12 = new Article(
  `hy:letter_12`,
  { translate: "article.12.title" },
  HyLetterBody[12],
  "textures/items/lost_letter"
);
const LETTER_13 = new Article(
  `hy:letter_13`,
  { translate: "article.13.title" },
  HyLetterBody[13],
  "textures/items/lost_letter"
);
const HIDDEN_STORIES = new ChapterArticle(
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
  "textures/items/story_book"
);
const COLLECTION = new ArticleCollection(
  "hy:article_collection",
  { translate: "hy.collection.title" },
  { translate: "hy.collection.body" },
  {
    command: ["!books", "!文章"],
    itemStack: new ItemStack("hy:collection_book"),
  },
  [
    HIDDEN_STORIES,
    LETTER_1,
    LETTER_2,
    LETTER_3,
    LETTER_4,
    LETTER_5,
    LETTER_6,
    LETTER_7,
    LETTER_8,
    LETTER_9,
    LETTER_10,
    LETTER_11,
    LETTER_12,
    LETTER_13,
  ]
);

export function registryArticle() {
  world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.player.hasTag("hy:get_collection")) {
      giveItem([event.player], new ItemStack("hy:collection_book"));
      event.player.addTag("hy:get_collection");
    }
  });
  Register.registry([
    HIDDEN_STORIES,
    LETTER_1,
    LETTER_2,
    LETTER_3,
    LETTER_4,
    LETTER_5,
    LETTER_6,
    LETTER_7,
    LETTER_8,
    LETTER_9,
    LETTER_10,
    LETTER_11,
    LETTER_12,
    LETTER_13,
    COLLECTION,
  ]);
}
