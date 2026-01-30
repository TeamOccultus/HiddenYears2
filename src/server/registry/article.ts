import { default as articles } from "../../../config/articles/single_article.json";
import { default as chapteredArticles } from "../../../config/articles/chaptered_article.json";
import { Article, ArticleRegistries } from "@occultus/api";

/**
 * 注册所有的文章
 */
export function registryArticles() {
  const articleRegistry = new ArticleRegistries();
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

