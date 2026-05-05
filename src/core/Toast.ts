import { Player, RawMessage } from "@minecraft/server";
import { Color, Format, parseToRaw, Task, Toast } from "@occultus/api";

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
