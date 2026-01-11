/**
 * @module server/initialize
 * @category Initialize Bus
 */
import { ModInitializer } from "@occultus/core";
import { registryItemSystems } from "./registry/item";
import { registryComponents } from "./registry/components";
import { registryMusicDisc } from "./registry/record";
import { registryCustomRecipe } from "./registry/recipe";
import { registryCommands } from "./registry/commands";
import { registryCustomLoot } from "./registry/loot";
import {
  registryArtifacts,
  registryArtifactSlots,
  registryForm,
} from "./registry/artifacts";
import { registryTask } from "./registry/task";
import { registryTutorial } from "./registry/tutorial";
import { registryMessage } from "./msg";
import { RubyEvents } from "./events/RubyEvents";
import { registryBoss } from "./registry/boss";
import { registryEffects } from "./registry/effects";
import { registryJob } from "./registry/job";

/**
 * 初始化模组脚本环境以及其他实例
 */
export function initialize() {
  new ModInitializer(
    "hiddenyears",
    "Hidden Years²: Governor at the Skyline",
    "3.0.0-alpha.5"
  );
  registryCommands();
  registryCustomRecipe();
  registryItemSystems();
  registryComponents();
  registryEffects();
  registryMusicDisc();
  registryCustomLoot();
  registryArtifactSlots();
  registryArtifacts();
  registryForm();
  registryTask();
  registryTutorial();
  registryMessage();
  registryBoss();
  registryJob();
  RubyEvents.subscribe();
}
