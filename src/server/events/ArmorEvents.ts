import {
  Entity,
  EntityHealthChangedAfterEvent,
  EntityHealthComponent,
  EntityHurtAfterEvent,
  EquipmentSlot,
  Player
} from "@minecraft/server";
import { getEquipmentItem, Random, RandomEvent } from "@occultus/api";
import {
  ArmorPresent,
  ArmorTypeParams
} from "../components/ArmorTypeComponent/Params";
import { ArmorEffect, ArmorEffectDetector } from "../item/ArmorEffect";

export class ArmorEvents {
  /**
   * 盔甲效果将会搜索的效果栏
   */
  static serachSlots = [
    EquipmentSlot.Head,
    EquipmentSlot.Chest,
    EquipmentSlot.Legs,
    EquipmentSlot.Feet
  ];
  static onEntityHurt(
    event: EntityHurtAfterEvent
  ) {
    if (!(event.hurtEntity instanceof Player)) return;
    if (!event.hurtEntity.isValid) return;
    if (Random.integer(100, 0) >= 85) return;
    const armorEffects = ArmorEffectDetector.detectArmorEffects(
      event.hurtEntity
    );
    // 查找对应效果的最高等级
    const isisCrown = armorEffects.find((e) => e.present === "isis_crown");
    const unyielding = armorEffects.find((e) => e.present === "unyielding");
    const rebirth = armorEffects.find((e) => e.present === "rebirth");

    // 触发对应效果
    if (isisCrown) ArmorEffect.isisArmor(event.damage, event.hurtEntity);
    if (unyielding && unyielding.maxLevel > 0)
      ArmorEffect.unyieldingArmor(event.hurtEntity, unyielding.maxLevel);
    if (rebirth) ArmorEffect.rebirthArmor(event.hurtEntity);
  }
}
