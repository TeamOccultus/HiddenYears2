export type CrowbarRecipe = {
  ingredient: string;
  output: string;
  amount: number | {
    min: number;
    max: number;
  };
};
