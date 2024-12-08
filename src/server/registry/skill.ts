import { world} from "@minecraft/server";
import { getEquipmentItem } from "@lazuli/ldk2";

export function registryItemSkill() {
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const [ ENTITY, ITEM] = [
      event.hitEntity,
      getEquipmentItem(event.damagingEntity),
    ];
    /**
     * @tag hy:corrosion_weapon-判断物品是否可以进行腐蚀攻击
     */
    if (ITEM?.hasTag("hy:corrosion_weapon")) {
      ENTITY.addEffect("poison", 200, { amplifier: 1 });
    }
  });
}
