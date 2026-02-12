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
  registryForm
} from "./registry/artifacts";
import { registryTask } from "./registry/task";
import { registryTutorial } from "./registry/tutorial";
import { registryMessage } from "./msg";
import { RubyEvents } from "./events/RubyEvents";
import { registryBoss } from "./registry/boss";
import { registryEffects } from "./registry/effects";
import { registryJob } from "./registry/job";
import { MigrationEvents } from "../migration/MigrationEvents";
import { InitalSpawnEvents } from "./events/InitalSpawnEvents";
import { DesertEntityEvent } from "./events/DesertEntityEvent";
import { registryArticles } from "./registry/article";
import { LunamutatioEntityEvent } from "./events/LunamutatioEntityEvent";
import { SpriteEvents } from "./events/SpriteEvents";

/**
 * 初始化模组脚本环境以及其他实例
 */
export function initialize() {
  new ModInitializer(
    "hiddenyears",
    "Hidden Years²: Governor at the Skyline",
    "3.0.0-alpha.11"
  );
  registryCommands();
  registryCustomRecipe();
  registryArticles();
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
  MigrationEvents.subscribe();
  InitalSpawnEvents.subscribe();
  DesertEntityEvent.subscribe();
  LunamutatioEntityEvent.subscribe();
  SpriteEvents.subscribe();
}
