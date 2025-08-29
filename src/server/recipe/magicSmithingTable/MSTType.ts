import { RawMessage } from "@minecraft/server";

export type MagicSmithingTableRecipe = {
  type: "addtional" | "transform",
  lore?: string;
  base: string;
  addition: string
  output: string;
};