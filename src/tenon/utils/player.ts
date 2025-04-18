import {
  Entity,
  EntityEquippableComponent,
  EquipmentSlot,
  ItemStack,
  Player,
} from "@minecraft/server";

/**
 * 获取给定实体的指定槽位物品
 * @param entity 要获取槽位的实体
 * @param slot 要获取的槽位，默认为 {@link EquipmentSlot.Mainhand}
 * @return 槽位中的物品
 * @throws 如果实体不是玩家，则抛出错误（此为没有报错的原版限制）
 */
export function getEquipmentItem(
  entity: Entity,
  slot = EquipmentSlot.Mainhand
): ItemStack | undefined {
  if (!(entity instanceof Player)) throw new Error("getEquipmentItem 无法获取非玩家实体槽位中的物品");
  const equipment = entity?.getComponent(
    "minecraft:equippable"
  ) as EntityEquippableComponent;
  return equipment?.getEquipment(slot);
}
