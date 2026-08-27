/**
 * @module server/initialize
 * @category Initialize Bus
 */
import { ModInitializer } from "@occultus/core";
import { registerItemSystems } from "./registry/item";
import { registerCustomComponents } from "./registry/components";
import { registerMusicDisc } from "./registry/musicDisc";
import { registerCustomRecipe } from "./registry/recipe";
import { registerCommands } from "./registry/commands";
import { registerCustomLoot } from "./registry/loot";
import {
  registerArtifacts,
  registerArtifactSlots,
  registerArtifactForm
} from "./registry/artifacts";
import { registerTask } from "./registry/task";
import { registerTutorial } from "./registry/tutorial";
import { registerMessage } from "./msg";
import { RubyEvents } from "./events/RubyEvents";
import { registerBoss } from "./registry/boss";
import { registerEffects } from "./registry/effects";
import { registerJob } from "./registry/job";
import { MigrationEvents } from "../migration/MigrationEvents";
import { InitalSpawnEvents } from "./events/InitalSpawnEvents";
import { DesertEntityEvent } from "./events/DesertEntityEvent";
import { registerArticles } from "./registry/article";
import { LunamutatioEntityEvent } from "./events/LunamutatioEntityEvent";
import { SpriteEvents } from "./events/SpriteEvents";
import { StoreForm } from "../ui/StoreForm";
import { LocatorBarEvents } from "./events/LocatorBarEvents";
import { registerCustomDimensions } from "./registry/dimension";
import { registerDialogues } from "./registry/dialogues";
import { registerScriptEvents } from "./registry/scriptEvents";

/**
 * 初始化模组脚本环境以及其他实例
 */
export function initialize() {
  new ModInitializer(
    "hiddenyears",
    "Hidden Years²: Governor at the Skyline",
    "3.0.16"
  );
  registerCommands();
  registerCustomDimensions();
  registerCustomRecipe();
  registerArticles();
  registerItemSystems();
  registerCustomComponents();
  registerEffects();
  registerMusicDisc();
  registerCustomLoot();
  registerArtifactSlots();
  registerArtifacts();
  registerArtifactForm();
  registerTask();
  registerTutorial();
  registerMessage();
  registerBoss();
  registerJob();
  registerDialogues();
  registerScriptEvents();
  StoreForm.openToPlugin();
  RubyEvents.subscribe();
  MigrationEvents.subscribe();
  InitalSpawnEvents.subscribe();
  DesertEntityEvent.subscribe();
  LunamutatioEntityEvent.subscribe();
  SpriteEvents.subscribe();
  LocatorBarEvents.subscribeBoss();
}
