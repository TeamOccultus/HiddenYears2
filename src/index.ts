import { registryNote } from "./server/registry/note";
import { registryComponents } from "./server/registry/components";
import { Crusher } from "./server/block/Crusher";

new Crusher();
registryNote();
registryComponents();
console.log("Hello World!");
