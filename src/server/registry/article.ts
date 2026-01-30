import { default as articles } from "../../../config/articles/single_article.json";
import { default as chapteredArticles } from "../../../config/articles/chaptered_article.json";
import { Article, ArticleCenter, ArticleRegistries } from "@occultus/api";

export const articleRegistry = new ArticleRegistries();
export const articleCenter = new ArticleCenter(
  "hidden_years:article_center",
  { translate: "ui.article_center" },
  { translate: "ui.article_center.description" },
  true,
  articleRegistry
);

/**
 * 注册所有的文章
 */
export function registryArticles() {
  articles.forEach((article) => {
    articleRegistry.add(
      new Article(
        article.id,
        article.title,
        article.content,
        null,
        "textures/items/paper"
      )
    );
  });
  chapteredArticles.forEach((article) => {
    articleRegistry.add(
      new Article(
        article.id,
        article.title,
        article.content,
        article.chapters,
        "textures/items/task_book"
      )
    );
  });
  articleRegistry.register();
}
