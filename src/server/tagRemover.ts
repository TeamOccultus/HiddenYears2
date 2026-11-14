import { world } from "@minecraft/server";

export function removeTempTag() {
  world.afterEvents.entitySpawn.subscribe((arg) => {
    arg.entity.removeTag("hiddenyears:crucifix_runes_cooldown");
  });
}
