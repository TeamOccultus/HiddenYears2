/**
 * @module server/registry/tutorial
 * @category Registry Bus
 */
import { CommandPermissionLevel } from "@minecraft/server";
import { TutorialCenter, TutorialServer } from "@occultus/api";
import { tutorials } from "../../data/tutorials";

export const tutorialCenter = new TutorialCenter(
  "hiddenyears:tutorial_center",
  { translate: "tutorial.title" },
  "这是教程中心的默认简介，如果你看到了它说明该模组的开发者很懒awa",
  [tutorials[0], tutorials[1]]
);
export const tutorialServer = new TutorialServer();

export function registryTutorial() {
  tutorialCenter.addTrigger("hiddenyears:tutorial_center", {
    name: "hiddenyears:tutorial",
    description: "教程中心",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false
  });
  tutorialServer.addTutorial(tutorials);
}
