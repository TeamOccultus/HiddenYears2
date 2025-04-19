import {
  Block,
  Dimension,
  Entity,
  ScoreboardObjective,
  Vector3,
} from "@minecraft/server";

export class BlockEntity {
  data: BlockEntityData;
  constructor(
    readonly entityId: string,
    readonly blockId: string
  ) {}
}

export interface BlockEntityData {
  readonly block: Block;
  readonly entity: Entity;
  readonly dimension: Dimension;
  readonly location: Vector3;
  readonly scoreboard: ScoreboardObjective | null;
}
