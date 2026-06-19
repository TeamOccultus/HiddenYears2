import {
  EntityDamageCause,
  EquipmentSlot,
  Player,
  world
} from "@minecraft/server";
import { getEquipmentItem, hasFamily, tryOperateEntity } from "@occultus/api";

export class RubyEvents {
  static subscribe() {
    world.afterEvents.entityHurt.subscribe((event) => {
      const { damageSource, hurtEntity, damage } = event;
      if (damageSource.cause !== EntityDamageCause.entityAttack) return;
      if (!hasFamily(damageSource.damagingEntity, "ruby")) return;
      if (
        getEquipmentItem(hurtEntity, EquipmentSlot.Head)?.typeId !==
        "hiddenyears:ruby_crown"
      )
        return;
      hurtEntity.addEffect("regeneration", 8, { amplifier: 5 });
      tryOperateEntity(damageSource.damagingEntity, (entity) => {
        entity.applyDamage(damage * 2.75);
      });
      if (hurtEntity instanceof Player) {
        hurtEntity.onScreenDisplay.setActionBar({
          translate: "message.hiddenyears:crown"
        });
      }
    });
  }
}
