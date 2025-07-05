import {
  CustomComponentParameters,
  ItemComponentMineBlockEvent,
  ItemStack,
  system,
} from "@minecraft/server";
import { ToolTypeSchema } from "./ToolTypeSchema";
import { SawRecipeManager } from "../recipe/SawRecipeManager"
import { Random, RandomEvent } from "@starock/math";

export class ToolTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onMineBlock(arg0, arg1) {
            onMineBlock(arg0, arg1);
        },
      });
    });
  }
}

function onMineBlock(
  arg0: ItemComponentMineBlockEvent,
  arg1: CustomComponentParameters
) {
  const params = arg1.params as ToolTypeSchema;
  if (params.tool_type === "normal") return;
  if (params.tool_type === "saw") {
    const [id, block] = [arg0.minedBlockPermutation.type.id, arg0.block];
    if (!SawRecipeManager.ingredients.includes(id)) {
      return;
    }
    new RandomEvent(0.85, () => {
      block.dimension.spawnItem(
        new ItemStack("minecraft:stick", Random.integer(5, 2)),
        block.location
      );
    }).call();
    new RandomEvent(0.8, () => {
      block.dimension.spawnItem(
        SawRecipeManager.getResult(id),
        block.location
      );
    }).call();
    new RandomEvent(0.2, () => {
      block.dimension.spawnItem(
        new ItemStack(id),
        block.location
      );
    }).call();
  }
}
