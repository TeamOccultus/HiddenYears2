import {
  giveItem,
  heal,
  ItemConditions,
  Job,
  RandomEvent
} from "@occultus/api";
import { amnestyPastor } from "../advanced/amnestyPastor";
import { orisonPastor } from "../advanced/orisonPastor";
import { ItemStack, Player } from "@minecraft/server";

export const pastor = new Job(
  "hiddenyears:pastor",
  { translate: "job.hiddenyears:pastor" },
  { translate: "job.hiddenyears:pastor.desc" },
  {
    maxLevel: 10,
    upgradeCondition: [
      {
        min: 0,
        max: 10,
        condition: [new ItemConditions("hiddenyears:copper_coin", 5, true)]
      }
    ],
    transform: [
      {
        job: amnestyPastor,
        condition: new ItemConditions("hiddenyears:pastor_gem", 1, true)
      },
      {
        job: orisonPastor,
        condition: new ItemConditions("hiddenyears:pastor_gem", 1, true)
      }
    ]
  }
);

pastor.onHurt((arg) => {
  // 该标签代表该玩家释放的牧师技能正在生效中
  if (arg.hurtEntity.hasTag("hiddenyears:skilled")) {
    new RandomEvent(0.25, () => {
      if (!(arg.hurtEntity instanceof Player)) return;
      heal(arg.hurtEntity, pastor.getLevel(arg.hurtEntity) * 0.5);
    }).call();
  }
});

pastor.onUpgrade((arg) => {
  if (arg.recentLevel === 10) {
    giveItem(arg.player, new ItemStack("hiddenyears:pastor_gem"));
  }
});
