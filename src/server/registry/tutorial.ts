/**
 * @module server/registry/tutorial
 * @category Registry Bus
 */
import { CommandPermissionLevel } from "@minecraft/server";
import { TutorialCenter, TutorialServer } from "@occultus/api";
import { group, tutorials } from "../../data/tutorials";

export function registryTutorial() {
  const center = new TutorialCenter(
    "hiddenyears:tutorial_center",
    "教程中心",
    "这是教程中心的默认简介，如果你看到了它说明该模组的开发者很懒awa",
    [group, tutorials[3], tutorials[4], tutorials[5]]
  );
  center.addTrigger("hiddenyears:tutorial_center", {
    name: "hiddenyears:tutorial",
    description: "教程中心",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false
  });

  const server = new TutorialServer();
  server.addTutorial(tutorials);
}
