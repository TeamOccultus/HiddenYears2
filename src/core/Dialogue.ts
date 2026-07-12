import { GameMode, system, world } from "@minecraft/server";

export class Dialogue {
  constructor(
    readonly typeId: string,
    protected sceneTag: string
  ) {}
  registry() {
    world.afterEvents.entitySpawn.subscribe((event) => {
      if (event.entity.typeId !== this.typeId) return;
      event.entity.runCommand(`dialogue change @s ${this.sceneTag}`);
    });
    world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
      if (event.target.typeId !== this.typeId) return;
      if (event.player.getGameMode() === GameMode.Creative) {
        event.cancel = true;
        system.run(() => {
          event.player.setGameMode(GameMode.Survival);
          event.target.runCommand(
            `dialogue open @s ${event.player.name} ${this.sceneTag}`
          );
          event.player.setGameMode(GameMode.Creative);
        });
      }
    });
  }
}
