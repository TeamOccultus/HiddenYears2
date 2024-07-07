import { blockMonitor } from "./server/blocks";
import { entityEventsMonitor, playerSpawnMonitor } from "./server/entities";
import {
  questRegister,
  itemUseMonitor,
  itemDurabilityMonitor,
} from "./server/items";
import { articleRegister } from "./server/article";
import { systemMonitor } from "./server/system";
import { musicRegister } from "./server/music";
import { initializeMod } from "project-lantern";

initializeMod("hy", "HiddenYears", {
  questNameSpace: "hy-q",
  watchdogDisabled: true,
});
systemMonitor();
blockMonitor();
entityEventsMonitor();
playerSpawnMonitor();
itemDurabilityMonitor();
itemUseMonitor();
questRegister();
articleRegister();
musicRegister();
