/**
 * @module server/registry/tutorial
 * @category Registry Bus
 */
import { CommandPermissionLevel } from "@minecraft/server";
import { TutorialCenter, TutorialServer } from "@occultus/api";
import { getAllTutorials } from "../../data/tutorials";

export const tutorialCenter = new TutorialCenter(
  "hiddenyears:tutorial_center",
  { translate: "tutorial.title" },
  { translate: "tutorial.description" },
  getAllTutorials()
);
export const tutorialServer = new TutorialServer();

export function registryTutorial() {
  tutorialCenter.addTrigger("hiddenyears:tutorial_center", {
    name: "hiddenyears:tutorial",
    description: "教程中心",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false
  });
  tutorialServer.addTutorial(getAllTutorials());
}
