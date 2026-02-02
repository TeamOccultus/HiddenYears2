import { Player, TicksPerSecond } from "@minecraft/server";
import { heal, ItemConditions, Job, RandomEvent } from "@occultus/api";

export const amnestyPastor = new Job(
  "hiddenyears:amnesty_pastor",
  { translate: "job.hiddenyears:amnesty_pastor" },
  { translate: "job.hiddenyears:amnesty_pastor.desc" },
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

amnestyPastor.onHitEntity((arg) => {
  const player = arg.damagingEntity as Player;
  new RandomEvent(0.45, () => {
    heal(player, amnestyPastor.getLevel(player) * 0.8);
  }).call();
  const hurtEntity = arg.hitEntity;
  if (!hurtEntity.isValid) return;
  new RandomEvent(0.5, () => {
    hurtEntity.addEffect("minecraft:weakness", 15 * TicksPerSecond);
  }).call();
});
