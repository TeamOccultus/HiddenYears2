export type MagicSmithingTableRecipe = {
  type: "addtional" | "transform"
  base: string;
  addition: string
  output: string;
};