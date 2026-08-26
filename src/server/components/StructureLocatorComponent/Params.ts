export type StructureLocatorParams = {
  structure_source: "auto" | "single";
  ucv: number;
  locate_helper?: string;
  consume?: boolean;
  sound_event?: string
};

export type StructureLocatorListParams = {
  name: string;
  helper: string;
  description?: string;
}[];
