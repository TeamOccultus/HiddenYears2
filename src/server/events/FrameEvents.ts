import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  ItemComponentUseOnEvent,
  Player,
  world
} from "@minecraft/server";
import {
  setEquipmentItem,
  consumeAmount,
  Vector3Utils,
  getEquipmentItem
} from "@occultus/api";
import { FrameActiverParams } from "../components/FrameActiverComponent/Params";

export class FrameEvents {
  static onUseOn(
    arg0: ItemComponentUseOnEvent,
    arg1: CustomComponentParameters
  ) {
    const p = arg1.params as FrameActiverParams;
    if (p.frame_type === "ruby_frame") {
      FrameEvents.rubyFrameEvent(arg0);
      return;
    }
  }
  static rubyFrameEvent(arg0: ItemComponentUseOnEvent) {
    const { block, source } = arg0;
    if (block.typeId !== "hiddenyears:ruby_altar") return;
    block.setType("hiddenyears:actived_ruby_altar");
    setEquipmentItem(source, consumeAmount(getEquipmentItem(source), 1));
    block.dimension.spawnEntity(
      "hiddenyears:ferocious_ruby_guardian",
      Vector3Utils.add(block.location, { x: 0, y: 1, z: 0 })
    );
    block.dimension.spawnEntity(
      "hiddenyears:ruby_zombie",
      Vector3Utils.add(block.location, { x: 2, y: 0, z: 0 })
    );
    block.dimension.spawnEntity(
      "hiddenyears:ruby_zombie",
      Vector3Utils.add(block.location, { x: -2, y: 0, z: 0 })
    );
    block.dimension.spawnEntity(
      "hiddenyears:ruby_zombie",
      Vector3Utils.add(block.location, { x: 0, y: 0, z: 2 })
    );
    block.dimension.spawnEntity(
      "hiddenyears:ruby_zombie",
      Vector3Utils.add(block.location, { x: 0, y: 0, z: -2 })
    );
    if (source instanceof Player) {
      source.playSound("ambient.weather.thunder");
      source.sendMessage({
        translate: "message.hiddenyears:ruby_frame_spawned"
      });
    }
  }
}
