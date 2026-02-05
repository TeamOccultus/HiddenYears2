export type SpecificDamageParams = SpecificDamageType[];

export type SpecificDamageType = {
  family: string;
  damage: number | [number, number];
};
