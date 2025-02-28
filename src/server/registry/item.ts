import {
  EntityQueryOptions,
  ItemCooldownComponent,
  ItemStack,
  system,
  world,
} from "@minecraft/server";
import {
  PropBuilder,
  DurabilityLimitedPropBuilder,
} from "@grindstone/item-kit";
import { MagicAimAttack } from "../../core/magicAimAttack";
import {
  affectEntities,
  consumeDurability,
  damageEntities,
  giveItem,
  randomInteger,
  setEquipmentItem,
  withWeightChance,
} from "@grindstone/utils";
import { droughtEffect } from "./effects/drought";
import { dehydrationEffect } from "./effects/dehydration";

const BANDAGE = new DurabilityLimitedPropBuilder("hy:bandage", 1, (event) => {
  const PLAYER = event.source;
  PLAYER.addEffect("regeneration", 1200);
  PLAYER.addEffect("resistance", 600);
  PLAYER.addEffect("instant_health", 5);
  PLAYER.removeTag("hy:bleed_lv1");
  PLAYER.playSound("use.cloth");
});

const MEDICINE_PACK = new DurabilityLimitedPropBuilder(
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
  },
);

const COPPER_HORN = new DurabilityLimitedPropBuilder(
  "hy:copper_horn",
  1,
  (event) => {
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
        },
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
        },
      );
      PLAYER.removeEffect("speed");
      PLAYER.addEffect("slowness", 300, {
        amplifier: 2,
      });
    }
  },
);

const SOUL_LETTER = new PropBuilder("hy:soul_letter_sprite", (event) => {
  const PLAYER = event.source;
  PLAYER.dimension.spawnEntity("hy:sprite", PLAYER.location);
});

const RUBY_BAG = new PropBuilder("hy:ruby_bag", (event) => {
  const PLAYER = event.source;
  withWeightChance([
    {
      weight: 5,
      event: () => {
        giveItem(
          PLAYER,
          new ItemStack("minecraft:netherite_scrap", randomInteger(2, 1)),
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

const EXP_CALAMITY_BAG = new PropBuilder(
  "hy:experience_calamity_bag",
  (event) => {
    const PLAYER = event.source;
    PLAYER.dimension.spawnEntity("hy:king_of_ruby", PLAYER.location);
  },
);

const RUBY_RUNES = new PropBuilder("hy:ruby_runes", (event) => {
  const PLAYER = event.source;
  PLAYER.addLevels(randomInteger(10, 1));
  PLAYER.playSound("random.orb");
  PLAYER.addEffect("fire_resistance", 1200);
  PLAYER.addEffect("resistance", 1200);
});

const BONE_BOARDSWORD = new DurabilityLimitedPropBuilder(
  "hy:bone_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent(
      "cooldown",
    ) as ItemCooldownComponent;
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
        ]),
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    MagicAimAttack.boneMagicExplode(event.source);
    cooldown.startCooldown(event.source);
  },
);

const FLASH_METAL_BOARDSWORD = new DurabilityLimitedPropBuilder(
  "hy:flash_metal_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent(
      "cooldown",
    ) as ItemCooldownComponent;
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
        ]),
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    MagicAimAttack.flashMetalExplode(event.source);
    cooldown.startCooldown(event.source);
  },
);

const CORROSION_BOARDSWORD = new DurabilityLimitedPropBuilder(
  "hy:corrosion_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent(
      "cooldown",
    ) as ItemCooldownComponent;
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
        ]),
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    MagicAimAttack.corrosionExplode(event.source);
    cooldown.startCooldown(event.source);
  },
);

const EMERALD_BOARDSWORD = new DurabilityLimitedPropBuilder(
  "hy:emerald_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent(
      "cooldown",
    ) as ItemCooldownComponent;
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
        ]),
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    MagicAimAttack.emeraldExplode(event.source);
    cooldown.startCooldown(event.source);
  },
);

const FLASH_COPPER_BOARDSWORD = new DurabilityLimitedPropBuilder(
  "hy:flash_copper_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent(
      "cooldown",
    ) as ItemCooldownComponent;
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
        ]),
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    MagicAimAttack.flashCopperExplode(event.source);
    cooldown.startCooldown(event.source);
  },
);

const AMETHYST_BOARDSWORD = new DurabilityLimitedPropBuilder(
  "hy:amethyst_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent(
      "cooldown",
    ) as ItemCooldownComponent;
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
        ]),
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    MagicAimAttack.amethystExplode(event.source);
    cooldown.startCooldown(event.source);
  },
);

const RUBY_BOARDSWORD = new DurabilityLimitedPropBuilder(
  "hy:ruby_boardsword",
  1,
  (event) => {
    let cooldown = event.itemStack.getComponent(
      "cooldown",
    ) as ItemCooldownComponent;
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
        ]),
      );
      event.itemStack.setDynamicProperty("hy:show_details", true);
    }
    MagicAimAttack.rubyExplode(event.source);
    cooldown.startCooldown(event.source);
  },
);

const MUTAS_STAFF = new DurabilityLimitedPropBuilder(
  "hy:mutas_staff",
  1,
  (event) => {
    const [item, player] = [event.itemStack, event.source];
    if (item.typeId === "hy:mutas_staff") {
      const cooldown = item.getComponent("cooldown") as ItemCooldownComponent;
      if (cooldown.getCooldownTicksRemaining(player) !== 0) {
        console.log(cooldown.getCooldownTicksRemaining(player));
        player.onScreenDisplay.setActionBar({
          translate: "hy.message.wait_cooldown",
        });
        return;
      }
      const newItem = consumeDurability(item, 1, player);
      setEquipmentItem(player, newItem);
      player.addTag("hy:magic_explode_attacker");
      damageEntities(
        player.dimension,
        {
          location: player.location,
          maxDistance: 15,
          excludeTags: ["hy:magic_explode_attacker"],
          excludeFamilies: ["noaoe"],
        },
        5,
      );
      player.dimension
        .getEntities({
          location: player.location,
          maxDistance: 15,
          families: ["monster"],
        })
        .forEach((entity) => {
          entity.dimension.spawnEntity("lightning_bolt", entity.location);
        });
      cooldown.startCooldown(player);
    }
  },
);

const RAIN_GOD_BLESSING = new PropBuilder("hy:rain_god_blessing", (event) => {
  const player = event.source;
  droughtEffect.remove(player);
  dehydrationEffect.remove(player);
  player.addTag("hy:immune_desert_debuff");
  player.onScreenDisplay.setActionBar({
    translate: "hy.message.immune_desert_debuff.get",
  });
  system.runTimeout(() => {
    if (player.isValid()) {
      player.removeTag("hy:immune_desert_debuff");
      player.onScreenDisplay.setActionBar({
        translate: "hy.message.immune_desert_debuff.remove",
      });
    }
  }, 900);
});

/**
 * 注册道具
 */
export function registryItem() {
  BANDAGE.build();
  MEDICINE_PACK.build();
  COPPER_HORN.build();
  SOUL_LETTER.build();
  RUBY_BAG.build();
  EXP_CALAMITY_BAG.build();
  RUBY_RUNES.build();
  BONE_BOARDSWORD.build();
  FLASH_METAL_BOARDSWORD.build();
  CORROSION_BOARDSWORD.build();
  EMERALD_BOARDSWORD.build();
  FLASH_COPPER_BOARDSWORD.build();
  AMETHYST_BOARDSWORD.build();
  RUBY_BOARDSWORD.build();
  RAIN_GOD_BLESSING.build();
  MUTAS_STAFF.build();
}
