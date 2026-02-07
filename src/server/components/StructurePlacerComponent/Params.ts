export type StructurePlacerComponentParams = {
  max_height: number;
  min_height: number;
  id: string;
  place_offset?: [number, number, number];
  animation?: {
    type: "blocks" | "layers" | "none";
    seconds: number;
  };
};
