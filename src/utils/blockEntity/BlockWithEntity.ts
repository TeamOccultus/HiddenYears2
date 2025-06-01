import {
  Block,
  Dimension,
  PlayerInteractWithBlockAfterEvent,
  system,
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
    world.beforeEvents.playerBreakBlock.subscribe((arg) => {
      if (arg.block.typeId === blockId) {
        console.log("break!")
        const data = this.getBlockEntityData(arg.block);
        system.run(() => {
          console.log(data.entity.typeId)
        if (data) BlockEntity.destory(data);
        })
      }
    });
    world.afterEvents.playerInteractWithBlock.subscribe((arg) => {
      if (arg.block.typeId === blockId) {
        this.onInteract(arg);
      }
    });
    this.init()
  }
  getBlockEntityData(block: Block): BlockEntityData | undefined {
    const { dimension, location } = block;
    const entity = dimension.getEntities({
      location: location,
      type: this.entityId,
    })[0];
    return BlockEntity.getData(entity);
  }
  placeEntity(dimension: Dimension, location: Vector3) {
    const entity = dimension.spawnEntity<string>(this.entityId, location);
    entity.setDynamicProperty("starock:blockEntityLocation", location);
    entity.setDynamicProperty("starock:blockEntityId", entity.id);
    return entity;
  }
  onInteract(event: PlayerInteractWithBlockAfterEvent) {
    return;
  }
  init(){
    system.beforeEvents.startup.subscribe((arg) => {
      arg.blockComponentRegistry.registerCustomComponent("starock:interact",{
        onPlayerInteract(arg){}
     })
    })
  }
}
