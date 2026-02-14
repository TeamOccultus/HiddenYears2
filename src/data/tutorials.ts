import { Tutorial } from "@occultus/api";

const materials = new Tutorial(
  "hiddenyears:materials",
  { translate: "howtoplay.hiddenyears:material.title" },
  [
    {
      title: { translate: "howtoplay.hiddenyears:material.title1" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:material.wooden" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.bone" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.stone" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.refined_rock" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.copper" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:material.title2" },
      body: {
        rawtext: [
          {translate: "howtoplay.hiddenyears:material.silver"},
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.diamond" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.crystal" },
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:material.title3" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:material.netherite" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.originite" },
        ]
      }
    }
  ],
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
