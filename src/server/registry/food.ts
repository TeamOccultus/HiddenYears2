import { ItemStack } from "@minecraft/server";
import {
  FoodItem,
  giveItem,
  Register,
} from "@lazuli/ldk2";

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
  Register.registry([
    FUEL_METAL,
    MINERAL_FUEL_METAL,
    FUEL_METAL_STICK,
    BARK,
    SAND_MEAT,
    COOLING_POTION,
    PAW_DUST,
  ]);
}
