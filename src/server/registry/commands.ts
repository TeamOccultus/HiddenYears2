/**
 * @module server/registry/command
 * @category Registry Bus
 */
import { default as credits } from "../../../config/credits.json";
import { CreditsCommand } from "../commands/CreditsCommand";
import { MigrateCommand } from "../commands/MigrateCommand";
import { ProfileCommand } from "../commands/ProfileCommand";

/**
 * 注册自定义命令
 */
export function registryCommands() {
  new CreditsCommand("hiddenyears:credits", credits);
  new ProfileCommand("hiddenyears:profile");
  new MigrateCommand("hiddenyears:migrate");
}
