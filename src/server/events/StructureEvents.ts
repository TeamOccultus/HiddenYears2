import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  Player,
  StructureAnimationMode,
  StructurePlaceOptions,
  system,
  world
} from "@minecraft/server";
import { StructurePlacerComponentParams } from "../components/StructurePlacerComponent/Params";
import {
  consumeEquipmentAmount,
  Monologue,
  setEquipmentItem
} from "@occultus/api";

export class StructureEvents {
  static toAnimationMode(mode: string): StructureAnimationMode {
    switch (mode) {
      case "blocks":
        return StructureAnimationMode.Blocks;
      case "layers":
        return StructureAnimationMode.Layers;
      case "none":
        return StructureAnimationMode.None;
      default:
        return StructureAnimationMode.Blocks;
    }
  }
  static checkHeight(
    player: Player,
    max: number = 256,
    min: number = -64
  ): boolean {
    if (player.location.y < min || player.location.y > max) {
      return false;
    }
    return true;
  }
  static aaruDreamEvent(player: Player) {
    const osirisMonologue = new Monologue(
      "hiddenyears:osiris",
      "music.biome.desert_song"
    );

    osirisMonologue
      .addMonologue({ translate: "monologue.hiddenyears:osiris.1" }, 0) // 立即发送
      .addMonologue({ translate: "monologue.hiddenyears:osiris.2" }, 60) // 间隔60tick
      .addMonologue({ translate: "monologue.hiddenyears:osiris.3" }, 60) // 间隔60tick
      .addMonologue({ translate: "monologue.hiddenyears:osiris.4" }, 60) // 间隔60tick
      .addMonologue({ translate: "monologue.hiddenyears:osiris.5" }, 60); // 间隔60tick

    osirisMonologue.play(player);
  }
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const { source, itemStack } = arg0;
    const p = arg1.params as StructurePlacerComponentParams;
    if (!this.checkHeight(source, p.max_height, p.min_height)) {
      source.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:cant_place",
        with: [p.min_height.toString(), p.max_height.toString()]
      });
      return;
    }
    consumeEquipmentAmount(source, 1);
    let struc = world.structureManager.get(p.id);
    let options: StructurePlaceOptions;
    if (!struc) {
      throw new Error("Cannot find structure with id " + p.id + "!");
    }
    if (!p.place_offset) {
      p.place_offset = [0, 0, 0];
    }
    if (p.animation) {
      options = {
        animationMode: this.toAnimationMode(p.animation.type),
        animationSeconds: p.animation.seconds
      };
    }
    if (p.present === "aaru_dream") {
      this.aaruDreamEvent(source);
    }
    world.structureManager.place(
      struc,
      arg0.source.dimension,
      {
        x: arg0.source.location.x + p.place_offset[0],
        y: arg0.source.location.y + p.place_offset[1],
        z: arg0.source.location.z + p.place_offset[2]
      },
      options
    );
  }
}
