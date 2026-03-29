import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  system,
  ItemStack
} from "@minecraft/server";
import {
  consumeEquipmentAmount,
  getContainer,
  Job,
  setEquipmentItem
} from "@occultus/api";
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
  static onRecovery(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const job = arg0.source.getDynamicProperty("hiddenyears:job");
    if (!job) {
      arg0.source.sendMessage({ translate: "message:hiddenyears:job_invalid" });
      return;
    }
    arg0.source.setDynamicProperty("hiddenyears:job");
    arg0.source.setDynamicProperty("hiddenyears:traveler:level", 0);
    arg0.source.setDynamicProperty(job + ":level", 0);
    system.runTimeout(() => {
      const contianer = getContainer(arg0.source);
      if (!contianer)
        throw new Error("Why the player doesn't have a container?");
      for (let i = 0; i < contianer.size; i++) {
        const item = contianer.getItem(i);
        if (!item) continue;
        if (item.hasTag("starock:job_skill")) contianer.setItem(i);
      }
    }, 3);
    system.runTimeout(() => {
      setEquipmentItem(arg0.source, new ItemStack("hiddenyears:travel_gem"));
      arg0.source.playSound("block.enchanting_table.use");
      arg0.source.sendMessage({ translate: "message:hiddenyears:job_reset" });
    }, 5);
  }
}
