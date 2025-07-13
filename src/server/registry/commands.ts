import { HiddenYears2Credits } from "../../data/credits";
import { CreditsCommand } from "../commands/CreditsCommand";

export function registryCommands() {
  new CreditsCommand("hiddenyears:credits", HiddenYears2Credits)
}