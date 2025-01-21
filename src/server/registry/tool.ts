import {
  ToolTag,
  WeaponAtkSkill,
  WeaponTag,
} from "@grindstone/item-kit";
import { replaceLowerCopperTool } from "../../core/utils";
import { bleedEffect } from "../effects/bleed";
import { droughtEffect } from "../effects/drought";
import { dehydrationEffect } from "../effects/dehydration";

const normalTool = new ToolTag("hy:custom_tools", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
});

const normalShovel = new ToolTag("hy:custom_shovel", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
  type: "shovel",
  closeDurabilityTrigger: true,
});

const normalAxe = new ToolTag("hy:custom_axe", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
  type: "axe",
  closeDurabilityTrigger: true,
});

const normalHoe = new ToolTag("hy:custom_hoe", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
  type: "hoe",
  closeDurabilityTrigger: true,
});

const normalWeapon = new WeaponTag("hy:custom_weapons", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
});

const awlWeapon = new WeaponTag("hy:is_awl", {
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

const hammerWeapon = new WeaponTag("hy:is_hammer", {
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

const corwbarWeapon = new WeaponTag("hy:is_crowbar", {
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

const knifeWeapon = new WeaponTag("hy:is_knife", {
  destroyedAfterEvents: (holder, item) => {
    replaceLowerCopperTool(item, holder);
  },
  closeDurabilityTrigger: true,
  skill: [
    new WeaponAtkSkill(3, "empty"),
    new WeaponAtkSkill(
      3,
      {
        custom: (attacker, target) => {
          bleedEffect.addLevelTemporarily(target, 1, 100);
        },
      },
      { translate: "hy.itemSkill.knife.1" }
    ),
    new WeaponAtkSkill(
      1,
      {
        custom: (attacker, target) => {
          bleedEffect.addLevelTemporarily(target, 2, 120);
        },
      },
      { translate: "hy.itemSkill.knife.2" }
    ),
  ],
});

const boardswordWeapon = new WeaponTag("hy:magic_explode", {
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

/**
 * 带有干旱效果的武器
 * @tag `hy:drought_effect` 使物品攻击时给予目标300刻的干旱效果
 */
const droughtEffectWeapon = new WeaponTag("hy:drought_effect",{
  closeDurabilityTrigger: true,
  skill: [
   new WeaponAtkSkill(1,{
    custom(attacker, target) {
      droughtEffect.addLevelTemporarily(target, 1, 300);
    },
   })
  ]
})

/**
 * 带有脱水效果的武器
 * @tag `hy:dehydration_effect` 使物品攻击时给予目标300刻的脱水效果
 */
const dehydrationEffectWeapon = new WeaponTag("hy:dehydration_effect",{
  closeDurabilityTrigger: true,
  skill: [
   new WeaponAtkSkill(1,{
    custom(attacker, target) {
      dehydrationEffect.addLevelTemporarily(attacker, 1, 300);
      dehydrationEffect.addLevelTemporarily(target, 1, 300);
    },
   })
  ]
})

export function registryTool() {
  normalWeapon.build();
  normalTool.build();
  normalShovel.build();
  normalAxe.build();
  normalHoe.build();
  awlWeapon.build();
  hammerWeapon.build();
  corwbarWeapon.build();
  knifeWeapon.build();
  boardswordWeapon.build();
  droughtEffectWeapon.build();
  dehydrationEffectWeapon.build();
}
