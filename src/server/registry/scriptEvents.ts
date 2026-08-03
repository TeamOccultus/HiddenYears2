import { Entity, system } from "@minecraft/server";
import { EventList } from "@occultus/api";

function randomRubyMonsterName(entity: Entity) {
  new EventList([
    {
      weight: 10,
      event: () => {
        entity.nameTag = "Dominus..."; // 主人……
      }
    },
    {
      weight: 10,
      event: () => {
        entity.nameTag = "You are my Master...";  // 您是我的主……
      }
    },
    {
      weight: 10,
      event: () => {
        entity.nameTag = "Epistatēs...have compassion on us!"; // 夫子，可怜我们吧！
      }
    },
    {
      weight: 10,
      event: () => {
        entity.nameTag = "ἐπιστάτης..."; // 夫子……
      }
    },
    {
      weight: 10,
      event: () => {
        entity.nameTag = "You are the α and ω"; // 您即是初，您即是终。
      }
    }
  ]).call();
}

export function registerScriptEvents() {
  system.afterEvents.scriptEventReceive.subscribe((arg) => {
    if (arg.id === "hiddenyears:ruby_monster_transform") {
      if (!arg.sourceEntity) return;
      randomRubyMonsterName(arg.sourceEntity);
    }
  });
}
