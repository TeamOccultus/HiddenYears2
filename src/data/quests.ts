import { HyQuestCondition, HyQuestAward } from "./data.js";
import { quest } from "project-lantern";

export const COPPER_APPLE = new quest.Quest(
  "copper_apple",
  "§d[超级美食家]§r 重金属超标",
  "将铜锭与苹果捏合到一起，就会有神奇的事情发生……不过听说吃多了会中毒哦～",
  HyQuestCondition.copperApple,
  HyQuestAward.goldenApple3,
);
export const METAL_STAR = new quest.Quest(
  "metal_star",
  "§d[策划大失败]§r 半吊子引雷士",
  "这个东西理论上可以引雷，啊嘞，怎么引不了了……",
  HyQuestCondition.metalStar,
  HyQuestAward.diamondCoin9,
);
export const COPPER_ESSENCE = new quest.Quest(
  "copper_essence",
  "§d[策划大失败]§r 没有用的东西",
  "恭喜你，获得了此模组最没有用的东西！！！（是的，我在写这句话的时候也都忘了这个东西叫啥了）",
  HyQuestCondition.copperEssence,
  HyQuestAward.dirt12,
);

export const BEGGING = new quest.Quest(
  "stick",
  "§d[序幕]§r 一切的开始",
  "这是树上新生的枝桠，亦是你旅途的起点……",
  HyQuestCondition.stick,
  HyQuestAward.goldCoin5,
);

export const OVER_METAL_INGOT = new quest.Quest(
  "over_metal_ingot",
  "§d[序幕]§r 金属替代品",
  "「岩金」，由各种号称「无用之材」的石头凝结而成，不过所制成之物使用效果却意外的好？",
  HyQuestCondition.overMetalIngot,
  HyQuestAward.goldCoin6,
);

export const IRON_INGOT = new quest.Quest(
  "iron_ingot",
  "§d[序幕]§r 陨星之结晶",
  "这些金属来自于星海之间，现如今成为了三界之间最常见、最可靠的物质",
  HyQuestCondition.ironIngot,
  HyQuestAward.goldCoin10,
);

export const COPPER_INGOT = new quest.Quest(
  "copper_ingot",
  "§d[序幕]§r 红橙的光泽",
  "大量存在于世界的金属，可以合成工具盔甲，不过容易因时间而「锈蚀」",
  HyQuestCondition.copperIngot,
  HyQuestAward.questBook1,
);

export const IRON_HAMMER = new quest.Quest(
  "iron_hammer",
  "§d[序幕]§r 最「高效」的工具",
  "挖掘石头最高效的工具，需要特殊的「木柄」才可以合成，但是挖掘矿石的话可能会有一点小困难……",
  HyQuestCondition.ironHammer,
  HyQuestAward.goldCoin12,
);

export const IRON_CROWBAR = new quest.Quest(
  "iron_crowbar",
  "§d[序幕]§r 最「卑劣」的工具",
  "盗贼常用的工具，经常被用来撬走金属方块，不过一些特殊矿石需要撬棍才可以撬下来",
  HyQuestCondition.ironCrowbar,
  HyQuestAward.goldCoin16,
);

export const IRON_KNIFE = new quest.Quest(
  "iron_knife",
  "§d[序幕]§r 出其不意",
  "用这把小刀给你的朋友一些惊喜吧§o（没有朋友的除外awa）§r",
  HyQuestCondition.ironKnife,
  HyQuestAward.goldCoin18,
);

export const IRON_DAGGER = new quest.Quest(
  "iron_dagger",
  "§d[序幕]§r 致命一击",
  "燧石使刀更为锋利的同时也更加脆弱，人也是这样的吗？",
  HyQuestCondition.ironDagger,
  HyQuestAward.goldCoin20,
);

export const IRON_SWORD = new quest.Quest(
  "iron_sword",
  "§d[序幕]§r 赶尽杀绝",
  "最稳定、最可靠的武器，传说中古代的剑士甚至可以用其抵挡箭雨……",
  HyQuestCondition.ironSword,
  HyQuestAward.goldenApple3,
);

export const FUEL_METAL = new quest.Quest(
  "fuel_metal",
  "§d[序幕]§r 燃料与食物",
  "这是一种神奇的物质，既可以加工为棒状的燃料、也可以加工直接用来食用",
  HyQuestCondition.fuelMetal,
  HyQuestAward.enchantedGoldenApple3,
);

