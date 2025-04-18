import { FoodRuntime } from "./tenon/runtime/food";
import { DestroyConditionRuntime } from "./tenon/runtime/block";
import { registryEncy } from "./server/registry/encyclopedia";

new FoodRuntime("hy:effective_food");
new DestroyConditionRuntime("hy:destroy_condition");

registryEncy();
console.log("Hello World!");
