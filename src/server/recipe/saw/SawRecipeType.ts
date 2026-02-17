export type SawRecipe = {
  ingredient: string;
  output: string;
  amount:
    | number
    | {
        min: number;
        max: number;
      };
};
