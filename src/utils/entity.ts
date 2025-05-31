import { Player, system } from "@minecraft/server";

export function mentalAffect(player: Player) {
  const num = player.getDynamicProperty("hiddenyears:destroy_ruby_count");
  if (num === 0 || !num) {
    player.addLevels(1);
    player.playSound("ambient.cave");
    player.addEffect("minecraft:darkness", 200);
    player.sendMessage({ translate: "hy.message.first_destroy_ruby" });
  }
  if (num === 10) {
    player.playSound("ambient.cave");
    player.addEffect("minecraft:darkness", 300);
    player.sendMessage({ translate: "hy.message.tenth_destroy_ruby.1" });
    player.sendMessage({ translate: "hy.message.tenth_destroy_ruby.2" });
  }
  if (num === 50) {
    player.playSound("ambient.cave");
    player.addEffect("minecraft:darkness", 400);
    player.sendMessage({ translate: "hy.message.fiftieth_destroy_ruby.1" });
    system.runTimeout(() => {
      player.sendMessage({ translate: "hy.message.fiftieth_destroy_ruby.2" });
      player.sendMessage({ translate: "hy.message.fiftieth_destroy_ruby.3" });
    }, 50);
  }
  if (typeof num !== "number") throw new Error("动态属性类型错误");
  player.setDynamicProperty("hiddenyears:destroy_ruby_count", num + 1);
}
