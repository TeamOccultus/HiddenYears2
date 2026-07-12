/**
 * @module server/registry/effect
 * @category Registry Bus
 */
import { Player } from "@minecraft/server";
import { bleedEffect } from "../effects/bleed";
import {
  dehydrationEffect,
  isAffectByDehydrationEffect
} from "../effects/dehydration";
import { droughtEffect, isAffectByDroughtEffect } from "../effects/drought";
import { tetanusEffect, isAffectByTetanusEffect } from "../effects/tetanus";

/**
 * 注册所有模拟效果
 */
export function registryEffects() {
  bleedEffect.onUpdate((entity, level) => {
    if (level === 1) {
      entity.applyDamage(1);
      entity.addEffect("slowness", 40, { amplifier: 1 });
    }
    if (level === 2) {
      entity.applyDamage(2);
      entity.addEffect("slowness", 40, { amplifier: 2 });
    }
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
}
