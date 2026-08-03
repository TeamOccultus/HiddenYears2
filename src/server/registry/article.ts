import { default as chapteredArticles } from "../../../config/articles/chaptered_article.json";
import {
  ArticleServerBindings
} from "@occultus/api";

/**
 * 注册所有的文章
 */
export function registerArticles() {
  ArticleServerBindings.create({
    componentName: "hiddenyears:article",
    contentComponentName: "hiddenyears:article_content",
    centerComponentName: "hiddenyears:article_center",
    centerConfig: {
      title: { translate: "ui.article_center" },
      description: { translate: "ui.article_center.description" },
      icon_path: "textures/items/lost_letter"
    }
  });
  chapteredArticles.forEach((chapteredArticle) => {
    ArticleServerBindings.getInstance().preloadContent(chapteredArticle.id, {
      chapter: chapteredArticle.chapters,
      description: chapteredArticle.content
    });
  });
}
