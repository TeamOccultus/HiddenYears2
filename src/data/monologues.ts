import { ItemStack, Player, system } from "@minecraft/server";
import { giveItem } from "@occultus/api";

export function listenIsisMonologue(player: Player) {
  player.addEffect("regeneration", 120, { amplifier: 5, showParticles: false });
  player.camera.fade({
    fadeTime: {
      fadeInTime: 1,
      fadeOutTime: 1,
      holdTime: 11,
    },
  });
  player.sendMessage({
    translate: "monologue.hiddenyears:.mutas_wrath_dead.1",
  });
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:.mutas_wrath_dead.2",
    });
  }, 40);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:.mutas_wrath_dead.3",
    });
  }, 80);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:.mutas_wrath_dead.4",
    });
  }, 120);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:.mutas_wrath_dead.5",
    });
  }, 160);
  system.runTimeout(() => {
    player.sendMessage({
      translate: "monologue.hiddenyears:.mutas_wrath_dead.6",
    });
  }, 200);
  system.runTimeout(() => {
    giveItem(player, new ItemStack("hy:letter_19"));
    player.sendMessage({
      translate: "monologue.hiddenyears:.mutas_wrath_dead.7",
      with: [player.name],
    });
    player.playSound("ramdom.levelup");
    player.onScreenDisplay.setTitle({ translate: "hy.title.desert_book" });
    player.onScreenDisplay.updateSubtitle({
      translate: "hy.title.desert_book.subtitle",
    });
  }, 240);
  player.setDynamicProperty("hy:has_listened_isis_monologue", true);
  // ISIS_CROWN.complete(player);
}