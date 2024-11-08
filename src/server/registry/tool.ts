import {
  getEquipmentItem,
  Register,
  setEquipmentItem,
  ToolTag,
  WeaponAtkSkill,
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
  type: "shovel",
});

const NORMAL_AXE = new ToolTag("hy:custom_axe", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
  type: "axe",
});

const NORMAL_HOE = new ToolTag("hy:custom_hoe", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
  type: "hoe",
});

const NORMAL_WEAPON = new WeaponTag("hy:custom_tools", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
});

const AWL_WEAPON = new WeaponTag("hy:is_awl", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
  skill: [
    new WeaponAtkSkill(5, "empty"),
    new WeaponAtkSkill(
      3,
      {
        damageTarget: 1,
        effectTarget: {
          effectType: "poison",
          duration: 100,
        },
      },
      { translate: "hy.itemSkill.awl.1" },
    ),
    new WeaponAtkSkill(
      2,
      {
        damageTarget: 2,
        effectTarget: {
          effectType: "poison",
          duration: 140,
        },
      },
      { translate: "hy.itemSkill.awl.2" },
    ),
  ],
});

const HAMMER_WEAPON = new WeaponTag("hy:is_hammer", {
  destroyedAfterEvents: (holder, item) => {
    if (item.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      setEquipmentItem(holder, HyCorrosionMap[item.typeId.replace("hy:", "")]);
    }
  },
  skill: [
    new WeaponAtkSkill(5, "empty"),
    new WeaponAtkSkill(
      3,
      {
        effectTarget: [
          {
            effectType: "mining_fatigue",
            duration: 600,
          },
          {
            effectType: "weakness",
            duration: 300,
          },
        ],
      },
      { translate: "hy.itemSkill.hammer.1" },
    ),
    new WeaponAtkSkill(
      1,
      {
        damageTarget: 2,
        effectTarget: [
          {
            effectType: "mining_fatigue",
            duration: 600,
          },
          {
            effectType: "weakness",
            duration: 300,
          },
          {
            effectType: "darkness",
            duration: 200,
          },
        ],
      },
      { translate: "hy.itemSkill.hammer.2" },
    ),
  ],
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
    AWL_WEAPON,
    HAMMER_WEAPON,
  ]);
}
