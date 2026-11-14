import { world } from "@minecraft/server";

export function removeTempTag() {
  world.afterEvents.entitySpawn.subscribe((arg) => {
    if(!arg.entity.isValid)return;
    arg.entity.removeTag("hiddenyears:crucifix_runes_cooldown");
  });
}
