import { EntityDamageCause, Player, TicksPerSecond } from "@minecraft/server";
import {
  EventList,
  EventListData,
  ItemConditions,
  Job,
  RandomEvent
} from "@occultus/api";

export const magicArcher = new Job(
  "hiddenyears:magic_archer",
  { translate: "job.hiddenyears:magic_archer" },
  { translate: "job.hiddenyears:magic_archer.desc" },
  {
    maxLevel: 15,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 10, true)]
      }
    ]
  }
);

magicArcher.onProjectHitEntity((arg) => {
  const hurtEntity = arg.getEntityHit().entity;
  if (!hurtEntity.isValid) return;
  const eventData: EventListData[] = [
    // 注释：如果实体已经着火，这个P用没有
    { weight: 2, event: () => hurtEntity.setOnFire(2) },
    {
      weight: 2,
      event: () => hurtEntity.addEffect("minecraft:nausea", 2 * TicksPerSecond)
    },
    {
      weight: 2,
      event: () => hurtEntity.addEffect("minecraft:poison", 2 * TicksPerSecond)
    },
    { weight: 24 }
  ];
  new EventList(eventData).call();
});
