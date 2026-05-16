import { Player, RawMessage } from "@minecraft/server";
import {
  Color,
  Format,
  MusicDiscBindingConfig,
  MusicDiscComponentParams,
  parseToRaw,
  Task,
  Toast
} from "@occultus/api";

export class TaskToast extends Toast {
  constructor(
    readonly task: Task,
    readonly player: Player
  ) {
    const content: RawMessage = {
      rawtext: [
        { text: Color.lightPurple },
        { translate: "ui.task_complete" },
        { text: Format.reset },
        { text: "\n" },
        parseToRaw(task.name, player)
      ]
    };
    super(content, task.options.iconPath ?? "textures/items/apple");
  }
  send(): void {
    this.player.onScreenDisplay.setTitle(
      {
        rawtext: [{ text: "toast:" }, parseToRaw(this.content, this.player)]
      },
      {
        subtitle: `toast:${this.iconPath}`,
        fadeInDuration: 0,
        fadeOutDuration: 0,
        stayDuration: 1
      }
    );
  }
}

export class NowPlayingToast extends Toast {
  constructor(
    readonly name: string,
    readonly author: string,
    public iconPath: string
  ) {
    const content: RawMessage = {
      rawtext: [
        { text: Color.lightPurple },
        { translate: "ui.now_playing" },
        { text: Format.reset },
        { text: "\n" },
        { translate: name },
        { text: " - " },
        { translate: author }
      ]
    };
    super(content, iconPath);
  }
}
