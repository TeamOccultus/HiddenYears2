import { EntityDamageCause, Player, world } from "@minecraft/server";
import { Color, Format, hasFamily, WelcomeNotification } from "@occultus/api";
import { DebugMode } from "../debug/Debug";

export function registryMessage() {
  new WelcomeNotification((player: Player) => {
    if (DebugMode.hasPermission() || DebugMode.hasPermission(player)) {
      return {
        rawtext: [
          { translate: "message.hiddenyears:welcome" },
          { text: Format.newLine },
          { text: Color.red },
          { translate: "message.hiddenyears:is_debug" },
        ],
      };
    }
    return {
      rawtext: [
        { translate: "message.hiddenyears:welcome" },
        { text: Format.newLine },
        { text: Color.red },
        { translate: "message.hiddenyears:is_beta" },
      ],
    };
  });
}

world.afterEvents.entityHurt.subscribe((event) => {
  const { hurtEntity, damageSource } = event;
  if (!hasFamily(hurtEntity, "boss")) return;
  if (damageSource.cause === EntityDamageCause.stalagmite) {
    hurtEntity.addEffect("minecraft:regeneration", 20);
  }
  if (damageSource.cause !== EntityDamageCause.projectile) return;
  if (damageSource.damagingProjectile.typeId === "minecraft:thrown_trident") {
    hurtEntity.addEffect("minecraft:regeneration", 20);
  }
});
