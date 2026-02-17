export type HammerRecipe = {
  ingredient: string;
  output: string;
  amount: number | {
    min: number;
    max: number;
  };
};
