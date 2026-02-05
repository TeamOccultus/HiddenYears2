import {
  ItemComponentHitEntityEvent,
  CustomComponentParameters,
  Entity
} from "@minecraft/server";
import { WeaponTypeSchema } from "../components/WeaponTypeComponent/Params";
import { LegendWeaponEvent } from "./LegendWeaponEvent";
import { hasFamily, Random } from "@occultus/api";

export class WeaponEvent {
  static onHitEntity(
    arg0: ItemComponentHitEntityEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as WeaponTypeSchema;
    if (params?.legend_weapon === "suffering") {
      LegendWeaponEvent.onSufferingSwordAttack(arg0);
    }
    if (params?.legend_weapon === "shattered_sand_cudgel") {
      LegendWeaponEvent.onShatteredSandCudgelAttack(arg0);
    }
    if (params?.legend_weapon === "shattered_sand_staff") {
      LegendWeaponEvent.onShatteredSandStaffAttack(arg0);
    }
  }
  static getSpecificDamage(entity: Entity, params: WeaponTypeSchema): number {
    const data = params.specific_damage;
    if (!data) return 0;
    if (data.length === 0) return 0;
    for (const d of data) {
      if (hasFamily(entity, d.family))
        return typeof d.damage === "number"
          ? d.damage
          : Random.integer(d.damage[0], d.damage[1]);
    }
    return 0;
  }
}
