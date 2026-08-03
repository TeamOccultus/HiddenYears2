/**
 * @module server/registry/command
 * @category Registry Bus
 */
import { default as credits } from "../../../config/credits.json";
import { CreditsManager } from "@occultus/api";
import { MigrateCommand } from "../commands/MigrateCommand";
import { ProfileCommand } from "../commands/ProfileCommand";
import { CommandPermissionLevel } from "@minecraft/server";

/**
 * 注册自定义命令
 */
export function registerCommands() {
  new CreditsManager(
    "CREDITS of Hidden Years²: Governor at the Skyline",
    credits
  ).registerCommand({
    name: "hiddenyears:credits",
    description: " %command.credits.description",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false
  });
  new ProfileCommand("hiddenyears:profile");
  new MigrateCommand("hiddenyears:migrate");
}
