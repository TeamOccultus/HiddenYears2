import {
  Player,
  StructureAnimationMode,
  system,
  Vector3,
  world,
} from "@minecraft/server";
import { getEquipmentItem, loot, setEquipmentItem } from "@grindstone/utils";

world.beforeEvents.worldInitialize.subscribe((event) => {
  const itemRegistry = event.itemComponentRegistry;
  itemRegistry.registerCustomComponent("hy:frame_acrtiver", {
    onUseOn(arg) {
      const BLOCK = arg.block;
      if (BLOCK.typeId === "hy:unknown_frame") {
        if (arg.source instanceof Player) {
          arg.source.onScreenDisplay.setTitle({
            translate: "hy.title.pharaohs_ghost",
          });
          arg.source.onScreenDisplay.updateSubtitle({
            translate: "hy.title.pharaohs_ghost.subtitle",
          });
        }
        setEquipmentItem(arg.source);
        BLOCK.setType("hy:actived_unknown_frame");
        BLOCK.dimension.spawnEntity("hy:pharaohs_ghost", {
          x: BLOCK.location.x,
          y: BLOCK.location.y + 1,
          z: BLOCK.location.z,
        });
      }
    },
  });
  itemRegistry.registerCustomComponent("hy:lighting_frame_acrtiver", {
    onUseOn(arg) {
      const BLOCK = arg.block;
      if (BLOCK.typeId === "hy:lighting_frame") {
        if (arg.source instanceof Player) {
          arg.source.onScreenDisplay.setTitle({
            translate: "hy.title.king_of_ruby",
          });
          arg.source.onScreenDisplay.updateSubtitle({
            translate: "hy.title.king_of_ruby.subtitle",
          });
        }
        setEquipmentItem(arg.source);
        BLOCK.setType("hy:actived_lighting_frame");
        BLOCK.dimension.spawnEntity("hy:king_of_ruby", {
          x: BLOCK.location.x,
          y: BLOCK.location.y + 1,
          z: BLOCK.location.z,
        });
      }
    },
  });
  itemRegistry.registerCustomComponent("hy:pyramid_summer", {
    onUse(arg) {
      if (arg.source.location.y < 270) {
        setEquipmentItem(arg.source);
        arg.source.sendMessage({ translate: "hy.monologue.osiris.1" });
        system.runTimeout(() => {
          arg.source.sendMessage({ translate: "hy.monologue.osiris.2" });
        }, 60);
        system.runTimeout(() => {
          arg.source.sendMessage({ translate: "hy.monologue.osiris.3" });
        }, 120);
        system.runTimeout(() => {
          arg.source.sendMessage({ translate: "hy.monologue.osiris.4" });
        }, 180);
        system.runTimeout(() => {
          arg.source.sendMessage({ translate: "hy.monologue.osiris.5" });
        }, 240);
        let PYRAMID = world.structureManager.get("mystructure:pyramid");
        world.structureManager.place(
          PYRAMID,
          arg.source.dimension,
          {
            x: arg.source.location.x + 2,
            y: arg.source.location.y,
            z: arg.source.location.z,
          },
          { animationMode: StructureAnimationMode.Blocks, animationSeconds: 15 }
        );
      } else {
        arg.source.sendMessage({ translate: "hy.message.cant_place" });
      }
    },
  });
  const blockRegistry = event.blockComponentRegistry;
  blockRegistry.registerCustomComponent("hy:fatigue_sandstone", {
    onStepOn(arg) {
      arg?.entity.addEffect("mining_fatigue", 100, { showParticles: false });
    },
  });
  blockRegistry.registerCustomComponent("hy:cursed_slab", {
    onPlayerDestroy(arg) {
      arg.dimension.spawnEntity("hy:mummy", arg.block.location);
    },
  });
  blockRegistry.registerCustomComponent("hy:drift_sand_cabinet", {
    onPlayerInteract(arg) {
      if (arg.block.permutation.getState("hy:use_up")) {
        return;
      } else if (getEquipmentItem(arg.player)?.typeId === "hy:drift_sand_key") {
        setEquipmentItem(arg.player);
        arg.block.setPermutation(
          arg.block.permutation.withState("hy:use_up", true)
        );
        const LOC: Vector3 = {
          x: arg.block.location.x,
          y: arg.block.location.y + 1,
          z: arg.block.location.z,
        };
        arg.dimension.playSound("trial_spawner.eject_item", LOC);
        loot(arg.dimension, LOC, "chests/desert/drift_sand_cabinet");
      }
    },
  });
  blockRegistry.registerCustomComponent("hy:sand_grave", {
    onPlayerInteract(arg) {
      if (getEquipmentItem(arg.player)?.typeId === "hy:drift_sand_coronet") {
        arg.player.camera.fade({
          fadeTime: {
            fadeInTime: 1,
            holdTime: 3,
            fadeOutTime: 1 
          }
        })
        arg.player.camera.setCamera("minecraft:third_person");
        arg.player.onScreenDisplay.setTitle({
          translate: "hy.title.mutas_wrath",
        });
        arg.player.onScreenDisplay.updateSubtitle({
          translate: "hy.title.mutas_wrath.subtitle",
        });
        arg.block.setType("hy:actived_sand_grave");
        system.runTimeout(() => {
          arg.dimension.spawnEntity("hy:mutas_wrath", arg.block.location);
          arg.player.camera.setCamera("minecraft:first_person");
        }, 60);
      }
    },
  });
});
