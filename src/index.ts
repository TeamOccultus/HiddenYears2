import { FoodRuntime } from "./tenon/runtime/food";
import { DestroyConditionRuntime } from "./tenon/runtime/block/DestroyCondition";
import { registryEncy } from "./server/registry/encyclopedia";
import { registryNote } from "./server/registry/note";

new FoodRuntime("hy:effective_food");
new DestroyConditionRuntime("hy:destroy_condition");

registryEncy();
registryNote();
console.log("Hello World!");
