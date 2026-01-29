import { ItemComponentHitEntityEvent } from "@minecraft/server";
import { RandomEvent } from "@occultus/api";
import { droughtEffect } from "../effects/drought";
import { dehydrationEffect } from "../effects/dehydration";

export class LegendWeaponEvent {
  static onSufferingSwordAttack(arg0: ItemComponentHitEntityEvent) {
    const { attackingEntity, hitEntity } = arg0;
    if (!hitEntity.isValid) return;
    hitEntity.addEffect("minecraft:slowness", 140, { amplifier: 2 });
    hitEntity.addEffect("minecraft:poison", 140, { amplifier: 2 });
    hitEntity.addEffect("minecraft:weakness", 140, { amplifier: 2 });
    hitEntity.addEffect("minecraft:darkness", 200);
    new RandomEvent(0.15, () => {
      attackingEntity.addEffect("minecraft:weakness", 100);
    }).call();
  }
  static onShatteredSandCudgelAttack(arg0: ItemComponentHitEntityEvent) {
    const { attackingEntity, hitEntity } = arg0;
    if (!hitEntity.isValid) return;
    droughtEffect.add(hitEntity, 300, 1);
  }
  static onShatteredSandStaffAttack(arg0: ItemComponentHitEntityEvent) {
    const { attackingEntity, hitEntity } = arg0;
    if (!hitEntity.isValid) return;
    dehydrationEffect.add(hitEntity, 300, 1);
  }
}
