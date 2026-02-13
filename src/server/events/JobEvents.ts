import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  system
} from "@minecraft/server";
import { consumeEquipmentAmount } from "@occultus/api";
import { JobParams } from "../components/JobOfferComponent/Params";
import { traveler } from "../job/traveler";

export class JobEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const params = arg1.params as JobParams;
    if (params.remove_old) {
      arg0.source.setDynamicProperty("hiddenyears:job");
    }
    if (params.job_type === "traveler") {
      system.runTimeout(() => {
        arg0.source.playSound("random.levelup");
        traveler.add(arg0.source);
      }, 20);
    }
    system.waitTicks(10).then(() => {
      consumeEquipmentAmount(arg0.source, 1);
    });
  }
}
