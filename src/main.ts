/**
 *《隐藏之年²：天边的迦万涅尔》脚本主入口点
 *
 * 这个模块没有任何类、函数或变量，它只是负责调用编写好的初始化函数
 *
 * > 在这一刻，我的心平静如水
 * >
 * > 没有谁能迫我退悔
 * >
 * > 四面楚歌，这颗心无惧无畏
 * >
 * > 铁花飞，飘逸不残灰
 * >
 * > 千年之后还剩下什么？
 * >
 * > 灵魂的重量又怎能取舍？
 * >
 * > 有共存才有未来可说
 * >
 * > 不一定牵着手
 * >
 * > 但一定永远向前走
 * >
 * > 正确了又能证明什么？
 * >
 * > 就算能从过去找出差错
 * >
 * > 身世境遇不由人选择
 * >
 * > 有理解，就足够
 * >
 * > 盼日夜，细水长流
 * >
 * > ——Mili《铁花飞》
 *
 * @module HiddenYears2
 * @category Main
 */
import { system } from "@minecraft/server";
import { initialize } from "./server/initialize";
import { Dialogue } from "./core/Dialogue";
import { Random } from "@occultus/api";

initialize();

new Dialogue("hiddenyears:trial_zombie_1", "hiddenyears:example").registry();
system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent("hiddenyears:bush", {
    onBreak(arg0, arg1) {
      arg0.entitySource?.applyDamage(3);
    },
    onTick(arg0, arg1) {
      if (Random.integer(100, 0) > 75) return;
      arg0.dimension
        .getEntitiesAtBlockLocation(arg0.block.location)
        .forEach((entity) => {
          entity.applyDamage(2);
        });
    }
  });
});
