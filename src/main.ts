/**
 *《隐藏之年²：天边的迦万涅尔》脚本主入口点
 *
 * 这个模块没有任何类、函数或变量，它只是负责调用编写好的初始化函数
 *
 * > 无数个时空中川流的愿望
 * >
 * > 谁掬起梦外穹顶以北 一捧星光
 * >
 * > 是你我终将相遇 在征途上
 * >
 * > 去明天 一同流浪
 * >
 * > 天穹是否会留住叹息
 * >
 * > 眸中是你的孤独倒影
 * >
 * > 最怕是阴云遮住极星
 * >
 * > 渺茫的破碎的 于长夜沉寂
 * >
 * > 你在彼岸 瞭望
 * >
 * > 我向何处 流浪
 * >
 * > 你说未曾遗忘是心脏灼烫
 * >
 * > 星与夜的 交响
 * >
 * > 会随步履 流淌
 * >
 * > 去漫漫长长
 * >
 * > ——被遗忘者的哀伤、北山薇《极星流浪夜》
 *
 * @module HiddenYears2
 * @category Main
 */
import { world } from "@minecraft/server";
import { initialize } from "./server/initialize";

initialize();

world.afterEvents.playerBreakBlock.subscribe(({ player, block }) => {
  player.onScreenDisplay.setTitle(
    {
      rawtext: [
        { text: "toast:" },
        
        { translate: "打碎方块" }
      ]
    },
    {
      subtitle: `toast:textures/items/apple`,
      fadeInDuration: 0,
      fadeOutDuration: 0,
      stayDuration: 1
    }
  );
});
