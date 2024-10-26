import {
  ItemStack,
  Player,
  StructureAnimationMode,
  system,
  Vector3,
  world,
} from "@minecraft/server";
import {
  consumeDurability,
  getEquipmentItem,
  giveItem,
  setEquipmentItem,
} from "@lazuli/ldk2";
import { HyUtils } from "../../core/utils";

world.beforeEvents.worldInitialize.subscribe((event) => {
  const ITEM_COMREG = event.itemComponentRegistry;
  ITEM_COMREG.registerCustomComponent("lazuli:custom_tools", {
    onMineBlock(arg) {
      const item = getEquipmentItem(arg.source);
      if (item) {
        const newItem = consumeDurability(item, 1, arg.source);
        setEquipmentItem(arg.source, newItem);
      }
    },
    onHitEntity(arg) {
      const item = getEquipmentItem(arg.attackingEntity);
      if (item) {
        const newItem = consumeDurability(item, 1, arg.attackingEntity);
        setEquipmentItem(arg.attackingEntity, newItem);
      }
    },
  });
  ITEM_COMREG.registerCustomComponent("hy:frame_acrtiver", {
    onUseOn(arg) {
      const BLOCK = arg.block;
      if (
        BLOCK.typeId === "hy:unknown_frame"
      ) {
        if(arg.source instanceof Player){
          arg.source.onScreenDisplay.setTitle({translate: "hy.title.pharaohs_ghost"})
          arg.source.onScreenDisplay.updateSubtitle({translate: "hy.title.pharaohs_ghost.subtitle"})
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
  ITEM_COMREG.registerCustomComponent("hy:lighting_frame_acrtiver", {
    onUseOn(arg) {
      const BLOCK = arg.block;
      if (
        BLOCK.typeId === "hy:lighting_frame"
      ) {
        if(arg.source instanceof Player){
          arg.source.onScreenDisplay.setTitle({translate: "hy.title.king_of_ruby"})
          arg.source.onScreenDisplay.updateSubtitle({translate: "hy.title.king_of_ruby.subtitle"})
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
  ITEM_COMREG.registerCustomComponent("hy:pyramid_summer", {
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
  const BLOCK_COMREG = event.blockComponentRegistry;
  BLOCK_COMREG.registerCustomComponent("hy:fatigue_sandstone", {
    onStepOn(arg) {
      arg?.entity.addEffect("mining_fatigue", 100, { showParticles: false });
    },
  });
  BLOCK_COMREG.registerCustomComponent("hy:cursed_slab", {
    onPlayerDestroy(arg) {
      arg.dimension.spawnEntity("hy:mummy", arg.block.location);
    },
  });
  BLOCK_COMREG.registerCustomComponent("hy:drift_sand_cabinet", {
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
        HyUtils.loot(arg.dimension, LOC, "chests/desert/drift_sand_cabinet");
      }
    },
  });
});
