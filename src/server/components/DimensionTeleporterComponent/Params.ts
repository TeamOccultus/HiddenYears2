export type DimensionTeleporterComponentParams = {
  dimension_id: string | [string, string];
  location_provider: "origin" | "keep" | [number, number, number] | number;
  consume?: boolean;
};
