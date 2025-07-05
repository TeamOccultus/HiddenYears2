import { registryAdventurerNote } from "./server/registry/note";
import { registryComponents } from "./server/registry/components";
import { registryMusicDisc } from "./server/registry/record";
import { registryCustomRecipe } from "./server/registry/recipe";
import { initialize } from "./server/initialize";

initialize();
registryCustomRecipe();
registryAdventurerNote();
registryComponents();
registryMusicDisc();
console.log("Hello World!");
