import { ItemStack } from "@minecraft/server";

export function getItemTier(item: ItemStack): ItemTiers {
  const tags = item.getTags();
  if (tags.includes("minecraft:netherite_tier")) return ItemTiers.NETHERITE;
  if (tags.includes("minecraft:diamond_tier")) return ItemTiers.DIAMOND;
  if (tags.includes("minecraft:iron_tier")) return ItemTiers.IRON;
  if (tags.includes("minecraft:stone_tier")) return ItemTiers.STONE;
  if (tags.includes("minecraft:golden_tier")) return ItemTiers.GOLDEN;
  if (tags.includes("minecraft:wooden_tier")) return ItemTiers.WOODEN;
  tags.forEach((tag) => {
    if (tag.includes("tier")) return ItemTiers.CUSTOM;
  });
  return ItemTiers.NONE;
}

export function hasItemTier(tier: ItemTiers, item: ItemStack) {
  const ownedTier = getItemTier(item);
  console.log(ownedTier, tier);
  return ownedTier >= tier;
}

export function stringfyTier(str: string): ItemTiers {
  if(tierMap[str as keyof typeof tierMap]) return tierMap[str as keyof typeof tierMap];
  throw new Error("无效的物品等级！");
}

export enum ItemTiers {
  WOODEN = 0,
  GOLDEN = 1,
  STONE = 2,
  IRON = 3,
  DIAMOND = 4,
  NETHERITE = 5,
  CUSTOM = 6,
  NONE = -1,
}

export const tierMap = {
  wooden: ItemTiers.WOODEN,
  gold: ItemTiers.GOLDEN,
  stone: ItemTiers.STONE,
  iron: ItemTiers.IRON,
  diamond: ItemTiers.DIAMOND,
  netherite: ItemTiers.NETHERITE,
  custom: ItemTiers.CUSTOM,
  none: ItemTiers.NONE,
};
