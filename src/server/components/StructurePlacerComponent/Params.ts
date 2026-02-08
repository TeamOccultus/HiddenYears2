export type StructurePlacerComponentParams = {
  max_height: number;
  min_height: number;
  id: string;
  place_offset?: [number, number, number];
  show_warning?: boolean;
  animation?: {
    type: "blocks" | "layers" | "none";
    seconds: number;
  };
  present?: "aaru_dream";
};
