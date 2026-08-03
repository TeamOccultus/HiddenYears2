import { system } from "@minecraft/server";
import { ensureLuminousPalaceReady } from "../dimension/luminousLand";

export function registerCustomDimensions() {
  system.beforeEvents.startup.subscribe((arg) => {
    const registry = arg.dimensionRegistry;
    registry.registerCustomDimension("hiddenyears:star_of_horizon");
    registry.registerCustomDimension("hiddenyears:luminous_land");
  });
  ensureLuminousPalaceReady();
}
