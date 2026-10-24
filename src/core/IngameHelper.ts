import { Player, world } from "@minecraft/server";
import { Monologue } from "@occultus/api";

export class IngameHelper {
  static readonly WELCOME_MESSAGE_FLAG = "hiddenyears:watch_welcome";
  static readonly LUNA_TIP_FLAG = "hiddenyears:luna_tip";
  constructor() {
    this.registerWelcomeMessage();
    this.registerLunaTip();
  }
  private registerWelcomeMessage() {
    world.afterEvents.playerSpawn.subscribe((arg) => {
      if (!arg.initialSpawn) return;
      if (arg.player.hasTag(IngameHelper.WELCOME_MESSAGE_FLAG)) return;
      new Monologue("hiddenyears:welcome")
        .addMonologue(
          { translate: "monologue.hiddenyears:occultus_watch.welcome.1" },
          25
        )
        .addMonologue(
          { translate: "monologue.hiddenyears:occultus_watch.welcome.2" },
          25
        )
        .addMonologue(
          { translate: "monologue.hiddenyears:occultus_watch.welcome.3" },
          25
        )
        .addMonologue(
          { translate: "monologue.hiddenyears:occultus_watch.welcome.4" },
          25
        )
        .play(arg.player);
      arg.player.addTag(IngameHelper.WELCOME_MESSAGE_FLAG);
    });
  }
  private registerLunaTip() {
    world.afterEvents.entityHitEntity.subscribe((arg) => {
      const { damagingEntity, hitEntity } = arg;
      if (!(hitEntity instanceof Player)) return;
      if (!damagingEntity.matches({ families: ["lunamutatio_monster"] }))
        return;
      let chance = 1.0;
      if (hitEntity.hasTag(IngameHelper.LUNA_TIP_FLAG)) chance = 0.3;
    });
  }
}
