import { RawMessage } from "@minecraft/server";

export type ArticleData = {
  id: string;
  title: RawMessage;
  content: RawMessage;
};

export type ChapterData = {
  title: RawMessage;
  content: RawMessage;
};

export type ChapteredArticleData = {
  id: string;
  title: RawMessage;
  content: RawMessage;
  chapters: ChapterData[];
};
