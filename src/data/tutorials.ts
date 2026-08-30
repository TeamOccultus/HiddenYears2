import { Tutorial } from "@occultus/api";

const startTutorial = new Tutorial(
  "hiddenyears:start",
  { translate: "tutorial.hiddenyears:start" },
  [
    {
      title: { translate: "tutorial.hiddenyears:start.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:start.1" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.2" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:start.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:start.4" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.5" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:start.6" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.7" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:start.chapter3" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:start.9" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.10" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.11" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:start.12" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:start.13" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.14" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:start.15" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.16" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:start.17" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/occultus_watch"
  }
);

const materialTutorial = new Tutorial(
  "hiddenyears:materials",
  { translate: "tutorial.hiddenyears:material" },
  [
    {
      title: { translate: "tutorial.hiddenyears:material.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:material.1" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.2" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.3" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.4" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.5" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.6" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:material.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:material.7" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.8" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.9" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.10" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.11" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.12" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:material.chapter3" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:material.13" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.14" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.15" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.16" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.17" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.18" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.19" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.20" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.21" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.22" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.23" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.24" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:material.25" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.26" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.27" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:material.28" }
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
const toolsAndWeaponsTutorial = new Tutorial(
  "hiddenyears:tools_weapons",
  { translate: "tutorial.hiddenyears:taweapon" },
  [
    {
      title: { translate: "tutorial.hiddenyears:taweapon.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:taweapon.1" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.2" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.3" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.4" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:taweapon.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:taweapon.5" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.6" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.7" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.8" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.9" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.10" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:taweapon.chapter3" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:taweapon.11" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.12" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.13" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.14" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.15" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:taweapon.chapter4" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:taweapon.16" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.17" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.18" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.19" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:taweapon.chapter5" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:taweapon.20" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.21" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.22" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.23" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:taweapon.chapter6" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:taweapon.24" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.25" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.26" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.27" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.28" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.29" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.30" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:taweapon.31" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:taweapon.32" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:taweapon.33" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:taweapon.34" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:taweapon.35" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:taweapon.36" }
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
const magicTutorial = new Tutorial(
  "hiddenyears:magic",
  { translate: "tutorial.hiddenyears:magic" },
  [
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.1" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.2" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.3" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.4" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.5" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.6" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.7" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.8" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.9" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.10" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.11" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.12" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.13" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.14" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.15" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.16" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.17" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.18" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.19" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.20" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.21" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:magic.22" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter3" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.23" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.24" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.25" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.26" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter4" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.27" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.28" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.29" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.30" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter5" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.31" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.32" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter6" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.33" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.34" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.35" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.36" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter7" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.37" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.38" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.39" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:magic.chapter8" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:magic.40" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:magic.41" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/magic_origin"
  }
);

// 饰品（Artifacts）教程
const artifactTutorial = new Tutorial(
  "hiddenyears:artifacts",
  { translate: "tutorial.hiddenyears:artifact" },
  [
    {
      title: { translate: "tutorial.hiddenyears:artifact.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:artifact.1" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:artifact.2" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:artifact.3" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:artifact.4" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:artifact.5" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:artifact.6" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:artifact.7" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:artifact.8" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:artifact.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:artifact.9" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:artifact.10" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:artifact.11" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:artifact.12" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:artifact.13" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:artifact.14" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:artifact.chapter3" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:artifact.15" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:artifact.16" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/crucifix_runes"
  }
);

const jobTutorial = new Tutorial(
  "hiddenyears:jobs",
  { translate: "tutorial.hiddenyears:job" },
  [
    {
      title: { translate: "tutorial.hiddenyears:job" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:job.1" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.2" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.3" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.4" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.5" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:job.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:job.6" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.7" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.8" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.9.1" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.9.2" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.9.3" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.9.4" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.10" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.11" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.12.1" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.2" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.3" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.4" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.5" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.6" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.7" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.8" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.9" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.10" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.11" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:job.12.12" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.13" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:job.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:job.14" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:job.15" }
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
  { translate: "tutorial.hiddenyears:armor_effects" },
  [
    {
      title: { translate: "tutorial.hiddenyears:armor_effects.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:armor_effects.1" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:armor_effects.2" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:armor_effects.3" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:armor_effects.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:armor_effects.4" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:armor_effects.5" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:armor_effects.6" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:armor_effects.chapter3" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:armor_effects.7" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:armor_effects.8" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:armor_effects.9" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/isis_crown"
  }
);

const bossTutorial = new Tutorial(
  "hiddenyears:boss",
  { translate: "tutorial.hiddenyears:boss" },
  [
    {
      title: { translate: "tutorial.hiddenyears:boss.chapter1" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:boss.1" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.2" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.3" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.4" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.5" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.6" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:boss.chapter2" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:boss.7" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.8" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.9" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.10" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.11" }
        ]
      }
    },
    {
      title: { translate: "tutorial.hiddenyears:boss.chapter3" },
      body: {
        rawtext: [
          { translate: "tutorial.hiddenyears:boss.12" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.13" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.14" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:boss.15" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:boss.16" },
          { text: "\n" },
          { translate: "tutorial.hiddenyears:boss.17" },
          { text: "\n\n" },
          { translate: "tutorial.hiddenyears:boss.18" }
        ]
      }
    }
  ],
  {
    type: "alwaysAvailable",
    iconPath: "textures/items/ruby_crown"
  }
);

const tutorials = [
  startTutorial,
  jobTutorial,
  artifactTutorial,
  materialTutorial,
  armorEffects,
  toolsAndWeaponsTutorial,
  magicTutorial,
  bossTutorial
];

export function getAllTutorials() {
  return tutorials;
}
