/**
 * @module server/registry/command
 * @category Registry Bus
 */
import { HiddenYears2Credits } from "../../data/credits";
import { CreditsCommand } from "../commands/CreditsCommand";
import { DebugCommand } from "../commands/DebugCommand";
import { ProfileCommand } from "../commands/ProfileCommand";

/**
 * 注册自定义命令
 */
export function registryCommands() {
  new CreditsCommand("hiddenyears:credits", HiddenYears2Credits);
  new ProfileCommand("hiddenyears:profile");
  new DebugCommand("hiddenyears:debug");
}