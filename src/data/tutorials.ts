import { Tutorial, TutorialGroup } from "@occultus/api";

const materials = new Tutorial(
  "example:always",
  "教程",
  "这是一个总是显示的教程",
  {
    type: "alwaysAvailable"
  }
);

const brewing = new Tutorial(
  "hiddenyears:brewing",
  "酿造",
  [
    {
      title: "复合酿造",
      body: "复合酿造是一种酿造方式"
    },
    {
      title: "尼罗特酿造",
      body: "尼罗特酿造是一种酿造方式，阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴，我也不知道写什么好了反正你要是看到了这段话就说明隐年的教程框架已经可以投入使用了"
    }
  ],
  {
    type: "alwaysAvailable"
  }
);

export const tutorials = [materials, brewing];
