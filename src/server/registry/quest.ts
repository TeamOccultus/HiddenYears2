import {
  ChapterQuestBookBuilder,
  QuestBookBuilder,
  QuestManager,
} from "@grindstone/quest-kit";
import * as quests from "../../data/quest";
import { HyLetterBody } from "../../data/lang";

const QUEST_BOOK = new ChapterQuestBookBuilder(
  "hy:quest_book",
  { translate: "hy.quest.title1" },
  { translate: "hy.quest.body1" },
  [
    {
      title: { translate: "hy.quest.chapter1.title" },
      body: { translate: "hy.quest.chapter1.body" },
      quests: [
        quests.BEGINNING,
        quests.CRAFTING_TABLE,
        quests.OLDB,
        quests.BONE_PIECE,
        quests.COPPER_INGOT,
        quests.TIN_INGOT,
        quests.AMETHYST_INGOT,
        quests.OVER_METAL_INGOT,
        quests.IRON_INGOT,
        quests.CORROSION_INGOT,
        quests.IRON_CROWBAR,
        quests.IRON_HAMMER,
        quests.IRON_AWL,
        quests.IRON_KNIFE,
        quests.IRON_DAGGER,
        quests.IRON_SWORD,
        quests.CROSSBOW,
        quests.SHIELD,
        quests.CORROSION_BOARDSWORD,
        quests.FLASH_METAL_INGOT,
        quests.FLASH_COPPER_INGOT,
        quests.DIAMOND,
        quests.STEEL_INGOT,
        quests.NETHERITE_SCRAP,
        quests.FUEL_METAL,
        quests.COPPER_HRON,
        quests.BLEAK_TOTEM,
        quests.SUFFERING_SWORD,
        quests.SMARAGDUS,
        quests.TOTEM,
      ],
      iconPath: "textures/items/book_writable",
    },
    {
      title: { translate: "hy.quest.chapter2.title" },
      body: {
        rawtext: [
          { translate: "hy.quest.chapter2.body" },
          { text: "\n" },
          { translate: "hy.quest.chapter2.body2" },
        ],
      },
      quests: [
        quests.RUBY,
        quests.RUBY_CHESTPLATE,
        quests.GOLDEN_BADGE,
        quests.RUBY_BAG,
        quests.RUBY_RUNES,
      ],
      iconPath: "textures/items/ruby",
    },
    {
      title: { translate: "hy.quest.interlude.title" },
      body: { translate: "hy.quest.interlude.body" },
      quests: [
        quests.CHISELED_BOOKSHELF,
        quests.BRUSH,
        quests.METAL_STAR,
        quests.COPPER_ESSENCE,
      ],
      iconPath: "textures/items/brush",
    },
    {
      title: { translate: "hy.quest.chapter3.title" },
      body: { translate: "hy.quest.chapter3.body" },
      quests: [
        quests.GOLD_INGOT,
        quests.OBSIDIAN,
        quests.GHAST_TEAR,
        quests.LODESTONE,
        quests.RESPAWN_ANCHOR,
        quests.BLAZE_ROD,
        quests.NETHER_STAR,
        quests.ENDER_PEARL,
        quests.DRAGON_BREATH,
        quests.ELYTRA,
        quests.DRAGON_EGG,
      ],
      iconPath: "textures/items/ender_eye",
    },
    {
      title: { translate: "hy.quest.chapter4.title" },
      body: { translate: "hy.quest.chapter4.body" },
      quests: [
        quests.CACTUS,
        quests.COOLING_POTION,
        quests.SAND_MEAT,
        quests.SAND_BONE,
        quests.RABBIT_PAW,
        quests.PAW_DUST,
        quests.SHATTERED_SAND_CUDGEL,
        quests.DRIFT_SAND_KEY,
        quests.RAIN_GOD_BLESSING,
        quests.DESERT_HEART,
        quests.DRIFT_SAND_STATUE,
        quests.SHATTERED_SAND_STAFF,
      ],
      iconPath: "textures/items/past_statue",
    },
    {
      title: { translate: "hy.quest.chapter5.title" },
      body: { translate: "hy.quest.chapter5.body" },
      quests: [quests.GOLD_SAND, quests.SAND_SLIVERFISH, quests.LETTER_14],
      iconPath: "textures/items/gold_sand",
    },
  ]
);
const LETTER_0 = new QuestBookBuilder(
  `hy:letter_0`,
  { translate: "article.0.title" },
  HyLetterBody[0],
  [
    quests.STORY_BOOK,
    quests.LETTER_0,
    quests.LETTER_4,
    quests.LETTER_5,
    quests.LETTER_6,
    quests.LETTER_7,
    quests.LETTER_11,
    quests.LETTER_12,
    quests.LETTER_2,
    quests.LETTER_3,
    quests.LETTER_9,
    quests.LETTER_10,
    quests.LETTER_8,
    quests.LETTER_1,
    quests.LETTER_13,
    quests.LETTER_14,
    quests.LETTER_15,
  ]
);

export function registryQuest() {
  QuestManager.setNameSpace("hy-q");
  QUEST_BOOK.build();
  LETTER_0.build();
}
