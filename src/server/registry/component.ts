import { world } from "@minecraft/server";
import {
  consumeDurability,
  getEquipmentItem,
  setEquipmentItem,
} from "lazuli-mc";

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
});