export const NIGHTMARE_FUEL_METAL = new quest.Quest(
  "nightmare_fuel_metal",
  "§d[序幕]§r 「不洁」的结晶",
  "一种奇怪的结晶，黑乎乎的外表下，蕴含着巨大的作用§o(试着吃个燃金罢)§r",
  HyQuestCondition.nightmareFuelMetal,
  HyQuestAward.labTable,
);

export const SUFFERING_SWORD = new quest.Quest(
  "suffering_sword",
  "§d[序幕]§r 善良的与邪恶的",
  "这些生物原本是「精灵」一族的侍卫，却最终被灾厄之族驯化成了战争机器——正因如此，他们手中的剑不再锐利，而是充盈着被屠杀者的痛苦……",
  HyQuestCondition.sufferingSword,
  HyQuestAward.diamond5,
);

export const STEEL_INGOT = new quest.Quest(
  "steel_ingot",
  "§d[序幕]§r 百炼成钢",
  "一种坚硬的金属，需要熔炼两次铁锭才可以获得……",
  HyQuestCondition.steelIngot,
  HyQuestAward.goldCoin20,
);

export const TOTEM = new quest.Quest(
  "totem",
  "§d[序幕 最终任务]§r 终将于白纸间盛开的菡萏之花",
  "「文字编织出一种美妙的界面，非常灵活，并且胜过凝视这屏幕后的可怕现实。」\n\n不死图腾，承载了旧人类终其历史所追寻的「不朽」祝颂，可当地球亦或是后继的三界的生灵得到它时才知道这并非祝福，而是「诅咒」……当你望向星空之时，是否感受到了在那之后存在着一种更强大的存在？人类千百年间的痛苦来源于此、也导致了大部分智慧的生灵如同含苞待放的菡萏般脆弱地陷入沉睡\n\n但请一定记住，那菡萏之花终将于这白纸般的三界盛放\n\n并以熊熊的烈火将其燃作灰烬",
  HyQuestCondition.totem,
  HyQuestAward.storyBook,
);

export const OBSIDIAN = new quest.Quest(
  "obsidian",
  "§d[最初的家园]§r 水火交融",
  "将水与岩浆混合在一起或许有别样的物质产生？",
  HyQuestCondition.obsidian,
  HyQuestAward.diamondCoin3,
);

export const GOLD_INGOT = new quest.Quest(
  "gold_ingot",
  "§d[最初的家园]§r 金光闪闪",
  "在大洞穴成为下界之前最为寻常的东西，现在已经变成了一种珍贵的金属",
  HyQuestCondition.goldIngot,
  HyQuestAward.goldCoin12,
);

export const GHAST_TEAR = new quest.Quest(
  "ghast_tear",
  "§d[最初的家园]§r 晶莹的泪滴",
  "作为无风纪「旧人类」中最倒霉的一支后裔，这种物质凝聚了他们祖先的愤怒与不甘……",
  HyQuestCondition.ghastTear,
  HyQuestAward.goldenApple5,
);

export const NETHERITE_SCRAP = new quest.Quest(
  "netherite_scrap",
  "§d[最初的家园]§r 赤炎埋没的残骸",
  "强大的压力使得其变得极为坚韧，成为了最强大的自然材料之一",
  HyQuestCondition.netheriteScrap,
  HyQuestAward.netheriteTemplate,
);

export const LODESTONE = new quest.Quest(
  "lodestone",
  "§d[最初的家园]§r 海上升明月，天涯共此石",
  "一种神奇的东西",
  HyQuestCondition.lodestone,
  HyQuestAward.goldCoin30,
);

export const RESPAWN_ANCHOR = new quest.Quest(
  "respawn_anchor",
  "§d[最初的家园]§r 方漓猫没有九条命，但是方漓锚有",
  "工作原理有点令人难以理解……大概是无风纪的遗产？亦或者是来自于传说中远方的那颗星星？",
  HyQuestCondition.respawnAnchor,
  HyQuestAward.copperBadge,
);

