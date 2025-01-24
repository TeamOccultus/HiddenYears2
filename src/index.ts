import { Hy2System } from "./server/system";
import { Hy2Block } from "./server/blocks";
import { Hy2Entity } from "./server/entities";
import { registryFood } from "./server/registry/food";
import { registryQuest } from "./server/registry/quest";
import { registryArticle } from "./server/registry/article";
import { registryBoss } from "./server/registry/boss";
import { registryTool } from "./server/registry/tool";
import { registryItem } from "./server/registry/item";
import { registryEffect } from "./server/registry/effect";
import { initializeMod } from "@grindstone/core";
import "./server/registry/component";
import { ItemStack, world } from "@minecraft/server";

initializeMod("hy", "HiddenYears");
Hy2System.registryTickEvent();
Hy2System.registryTrigger();
Hy2System.replaceOldItem();
Hy2Block.eventMonitor();
Hy2Entity.eventMonitor();
Hy2Entity.spawnMonitor();
registryFood();
registryQuest();
registryArticle();
registryBoss();
registryTool();
registryItem();
registryEffect();

world.afterEvents.entityDie.subscribe((event) => {
  if (event.deadEntity.typeId === "minecraft:allay") {
    const item = new ItemStack("hy:trophy_bundle_1");
    item.setDynamicProperty("hy:loot_table", "entities/allay");
    event.deadEntity.dimension.spawnItem(item, event.deadEntity.location);
  }
});
