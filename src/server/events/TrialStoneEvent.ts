import {
  Block,
  BlockComponentPlayerInteractEvent,
  Dimension,
  Player,
  Vector3
} from "@minecraft/server";
import { TrialStoneParams } from "../components/TrialStoneComponent/Params";
import {
  consumeEquipmentAmount,
  getEquipmentItem,
  loot,
  toVec3,
  Vector3Utils
} from "@occultus/api";

function canBeUsed(player: Player, params: TrialStoneParams) {
  if (!params.key) return true;
  return getEquipmentItem(player).typeId === params.key;
}

function spawnEntities(dimension: Dimension, location: Vector3) {
  dimension.spawnEntity(
    "hiddenyears:trial_zombie",
    Vector3Utils.add(location, toVec3(2, 0, 0))
  );
  dimension.spawnEntity(
    "hiddenyears:trial_zombie",
    Vector3Utils.add(location, toVec3(-2, 0, 0))
  );
  dimension.spawnEntity(
    "hiddenyears:trial_skeleton",
    Vector3Utils.add(location, toVec3(0, 0, 2))
  );
  dimension.spawnEntity(
    "hiddenyears:trial_skeleton",
    Vector3Utils.add(location, toVec3(0, 0, -2))
  );
}

/**
 * @category Events
 */
export class TrialStoneEvents {
  static onWaitingInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {
    const { player, block } = arg0;
    if (!canBeUsed(player, params)) {
      player.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:trial_stone_need_key"
      });
      return;
    }
    if (params.key) consumeEquipmentAmount(player, 1);
    if (params.sound_event) player.playSound(params.sound_event);
    spawnEntities(block.dimension, block.location);
    if (params.next_state) block.setType(params.next_state);
  }
  static onActiveInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {
    const { player, block } = arg0;
    if (!canBeUsed(player, params)) {
      player.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:trial_stone_need_key.active"
      });
      return;
    }
    if (params.key) consumeEquipmentAmount(player, 1);
    if (params.sound_event) player.playSound(params.sound_event);
    loot(
      block.dimension,
      Vector3Utils.add(block.location, { x: 0, y: 1, z: 0 }),
      params.table
    );
    if (params.next_state) block.setType(params.next_state);
  }
  static onDoneInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {
    const { player, block } = arg0;
    if (!canBeUsed(player, params)) {
      player.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:trial_stone_need_key"
      });
    }
    if (params.key) consumeEquipmentAmount(player, 1);
    if (params.sound_event) player.playSound(params.sound_event);
    if (params.next_state) block.setType(params.next_state);
  }
  static onPlayerInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {
    if (params.state === "waiting_for_active") {
      return TrialStoneEvents.onWaitingInteract(arg0, params);
    }
    if (params.state === "active") {
      return TrialStoneEvents.onActiveInteract(arg0, params);
    }
    return TrialStoneEvents.onDoneInteract(arg0, params);
  }
}
