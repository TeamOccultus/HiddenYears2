import {
  EntityQueryOptions,
  ItemStack,
  system,
  world,
} from "@minecraft/server";
import {
  affectEntities,
  damageEntities,
  FoodItem,
  giveItem,
  Prop,
  randomInteger,
  Register,
  withWeightChance,
  DurabilityLimitedProp,
  pushLore,
} from "@lazuli/ldk2";
import { HyUtils } from "../../core/utils";

const BANDAGE = new DurabilityLimitedProp("hy:bandage", 1, (event) => {
  const PLAYER = event.source;
  PLAYER.addEffect("regeneration", 1200);
  PLAYER.addEffect("resistance", 600);
  PLAYER.addEffect("instant_health", 5);
  PLAYER.removeTag("hy:bleed_lv1");
  PLAYER.playSound("use.cloth");
});

const MEDICINE_PACK = new DurabilityLimitedProp(
  "hy:medicine_pack",
  1,
  (event) => {
    const PLAYER = event.source;
    PLAYER.addEffect("regeneration", 1200);
    PLAYER.addEffect("resistance", 600);
    PLAYER.addEffect("fire_resistance", 600);
    PLAYER.addEffect("instant_health", 10);
    PLAYER.removeTag("hy:bleed_lv1");
    PLAYER.removeTag("hy:bleed_lv2");
    PLAYER.playSound("use.cloth");
  }
);

const COPPER_HORN = new DurabilityLimitedProp("hy:copper_horn", 1, (event) => {
  const PLAYER = event.source;
  if (PLAYER.isSneaking) {
    world.playSound("copper_horn.sneak", PLAYER.location);
    affectEntities(
      PLAYER.dimension,
      {
        location: PLAYER.location,
        maxDistance: 20,
        excludeTags: ["hy.horn_user"],
        excludeFamilies: ["noaoe"],
      },
      "slowness",
      300,
      {
        amplifier: 2,
      }
    );
    PLAYER.removeEffect("slowness");
    PLAYER.addEffect("speed", 300, {
      amplifier: 2,
    });
  } else {
    world.playSound("copper_horn.walk", PLAYER.location);
    affectEntities(
      PLAYER.dimension,
      {
        location: PLAYER.location,
        maxDistance: 20,
        excludeTags: ["hy.horn_user"],
        excludeFamilies: ["noaoe"],
      },
      "speed",
      300,
      {
        amplifier: 2,
      }
    );
    PLAYER.removeEffect("speed");
    PLAYER.addEffect("slowness", 300, {
      amplifier: 2,
    });
  }
});

const SOUL_LETTER = new Prop("hy:soul_letter_sprite", (event) => {
  const PLAYER = event.source;
  PLAYER.dimension.spawnEntity("hy:sprite", PLAYER.location);
});

const RUBY_BAG = new Prop("hy:ruby_bag", (event) => {
  const PLAYER = event.source;
  withWeightChance([
    {
      weight: 5,
      event: () => {
        giveItem(
          PLAYER,
          new ItemStack("minecraft:netherite_scrap", randomInteger(2, 1))
        );
      },
    },
    {
      weight: 10,
      event: () => {
        giveItem(PLAYER, new ItemStack("diamond", randomInteger(5, 1)));
      },
    },
    {
      weight: 15,
      event: () => {
        giveItem(PLAYER, new ItemStack("gold_ingot", randomInteger(8, 1)));
      },
    },
    {
      weight: 20,
      event: () => {
        giveItem(PLAYER, new ItemStack("hy:ruby_apple", randomInteger(12, 3)));
      },
    },
  ]);
});

const EXP_CALAMITY_BAG = new Prop("hy:experience_calamity_bag", (event) => {
  const PLAYER = event.source;
  PLAYER.dimension.spawnEntity("hy:king_of_ruby", PLAYER.location);
});

const RUBY_RUNES = new Prop("hy:ruby_runes", (event) => {
  const PLAYER = event.source;
  PLAYER.addLevels(randomInteger(10, 1));
  PLAYER.playSound("random.orb");
  PLAYER.addEffect("fire_resistance", 1200);
  PLAYER.addEffect("resistance", 1200);
});

