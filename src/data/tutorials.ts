import { Tutorial, TutorialGroup } from "@occultus/api";

const tutorialStick = new Tutorial(
  "minecraft:stick",
  "木棍",
  "木棍是一种合成中的常见物品",
  {
    type: "item",
    iconPath: "textures/items/stick"
  }
);

const tutorialFood = new Tutorial(
  "<tag>minecraft:is_food",
  "食物",
  "食物是使用后可以给玩家补充饥饿值和饱和度、有时还会产生额外效果的物品",
  {
    type: "item",
    iconPath: "textures/items/apple"
  }
);

const tutorialStone = new Tutorial(
  "minecraft:stone",
  "石头",
  "石头是一种常见的建筑材料，可以用来制作各种工具和家具",
  {
    type: "block"
  }
);

const tutorialEntity = new Tutorial(
  "minecraft:cow",
  "牛",
  "牛是一种常见的动物，可以用来制作食物和皮革",
  {
    type: "entity"
  }
);

const tutorialNether = new Tutorial(
  "minecraft:nether",
  "下界",
  "下界是一个特殊维度，有着独特的生物和地形",
  {
    type: "dimension"
  }
);

const tutorialAlways = new Tutorial(
  "example:always",
  "教程",
  "这是一个总是显示的教程",
  {
    type: "alwaysAvailable"
  }
);

export const group = new TutorialGroup("group", "教程组", "这是一个教程组", {
  tutorials: [tutorialStick, tutorialFood, tutorialStone]
});

export const tutorials = [
  tutorialStick,
  tutorialFood,
  tutorialStone,
  tutorialEntity,
  tutorialNether,
  tutorialAlways
];
