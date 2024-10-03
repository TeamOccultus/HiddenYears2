import {
  StructureAnimationMode,
  system,
  world,
} from "@minecraft/server";
import {
  consumeDurability,
  getEquipmentItem,
  setEquipmentItem,
} from "lazuli-devkit";

world.beforeEvents.worldInitialize.subscribe((event) => {
  const REGISTER = event.itemComponentRegistry;
  REGISTER.registerCustomComponent("lazuli:custom_tools", {
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
  REGISTER.registerCustomComponent("hy:frame_acrtiver", {
    onUseOn(arg) {
      const BLOCK = arg.block;
      if (
        arg.itemStack.typeId === "hy:drift_sand_statue" &&
        BLOCK.typeId === "hy:unknown_frame"
      ) {
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
  REGISTER.registerCustomComponent("hy:pyramid_summer", {
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
});
