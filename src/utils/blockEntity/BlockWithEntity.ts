import {
  Block,
  Dimension,
  PlayerInteractWithBlockAfterEvent,
  Vector3,
  world,
} from "@minecraft/server";
import { BlockEntity } from "./BlockEntity";
import { BlockEntityData } from "./BlockEntityData";

export class BlockWithEntity {
  constructor(
    readonly blockId: string,
    readonly entityId: string
  ) {
    world.afterEvents.playerPlaceBlock.subscribe((arg) => {
      if (arg.block.typeId === blockId) {
        this.placeEntity(arg.dimension, arg.block.location);
      }
    });
    world.afterEvents.playerInteractWithBlock.subscribe((arg) => {
      if (arg.block.typeId === blockId) {
        this.onInteract(arg);
      }
    });
  }
  getBlockEntity(block: Block): BlockEntityData | undefined {
    const { dimension, location } = block;
    const entity = dimension.getEntities({
      location: location,
      type: this.entityId,
    })[0];
    return BlockEntity.getData(entity);
  }
  placeEntity(dimension: Dimension, location: Vector3) {
    const entity = dimension.spawnEntity({ id: this.entityId }, location);
    entity.setDynamicProperty("starock:blockEntityLocation", location);
    entity.setDynamicProperty("starock:blockEntityId", entity.id);
    return entity;
  }
  onInteract(event: PlayerInteractWithBlockAfterEvent) {
    return;
  }
}
