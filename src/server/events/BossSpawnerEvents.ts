import {
  Block,
  BlockComponentPlayerInteractEvent,
  Player
} from "@minecraft/server";
import { BossSpawnerParams } from "../components/BossSpawnerComponent/Params";
import {
  consumeAmount,
  getEquipmentItem,
  setEquipmentItem,
  Vector3Utils
} from "@occultus/api";
import { kingOfRubyCutscene } from "../../cutscenes/kingOfRuby";
import { mutasWrathCutscene } from "../../cutscenes/mutasWrath";
import { pharaohsGhostCutscene } from "../../cutscenes/pharaohsGhost";

/**
 * @category Events
 */
export class BossSpwanerEvents {
  static matchCutscene(name: "king_of_ruby" | "mutas_wrath" | "pharaohs_ghost", player: Player){
    if(name==="king_of_ruby"){
     return kingOfRubyCutscene(player);
    }
    if(name==="mutas_wrath"){
      return mutasWrathCutscene(player);
    }
    if(name==="pharaohs_ghost"){
      return pharaohsGhostCutscene(player);
    }
  }
  static onSpawn(block: Block, player: Player, params: BossSpawnerParams) {
    block.dimension.spawnEntity(
      params.boss,
      Vector3Utils.add(block.location, { x: 2, y: 0, z: 0 })
    );
    player.playSound(params.client_events.sound_event ?? "empty");
    block.setType(params.transform_to);
    if((params.cutscene)){
      this.matchCutscene(params.cutscene, player);
      return;
    }
    if (params.client_events.title) {
      player.onScreenDisplay.setTitle({
        translate: params.client_events.title
      });
    }
    if (params.client_events.subtitle) {
      player.onScreenDisplay.updateSubtitle({
        translate: params.client_events.subtitle
      });
    }
    if (params.fade) {
      const { fade_in: fadeIn, fade_out: fadeOut, hold } = params.fade;
      player.camera.fade({
        fadeTime: {
          fadeInTime: fadeIn,
          fadeOutTime: fadeOut,
          holdTime: hold
        }
      });
    }
  }
  static onPlayerInteract(
    arg0: BlockComponentPlayerInteractEvent,
    params: BossSpawnerParams
  ) {
    const { player, block } = arg0;
    const item = getEquipmentItem(player);
    if (params.key === "none") {
      this.onSpawn(block, player, params);
      return;
    }
    if (item.typeId === params.key) {
      this.onSpawn(block, player, params);
      setEquipmentItem(player, consumeAmount(getEquipmentItem(player), 1));
      return;
    }
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears:need_boss_key"
    });
  }
}
