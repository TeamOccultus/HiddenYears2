import { Entity, Player } from "@minecraft/server";
import { withPercentChance } from "lazuli-mc";

/**
 * 造成仿制伤害
 * @param entity 使用了仿制工具的实体
 */
export function applyImitationDamage(entity: Entity): void {
    withPercentChance({
      chance: 0.05,
      event: () => {
        entity.applyDamage(2);
        if (entity instanceof Player) {
          entity.sendMessage({ translate: "hy.message.imitation_damage" });
        }
      },
    });
  }