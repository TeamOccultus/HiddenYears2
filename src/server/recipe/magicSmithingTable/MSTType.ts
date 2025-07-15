import { RawMessage } from "@minecraft/server";

export type MagicSmithingTableRecipe = {
  type: "addtional" | "transform",
  lore?: RawMessage;
  base: string;
  addition: string
  output: string;
};