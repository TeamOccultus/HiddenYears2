export type ArmorTypeParams = ArmorType[];

export type ArmorType = {
  present: ArmorPresent;
  level?: number;
};

export type ArmorPresent = "isis_crown" | "rebirth" | "unyielding";