const BONE_BOARDSWORD = new DurabilityLimitedProp(
  "hy:bone_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(event.source) !== 0) return;
    if (!event.itemStack.getDynamicProperty("hy:show_details")) {
      event.source.onScreenDisplay.setActionBar({
        translate: "hy.message.know_details",
      });
      let lore = event.itemStack.getLore();
      event.itemStack.setLore(
        lore.concat([
          "",
          "§9§l使用时：§r",
          "§f+6×10格 范围伤害",
          "§f+8×18格 精通伤害",
          "",
          "§9§l精通生物：§r",
          "§f骷髅类生物",
        ])
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    HyUtils.boneMagicExplode(event.source);
    cooldown.startCooldown(event.source);
  }
);

const FLASH_METAL_BOARDSWORD = new DurabilityLimitedProp(
  "hy:flash_metal_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(event.source) !== 0) return;
    if (!event.itemStack.getDynamicProperty("hy:show_details")) {
      event.source.onScreenDisplay.setActionBar({
        translate: "hy.message.know_details",
      });
      let lore = event.itemStack.getLore();
      event.itemStack.setLore(
        lore.concat([
          "",
          "§9§l使用时：§r",
          "§f+6×10格 范围伤害",
          "§f+8×18格 精通伤害",
          "",
          "§9§l精通生物：§r",
          "§f一般生物",
        ])
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    HyUtils.flashMetalExplode(event.source);
    cooldown.startCooldown(event.source);
  }
);

const CORROSION_BOARDSWORD = new DurabilityLimitedProp(
  "hy:corrosion_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(event.source) !== 0) return;
    if (!event.itemStack.getDynamicProperty("hy:show_details")) {
      event.source.onScreenDisplay.setActionBar({
        translate: "hy.message.know_details",
      });
      let lore = event.itemStack.getLore();
      event.itemStack.setLore(
        lore.concat([
          "",
          "§9§l使用时：§r",
          "§f+6×10格 范围伤害",
          "§f+8×18格 精通伤害",
          "",
          "§9§l精通生物：§r",
          "§f亡灵类生物",
        ])
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    HyUtils.corrosionExplode(event.source);
    cooldown.startCooldown(event.source);
  }
);

const EMERALD_BOARDSWORD = new DurabilityLimitedProp(
  "hy:emerald_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(event.source) !== 0) return;
    if (!event.itemStack.getDynamicProperty("hy:show_details")) {
      event.source.onScreenDisplay.setActionBar({
        translate: "hy.message.know_details",
      });
      let lore = event.itemStack.getLore();
      event.itemStack.setLore(
        lore.concat([
          "",
          "§9§l使用时：§r",
          "§f+6×10格 范围伤害",
          "§f+8×18格 精通伤害",
          "",
          "§9§l精通生物：§r",
          "§f灾厄类生物",
        ])
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    HyUtils.emeraldExplode(event.source);
    cooldown.startCooldown(event.source);
  }
);

const FLASH_COPPER_BOARDSWORD = new DurabilityLimitedProp(
  "hy:flash_copper_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(event.source) !== 0) return;
    if (!event.itemStack.getDynamicProperty("hy:show_details")) {
      event.source.onScreenDisplay.setActionBar({
        translate: "hy.message.know_details",
      });
      let lore = event.itemStack.getLore();
      event.itemStack.setLore(
        lore.concat([
          "",
          "§9§l使用时：§r",
          "§f+6×10格 范围伤害",
          "§f+8×18格 精通伤害",
          "",
          "§9§l精通生物：§r",
          "§f节肢类生物",
        ])
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    HyUtils.flashCopperExplode(event.source);
    cooldown.startCooldown(event.source);
  }
);

const AMETHYST_BOARDSWORD = new DurabilityLimitedProp(
  "hy:amethyst_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(event.source) !== 0) return;
    if (!event.itemStack.getDynamicProperty("hy:show_details")) {
      event.source.onScreenDisplay.setActionBar({
        translate: "hy.message.know_details",
      });
      let lore = event.itemStack.getLore();
      event.itemStack.setLore(
        lore.concat([
          "",
          "§9§l使用时：§r",
          "§f+6×10格 范围伤害",
          "§f+8×18格 精通伤害",
          "",
          "§9§l精通生物：§r",
          "§f家禽与家畜",
        ])
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    HyUtils.amethystExplode(event.source);
    cooldown.startCooldown(event.source);
  }
);

const RUBY_BOARDSWORD = new DurabilityLimitedProp(
  "hy:ruby_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(event.source) !== 0) return;
    if (!event.itemStack.getDynamicProperty("hy:show_details")) {
      event.source.onScreenDisplay.setActionBar({
        translate: "hy.message.know_details",
      });
      let lore = event.itemStack.getLore();
      event.itemStack.setLore(
        lore.concat([
          "",
          "§9§l使用时：§r",
          "§f+6×10格 范围伤害",
          "§f+8×18格 精通伤害",
          "",
          "§9§l精通生物：§r",
          "§f红宝石生物",
        ])
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    HyUtils.rubyExplode(event.source);
    cooldown.startCooldown(event.source);
  }
);

const RAIN_GOD_BLESSING = new Prop("hy:rain_god_blessing", (event) => {
  const PLAYER = event.source;
  PLAYER.removeTag("hy:drought");
  PLAYER.removeTag("hy:dehydration");
  PLAYER.addTag("hy:immune_desert_debuff");
  PLAYER.onScreenDisplay.setActionBar({
    translate: "hy.message.immune_desert_debuff.get",
  });
  system.runTimeout(() => {
    if (PLAYER.isValid()) {
      PLAYER.removeTag("hy:immune_desert_debuff");
      PLAYER.onScreenDisplay.setActionBar({
        translate: "hy.message.immune_desert_debuff.remove",
      });
    }
  }, 900);
});

const RUBY_APPLE = new FoodItem("hy:ruby_apple", [], (event) => {
  const PLAYER = event.source;
  PLAYER.addExperience(3);
  world.playSound("random.orb", PLAYER.location);
});

/**
 * 注册道具
 */
export function registryItem() {
  world.afterEvents.itemUse.subscribe((event) => {
    // 破伤风伤害
    const [PLAYER, ITEM] = [event.source, event.itemStack];
    if (ITEM.hasTag("hy:tetanus_item")) {
      PLAYER.addTag("hy.tetanus_attacker");
      const TETANUS_OPINION: EntityQueryOptions = {
        location: PLAYER.location,
        maxDistance: 4,
        excludeTags: ["hy.tetanus_attacker"],
        excludeFamilies: ["noaoe"],
      };
      affectEntities(PLAYER.dimension, TETANUS_OPINION, "poison", 300);
      affectEntities(PLAYER.dimension, TETANUS_OPINION, "nausea", 600, {
        amplifier: 1,
      });
      affectEntities(PLAYER.dimension, TETANUS_OPINION, "wither", 6);
      PLAYER.removeTag("hy.tetanus_attacker");
    }
    // 法术爆发
    if (ITEM.hasTag("hy:magic_explode") && PLAYER.level > 5) {
      if (
        ITEM.getComponent("cooldown").getCooldownTicksRemaining(PLAYER) !== 0
      ) {
        PLAYER.onScreenDisplay.setActionBar({
          translate: "hy.message.wait_cooldown",
        });
        return;
      }
      PLAYER.addTag("hy.magic_explode");
      PLAYER.addExperience(-10);
      damageEntities(
        PLAYER.dimension,
        {
          location: PLAYER.location,
          maxDistance: 10,
          excludeTags: ["hy.magic_explode"],
          excludeFamilies: ["noaoe"],
        },
        6
      );
      system.runTimeout(() => {
        PLAYER.removeTag("hy.magic_explode");
      }, 100);
    }
  });
  world.afterEvents.itemCompleteUse.subscribe((event) => {
    const [PLAYER, ITEM] = [event.source, event.itemStack];
    if (ITEM.typeId === "potion") {
      PLAYER.removeTag("hy:drought");
    }
  });
  // 注册道具
  Register.registry([
    BANDAGE,
    MEDICINE_PACK,
    COPPER_HORN,
    SOUL_LETTER,
    RUBY_BAG,
    EXP_CALAMITY_BAG,
    RUBY_RUNES,
    BONE_BOARDSWORD,
    FLASH_METAL_BOARDSWORD,
    CORROSION_BOARDSWORD,
    EMERALD_BOARDSWORD,
    FLASH_COPPER_BOARDSWORD,
    AMETHYST_BOARDSWORD,
    RUBY_BOARDSWORD,
    RAIN_GOD_BLESSING,
    RUBY_APPLE,
  ]);
}
