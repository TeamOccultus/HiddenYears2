import { Dimension, ItemStack, world } from "@minecraft/server";

/**
 * 物品锈蚀的对应表
 */
export const HyCorrosionMap = {
  copper_axe: new ItemStack("hy:exposed_copper_axe"),
  exposed_copper_axe: new ItemStack("hy:weathered_copper_axe"),
  weathered_copper_axe: new ItemStack("hy:oxidized_copper_axe"),
  copper_hammer: new ItemStack("hy:exposed_copper_hammer"),
  exposed_copper_hammer: new ItemStack("hy:weathered_copper_hammer"),
  weathered_copper_hammer: new ItemStack("hy:oxidized_copper_hammer"),
  copper_hoe: new ItemStack("hy:exposed_copper_hoe"),
  exposed_copper_hoe: new ItemStack("hy:weathered_copper_hoe"),
  weathered_copper_hoe: new ItemStack("hy:oxidized_copper_hoe"),
  copper_knife: new ItemStack("hy:exposed_copper_knife"),
  exposed_copper_knife: new ItemStack("hy:weathered_copper_knife"),
  weathered_copper_knife: new ItemStack("hy:oxidized_copper_knife"),
  copper_pickaxe: new ItemStack("hy:exposed_copper_pickaxe"),
  exposed_copper_pickaxe: new ItemStack("hy:weathered_copper_pickaxe"),
  weathered_copper_pickaxe: new ItemStack("hy:oxidized_copper_pickaxe"),
  copper_shovel: new ItemStack("hy:exposed_copper_shovel"),
  exposed_copper_shovel: new ItemStack("hy:weathered_copper_shovel"),
  weathered_copper_shovel: new ItemStack("hy:oxidized_copper_shovel"),
  copper_sword: new ItemStack("hy:exposed_copper_sword"),
  exposed_copper_sword: new ItemStack("hy:weathered_copper_sword"),
  weathered_copper_sword: new ItemStack("hy:oxidized_copper_sword"),
};

export const CopperItemCorrosionMap = new Map(
  [
    ["copper_axe", new ItemStack("hy:exposed_copper_axe")],
    ["exposed_copper_axe", new ItemStack("hy:weathered_copper_axe")],
    ["weathered_copper_axe", new ItemStack("hy:oxidized_copper_axe")],
    ["copper_hammer", new ItemStack("hy:exposed_copper_hammer")],
    ["exposed_copper_hammer", new ItemStack("hy:weathered_copper_hammer")],
    ["weathered_copper_hammer", new ItemStack("hy:oxidized_copper_hammer")],
    ["copper_hoe", new ItemStack("hy:exposed_copper_hoe")],
    ["exposed_copper_hoe", new ItemStack("hy:weathered_copper_hoe")],
    ["weathered_copper_hoe", new ItemStack("hy:oxidized_copper_hoe")],
    ["copper_knife", new ItemStack("hy:exposed_copper_knife")],
    ["exposed_copper_knife", new ItemStack("hy:weathered_copper_knife")],
    ["weathered_copper_knife", new ItemStack("hy:oxidized_copper_knife")],
    ["copper_pickaxe", new ItemStack("hy:exposed_copper_pickaxe")],
    ["exposed_copper_pickaxe", new ItemStack("hy:weathered_copper_pickaxe")],
    ["weathered_copper_pickaxe", new ItemStack("hy:oxidized_copper_pickaxe")],
    ["copper_shovel", new ItemStack("hy:exposed_copper_shovel")],
    ["exposed_copper_shovel", new ItemStack("hy:weathered_copper_shovel")],
    ["weathered_copper_shovel", new ItemStack("hy:oxidized_copper_shovel")],
    ["copper_sword", new ItemStack("hy:exposed_copper_sword")],
    ["exposed_copper_sword", new ItemStack("hy:weathered_copper_sword")],
    ["weathered_copper_sword", new ItemStack("hy:oxidized_copper_sword")], 
  ]
)

/**
 * All vanilla dimensions.
 */
export const vanillaDimensions: Dimension[] = [
  world.getDimension("minecraft:overworld"),
  world.getDimension("minecraft:nether"),
  world.getDimension("minecraft:the_end"),
];

export const Overworld: Dimension = world.getDimension("minecraft:overworld");
export const Nether: Dimension = world.getDimension("minecraft:nether");
export const TheEnd: Dimension = world.getDimension("minecraft:the_end");