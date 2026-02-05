export type WeaponTypeSchema = {
  weapon_type: "sword" | "sledgehammer" | "dagger";
  legend_weapon?:
    | "suffering"
    | "shattered_sand_cudgel"
    | "shattered_sand_staff";
  specific_damage?: SpecificDamageType[];
};

export type SpecificDamageType = {
  family: string;
  damage: number | [number, number];
};
