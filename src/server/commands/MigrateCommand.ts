import {
  system,
  CustomCommand,
  CommandPermissionLevel,
  CustomCommandSource,
  CustomCommandStatus,
  Player,
  CustomCommandParamType,
} from "@minecraft/server";
import { TaskMigrationForm } from "../../migration/task/TaskMigrationForm";

export class MigrateCommand {
  constructor(readonly commandName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.customCommandRegistry.registerEnum("hiddenyears:migrate_type", [
        "task",
      ]);
      const command: CustomCommand = {
        name: this.commandName,
        description: " %command.migrate.description",
        permissionLevel: CommandPermissionLevel.Any,
        cheatsRequired: false,
        mandatoryParameters: [
          {
            type: CustomCommandParamType.Enum,
            name: "hiddenyears:migrate_type", // The parameter name must match the registered enum name above

          },
        ],
      };
      arg.customCommandRegistry.registerCommand(command, (origin, type) => {
        system.run(() => {
          if (!origin.sourceEntity) {
            return {
              status: CustomCommandStatus.Failure,
            };
          }
          if (!(origin.sourceEntity instanceof Player)) {
            return {
              status: CustomCommandStatus.Failure,
            };
          }

          if (type === "task") {
            TaskMigrationForm.display(origin.sourceEntity);
          }
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
