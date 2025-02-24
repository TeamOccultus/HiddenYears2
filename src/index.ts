import { Hy2System } from "./server/system";
import { Hy2Block } from "./server/blocks";
import { Hy2Entity } from "./server/entities";
import { registryFood } from "./server/registry/food";
import { registryQuest } from "./server/registry/quest";
import { registryArticle } from "./server/registry/article";
import { registryBoss } from "./server/registry/boss";
import { registryTool } from "./server/registry/tool";
import { registryItem } from "./server/registry/item";
import { registryWeapon } from "./server/registry/weapon";
import { registryLoot } from "./server/registry/loot";
import { initializeMod } from "@grindstone/core";
import "./server/registry/component";
import "./server/registry/effects/bleed";
import "./server/registry/effects/dehydration"
import "./server/registry/effects/drought"
import "./server/registry/effects/tetanus"

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
registryLoot();
registryWeapon();
