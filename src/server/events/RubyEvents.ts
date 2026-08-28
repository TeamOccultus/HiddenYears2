import {
  EntityDamageCause,
  EquipmentSlot,
  Player,
  world
} from "@minecraft/server";
import { getEquipmentItem, hasFamily, tryOperateEntity } from "@occultus/api";

/**
 * 红宝石相关事件
 */
export class RubyEvents {
  /**
   * 订阅红宝石王冠相关事件
   */
  static subscribe() {
    world.afterEvents.entityHurt.subscribe((event) => {
      const { damageSource, hurtEntity, damage } = event;
      if (damageSource.cause !== EntityDamageCause.entityAttack) return;
      if (!hasFamily(damageSource.damagingEntity, "ruby")) return;
      if (
        getEquipmentItem(hurtEntity, EquipmentSlot.Head)?.typeId !==
        "hiddenyears:ruby_crown"
      ) {
        return;
      }

      hurtEntity.addEffect("regeneration", 8, { amplifier: 5 });
      tryOperateEntity(damageSource.damagingEntity, (entity) => {
        entity.applyDamage(damage * 2.75, {
          cause: EntityDamageCause.magic,
          damagingEntity: hurtEntity
        });
      });
      if (hurtEntity instanceof Player) {
        hurtEntity.onScreenDisplay.setActionBar({
          translate: "message.hiddenyears:crown"
        });
      }
    });
  }
}
