import {CustomBlockLoot, LootManager} from "@starock/loot"

export function registryCustomLoot(){
    LootManager.initialize();
    new CustomBlockLoot("minecraft:glowstone","gameplay/sparkling_stone")
}