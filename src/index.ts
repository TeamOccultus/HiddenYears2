import { registryNote } from "./server/registry/note";
import { registryComponents } from "./server/registry/components";
import { registryRecord } from "./server/registry/record";
import { Crusher } from "./server/block/Crusher";
import { CrusherRecipeManager } from "./server/recipe/CrusherRecipeManager";

new Crusher();
CrusherRecipeManager.openToPlugin();
registryNote();
registryComponents();
registryRecord();
console.log("Hello World!");
