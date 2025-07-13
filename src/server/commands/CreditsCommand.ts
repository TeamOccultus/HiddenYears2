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

export class CreditsCommand {
  constructor(readonly commandName: string, public creditsData: Credits) {
    system.beforeEvents.startup.subscribe((arg) => {
      const command: CustomCommand = {
        name: this.commandName,
        description: " %command.credits.description",
        permissionLevel: CommandPermissionLevel.Any,
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
          const creditForm = new ActionFormData()
            .title("Credits")
            .body(parseCredits(this.creditsData))
            .button({ translate: "gui.back" });
          // @ts-ignore
          creditForm.show(origin.sourceEntity);
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
