import {
  CustomComponentParameters,
  ItemComponentMineBlockEvent,
  system
} from "@minecraft/server";
import { ToolTypeParams } from "./Params";
import { SawRecipeManager } from "../../recipe/saw/SawRecipeManager";
import { SawEvents } from "../../events/SawEvents";
import { CrowbarRecipeManager } from "../../recipe/crowbar/CrowbarRecipeManager";
import { CrowbarEvents } from "../../events/CrowbarEvents";
import { HammerRecipeManager } from "../../recipe/hammer/HammerRecipeManager";
import { HammerEvents } from "../../events/HammerEvents";

export class ToolTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onMineBlock(arg0, arg1) {
          onMineBlockCallback(arg0, arg1);
        }
      });
    });
  }
}

function onMineBlockCallback(
  arg0: ItemComponentMineBlockEvent,
  arg1: CustomComponentParameters
) {
  const params = arg1.params as ToolTypeParams;
  const [id, block] = [arg0.minedBlockPermutation.type.id, arg0.block];
  if (params.tool_type === "normal") return;
  if (params.tool_type === "saw") {
    if (!SawRecipeManager.ingredients.includes(id)) return;
    SawEvents.spawnStick(block);
    SawEvents.spawnPlank(id, block);
    SawEvents.spawnItSelf(id, block);
    return;
  }
  if (params.tool_type === "crowbar") {
    if (!CrowbarRecipeManager.ingredients.includes(id)) return;
    CrowbarEvents.spawnNugget(id, block);
    return;
  }
  if (params.tool_type === "hammer") {
    if (!HammerRecipeManager.ingredients.includes(id)) return;
    HammerEvents.spawnAdditionalMaterial(id, block);
    return;
  }
}
