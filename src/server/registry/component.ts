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
});
