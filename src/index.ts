import { System } from "./server/system";
import { Block } from "./server/blocks";
import { Entity } from "./server/entities";
import { registryFood } from "./server/registry/food";
import { registryItemSkill } from "./server/registry/skill";
import { registryQuest } from "./server/registry/quest";
import { registryArticle } from "./server/registry/article";
import { registryBoss } from "./server/registry/boss";
import { registryTool } from "./server/registry/tool";
import { registryItem } from "./server/registry/item";
import "./server/registry/component";
import { ItemStack, world } from "@minecraft/server";
import { giveItem } from "@lazuli/ldk2";

System.initialize();
System.eventMonitor();
System.backwardsCompatibility();
Block.eventMonitor();
Entity.eventMonitor();
Entity.spawnMonitor();
registryFood();
registryItemSkill();
registryQuest();
registryArticle();
registryBoss();
registryTool();
registryItem();

// 测试代码
world.afterEvents.playerSpawn.subscribe(event=>{
  giveItem(event.player,new ItemStack("hy:letter_14"))  
})