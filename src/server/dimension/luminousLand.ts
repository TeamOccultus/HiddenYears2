import { world } from "@minecraft/server";
import { toVec3 } from "@occultus/api";

const terrainGenerationTag = "hiddenyears:luminous_palace_generated";

function prepareLuminousLand() {
  if (world.getDynamicProperty(terrainGenerationTag)) return;
  world.structureManager.placeJigsawStructure(
    "hiddenyears:luminous_palace",
    world.getDimension("hiddenyears:luminous_land"),
    toVec3(-5, 0, -5),
    {
      ignoreStartHeight: true
    }
  );
  world.setDynamicProperty(terrainGenerationTag, true);
}

export function ensureLuminousPalaceReady() {
  world.afterEvents.playerDimensionChange.subscribe((arg) => {
    if (arg.toDimension.id === "hiddenyears:luminous_land") {
      prepareLuminousLand();
    }
  });
  world.afterEvents.entitySpawn.subscribe((arg) => {
    if (arg.entity.typeId !== "minecraft:slime") return;
    if (arg.entity.dimension.id !== "hiddenyears:luminous_land") return;
    arg.entity.remove();
  });
}
