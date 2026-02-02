import { Player } from "@minecraft/server";
import { ItemConditions, Job } from "@occultus/api";

export const berserker = new Job(
  "hiddenyears:berserker",
  { translate: "job.hiddenyears:berserker" },
  { translate: "job.hiddenyears:berserker.desc" },
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)]
      }
    ]
  }
);

berserker.onHitEntity((arg) => {
  const hurtEntity = arg.hitEntity;
  if (!hurtEntity.isValid) return;
  const player = arg.damagingEntity as Player;
  const healthComponent = player.getComponent("minecraft:health");
  if (!healthComponent) return;
  const damagedAmount =
    healthComponent.effectiveMax - healthComponent.currentValue;
  hurtEntity.applyDamage(damagedAmount * 0.8);
});