export const BLAZE_ROD = new quest.Quest(
  "blaze_rod",
  "§d[最初的家园]§r 烈火中重生",
  "这种炽热的生物本属人类，在「太古之战」后因没有即时搬迁到主世界而逐渐异化，而如今其成了你冒险路上必须经历的一个环节",
  HyQuestCondition.blazeRod,
  HyQuestAward.goldenBadge,
);

export const NETHER_STAR = new quest.Quest(
  "nether_star",
  "§d[最初的家园 最终任务]§r 人偶术的巅峰",
  "「让我们回退一点。」\n\n你可听说过人偶术？这是一种精妙的技术，那些人偶师们费尽心思将这些没有生命的拙劣作品灌注智慧，让这些小玩意成为了战争机器\n凋零何尝不是人偶术的造物呢？从威力上讲，这恐怕就是人偶术的巅峰了吧……",
  HyQuestCondition.netherStar,
  HyQuestAward.diamondBlock6,
);

export const ENDER_PEARL = new quest.Quest(
  "ender_pearl",
  "§d[空中群岛]§r 隔墙有眼",
  "苍穹之上、星海之下有着什么呢……",
  HyQuestCondition.enderPearl,
  HyQuestAward.enderEye4,
);

export const DRAGON_BREATH = new quest.Quest(
  "dragon_breath",
  "§d[空中群岛]§r 你需要来点薄荷糖",
  "浓痰……能干啥呢……",
  HyQuestCondition.dragonBreath,
  HyQuestAward.diamondBadge,
);

export const DRAGON_EGG = new quest.Quest(
  "dragon_egg",
  "§d[空中群岛 最终任务]§r 起点亦或是终点",
  "「在你深陷游戏之梦时，便选择以这种方式想象出形形色色的事物。」\n\n你击败了末影龙，这是普通冒险家冒险生涯的终点，可也是你冒险的真正起点；经过战斗，你已经足够强大，可以探索隐藏于这个世界的秘密了。\n\n向着真相进发吧！",
  HyQuestCondition.dragonEgg,
  HyQuestAward.netheriteBlock6,
);

export const RUBY = new quest.Quest(
  "ruby",
  "§d[淬血的刚玉]§r 沾满鲜血的宝石",
  "这宝石本纯洁无瑕，直到鲜血洒在了其上……",
  HyQuestCondition.ruby,
  HyQuestAward.diamond2,
);

export const RUBY_CHESTPLATE = new quest.Quest(
  "ruby_chestplate",
  "§d[淬血的刚玉]§r 满身鲜血",
  "用这来之不易的宝石打造一套甲胄吧",
  HyQuestCondition.rubyChestplate,
  HyQuestAward.diamond4,
);

export const RUBY_BAG = new quest.Quest(
  "ruby_bag",
  "§d[淬血的刚玉]§r 经验之袋",
  "你可以在红宝石地牢内击败红宝石怪物来获得这种袋子，当红宝石块与其相结合时，将会迸发出巨大的力量",
  HyQuestCondition.rubyBag,
  HyQuestAward.diamond6,
);

export const RUBY_RUNES = new quest.Quest(
  "ruby_runes",
  "§d[淬血的刚玉 最终任务]§r 力量与鲜血之歌",
  "「让我们回溯到遥远的过去。」\n\n在漫长的历史中，浩如烟海的强大存在被「迷失军团」封印于袋中，红宝石之王是其最古老的存在，阅读他们身上的信纸，一步步探求真相吧。",
  HyQuestCondition.rubyRunes,
  HyQuestAward.netheriteIngot3,
);

export const STORY_BOOK = new quest.Quest(
  "story_book",
  "§d[书海无涯]§r 故事的起点",
  "获得隐藏的故事",
  HyQuestCondition.storyBook,
  HyQuestAward.diamond1,
);

export const LETTER_0 = new quest.Quest(
  "letter_0",
  "§d[书海无涯]§r 千里之行始于足下",
  "获得散落的信纸·千里之行与脚下之路",
  HyQuestCondition.letter0,
  HyQuestAward.diamond2,
);

export const LETTER_11 = new quest.Quest(
  "letter_11",
  "§d[书海无涯]§r 大历史学家",
  "搜刮黑森林中某处囚笼，获得精灵史摘要",
  HyQuestCondition.letter11,
  HyQuestAward.diamond2,
);
