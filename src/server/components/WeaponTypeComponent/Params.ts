export type WeaponTypeParams = {
  weapon_type: "sword" | "sledgehammer" | "dagger";
  /**
   * 该武器的伤害基础，匕首会利用这个值计算额外伤害
   */
  basic_damage?: number;
  legend_weapon?:
    | "suffering"
    | "shattered_sand_cudgel"
    | "shattered_sand_staff";
};

