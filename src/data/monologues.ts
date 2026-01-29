import {
  HudElement,
  HudVisibility,
  ItemStack,
  Player,
  system
} from "@minecraft/server";
import { giveItem } from "@occultus/api";

export function listenIsisMonologue(player: Player) {
  player.onScreenDisplay.hideAllExcept([]);
  player.addEffect("regeneration", 120, { amplifier: 5, showParticles: false });
  player.camera.fade({
    fadeTime: {
      fadeInTime: 1,
      fadeOutTime: 1,
      holdTime: 8
    }
  });
  player.sendMessage({
    translate: "monologue.hiddenyears:mutas_wrath_dead.1"
  });
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:mutas_wrath_dead.2"
    });
  }, 40);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:mutas_wrath_dead.3"
    });
  }, 80);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:mutas_wrath_dead.4"
    });
  }, 120);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:mutas_wrath_dead.5"
    });
  }, 160);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:mutas_wrath_dead.6"
    });
  }, 200);
  system.runTimeout(() => {
    // giveItem(player, new ItemStack("hiddenyears:letter_19"));
    player.sendMessage({
      translate: "monologue.hiddenyears:mutas_wrath_dead.7",
      with: [player.name]
    });
    player.playSound("ramdom.levelup");
    player.onScreenDisplay.setTitle({
      translate: "title.hiddenyears:desert_book"
    });
    player.onScreenDisplay.updateSubtitle({
      translate: "title.hiddenyears:desert_book.subtitle"
    });
  }, 240);
  player.setDynamicProperty("hiddenyears:has_listened_isis_monologue", true);
  player.onScreenDisplay.resetHudElementsVisibility();
  // ISIS_CROWN.complete(player);
}
