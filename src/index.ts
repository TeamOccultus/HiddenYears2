import { registryNote } from "./server/registry/note";
import { registryComponents } from "./server/registry/components";
import { Crusher } from "./server/block/Crusher";
import { CrusherRecipeManager } from "./server/recipe/CrusherRecipeManager";

new Crusher();
CrusherRecipeManager.openToPlugin();
registryNote();
registryComponents();
console.log("Hello World!");
