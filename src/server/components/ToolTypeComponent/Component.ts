import {
  CustomComponentParameters,
  ItemComponentHitEntityEvent,
  ItemComponentMineBlockEvent,
  Player,
  system,
  TicksPerSecond
} from "@minecraft/server";
import { ToolTypeParams } from "./Params";
import { SawRecipeManager } from "../../recipe/saw/SawRecipeManager";
import { SawEvents } from "../../events/SawEvents";
import { CrowbarRecipeManager } from "../../recipe/crowbar/CrowbarRecipeManager";
import { CrowbarEvents } from "../../events/CrowbarEvents";
import { HammerRecipeManager } from "../../recipe/hammer/HammerRecipeManager";
import { HammerEvents } from "../../events/HammerEvents";
import { RandomEvent } from "@occultus/api";
import { getHammerSkillChance } from "../../../core/WeaponToolUtils";
import { bleedEffect } from "../../effects/bleed";

/**
 * 管理隐年工具的一个组件类
 */
export class ToolTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onMineBlock(arg0, arg1) {
          onMineBlockCallback(arg0, arg1);
        },
        onHitEntity(arg0, arg1) {
          onHitEntityCallback(arg0, arg1);
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
  const [id, block, player] = [
    arg0.minedBlockPermutation.type.id,
    arg0.block,
    arg0.source
  ];
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
    player.addEffect("minecraft:weakness", 3 * TicksPerSecond, {
      showParticles: false
    });
    player.addEffect("minecraft:slowness", 3 * TicksPerSecond, {
      showParticles: false
    });
    if (!HammerRecipeManager.ingredients.includes(id)) return;
    HammerEvents.spawnAdditionalMaterial(id, block);
    return;
  }
}

function onHitEntityCallback(
  arg0: ItemComponentHitEntityEvent,
  arg1: CustomComponentParameters
) {
  const params = arg1.params as ToolTypeParams;
  const { attackingEntity, hitEntity } = arg0;
  if (!(attackingEntity instanceof Player)) return;
  if (params.tool_type === "hammer") {
    new RandomEvent(getHammerSkillChance(attackingEntity), () => {
      // @todo 找个有打击感的音效
      attackingEntity.playSound("game.player.attack.strong");
      bleedEffect.add(hitEntity, 10 * TicksPerSecond);
    });
  }
}
