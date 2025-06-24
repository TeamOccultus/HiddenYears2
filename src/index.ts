import { registryNote } from "./server/registry/note";
import { registryComponents } from "./server/registry/components";
import { registryRecord } from "./server/registry/record";
import { registryRecipe } from "./server/registry/recipe";

registryRecipe();
registryNote();
registryComponents();
registryRecord();
console.log("Hello World!");
