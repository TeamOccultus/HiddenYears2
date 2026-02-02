import { EntityDamageCause, Player } from "@minecraft/server";
import { ItemConditions, Job, RandomEvent } from "@occultus/api";

export const arcaneWizard = new Job(
  "hiddenyears:arcane_wizard",
  { translate: "job.hiddenyears:arcane_wizard" },
  { translate: "job.hiddenyears:arcane_wizard.desc" },
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

arcaneWizard.onCauseDamage((arg) => {
  if (arg.damageSource.cause != EntityDamageCause.magic) return;
  const player = arg.damageSource.damagingEntity as Player;
  new RandomEvent(0.15, () => {
    player.addEffect("minecraft:absorption", 10, { amplifier: 1 });
  }).call();
});
