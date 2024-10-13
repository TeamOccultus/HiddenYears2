import {
  getEquipmentItem,
  Register,
  setEquipmentItem,
  ToolTag,
  ToolType,
  WeaponTag,
} from "@lazuli/ldk2";
import { HyCorrosionMap } from "../../data/data";
import { world } from "@minecraft/server";
import { applyImitationDamage } from "../../core/imitation";

const NORMAL_TOOL = new ToolTag("hy:custom_tools", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
});

const NORMAL_SHOVEL = new ToolTag("hy:custom_shovel", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
  type: ToolType.shovel,
});

const NORMAL_AXE = new ToolTag("hy:custom_axe", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
  type: ToolType.axe,
});

const NORMAL_HOE = new ToolTag("hy:custom_hoe", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
  type: ToolType.hoe,
});

const NORMAL_WEAPON = new WeaponTag("hy:custom_tools", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
});

export function registryTool() {
  world.afterEvents.playerBreakBlock.subscribe((event) => {
    const [ENTITY, ITEM] = [event.player, event.itemStackBeforeBreak];
    if (ITEM?.hasTag("hy:imitation_tools")) {
      applyImitationDamage(ENTITY);
    }
  });
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const [ENTITY, ITEM] = [
      event.damagingEntity,
      getEquipmentItem(event.damagingEntity),
    ];
    if (ITEM?.hasTag("hy:imitation_tools")) {
      applyImitationDamage(ENTITY);
    }
  });
  Register.registry([
    NORMAL_WEAPON,
    NORMAL_TOOL,
    NORMAL_SHOVEL,
    NORMAL_AXE,
    NORMAL_HOE,
  ]);
}
