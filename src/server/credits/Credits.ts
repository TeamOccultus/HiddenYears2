export type Credits = (CreditSection | string)[];

export type CreditSection = {
  discipline: string;
  contributors: CreditContributors[];
};

export type CreditContributors = {
  name: string;
  role: string;
};
