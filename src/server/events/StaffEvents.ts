import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  system,
  TicksPerSecond
} from "@minecraft/server";
import {
  consumeDurability,
  EntitiesUtils,
  EntityHealthUtils,
  setEquipmentItem
} from "@occultus/api";
import { StaffParams } from "../components/StaffComponent/Params";
import { pastor } from "../job/beginner/pastor";
import { amnestyPastor } from "../job/advanced/amnestyPastor";
import { orisonPastor } from "../job/advanced/orisonPastor";
import { getPastorLevel } from "../job/toolkit";

export class StaffEvents {
  static matchPresent(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as StaffParams;
    if (params.staff_preset === "mutas_staff") {
      StaffEvents.onMutasStaffRelease(arg0, arg1);
    }
    if (params.staff_preset === "radiant_touch") {
      StaffEvents.onRadiantTouchRelease(arg0, arg1);
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
      families: params.families,
      excludeTags: ["hiddenyears:immune_magic_attack"],
      excludeFamilies: ["noaoe", "inanimate"],
      excludeTypes: ["minecraft:item"]
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
  static onRadiantTouchRelease(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const { source } = arg0;
    const params = arg1.params as StaffParams;
    console.log(getPastorLevel(source));
    new EntitiesUtils(source.dimension, {
      location: source.location,
      maxDistance: params.radius,
      type: "minecraft:player"
    }).tryOperateEntity((entity) => {
      new EntityHealthUtils(entity).heal(10 + getPastorLevel(source) * 0.8);
      entity.dimension.spawnParticle("minecraft:crop_growth_emitter", entity.location);
    });
    new EntitiesUtils(source.dimension, {
      location: source.location,
      maxDistance: params.radius,
      families: params.families,
      excludeTags: ["hiddenyears:immune_magic_attack"],
      excludeFamilies: ["noaoe", "inanimate"],
      excludeTypes: ["minecraft:item"]
    }).tryOperateEntity((entity) => {
      entity.addEffect("minecraft:mining_fatigue", 10 * TicksPerSecond);
      entity.addEffect("minecraft:weakness", 10 * TicksPerSecond);
      entity.applyDamage(getPastorLevel(source) * 0.5);
    });
  }
}
