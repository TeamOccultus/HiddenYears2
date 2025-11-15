import {
  CommandPermissionLevel,
  CustomCommand,
  CustomCommandSource,
  CustomCommandStatus,
  Player,
  system,
} from "@minecraft/server";
import { DebugMode } from "../../debug/Debug";

export class DebugCommand {
  constructor(readonly commandName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      const command: CustomCommand = {
        name: this.commandName,
        description: "[Debug] Enable debug mode for a player or globally.",
        permissionLevel: CommandPermissionLevel.Admin,
      };
      arg.customCommandRegistry.registerCommand(command, (origin) => {
        const { sourceType, sourceEntity } = origin;

        system.run(() => {
          if (sourceType !== CustomCommandSource.Entity) {
            DebugMode.givePermission();
            return {
              status: CustomCommandStatus.Success,
              message: "Global debug mode enabled.",
            };
          }
          if (!sourceEntity)
            return {
              status: CustomCommandStatus.Failure,
            };
          if (!(sourceEntity instanceof Player))
            return {
              status: CustomCommandStatus.Failure,
              message: "Only players can use this command.",
            };
          DebugMode.givePermission(sourceEntity);
          return {
            status: CustomCommandStatus.Success,
            message: `${sourceEntity.name} have been granted debug mode.`,
          };
        });
        return {
          status: CustomCommandStatus.Failure,
        };
      });
    });
  }
}
