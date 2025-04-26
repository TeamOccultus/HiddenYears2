import { FoodRuntime } from "./tenon/runtime/food";
import { DestroyConditionRuntime } from "./tenon/runtime/block/DestroyCondition";
import { registryEncy } from "./server/registry/encyclopedia";
import { registryNote } from "./server/registry/note";
import { OreRuntime } from "./tenon/runtime/block/Ore";
import { registryComponents } from "./server/registry/components";

new FoodRuntime("hy:effective_food");
new DestroyConditionRuntime("hy:destroy_condition");
new OreRuntime("hy:custom_ore");

registryEncy();
registryNote();
registryComponents();
console.log("Hello World!");
