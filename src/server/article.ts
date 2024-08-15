import { Article,ChapterArticle, giveItem,ArticleCollection } from "lazuli-mc";
import {
  HyLetterTitle,
  HyLetterBody,
  HiddenStoryBody,
  HiddenStoryTitle,
} from "../data/lang";
import { ItemStack, world } from "@minecraft/server";

export class ArticleManager {
  /**
   * 注册所有文章
   */
  static register() {
    const LETTER_1 = new Article(
      `hy:letter_1`,
      HyLetterTitle[1],
      HyLetterBody[1],
      "textures/items/lost_letter"
    );
    const LETTER_2 = new Article(
      `hy:letter_2`,
      HyLetterTitle[2],
      HyLetterBody[2],
      "textures/items/lost_letter"
    );
    const LETTER_3 = new Article(
      `hy:letter_3`,
      HyLetterTitle[3],
      HyLetterBody[3],
      "textures/items/lost_letter"
    );
    const LETTER_4 = new Article(
      `hy:letter_4`,
      HyLetterTitle[4],
      HyLetterBody[4],
      "textures/items/lost_letter"
    );
    const LETTER_5 = new Article(
      `hy:letter_5`,
      HyLetterTitle[5],
      HyLetterBody[5],
      "textures/items/lost_letter"
    );
    const LETTER_6 = new Article(
      `hy:letter_6`,
      HyLetterTitle[6],
      HyLetterBody[6],
      "textures/items/lost_letter"
    );
    const LETTER_7 = new Article(
      `hy:letter_7`,
      HyLetterTitle[7],
      HyLetterBody[7],
      "textures/items/lost_letter"
    );
    const LETTER_8 = new Article(
      `hy:letter_8`,
      HyLetterTitle[8],
      HyLetterBody[8],
      "textures/items/lost_letter"
    );
    const LETTER_9 = new Article(
      `hy:letter_9`,
      HyLetterTitle[9],
      HyLetterBody[9],
      "textures/items/lost_letter"
    );
    const LETTER_10 = new Article(
      `hy:letter_10`,
      HyLetterTitle[10],
      HyLetterBody[10],
      "textures/items/lost_letter"
    );
    const LETTER_11 = new Article(
      `hy:letter_11`,
      HyLetterTitle[11],
      HyLetterBody[11],
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
      ]
    );
    world.afterEvents.playerSpawn.subscribe((event) => {
      if (!event.player.hasTag("hy:get_collection")) {
        giveItem([event.player], new ItemStack("hy:collection_book"));
        event.player.addTag("hy:get_collection");
      }
    });
  }
}
