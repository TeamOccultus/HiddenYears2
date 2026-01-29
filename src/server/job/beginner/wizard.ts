import { giveItem, ItemConditions, Job } from "@occultus/api";
import { arcaneWizard } from "../advanced/arcaneWizard";
import { conjureWizard } from "../advanced/conjureWizard";
import { EntityDamageCause, ItemStack, Player } from "@minecraft/server";

export const wizard = new Job(
  "hiddenyears:wizard",
  { translate: "job.hiddenyears:wizard" },
  { translate: "job.hiddenyears:wizard.desc" },
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)]
      }
    ],
    transform: [
      {
        job: arcaneWizard,
        condition: new ItemConditions("hiddenyears:wizard_gem", 1, true)
      },
      {
        job: conjureWizard,
        condition: new ItemConditions("hiddenyears:wizard_gem", 1, true)
      }
    ]
  }
);

wizard.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:wizard_gem"));
  }
});

// TODO!!! TODO!!! TODO!!! 26.10会增加EntityHurtBeforeEvent！完全的上位替代！但是现在根本没有哈哈。草泥马MS
wizard.onCauseDamage((arg) => {
  if (arg.damageSource.cause != EntityDamageCause.magic) return;
  const hurtEntity = arg.hurtEntity;
  const player = arg.damageSource.damagingEntity as Player;
  // 已经被移除
  if (!hurtEntity.isValid) return;
  hurtEntity.applyDamage(wizard.getLevel(player) * 0.6, {
    cause: EntityDamageCause.none
  });
});
