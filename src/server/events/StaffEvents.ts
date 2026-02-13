import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  system
} from "@minecraft/server";
import {
  consumeDurability,
  EntitiesUtils,
  setEquipmentItem
} from "@occultus/api";
import { StaffParams } from "../components/StaffComponent/Params";

export class StaffEvents {
  static matchPresent(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as StaffParams;
    if (params.staff_preset === "mutas_staff") {
      StaffEvents.onMutasStaffRelease(arg0, arg1);
    }
  }
  static onRelease(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const { itemStack, source } = arg0;
    const params = arg1.params as StaffParams;

    const cooldown = itemStack.getComponent("cooldown");
    if (cooldown.getCooldownTicksRemaining(source) !== 0) {
      source.onScreenDisplay.setActionBar({
        translate: "message.hiddenyears:wait_cooldown"
      });
      return;
    }

    const newItem = consumeDurability(itemStack, 1, source);
    setEquipmentItem(source, newItem);

    source.addTag("hiddenyears:immune_magic_attack");
    if (params.sound_event) source.playSound(params.sound_event);
    const utils = new EntitiesUtils(source.dimension, {
      location: source.location,
      maxDistance: params.radius,
      excludeTags: ["hiddenyears:immune_magic_attack"],
      excludeFamilies: ["noaoe"]
    });
    utils.applyDamage(params.damage);
    utils.tryOperateEntity((entity) => {
      if (params.particle) {
        entity.dimension.spawnParticle(params.particle, entity.location);
      }
    });
    StaffEvents.matchPresent(arg0, arg1);

    cooldown.startCooldown(source);
  }
  static onMutasStaffRelease(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const { source } = arg0;
    const params = arg1.params as StaffParams;

    const utils = new EntitiesUtils(source.dimension, {
      location: source.location,
      maxDistance: params.radius,
      excludeTags: ["hiddenyears:immune_magic_attack"],
      excludeFamilies: ["noaoe"]
    });
    utils.tryOperateEntity((entity) => {
      entity.dimension.spawnEntity("lightning_bolt", entity.location);
    });
  }
}
