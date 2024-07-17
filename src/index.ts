import { Block } from "./server/blocks.js";
import { Entity } from "./server/entities.js";
import { Item, Quest } from "./server/items.js";
import { Article } from "./server/article.js";
import { System } from "./server/system.js";
import { Debug } from "./server/debug.js";

System.initialize();
System.eventMonitor();
Block.eventMonitor();
Entity.eventsMonitor();
Entity.spawnMonitor();
Entity.skillRegister();
Item.foodMonitor();
Item.useMonitor();
Item.durabilityMonitor();
Quest.register();
Article.register();
Debug.chatTrigger();
