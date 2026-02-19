import { Player, RawMessage, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { default as builtinData } from "../../config/articles/player_story.json";
import { getTask, hasTask } from "../data/tasks";
import { FormLike, parseToRaw, TaskStatus } from "@occultus/api";

/**
 * 玩家故事配置文件的 JSON Schema
 */
export type PlayerStorySchema = {
  /**
   * 玩家故事的标题
   */
  title: RawMessage;
  /**
   * 玩家故事首页的描述
   */
  description: RawMessage;
  /**
   * 玩家故事的章节
   */
  chapters: PlayerStoryChapter[];
};

export type PlayerStoryChapter = {
  /**
   * 章节标题
   */
  title: RawMessage;
  /**
   * 章节内容
   */
  body: RawMessage;
  /**
   * 章节图标
   */
  icon_path?: string;
  /**
   * 是否需要完成某个任务才能阅读
   */
  required_task?: string;
};

/**
 * 用于实现玩家故事的类
 */
export class PlayerStory  extends FormLike{
  static generateChapterBody(
    chapter: PlayerStoryChapter,
    player: Player
  ): RawMessage {
    const status = this.hasReadPremission(player, chapter);
    if (status) {
      return chapter.body;
    }
    return {
      rawtext: [
        {
          translate: "ui.player_story.lock"
        },
        {
          text: "\n\n"
        },
        {
          translate: "ui.player_story.unlock"
        },
        {
          text: "「"
        },
        parseToRaw(getTask(chapter.required_task).name, player),
        {
          text: "」"
        }
      ]
    };
  }
  /**
   * 返回玩家是否有阅读某一章节的权限
   * @param player
   * @param chapter
   * @returns
   */
  static hasReadPremission(player: Player, chapter: PlayerStoryChapter) {
    if (!chapter.required_task) return true;
    if (!hasTask(chapter.required_task)) return true;
    const task = getTask(chapter.required_task);
    if (task.getStatus(player) === TaskStatus.Done) return true;
    return false;
  }
  constructor(readonly id: string) {
    super();
  }
  /**
   * 显示玩家故事
   * @param player
   * @param backTo
   */
  display(player: Player, backTo?: PlayerStory[]) {
    const contentForm = new ActionFormData()
      .title(builtinData.title)
      .body(builtinData.description);
    builtinData.chapters.forEach((chapter, index) => {
      contentForm.button(chapter.title, chapter.icon_path);
    });

    // @ts-ignore
    contentForm.show(player).then((response) => {
      console.log(response.selection);
      if (response.canceled || response.selection === undefined) {
        return this.quit(player, backTo);
      }
      const chapterForm = new ActionFormData()
        .title(builtinData.chapters[response.selection].title)
        .body(PlayerStory.generateChapterBody(builtinData.chapters[response.selection], player))
        .button({
          translate: "gui.back"
        });
      // @ts-ignore
      chapterForm.show(player).then((response) => {
        contentForm.show(player);
      });
    });
  }
  /**
   * 注册玩家故事对应的组件
   */
  registry() {
    system.beforeEvents.startup.subscribe((init) => {
      const that = this;
      init.itemComponentRegistry.registerCustomComponent(this.id, {
        onUse(arg) {
          that.display(arg.source);
        }
      });
    });
  }
}
