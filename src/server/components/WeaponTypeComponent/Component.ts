import { system } from "@minecraft/server";
import { WeaponTypeSchema } from "./Params";
import { LegendWeaponEvent } from "../../events/LegendWeaponEvent";

export class WeaponTypeComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onHitEntity(arg0, arg1) {
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
      });
    });
  }
}
