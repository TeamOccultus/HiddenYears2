import { system } from "@minecraft/server";
import { LegendWeaponEvent } from "../../events/LegendWeaponEvent";
import { JobOfferSchema } from "./Params";
import { setEquipmentItem } from "@occultus/api";
import { traveler } from "../../job/traveler";

export class JobOfferComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {
        onUse(arg0, arg1) {
          const params = arg1.params as JobOfferSchema;
          if (params.job_type === "traveler") {
            arg0.source.setDynamicProperty("hiddenyears:job");
            system.runTimeout(() => {
              traveler.add(arg0.source);
              setEquipmentItem(arg0.source);
            }, 20);
          }
        },
      });
    });
  }
}
