import {
  Block,
  BlockComponentPlayerInteractEvent,
  Player,
} from "@minecraft/server";
import { VaultParams } from "../components/VaultComponent/Params";
import {
  consumeAmount,
  getEquipmentItem,
  loot,
  setEquipmentItem,
  Vector3Utils,
} from "@occultus/api";

/**
 * @category Events
 */
export class VaultEvents {
  static onAward(block: Block, player: Player, params: VaultParams) {
    loot(
      block.dimension,
      Vector3Utils.add(block.location, { x: 0, y: 1, z: 0 }),
      params.table
    );
    player.playSound(params.sound_event ?? "empty");
    block.setType(params.transform_to);
  }
  static onPlayerInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: VaultParams
  ) {
    const { player, block } = arg0;
    const item = getEquipmentItem(player);
    if (params.key === "none") {
      this.onAward(block, player, params);
      return;
    }
    if (item.typeId === params.key) {
      this.onAward(block, player, params);
      setEquipmentItem(player, consumeAmount(getEquipmentItem(player), 1));
      return;
    }
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:need_key",
    });
  }
}
