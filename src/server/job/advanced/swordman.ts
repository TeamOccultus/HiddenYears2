import { EntityDamageCause, Player } from "@minecraft/server";
import {
  getEquipmentItem,
  ItemConditions,
  Job,
  RandomEvent
} from "@occultus/api";

export const swordman = new Job(
  "hiddenyears:swordman",
  { translate: "job.hiddenyears:swordman" },
  { translate: "job.hiddenyears:swordman.desc" },
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
swordman.onCauseDamage((arg) => {
  // 这个是为了防止非近战攻击触发
  if (arg.damageSource.cause !== EntityDamageCause.entityAttack) return;
  const player = arg.damageSource.damagingEntity as Player;
  const mainHandItem = getEquipmentItem(player);
  // 要求主手得是剑
  // 这样，近战+主手是剑，也就是用剑攻击
  if (!mainHandItem?.hasTag("minecraft:is_sword")) return;
  if (new RandomEvent(0.25, () => {}).call()) {
    player.onScreenDisplay.setActionBar({
      translate: "message.hiddenyears.swordman:critical_hit"
    });
    // TODO: 可以加个带有打击感的音效
    const hurtEntity = arg.hurtEntity;
    if (!hurtEntity.isValid) return;
    // 额外提升50%等级的伤害
    hurtEntity.applyDamage(arg.damage * swordman.getLevel(player) * 0.5);
  }
});
