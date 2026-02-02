import { Player } from "@minecraft/server";
import { heal, ItemConditions, Job, RandomEvent } from "@occultus/api";

export const orisonPastor = new Job(
  "hiddenyears:orison_pastor",
  { translate: "job.hiddenyears:orison_pastor" },
  { translate: "job.hiddenyears:orison_pastor.desc" },
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

orisonPastor.onHurt((arg) => {
  // 该标签代表该玩家释放的牧师技能正在生效中
  if (arg.hurtEntity.hasTag("hiddenyears:skilled")) {
    new RandomEvent(0.3, () => {
      heal(
        arg.hurtEntity,
        orisonPastor.getLevel(arg.hurtEntity as Player) * 0.7
      );
    }).call();
  }
});
