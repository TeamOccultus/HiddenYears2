import { ArticleAPI as article } from "project-lantern";
import { HyLetterTitle, HyLetterBody, HyStoryBody } from "../data/lang";

/**
 * 注册书籍
 * @todo 书籍支持本地化
 * @todo 制作书籍收藏集
 */
export function articleRegister() {
  const LETTER_1 = new article.Article(
    `hy:letter_1`,
    HyLetterTitle[1],
    HyLetterBody[1]
  );
  const LETTER_2 = new article.Article(
    `hy:letter_2`,
    HyLetterTitle[2],
    HyLetterBody[2]
  );
  const LETTER_3 = new article.Article(
    `hy:letter_3`,
    HyLetterTitle[3],
    HyLetterBody[3]
  );
  const LETTER_4 = new article.Article(
    `hy:letter_4`,
    HyLetterTitle[4],
    HyLetterBody[4]
  );
  const LETTER_5 = new article.Article(
    `hy:letter_5`,
    HyLetterTitle[5],
    HyLetterBody[5]
  );
  const LETTER_6 = new article.Article(
    `hy:letter_6`,
    HyLetterTitle[6],
    HyLetterBody[6]
  );
  const LETTER_7 = new article.Article(
    `hy:letter_7`,
    HyLetterTitle[7],
    HyLetterBody[7]
  );
  const LETTER_8 = new article.Article(
    `hy:letter_8`,
    HyLetterTitle[8],
    HyLetterBody[8]
  );
  const LETTER_9 = new article.Article(
    `hy:letter_9`,
    HyLetterTitle[9],
    HyLetterBody[9]
  );
  const LETTER_10 = new article.Article(
    `hy:letter_10`,
    HyLetterTitle[10],
    HyLetterBody[10]
  );
  const LETTER_11 = new article.Article(
    `hy:letter_11`,
    HyLetterTitle[11],
    HyLetterBody[11]
  );
  const HIDDEN_STORIES = new article.ChapterArticle(
    "hy:story_book",
    { translate: "hy.item.story_book" },
    { translate: "hy.story.hs.body" },
    [
      {
        title: { translate: "hy.story.hs.title1" },
        body: HyStoryBody.section0,
      },
      {
        title: { translate: "hy.story.hs.title2" },
        body: HyStoryBody.section1,
      },
      {
        title: { translate: "hy.story.hs.title3" },
        body: HyStoryBody.section2,
      },
    ]
  );
}
