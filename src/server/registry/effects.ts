/**
 * @module server/registry/effect
 * @category Registry Bus
 */
import { EntityDamageCause, Player } from "@minecraft/server";
import { bleedEffect } from "../effects/bleed";
import {
  dehydrationEffect,
  isAffectByDehydrationEffect
} from "../effects/dehydration";
import { droughtEffect, isAffectByDroughtEffect } from "../effects/drought";
import { tetanusEffect, isAffectByTetanusEffect } from "../effects/tetanus";
import { disorientedEffect } from "../effects/disoriented";
import { erosionEffect } from "../effects/erosion";
import { toVec3, Vector3Utils } from "@occultus/api";

/**
 * 注册所有模拟效果
 */
export function registerEffects() {
  bleedEffect.onUpdate((entity, level) => {
    entity.dimension.spawnParticle(
      "hiddenyears:blood_emitter",
      Vector3Utils.add(entity.location, toVec3(0, 1, 0))
    );
    entity.applyDamage(1 + level);
    entity.addEffect("minecraft:slowness", 40, {
      amplifier: level,
      showParticles: false
    });
  });

  bleedEffect.onAddToEntity((entity) => {
    if (entity instanceof Player) {
      entity.sendMessage({ translate: "message.hiddenyears:bleed" });
    }
  });

  dehydrationEffect.onUpdate((entity) => {
    if (isAffectByDehydrationEffect(entity)) {
      entity.applyDamage(1);
      entity.addEffect("weakness", 40, {
        amplifier: 2
      });
      entity.addEffect("nausea", 40, { amplifier: 2 });
      entity.addEffect("mining_fatigue", 40, { amplifier: 2 });
      entity.addEffect("poison", 40, { amplifier: 2 });
    }
  });

  dehydrationEffect.onAddToEntity((entity) => {
    if (entity instanceof Player) {
      entity.sendMessage({ translate: "message.hiddenyears:dehydration" });
      entity.runCommand("camerashake add @s 0.25 5 positional");
    }
  });

  droughtEffect.onUpdate((entity) => {
    if (isAffectByDroughtEffect(entity)) {
      entity.addEffect("weakness", 40, {
        amplifier: 2
      });
      entity.addEffect("nausea", 40, { amplifier: 2 });
      entity.addEffect("darkness", 40);
      entity.addEffect("poison", 40);
    }
  });

  droughtEffect.onAddToEntity((entity) => {
    if (entity instanceof Player) {
      entity.sendMessage({ translate: "message.hiddenyears:drought" });
      entity.runCommand("camerashake add @s 0.25 5 positional");
    }
  });

  tetanusEffect.onUpdate((entity) => {
    if (isAffectByTetanusEffect(entity)) {
      entity.addEffect("poison", 40, {
        amplifier: 2
      });
      entity.addEffect("nausea", 40, { amplifier: 2 });
      entity.addEffect("wither", 40);
    }
  });

  tetanusEffect.onAddToEntity((entity) => {
    if (entity instanceof Player) {
      entity.sendMessage({ translate: "message.hiddenyears:tetanus" });
    }
  });

  disorientedEffect.onUpdate((entity, amplifier) => {
    entity.addEffect("minecraft:weakness", 40, { amplifier: amplifier + 2 });
    entity.addEffect("minecraft:slowness", 40, { amplifier: amplifier + 1 });
    if (entity instanceof Player) {
      entity.runCommand(
        `camerashake add @s ${0.1 + 0.1 * amplifier} 2 positional`
      );
    }
  });

  erosionEffect.onUpdate((entity, amplifier) => {
    entity.applyDamage(2 + amplifier * 2, { cause: EntityDamageCause.magic });
    entity.addEffect("minecraft:weakness", 40, { amplifier: amplifier + 3 });
    entity.addEffect("minecraft:slowness", 40, { amplifier: amplifier + 2 });
    if (entity instanceof Player) {
      entity.runCommand(
        `camerashake add @s ${0.2 + 0.2 * amplifier} 2 positional`
      );
      // entity.runCommand(`fog @s push hiddenyears:fog_echo_effect hiddenyears:fog_echo_effect`)
    }
  });
}
