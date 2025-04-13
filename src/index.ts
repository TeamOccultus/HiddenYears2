import { FoodRuntime } from './tenon/runtime/food'
import { registryEncy } from "./server/registry/encyclopedia"


new FoodRuntime("hy:effective_food");

registryEncy();
console.log("Hello World!")
