import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  system,
  ItemStack
} from "@minecraft/server";
import {
  Color,
  consumeEquipmentAmount,
  Format,
  getContainer,
  Job,
  setEquipmentItem,
  Toast
} from "@occultus/api";
import { JobParams } from "../components/JobOfferComponent/Params";
import { traveler } from "../job/traveler";

export class JobEvents {
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const params = arg1.params as JobParams;
    const player = arg0.source;
    if (params.remove_old) {
      player.setDynamicProperty("hiddenyears:job");
    }
    if (params.job_type === "traveler") {
      system.runTimeout(() => {
        player.playSound("ui.challenge_complete");
        new Toast(
          {
            rawtext: [
              { text: Color.darkPurple },
              { translate: "ui.get_job" },
              { text: "\n" },
              {text: Format.reset},
              { translate: "job.hiddenyears:traveler" },
            ]
          },
          "textures/items/lost_letter"
        ).send(player);
        traveler.add(player);
      }, 10);
    }
    system.waitTicks(5).then(() => {
      consumeEquipmentAmount(player, 1);
    });
  }
  static onRecovery(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const player = arg0.source;
    const job = player.getDynamicProperty("hiddenyears:job");
    if (!job) {
      player.sendMessage({ translate: "message:hiddenyears:job_invalid" });
      return;
    }
    player.setDynamicProperty("hiddenyears:job");
    player.setDynamicProperty("hiddenyears:traveler:level", 0);
    player.setDynamicProperty(job + ":level", 0);
    system.runTimeout(() => {
      const contianer = getContainer(player);
      if (!contianer)
        throw new Error("Why the player doesn't have a container?");
      for (let i = 0; i < contianer.size; i++) {
        const item = contianer.getItem(i);
        if (!item) continue;
        if (item.hasTag("starock:job_skill")) contianer.setItem(i);
      }
    }, 3);
    system.runTimeout(() => {
      setEquipmentItem(player, new ItemStack("hiddenyears:travel_gem"));
      player.playSound("block.enchanting_table.use");
      player.sendMessage({ translate: "message:hiddenyears:job_reset" });
    }, 5);
  }
}
