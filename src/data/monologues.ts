import {
  Player,
  system
} from "@minecraft/server";
import {  Monologue } from "@occultus/api";

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

  // 创建Monologue实例
  const mutasMonologue = new Monologue("mutas-wrath-dead");

  // 批量添加所有独白（包括最后一段的自定义逻辑）
  mutasMonologue.setMonologues([
    { text: "monologue.hiddenyears:mutas_wrath_dead.1", delay: 0 },
    { text: "monologue.hiddenyears:mutas_wrath_dead.2", delay: 40 },
    { text: "monologue.hiddenyears:mutas_wrath_dead.3", delay: 40 },
    { text: "monologue.hiddenyears:mutas_wrath_dead.4", delay: 40 },
    { text: "monologue.hiddenyears:mutas_wrath_dead.5", delay: 40 },
    { text: "monologue.hiddenyears:mutas_wrath_dead.6", delay: 40 },
    // 最后一段：文本为自定义对象，包含with参数
    {
      text: {
        translate: "monologue.hiddenyears:mutas_wrath_dead.7",
        with: [player.name]
      },
      delay: 40
    }
  ]);
  // TODO: 给玩家阅读物
  mutasMonologue.play(player);

  // 单独处理最后一段的附加逻辑（时间与最后一段独白同步）
  const totalDelay = mutasMonologue
    .getMonologues()
    .reduce((sum, item) => sum + item.delay, 0);
  system.runTimeout(() => {
    player.playSound("random.levelup");
    player.onScreenDisplay.setTitle({
      translate: "title.hiddenyears:desert_book"
    });
    player.onScreenDisplay.updateSubtitle({
      translate: "title.hiddenyears:desert_book.subtitle"
    });
  }, totalDelay);

  // 后置逻辑不变
  player.setDynamicProperty("hiddenyears:has_listened_isis_monologue", true);
  player.onScreenDisplay.resetHudElementsVisibility();
}
