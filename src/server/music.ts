import { world, ItemStack } from "@minecraft/server";

export function musicRegister(){
world.afterEvents.itemUse.subscribe((event) => {
  switch (event.itemStack.typeId) {
    /** 播放红宝石之王BOSS战音乐 */
    case "hy:experience_calamity_bag":
     world.playMusic("music.boss.ruby", {
      loop: true
     });
    break;
    default:
      break;
  }
});
world.afterEvents.entityDie.subscribe((event) => {
    const ENTITY = event.deadEntity;
    /** 红宝石之王死亡时结束所有音乐 */
    if (ENTITY.typeId === "hy:king_of_ruby") {
      world.stopMusic();
      world.sendMessage([{ translate: "hy.bossdead.ruby" }]);
    }
  });
}