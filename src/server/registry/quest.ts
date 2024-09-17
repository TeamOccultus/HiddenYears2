import { ChapterQuestBook, QuestBook, Register } from "lazuli-mc";
import * as quests from "../../data/quest";
import { HyLetterTitle, HyLetterBody } from "../../data/lang";

const QUEST_BOOK = new ChapterQuestBook(
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
        quests.FLASH_METAL_INGOT,
        quests.FLASH_COPPER_INGOT,
        quests.DIAMOND,
        quests.STEEL_INGOT,
        quests.NETHERITE_SCRAP,
        quests.FUEL_METAL,
        quests.SUFFERING_SWORD,
        quests.SMARAGDUS,
        quests.TOTEM,
      ],
      iconPath: "textures/items/book_writable",
    },
    {
      title: { translate: "hy.quest.interlude_food.title" },
      body: { translate: "hy.quest.interlude.body" },
      quests: [
        quests.WHEAT,
        quests.MELON_SLICE,
        quests.COPPER_APPLE,
        quests.ROTTEN_FLESH,
        quests.HONEY_BOTTLE,
        quests.CHOCOLATE,
        quests.MARSHALLOW,
        quests.MILK_BUCKET,
        quests.CAKE,
        quests.HAY_BLOCK,
      ],
      iconPath: "textures/items/wheat",
    },
    {
      title: { translate: "hy.quest.chapter2.title" },
      body: { translate: "hy.quest.chapter2.body" },
      quests: [
        quests.RUBY,
        quests.RUBY_CHESTPLATE,
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
  ]
);
const LETTER_0 = new QuestBook(
  `hy:letter_0`,
  HyLetterTitle[0],
  HyLetterBody[0],
  {
    quests: [
      quests.STORY_BOOK,
      quests.LETTER_0,
      quests.LETTER_11,
      quests.LETTER_1,
    ],
  }
);

export function registryQuest() {
  Register.questRegister(QUEST_BOOK);
  Register.questRegister(LETTER_0);
}