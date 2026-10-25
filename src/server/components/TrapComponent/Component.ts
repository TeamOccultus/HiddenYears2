import {
  Block,
  BlockComponentPlayerInteractEvent,
  BlockComponentStepOnEvent,
  CustomComponentParameters,
  Entity,
  EntityDamageCause,
  system,
  TicksPerSecond
} from "@minecraft/server";
import { TrapComponentParams } from "./Params";
import {
  consumeEquipmentAmount,
  getEquipmentItem,
  hasFamily,
  Random,
  toVec3,
  Vector3Utils
} from "@occultus/api";

export class TrapComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((event) => {
      event.blockComponentRegistry.registerCustomComponent(componentName, {
        onStepOn(arg0, arg1) {
          const params = arg1.params as TrapComponentParams;
          onStepOn(arg0, params);
        },
        onPlayerInteract(arg0, arg1) {
          const params = arg1.params as TrapComponentParams;
          onPlayerInteract(arg0, params);
        }
      });
    });
  }
}

function getDamage(entity: Entity, params: TrapComponentParams): number {
  let damage = 0;
  if (Array.isArray(params.damage)) {
    const arr = params.damage;
    damage = Random.integer(arr[0], arr[1]);
  } else {
    damage = params.damage;
  }
  if (params.famlies) {
    for (let f in params.famlies) {
      if (hasFamily(entity, f)) return damage;
    }
    return 0;
  }
  return damage;
}

function canBeTriggered(block: Block): boolean {
  // @ts-ignore
  const energy = block.permutation.getState("starock:magic_energy");
  if (typeof energy !== "number") {
    throw new Error(
      "Cannot find valid energy from trap block! Please check your data-driven file"
    );
  }
  if (energy > 0) {
    return true;
  }
  return false;
}

function canBeCharged(block: Block, params: TrapComponentParams): boolean {
  // @ts-ignore
  const energy = block.permutation.getState("starock:magic_energy");
  if (typeof energy !== "number") {
    throw new Error(
      "Cannot find valid energy from trap block! Please check your data-driven file"
    );
  }
  if (energy >= params.max_energy) {
    return false;
  }
  return true;
}

function runtimeModify(
  arg0: BlockComponentStepOnEvent,
  params: TrapComponentParams
) {
  const { runtime_identifier } = params;
  if (!runtime_identifier) return;
  const { entity, dimension } = arg0;
  if (
    runtime_identifier === "hiddenyears:hunter_trap" ||
    runtime_identifier === "hiddenyears:monster_trap" ||
    runtime_identifier === "hiddenyears:catch_trap"
  ) {
    entity.addEffect("minecraft:slowness", 15 * TicksPerSecond);
    return;
  }
  if (runtime_identifier === "hiddenyears:fire_trap") {
    entity.setOnFire(5);
    return;
  }
  if (runtime_identifier === "hiddenyears:explode_trap") {
    dimension.createExplosion(entity.location, 5, { breaksBlocks: false });
  }
  if (runtime_identifier === "hiddenyears:summon_trap") {
    dimension.spawnEntity(
      "minecraft:zombie",
      Vector3Utils.add(entity.location, toVec3(2, 0, 0))
    );
    dimension.spawnEntity(
      "minecraft:zombie",
      Vector3Utils.add(entity.location, toVec3(-2, 0, 0))
    );
    dimension.spawnEntity(
      "minecraft:skeleton",
      Vector3Utils.add(entity.location, toVec3(0, 0, 2))
    );
    dimension.spawnEntity(
      "minecraft:skeleton",
      Vector3Utils.add(entity.location, toVec3(0, 0, -2))
    );
  }
  if (runtime_identifier === "hiddenyears:sheep_trap") {
    dimension.spawnEntity(
      "minecraft:sheep",
      Vector3Utils.add(entity.location, toVec3(2, 0, 0))
    );
    dimension.spawnEntity(
      "minecraft:sheep",
      Vector3Utils.add(entity.location, toVec3(-2, 0, 0))
    );
    dimension.spawnEntity(
      "minecraft:sheep",
      Vector3Utils.add(entity.location, toVec3(0, 0, 2))
    );
    dimension.spawnEntity(
      "minecraft:sheep",
      Vector3Utils.add(entity.location, toVec3(0, 0, 2))
    );
  }
}

function onStepOn(
  arg0: BlockComponentStepOnEvent,
  params: TrapComponentParams
) {
  const { entity, dimension, block } = arg0;
  if (!entity.isValid) return;
  if (!canBeTriggered(block)) return;
  entity.applyDamage(getDamage(entity, params), {
    cause: EntityDamageCause.magic
  });
  runtimeModify(arg0, params);
  // @ts-ignore
  const energy = block.permutation.getState("starock:magic_energy");
  block.setPermutation(
    // @ts-ignore
    block.permutation.withState("starock:magic_energy", energy - 1)
  );
}

function onPlayerInteract(
  arg0: BlockComponentPlayerInteractEvent,
  params: TrapComponentParams
) {
  const { player, block } = arg0;
  if (getEquipmentItem(player)?.typeId !== params.charge_item) return;
  if (!canBeCharged(block, params)) return;
  consumeEquipmentAmount(player, 1);
  // @ts-ignore
  const energy = block.permutation.getState("starock:magic_energy");
  if (typeof energy !== "number") {
    throw new Error(
      "Cannot find valid energy from trap block! Please check your data-driven file"
    );
  }
  block.setPermutation(
    block.permutation.withState(
      // @ts-ignore
      "starock:magic_energy",
      energy + params.charge_step
    )
  );
}
