import {
  system,
  CustomCommand,
  CommandPermissionLevel,
  CustomCommandSource,
  CustomCommandStatus,
  Player,
  CustomCommandResult,
} from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { Credits } from "../credits/Credits";
import { parseCredits } from "../credits/parseCredits";
import { CreditsForm } from "../../ui/CreditsForm";

export class CreditsCommand {
  constructor(readonly commandName: string, public creditsData: Credits) {
    system.beforeEvents.startup.subscribe((arg) => {
      const command: CustomCommand = {
        name: this.commandName,
        description: " %command.credits.description",
        permissionLevel: CommandPermissionLevel.Any,
        cheatsRequired: false
      };
      arg.customCommandRegistry.registerCommand(command, (origin) => {
        system.run(() => {
          if (origin.sourceType !== CustomCommandSource.Entity)
            return {
              status: CustomCommandStatus.Failure,
            };
          if (!origin.sourceEntity)
            return {
              status: CustomCommandStatus.Failure,
            };
          if (!(origin.sourceEntity instanceof Player))
            return {
              status: CustomCommandStatus.Failure,
            };
          CreditsForm.display(origin.sourceEntity, this.creditsData);
          return {
            status: CustomCommandStatus.Success,
          };
        });
        return {
          status: CustomCommandStatus.Success,
        };
      });
    });
  }
}
