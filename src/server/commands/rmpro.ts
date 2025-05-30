import {
  CustomCommand,
  CommandPermissionLevel,
  CustomCommandOrigin,
} from "@minecraft/server";

export const RemoveDynamicPropertyCommand: CustomCommand = {
  name: "hiddenyears:rmproperty",
  permissionLevel: CommandPermissionLevel.Admin,
  description: "Remove dynamic property from a player",
};

export function rmpropertyCallback(
  origin: CustomCommandOrigin,
  ...args: any[]
) {}
