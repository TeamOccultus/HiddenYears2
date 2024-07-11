import { Player, world } from "@minecraft/server";
import { MOD_LOGGER } from "..";

export class Music {
  static register() {
    world.afterEvents.entityLoad.subscribe((event) => {
      if (event.entity.typeId === "hy:king_of_ruby") {
        const KING = event.entity;
        KING.dimension
          .getEntities({
            location: KING.location,
            minDistance: 0,
            maxDistance: 20,
          })
          .forEach((entity) => {
            if (entity instanceof Player) {
              entity.playMusic("music.boss.ruby", {
                loop: true,
              });
            }
            world.afterEvents.entityDie.subscribe((event) => {
              if (event.deadEntity.id === KING.id) {
                world.stopMusic();
                world.sendMessage([{ translate: "hy.bossdead.ruby" }]);
              }
            });
          });
      }
    });
    MOD_LOGGER.info("Music registried successfully.")
  }
}
