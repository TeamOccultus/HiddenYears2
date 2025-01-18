import { EntityDamageCause, ItemStack, world } from "@minecraft/server";
import { FoodItemBuilder } from "@grindstone/item-kit";
import { clearEffect, EffectGroups, giveItem } from "@grindstone/utils";

const FUEL_METAL = new FoodItemBuilder(
  "hy:fuel_metal",
  [{ effectType: "poison", duration: 1200 }],
  (event) => {
    event.source.sendMessage([{ translate: "hy.message.fuel_metal" }]);
  }
);

const MINERAL_FUEL_METAL = new FoodItemBuilder(
  "hy:mineral_fuel_metal",
  [{ effectType: "poison", duration: 800 }],
  (event) => {
    giveItem(event.source, new ItemStack("hy:nightmare_fuel_metal", 2));
  }
);

const FUEL_METAL_STICK = new FoodItemBuilder("hy:fuel_metal_stick", [
  { effectType: "poison", duration: 40 },
]);

const BARK = new FoodItemBuilder("hy:bark", [], (event) => {
  event.source.sendMessage([{ translate: "hy.message.eat_bark" }]);
});

const SAND_MEAT = new FoodItemBuilder("hy:sand_meat", [
  { effectType: "hunger", duration: 400 },
]);

const COOLING_POTION = new FoodItemBuilder(
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

const PAW_DUST = new FoodItemBuilder("hy:paw_dust", [
  { effectType: "strength", duration: 200, amplifier: 4 },
]);

const RUBY_APPLE = new FoodItemBuilder("hy:ruby_apple", [], (event) => {
  const PLAYER = event.source;
  PLAYER.addExperience(3);
  world.playSound("random.orb", PLAYER.location);
});

const MEDICINE_1 = new FoodItemBuilder(
  "hy:medicine_1",
  [{ effectType: "saturation", duration: 400 }],
  (event) => {
    clearEffect(event.source, ["nausea", "hunger"]);
  }
);

const MEDICINE_2 = new FoodItemBuilder("hy:medicine_2", [], (event) => {
  clearEffect(event.source, EffectGroups.bad);
});

const MEDICINE_3 = new FoodItemBuilder(
  "hy:medicine_3",
  [{ effectType: "night_vision", duration: 400 }],
  (event) => {
    clearEffect(event.source, ["blindness", "darkness"]);
  }
);

const MEDICINE_4 = new FoodItemBuilder(
  "hy:medicine_4",
  [
    { effectType: "blindness", duration: 600 },
    { effectType: "darkness", duration: 600 },
  ],
  (event) => {
    clearEffect(event.source, "night_vision");
  }
);

const MEDICINE_5 = new FoodItemBuilder(
  "hy:medicine_5",
  [{ effectType: "absorption", duration: 400 }],
  (event) => {
    clearEffect(event.source, ["wither", "poison", "fatal_poison"]);
  }
);

const MEDICINE_6 = new FoodItemBuilder(
  "hy:medicine_6",
  [{ effectType: "strength", duration: 400 }],
  (event) => {
    clearEffect(event.source, "weakness");
  }
);

const MEDICINE_7 = new FoodItemBuilder(
  "hy:medicine_7",
  [{ effectType: "speed", duration: 600 }],
  (event) => {
    clearEffect(event.source, "slowness");
  }
);

const MEDICINE_8 = new FoodItemBuilder(
  "hy:medicine_8",
  [{ effectType: "jump_boost", duration: 600 }],
  (event) => {
    clearEffect(event.source, "slowness");
  }
);

const MEDICINE_9 = new FoodItemBuilder("hy:medicine_9", [
  { effectType: "poison", duration: 400 },
  { effectType: "slowness", duration: 400 },
  { effectType: "weakness", duration: 400 },
]);

const MEDICINE_10 = new FoodItemBuilder("hy:medicine_10", [], (event) => {
  event.source.applyDamage(5, { cause: EntityDamageCause.magic });
});

const MEDICINE_11 = new FoodItemBuilder("hy:medicine_9", [], (event) => {
  clearEffect(event.source, EffectGroups.good);
});

const MEDICINE_12 = new FoodItemBuilder(
  "hy:medicine_12",
  [{ effectType: "village_hero", duration: 3000 }],
  (event) => {
    clearEffect(event.source, "bad_omen");
  }
);

const MEDICINE_13 = new FoodItemBuilder(
  "hy:medicine_13",
  [{ effectType: "water_breathing", duration: 300 }],
  (event) => {
    clearEffect(event.source, "mining_fatigue");
  }
);

const MEDICINE_14 = new FoodItemBuilder("hy:medicine_14", [
  { effectType: "fire_resistance", duration: 400 },
]);

const MEDICINE_15 = new FoodItemBuilder("hy:medicine_15", [
  { effectType: "health_boost", duration: 6000 },
]);

export function registryFood() {
  world.afterEvents.itemCompleteUse.subscribe((event) => {
    const [PLAYER, ITEM] = [event.source, event.itemStack];
    if (ITEM.typeId === "potion") {
      PLAYER.removeTag("hy:drought");
    }
  });
  FUEL_METAL.build();
  MINERAL_FUEL_METAL.build();
  FUEL_METAL_STICK.build();
  BARK.build();
  SAND_MEAT.build();
  COOLING_POTION.build();
  PAW_DUST.build();
  RUBY_APPLE.build();
  MEDICINE_1.build();
  MEDICINE_2.build();
  MEDICINE_3.build();
  MEDICINE_4.build();
  MEDICINE_5.build();
  MEDICINE_6.build();
  MEDICINE_7.build();
  MEDICINE_8.build();
  MEDICINE_9.build();
  MEDICINE_10.build();
  MEDICINE_11.build();
  MEDICINE_12.build();
  MEDICINE_13.build();
  MEDICINE_14.build();
  MEDICINE_15.build();
}
