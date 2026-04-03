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
          { translate: "howtoplay.hiddenyears:material.silver" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.diamond" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.crystal" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:material.title3" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:material.netherite" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:material.originite" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/diamond"
  }
);

// 工具与武器教程
const toolsWeapons = new Tutorial(
  "hiddenyears:tools_weapons",
  { translate: "howtoplay.hiddenyears:tools_weapons.title" },
  [
    {
      title: { translate: "howtoplay.hiddenyears:tools_weapons.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:tools_weapons.saw" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:tools_weapons.crowbar" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:tools_weapons.heavy_hammer" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:tools_weapons.dagger" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:tools_weapons.war_hammer" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/originite_hammer"
  }
);

// 魔法教程
const magic = new Tutorial(
  "hiddenyears:magic",
  { translate: "howtoplay.hiddenyears:magic.title" },
  [
    {
      title: { translate: "howtoplay.hiddenyears:magic.basic.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:magic.basic.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.basic.para2" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.basic.para3" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:magic.teleport.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:magic.teleport.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.teleport.para2" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:magic.potion.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:magic.potion.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.potion.para2" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:magic.alchemy.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:magic.alchemy.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.alchemy.para2" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:magic.armor.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:magic.armor.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.armor.para2" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.armor.para3" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.armor.para4" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.armor.para5" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:magic.tips.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:magic.tips.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:magic.tips.para2" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/magic_origin"
  }
);

// 酿造教程
const brewing = new Tutorial(
  "hiddenyears:brewing",
  { translate: "howtoplay.hiddenyears:brewing.title" },
  [
    {
      title: { translate: "howtoplay.hiddenyears:brewing.complex.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:brewing.complex.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.complex.para2" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.complex.para3" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.complex.para4" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.complex.para5" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.complex.para6" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:brewing.desert.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:brewing.desert.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.desert.para2" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.desert.para3" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.desert.para4" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:brewing.desert.para5" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/complex_potion"
  }
);

// 饰品（Artifacts）教程
const artifacts = new Tutorial(
  "hiddenyears:artifacts",
  { translate: "howtoplay.hiddenyears:artifacts.title" },
  [
    {
      title: { translate: "howtoplay.hiddenyears:artifacts.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:artifacts.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:artifacts.para2" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:artifacts.para3" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:artifacts.para4" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:artifacts.para5" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/crucifix_runes"
  }
);

// 职业（Jobs）教程
const jobs = new Tutorial(
  "hiddenyears:jobs",
  { translate: "howtoplay.hiddenyears:jobs.title" },
  [
    {
      title: { translate: "howtoplay.hiddenyears:jobs.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:jobs.para1" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:jobs.para2" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:jobs.para3" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:jobs.para4" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:jobs.para5" },
          { text: "\n\n" },
          { translate: "howtoplay.hiddenyears:jobs.para6" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/travel_gem"
  }
);

const armorEffects = new Tutorial(
  "hiddenyears:armor_effects",
  { translate: "howtoplay.hiddenyears:armor_effect.title" },
  [
    {
      title: {
        translate: "howtoplay.hiddenyears:armor_effect.unyielding.title"
      },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:armor_effect.unyielding.para1" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:armor_effect.rebirth.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:armor_effect.rebirth.para1" }
        ]
      }
    },
    {
      title: { translate: "howtoplay.hiddenyears:armor_effect.isis.title" },
      body: {
        rawtext: [
          { translate: "howtoplay.hiddenyears:armor_effect.isis.para1" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/isis_crown"
  }
);

const tutorials = [
  materials,
  toolsWeapons,
  brewing,
  magic,
  artifacts,
  jobs,
  armorEffects
];

export function getAllTutorials() {
  return tutorials;
}
