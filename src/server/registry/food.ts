import { ItemStack, world } from "@minecraft/server";
import {
  clearEffect,
  EffectGroups,
  FoodItem,
  giveItem,
  Register,
  withPercentChance,
} from "lazuli-mc";

const HONEY_CANDY = new FoodItem("hy:honey_candy", [
  { effectType: "saturation", duration: 600 },
]);

const SYRUP = new FoodItem("hy:syrup", [
  { effectType: "fire_resistance", duration: 160 },
]);

const CHOCOLATE_PASTE = new FoodItem("hy:chocolate_paste", [
  {
    effectType: "fire_resistance",
    duration: 900,
  },
]);

const MILK_CHOCOLATE = new FoodItem("hy:milk_chocolate", [], (event) => {
  clearEffect(event.source, EffectGroups.all);
});

const SWEET_BERRY_CHOCOLATE = new FoodItem("hy:sweet_berry_chocolate", [
  { effectType: "instant_health", duration: 1, amplifier: 1 },
]);

const AMETHYST_CHOCOLATE = new FoodItem(
  "hy:amethyst_chocolate",
  [],
  (event) => {
    event.source.addLevels(2);
  }
);

const MARSHMALLOW = new FoodItem("hy:marshmallow", [], (event) => {
  withPercentChance({
    chance: 0.5,
    event: () => {
      event.source.addEffect("levitation", 100);
    },
  });
});

const SWEET_BERRY_MARSHMALLOW = new FoodItem("hy:sweet_berry_marshmallow", [
  { effectType: "instant_health", duration: 1 },
]);

const AMETHYST_MARSHMALLOW = new FoodItem(
  "hy:amethyst_marshmallow",
  [],
  (event) => {
    event.source.addLevels(3);
  }
);

const MEDICINE_1 = new FoodItem(
  "hy:medicine_1",
  [{ effectType: "saturation", duration: 400 }],
  (event) => {
    clearEffect(event.source, ["nausea", "hunger"]);
  }
);

const MEDICINE_2 = new FoodItem("hy:medicine_2", [], (event) => {
  clearEffect(event.source, EffectGroups.bad);
});

const MEDICINE_3 = new FoodItem(
  "hy:medicine_3",
  [{ effectType: "night_vision", duration: 400 }],
  (event) => {
    clearEffect(event.source, ["blindness", "darkness"]);
  }
);

const MEDICINE_4 = new FoodItem(
  "hy:medicine_4",
  [
    { effectType: "blindness", duration: 600 },
    { effectType: "darkness", duration: 600 },
  ],
  (event) => {
    clearEffect(event.source, "night_vision");
  }
);

const MEDICINE_5 = new FoodItem(
  "hy:medicine_5",
  [{ effectType: "absorption", duration: 400 }],
  (event) => {
    clearEffect(event.source, ["wither", "poison", "fatal_poison"]);
  }
);

const MEDICINE_6 = new FoodItem(
  "hy:medicine_6",
  [{ effectType: "strength", duration: 400 }],
  (event) => {
    clearEffect(event.source, "weakness");
  }
);

const MEDICINE_7 = new FoodItem(
  "hy:medicine_7",
  [{ effectType: "speed", duration: 600 }],
  (event) => {
    clearEffect(event.source, "slowness");
  }
);

const MEDICINE_8 = new FoodItem(
  "hy:medicine_8",
  [{ effectType: "jump_boost", duration: 600 }],
  (event) => {
    clearEffect(event.source, "slowness");
  }
);

const MEDICINE_9 = new FoodItem("hy:medicine_9", [
  { effectType: "poison", duration: 400 },
  { effectType: "slowness", duration: 400 },
  { effectType: "weakness", duration: 400 },
]);

const MEDICINE_10 = new FoodItem("hy:medicine_10", [], (event) => {
  event.source.kill();
});

const MEDICINE_11 = new FoodItem("hy:medicine_9", [], (event) => {
  clearEffect(event.source, EffectGroups.good);
});

const MEDICINE_12 = new FoodItem(
  "hy:medicine_12",
  [{ effectType: "village_hero", duration: 3000 }],
  (event) => {
    clearEffect(event.source, "bad_omen");
  }
);

const MEDICINE_13 = new FoodItem(
  "hy:medicine_13",
  [{ effectType: "water_breathing", duration: 300 }],
  (event) => {
    clearEffect(event.source, "mining_fatigue");
  }
);

const MEDICINE_14 = new FoodItem("hy:medicine_14", [
  { effectType: "fire_resistance", duration: 400 },
]);

const MEDICINE_15 = new FoodItem("hy:medicine_15", [
  { effectType: "health_boost", duration: 6000 },
]);

const RUBY_APPLE = new FoodItem("hy:ruby_apple", [], (event) => {
  const PLAYER = event.source;
  PLAYER.addExperience(3);
  world.playSound("random.orb", PLAYER.location);
});

