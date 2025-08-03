import {
  CommandPermissionLevel,
  CustomCommand,
  CustomCommandSource,
  CustomCommandStatus,
  Player,
  system,
} from "@minecraft/server";
import { ProfileForm } from "../../ui/ProfileForm";

export class ProfileCommand {
  constructor(readonly commandName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      const command: CustomCommand = {
        name: this.commandName,
        description: " %command.profile.description",
        permissionLevel: CommandPermissionLevel.Any,
        cheatsRequired: false
      };
      arg.customCommandRegistry.registerCommand(command, (origin) => {
        const { sourceType, sourceEntity } = origin;
        system.run(() => {
          if (sourceType !== CustomCommandSource.Entity)
            return {
              status: CustomCommandStatus.Failure,
            };
          if (!sourceEntity)
            return {
              status: CustomCommandStatus.Failure,
            };
          if (!(sourceEntity instanceof Player))
            return {
              status: CustomCommandStatus.Failure,
            };
          ProfileForm.display(sourceEntity);
          return {
            status: CustomCommandStatus.Success,
          };
        });
        return {
          status: CustomCommandStatus.Failure,
        };
      });
    });
  }
}
