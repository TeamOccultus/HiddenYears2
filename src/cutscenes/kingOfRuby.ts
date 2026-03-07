import {
  EasingType,
  InputPermissionCategory,
  Player,
  system,
  TicksPerSecond
} from "@minecraft/server";
import { Vector3Utils, toVec3 } from "@occultus/api";

export function kingOfRubyCutscene(player: Player) {
  player.inputPermissions.setPermissionCategory(
    InputPermissionCategory.Movement,
    false
  );
  player.inputPermissions.setPermissionCategory(
    InputPermissionCategory.Jump,
    false
  );
  player.camera.setCamera("minecraft:free", {
    easeOptions: {
      easeType: EasingType.InOutQuad,
      easeTime: 10
    },
    rotation: {
      x: 0,
      y: -90
    },
    location: Vector3Utils.add(player.location, toVec3(0, 5, 0))
  });
  system.runTimeout(() => {
    player.playSound("item.trident.thunder");
    player.onScreenDisplay.setTitle({
      translate: "title.hiddenyears:king_of_ruby"
    });
    player.onScreenDisplay.updateSubtitle({
      translate: "title.hiddenyears:king_of_ruby.subtitle"
    });
  }, 3 * TicksPerSecond);
  system.runTimeout(() => {
    player.inputPermissions.setPermissionCategory(
      InputPermissionCategory.Movement,
      true
    );
    player.inputPermissions.setPermissionCategory(
      InputPermissionCategory.Jump,
      true
    );
    player.camera.clear();
    player.onScreenDisplay.resetHudElementsVisibility();
  }, 10 * TicksPerSecond);
}
