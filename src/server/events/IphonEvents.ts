import {
  CustomComponentParameters,
  Entity,
  EntityDamageCause,
  ItemComponentUseEvent,
  Player,
  system,
  TicksPerSecond,
} from "@minecraft/server";
import {
  consumeDurability,
  EntitiesUtils,
  hasFamily,
  setEquipmentItem
} from "@occultus/api";
import { StaffParams } from "../components/StaffComponent/Params";
import { getPastorLevel } from "../job/toolkit";
import { IphonParams } from "../components/IphonComponent/Params";

function isEntityInFront(player: Player, entity: Entity): boolean {
  const viewDirection = player.getViewDirection();
  const toEntityXZ = {
    x: entity.location.x - player.location.x,
    z: entity.location.z - player.location.z
  };

  const viewDirXZ = {
    x: viewDirection.x,
    z: viewDirection.z
  };
  const dotProduct = toEntityXZ.x * viewDirXZ.x + toEntityXZ.z * viewDirXZ.z;
  return dotProduct > 0;
}

export class IphonEvents {
  static matchPresent(
    arg0: ItemComponentUseEvent,
    arg1: CustomComponentParameters
  ) {
    const params = arg1.params as IphonParams;
    if (params.runtime_identifier === "hiddenyears:ruby_iphon") {
      IphonEvents.onRubyIphonRelease(arg0, arg1);
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
    utils.tryOperateEntity((entity) => {
      if (!isEntityInFront(source, entity)) return;
      entity.applyDamage(params.damage, { cause: EntityDamageCause.magic });
      if (params.particle) {
        entity.dimension.spawnParticle(params.particle, entity.location);
      }
    });
    IphonEvents.matchPresent(arg0, arg1);
    cooldown.startCooldown(source);
  }
  static onRubyIphonRelease(
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
      if (!isEntityInFront(source, entity)) return;
      if (hasFamily(entity, "ruby") && !hasFamily(entity, "boss")) {
        entity.triggerEvent("hiddenyears:transform");
      }
      entity.addEffect("minecraft:slowness", 5 * TicksPerSecond);
    });
  }
}
