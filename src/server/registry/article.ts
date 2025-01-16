import { ItemStack, world } from "@minecraft/server";
import {
  ArticleBuilder,
  ChapterArticleBuilder,
  ArticleCollectionBuilder,
} from "@grindstone/article-kit";
import {
  HyLetterBody,
  HiddenStoryTitle,
  HiddenStoryBody,
} from "../../data/lang";
import { giveItem } from "@grindstone/utils";

const LETTER_1 = new ArticleBuilder(
  `hy:letter_1`,
  { translate: "article.1.title" },
  HyLetterBody[1],
  "textures/items/lost_letter"
);
const LETTER_2 = new ArticleBuilder(
  `hy:letter_2`,
  { translate: "article.2.title" },
  HyLetterBody[2],
  "textures/items/lost_letter"
);
const LETTER_3 = new ArticleBuilder(
  `hy:letter_3`,
  { translate: "article.3.title" },
  HyLetterBody[3],
  "textures/items/lost_letter"
);
const LETTER_4 = new ArticleBuilder(
  `hy:letter_4`,
  { translate: "article.4.title" },
  HyLetterBody[4],
  "textures/items/lost_letter"
);
const LETTER_5 = new ArticleBuilder(
  `hy:letter_5`,
  { translate: "article.5.title" },
  HyLetterBody[5],
  "textures/items/lost_letter"
);
const LETTER_6 = new ArticleBuilder(
  `hy:letter_6`,
  { translate: "article.6.title" },
  HyLetterBody[6],
  "textures/items/lost_letter"
);
const LETTER_7 = new ArticleBuilder(
  `hy:letter_7`,
  { translate: "article.7.title" },
  HyLetterBody[7],
  "textures/items/lost_letter"
);
const LETTER_8 = new ArticleBuilder(
  `hy:letter_8`,
  { translate: "article.8.title" },
  HyLetterBody[8],
  "textures/items/lost_letter"
);
const LETTER_9 = new ArticleBuilder(
  `hy:letter_9`,
  { translate: "article.9.title" },
  HyLetterBody[9],
  "textures/items/lost_letter"
);
const LETTER_10 = new ArticleBuilder(
  `hy:letter_10`,
  { translate: "article.10.title" },
  HyLetterBody[10],
  "textures/items/lost_letter"
);
const LETTER_11 = new ArticleBuilder(
  `hy:letter_11`,
  { translate: "article.11.title" },
  HyLetterBody[11],
  "textures/items/lost_letter"
);
const LETTER_12 = new ArticleBuilder(
  `hy:letter_12`,
  { translate: "article.12.title" },
  HyLetterBody[12],
  "textures/items/lost_letter"
);
const LETTER_13 = new ArticleBuilder(
  `hy:letter_13`,
  { translate: "article.13.title" },
  HyLetterBody[13],
  "textures/items/lost_letter"
);
const LETTER_14 = new ArticleBuilder(
  `hy:letter_14`,
  { translate: "article.14.title" },
  HyLetterBody[14],
  "textures/items/lost_letter"
);
const LETTER_15 = new ArticleBuilder(
  `hy:letter_15`,
  { translate: "article.15.title" },
  HyLetterBody[15],
  "textures/items/lost_letter"
);
const HIDDEN_STORIES = new ChapterArticleBuilder(
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
const COLLECTION = new ArticleCollectionBuilder(
  "hy:article_collection",
  { translate: "hy.collection.title" },
  { translate: "hy.collection.body" },
  {
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
    LETTER_14,
    LETTER_15,
  ]
);

export function registryArticle() {
  world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.player.hasTag("hy:get_collection")) {
      giveItem([event.player], new ItemStack("hy:collection_book"));
      event.player.addTag("hy:get_collection");
    }
  });
  HIDDEN_STORIES.build();
  LETTER_1.build();
  LETTER_2.build();
  LETTER_3.build();
  LETTER_4.build();
  LETTER_5.build();
  LETTER_6.build();
  LETTER_7.build();
  LETTER_8.build();
  LETTER_9.build();
  LETTER_10.build();
  LETTER_11.build();
  LETTER_12.build();
  LETTER_13.build();
  LETTER_14.build();
  LETTER_15.build();
  COLLECTION.build();
}
