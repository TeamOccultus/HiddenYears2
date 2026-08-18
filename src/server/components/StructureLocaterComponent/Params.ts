export type StructureLocaterParams = {
  structure_source: "auto" | "single";
  locate_helper?: string;
  consume?: boolean;
};

export type StructureLocaterListParams = {
  name: string;
  helper: string;
  description?: string;
}[];
