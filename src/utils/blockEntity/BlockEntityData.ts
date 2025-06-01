import { Block, Dimension, Entity, ScoreboardObjective, Vector3 } from "@minecraft/server";

export interface BlockEntityData {
  readonly block: Block;
  readonly entity: Entity;
  readonly dimension: Dimension;
  readonly location: Vector3;
  readonly scoreboardObjective?: ScoreboardObjective;
}
