import { ItemStack, world } from "@minecraft/server";
import { FoodItemBuilder } from "@grindstone/item-kit";
import { giveItem } from "@grindstone/utils";

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
}
