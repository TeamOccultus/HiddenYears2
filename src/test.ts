import { world } from "@minecraft/server";
import { CustomForm } from "@minecraft/server-ui";

world.afterEvents.playerBreakBlock.subscribe((arg) => {
  const { player } = arg;
  const page = new CustomForm(player, {
    translate: "tutorial.hiddenyears:start"
  });
  page
    .closeButton()
    .header({ translate: "tutorial.hiddenyears:start.chapter1" })
    .label({
      rawtext: [
        { translate: "tutorial.hiddenyears:start.1" },
        { text: "\n\n" },
        { translate: "tutorial.hiddenyears:start.2" }
      ]
    })
    .divider()
    .header({ translate: "tutorial.hiddenyears:start.chapter2" })
    .label({
      rawtext: [
        { translate: "tutorial.hiddenyears:start.4" },
        { text: "\n\n" },
        { translate: "tutorial.hiddenyears:start.5" },
        { text: "\n" },
        { translate: "tutorial.hiddenyears:start.6" },
        { text: "\n\n" },
        { translate: "tutorial.hiddenyears:start.7" }
      ]
    })
    .divider()
    .header({ translate: "tutorial.hiddenyears:start.chapter3" })
    .label({
      rawtext: [
        { translate: "tutorial.hiddenyears:start.4" },
        { text: "\n\n" },
        { translate: "tutorial.hiddenyears:start.5" },
        { text: "\n" },
        { translate: "tutorial.hiddenyears:start.6" },
        { text: "\n\n" },
        { translate: "tutorial.hiddenyears:start.7" }
      ]
    })
    .image("textures/items/occultus_watch", "hiddenyears", {});
    page.show()
});
