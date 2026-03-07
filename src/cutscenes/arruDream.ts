import {
  EasingType,
  InputPermissionCategory,
  Player,
  system,
  TicksPerSecond
} from "@minecraft/server";
import { Monologue, toVec3, Vector3Utils } from "@occultus/api";

export function arruDreamCutscene(player: Player) {
  const osirisMonologue = new Monologue(
    "hiddenyears:osiris",
    "music.biome.desert_song"
  );

  osirisMonologue
    .addMonologue({ translate: "monologue.hiddenyears:osiris.1" }, 0) // 立即发送
    .addMonologue({ translate: "monologue.hiddenyears:osiris.2" }, 90) // 间隔60tick
    .addMonologue({ translate: "monologue.hiddenyears:osiris.3" }, 90) // 间隔60tick
    .addMonologue({ translate: "monologue.hiddenyears:osiris.4" }, 90) // 间隔60tick
    .addMonologue({ translate: "monologue.hiddenyears:osiris.5" }, 120) // 间隔60tick
    .addMonologue({ translate: "title.hiddenyears:arru_dream.main" }, 20)

  player.inputPermissions.setPermissionCategory(
    InputPermissionCategory.Movement,
    false
  );
  player.inputPermissions.setPermissionCategory(
    InputPermissionCategory.Jump,
    false
  );
  player.onScreenDisplay.hideAllExcept([]);
  player.camera.setCamera("minecraft:free", {
    easeOptions: {
      easeType: EasingType.InOutQuad,
      easeTime: 20
    },
    rotation: {
      x: 10,
      y: 10
    },
    location: Vector3Utils.add(player.location, toVec3(35, 25, -10))
  });
  osirisMonologue.play(player);
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
    player.playMusic("ui.challenge_complete", { loop: false });
    player.onScreenDisplay.setTitle({
      translate: "title.hiddenyears:aaru_dream"
    });
    player.onScreenDisplay.updateSubtitle({
      translate: "title.hiddenyears:aaru_dream.subtitle"
    });
    player.onScreenDisplay.resetHudElementsVisibility()
  }, 25 * TicksPerSecond);
}
