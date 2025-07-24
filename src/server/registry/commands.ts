import { HiddenYears2Credits } from "../../data/credits";
import { CreditsCommand } from "../commands/CreditsCommand";
import { ProfileCommand } from "../commands/ProfileCommand";

export function registryCommands() {
  new CreditsCommand("hiddenyears:credits", HiddenYears2Credits);
  new ProfileCommand("hiddenyears:profile");
}