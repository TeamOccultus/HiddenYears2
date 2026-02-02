import { Player } from "@minecraft/server";
import {
  getEquipmentItem,
  ItemConditions,
  Job,
  RandomEvent
} from "@occultus/api";

export const assassin = new Job(
  "hiddenyears:assassin",
  { translate: "job.hiddenyears:assassin" },
  { translate: "job.hiddenyears:assassin.desc" },
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

// 这里不能用hit entity之后等待hurt事件来实现，MS的时序炸的干干净净，全都是race condition
// 我草泥马Mojang到底是怎么想的
assassin.onCauseDamage((arg) => {
  const player = arg.damageSource.damagingEntity as Player;
  const mainHandItem = getEquipmentItem(player);
  // 要求主手得是匕首
  // 副手拿不了匕首，不用判断
  if (!mainHandItem?.hasTag("hiddenyears:is_dagger")) return;
  const hurtEntity = arg.hurtEntity;
  if (!hurtEntity.isValid) return;
  // 额外提升50%等级的伤害
  hurtEntity.applyDamage(arg.damage * assassin.getLevel(player) * 0.8);
});
