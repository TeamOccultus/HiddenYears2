import {
  ToolTag,
  WeaponAtkSkill,
  WeaponTag,
  WeaponUseSkill,
} from "@grindstone/item-kit";
import { system } from "@minecraft/server";
import { tryOperateEntity } from "@grindstone/utils";
import { replaceLowerCopperTool } from "../../core/utils";

const NORMAL_TOOL = new ToolTag(
  "hy:custom_tools",
  {
    destroyedAfterEvents: (holder, item) => {
      replaceLowerCopperTool(item, holder);
    },
  }
);

const NORMAL_SHOVEL = new ToolTag(
  "hy:custom_shovel",
  {
    destroyedAfterEvents: (holder, item) => {
      replaceLowerCopperTool(item, holder);
    },
    type: "shovel",
    closeDurabilityTrigger: true
  }
);

const NORMAL_AXE = new ToolTag(
  "hy:custom_axe",
  {
    destroyedAfterEvents: (holder, item) => {
      replaceLowerCopperTool(item, holder);
    },
    type: "axe",
    closeDurabilityTrigger: true
  }
);

const NORMAL_HOE = new ToolTag(
  "hy:custom_hoe",
  {
    destroyedAfterEvents: (holder, item) => {
      replaceLowerCopperTool(item, holder);
    },
    type: "hoe",
    closeDurabilityTrigger: true
  }
);

const NORMAL_WEAPON = new WeaponTag("hy:custom_weapons", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
});

const AWL_WEAPON = new WeaponTag("hy:is_awl", {
  closeDurabilityTrigger: true,
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
      { translate: "hy.itemSkill.awl.1" }
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
      { translate: "hy.itemSkill.awl.2" }
    ),
  ],
});

const HAMMER_WEAPON = new WeaponTag("hy:is_hammer", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
  closeDurabilityTrigger: true,
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
      { translate: "hy.itemSkill.hammer.1" }
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
      { translate: "hy.itemSkill.hammer.2" }
    ),
  ],
});

const CROWBAR_WEAPON = new WeaponTag("hy:is_crowbar", {
  closeDurabilityTrigger: true,
  skill: [
    new WeaponAtkSkill(2, "empty"),
    new WeaponAtkSkill(
      3,
      {
        damageTarget: 4,
      },
      { translate: "hy.itemSkill.crowbar.1" }
    ),
    new WeaponAtkSkill(
      1,
      {
        damageTarget: 5,
        effectTarget: [
          {
            effectType: "slowness",
            duration: 400,
            amplifier: 1,
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
      { translate: "hy.itemSkill.crowbar.2" }
    ),
  ],
});

const KNIFE_WEAPON = new WeaponTag("hy:is_knife", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
  closeDurabilityTrigger: true,
  skill: [
    new WeaponAtkSkill(3, "empty"),
    new WeaponAtkSkill(
      3,
      {
        custom: (entity, target) => {
          target.addTag("hy:bleed_lv1");
          system.runTimeout(() => {
            tryOperateEntity(target, (entity) => {
              entity.removeTag("hy:bleed_lv1");
            });
          }, 160);
        },
      },
      { translate: "hy.itemSkill.knife.1" }
    ),
    new WeaponAtkSkill(
      1,
      {
        custom: (entity, target) => {
          target.addTag("hy:bleed_lv2");
          system.runTimeout(() => {
            tryOperateEntity(target, (entity) => {
              entity.removeTag("hy:bleed_lv2");
            });
          }, 160);
        },
      },
      { translate: "hy.itemSkill.knife.2" }
    ),
  ],
});

const BOARDSWORD_WEAPON = new WeaponTag("hy:magic_explode",{
  closeDurabilityTrigger: true,
  skill: [
    new WeaponAtkSkill(5, "empty"),
    new WeaponAtkSkill(
      2,
      {
        xp: 10,
      },
      { translate: "hy.itemSkill.boardsword.1" }
    ),
    new WeaponAtkSkill(
      1,
      {
        levels: 1,
      },
      { translate: "hy.itemSkill.boardsword.2" }
    ),
  ],
});

export function registryTool() {
  NORMAL_WEAPON.build();
  NORMAL_TOOL.build();
  NORMAL_SHOVEL.build();
  NORMAL_AXE.build();
  NORMAL_HOE.build();
  AWL_WEAPON.build();
  HAMMER_WEAPON.build();
  CROWBAR_WEAPON.build();
  KNIFE_WEAPON.build();
  BOARDSWORD_WEAPON.build();
}