const COPPER_APPLE = new FoodItem("hy:copper_apple", [
  { effectType: "absorption", duration: 600 },
  { effectType: "fire_resistance", duration: 200 },
]);

const ENCHANTED_COPPER_APPLE = new FoodItem("hy:enchanted_copper_apple", [
  { effectType: "absorption", duration: 1200 },
  { effectType: "fire_resistance", duration: 1200 },
  { effectType: "speed", duration: 200 },
]);

const FUEL_METAL = new FoodItem(
  "hy:fuel_metal",
  [{ effectType: "poison", duration: 1200 }],
  (event) => {
    event.source.sendMessage([{ translate: "hy.message.fuel_metal" }]);
  }
);

const MINERAL_FUEL_METAL = new FoodItem(
  "hy:mineral_fuel_metal",
  [{ effectType: "poison", duration: 800 }],
  (event) => {
    giveItem(event.source, new ItemStack("hy:nightmare_fuel_metal", 2));
  }
);

const FUEL_METAL_STICK = new FoodItem("hy:fuel_metal_stick", [
  { effectType: "poison", duration: 40 },
]);

const BARK = new FoodItem("hy:bark", [], (event) => {
  event.source.sendMessage([{ translate: "hy.message.eat_bark" }]);
});

const SAND_MEAT = new FoodItem("hy:sand_meat", [
  { effectType: "hunger", duration: 400 },
]);

const COOLING_POTION = new FoodItem(
  "hy:cooling_potion",
  [{ effectType: "fire_resistance", duration: 600 }],
  (event) => {
    const PLAYER = event.source;
    PLAYER.removeTag("hy:dehydration");
    PLAYER.removeTag("hy:drought");
    PLAYER.onScreenDisplay.setActionBar({
      translate: "hy.message.cooling_potion",
    });
  }
);

const PAW_DUST = new FoodItem("hy:paw_dust", [
  { effectType: "strength", duration: 200, amplifier: 4 },
]);

export function registryFood() {
  world.afterEvents.itemCompleteUse.subscribe((event) => {
    const [PLAYER, ITEM] = [event.source, event.itemStack];
    /**
     * @tag hy:copper_foods——标记一个物品为铜食物，并统计其食用次数
     * 铜食物食用12次后会中毒
     */
    if (ITEM.hasTag("hy:copper_foods")) {
      let eatFrequency = PLAYER.getDynamicProperty("hy:copper_foods") as number;
      if (!eatFrequency) PLAYER.setDynamicProperty("hy:copper_foods", 0);
      PLAYER.setDynamicProperty("hy:copper_foods", eatFrequency++);
      if (eatFrequency > 12) {
        PLAYER.addEffect("poison", 100);
        PLAYER.setDynamicProperty("hy:copper_foods", 0);
      }
    }
  });
  Register.foodRegistry(HONEY_CANDY);
  Register.foodRegistry(SYRUP);
  Register.foodRegistry(CHOCOLATE_PASTE);
  Register.foodRegistry(MILK_CHOCOLATE);
  Register.foodRegistry(SWEET_BERRY_CHOCOLATE);
  Register.foodRegistry(AMETHYST_CHOCOLATE);
  Register.foodRegistry(MARSHMALLOW);
  Register.foodRegistry(SWEET_BERRY_MARSHMALLOW);
  Register.foodRegistry(AMETHYST_MARSHMALLOW);
  Register.foodRegistry(MEDICINE_1);
  Register.foodRegistry(MEDICINE_2);
  Register.foodRegistry(MEDICINE_3);
  Register.foodRegistry(MEDICINE_4);
  Register.foodRegistry(MEDICINE_5);
  Register.foodRegistry(MEDICINE_6);
  Register.foodRegistry(MEDICINE_7);
  Register.foodRegistry(MEDICINE_8);
  Register.foodRegistry(MEDICINE_9);
  Register.foodRegistry(MEDICINE_10);
  Register.foodRegistry(MEDICINE_11);
  Register.foodRegistry(MEDICINE_12);
  Register.foodRegistry(MEDICINE_13);
  Register.foodRegistry(MEDICINE_14);
  Register.foodRegistry(MEDICINE_15);
  Register.foodRegistry(RUBY_APPLE);
  Register.foodRegistry(COPPER_APPLE);
  Register.foodRegistry(ENCHANTED_COPPER_APPLE);
  Register.foodRegistry(FUEL_METAL);
  Register.foodRegistry(MINERAL_FUEL_METAL);
  Register.foodRegistry(FUEL_METAL_STICK);
  Register.foodRegistry(BARK);
  Register.foodRegistry(SAND_MEAT);
  Register.foodRegistry(COOLING_POTION);
  Register.foodRegistry(PAW_DUST);
}
