import {
  Block,
  BlockComponentPlayerInteractEvent,
  Player,
} from "@minecraft/server";
import { TrialStoneParams } from "../components/TrialStoneComponent/Params";
import {
  consumeAmount,
  getEquipmentItem,
  loot,
  setEquipmentItem,
  Vector3Utils,
} from "@occultus/api";

function canBeUsed(player: Player, params: TrialStoneParams) {
  if (!params.key) return true;
  return getEquipmentItem(player).typeId === params.key;
}

/**
 * @category Events
 */
export class TrialStoneEvents {
  static onAward(block: Block, player: Player, params: TrialStoneParams) {
    loot(
      block.dimension,
      Vector3Utils.add(block.location, { x: 0, y: 1, z: 0 }),
      params.table
    );
    player.playSound(params.sound_event ?? "empty");
    block.setType(params.next_state);
  }

  static onWaitingInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {
    const { player, block } = arg0;
    const item = getEquipmentItem(player);
    if (!canBeUsed(player, params)) {
      player.onScreenDisplay.setActionBar({translate: "message.hiddenyears:need_key"})
      return;
    }
    
  }
  static onActiveInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {}
  static onDoneInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {}
  static onPlayerInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: TrialStoneParams
  ) {
    const { player, block } = arg0;
    if (params.state === "waiting_for_active") {
      return TrialStoneEvents.onWaitingInteract(arg0, params);
    }
    if (params.state === "active") {
      return TrialStoneEvents.onActiveInteract(arg0, params);
    }
    return TrialStoneEvents.onDoneInteract(arg0, params);
  }
}
