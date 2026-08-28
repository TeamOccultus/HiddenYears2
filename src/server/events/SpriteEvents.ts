import { EntityDamageCause, world } from "@minecraft/server";
import { conjureWizard } from "../job/advanced/conjureWizard";

export class SpriteEvents {
  /**
   * 订阅魔法精灵攻击实体后事件
   */
  static subscribe() {
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const { hitEntity, damagingEntity } = event;
      if (!damagingEntity.matches({ families: ["magic_sprite"] })) return;
      if (!hitEntity.isValid) return;
      const player =
        damagingEntity.getComponent("minecraft:tameable").tamedToPlayer;
      if (!player || !player.isValid) return;
      hitEntity.applyDamage(conjureWizard.getLevel(player) * 0.85, {
        cause: EntityDamageCause.magic,
        damagingEntity: player
      });
    });
  }
}
