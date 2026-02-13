export type TrophyBundleParams = {
  loot_table?: string;
  table_source: TrophyBundleSourceType;
};

export type TrophyBundleSourceType = "hardcode" | "script";
