import { replaceLowerCopperTool } from "../../core/utils";
import { ToolMaterial } from "@grindstone/material-kit";

export function registryTool() {
  const tool = new ToolMaterial("hy:custom_tools", true);
  tool.onToolBreak((callback) => {
    replaceLowerCopperTool(callback.itemStack, callback.source);
  });
}
