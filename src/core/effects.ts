import { system, world } from "@minecraft/server";
import { vanillaDimensions } from "lazuli-mc";

/**
 * The bleed effect.
 */
export function bleedEffectMonitor() {
  vanillaDimensions.forEach((dimension) => {
    dimension.getEntities({ tags: ["hy:bleed_lv1"] }).forEach((entity) => {
      const num1 = system.runInterval(() => {
        entity.applyDamage(1);
        entity.addEffect("slowness", 40, { amplifier: 1 });
      }, 40);
      system.runTimeout(()=>{
        system.clearRun(num1);
      },160)
      world.afterEvents.entityDie.subscribe(event=>{
        if(entity.id===event.deadEntity.id){
          system.clearRun(num1);
        }
      })
      world.afterEvents.entityRemove.subscribe(event=>{
        if(entity.id===event.removedEntityId){
          system.clearRun(num1);
        }
      })
    });
    dimension.getEntities({ tags: ["hy:bleed_lv2"] }).forEach((entity) => {
      const num2 = system.runInterval(() => {
        entity.applyDamage(1);
        entity.addEffect("slowness", 20, { amplifier: 1 });
      }, 20);
      system.runTimeout(()=>{
        system.clearRun(num2);
      },160)
      world.afterEvents.entityDie.subscribe(event=>{
        if(entity.id===event.deadEntity.id){
          system.clearRun(num2);
        }
      })
      world.afterEvents.entityRemove.subscribe(event=>{
        if(entity.id===event.removedEntityId){
          system.clearRun(num2);
        }
      })
    });
  });
}
