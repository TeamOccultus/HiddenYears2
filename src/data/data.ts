import * as mc from "@minecraft/server";

/**
 * 隐藏之年阅读物的标题
 * @enum
 */
export const HyLetterTitle = {
  0: "千里之行与脚下之路",
  1: "淬血的刚玉",
  2: "地底死城",
  3: "时空匿藏",
  4: "纪元·一",
  5: "纪元·二",
  6: "祀礼会",
  7: "旧人类",
  8: "掌舵者",
  9: "假冒伪劣·一",
  10: "假冒伪劣·二",
  11: "精灵史摘要",
};

/**
 * 隐藏之年阅读物的内容
 * @enum
 * @author 方漓猫
 */
export const HyLetterBody = {
  0: "过往繁荣的时代正在逝去，\n昔日欢笑的我们也将化作尘埃。\n可惜时不我待，我无法为你详尽的解释究竟发生了什么——§l你只需知道，你是「异变」中唯一的幸存者。§r\n\n在这个世界中存在着三个维度——主世界、下界与末地：\n\n主世界：位于世界的中央，你的故乡，资源丰富、景色秀丽，可以发现各种矿藏、遗迹。但月光撒下时残存的「不死之族」会伺机行动意图伤害你们；\n下界：位于主世界之下，需要传送门到达，是人类和不死之族最初的居所。资源相对匮乏，在「太古之战」之后更是一片荒芜，但仍有残存的人类及不死之族逐渐适应炎热的环境并发生了变异，建立起了与现在主世界迥然不同的文明；\n末地：漂浮于主世界高空中的群岛，需要传送门到达，资源及其匮乏，在中央的大岛上生活着「末影龙」以及她的同类「末影人」，岛外有着不知何人修建的「末地城」\n\n而我，将和你的祖辈一起，在某个更高的位面注视着你的冒险。\n在下一场「灾难」来临前，探索出这个世界的真相吧。",
  1: "人类迁往主世界后不到百年，分化出了「灾厄之族」。而其中一名无名术士痴迷于传说中名为「经验」的黄绿色小球……\n\n春去秋来，他有一天在矿洞中发现了一种洁白的矿石，他不自觉的把手放在石上，倏忽间皮肉绽开，鲜血撒在了石头那光洁的表面上\n——「经验」的力量也顿时涌入他的身体，他原本破损的铁剑瞬间变成了充盈着「经验」与力量的「红宝石阔剑」，他可以自如的运用「经验」的力量召唤守卫、控制怪物，可与此同时他自己的大脑也在逐渐被经验的力量所侵蚀……被侵蚀的他就此离开了灾厄一族，运用经验的力量积累资源、开掘地牢。\n后来他彻底坠入深渊，在理智尚存的最后一刻自我封印在了「灾厄谜袋」之中，等待有能力的冒险者的到来……而据说「月蚀纪」后直到现在冒险家们探索世界、挖掘矿石获得的经验就是他力量的体现……\n此时，距离那场毁灭世界的「太古之战」仅仅四百年。",
  2: "顺着矿道，我来到了这座死去的城市——去的时候一路畅通，回来的时候海水已经倒灌进去，火把和铁轨都被冲毁了。\n我讨厌地下城市，那里阴暗、逼仄、曲折而且诡异，灯照不亮那些仿佛有生命跳着蓝绿色光点的漆黑材料。尽管没有看到黑暗中繁衍滋生的不死之族，我还是举着盾牌，走几步插一支火把。\n「孩子们都还在睡觉，别给吵醒了。」\n是个老女人的声音，说话很标准，没有口音。我转过身，一个矮小削瘦、没穿盔甲的人站在我背后，她伸出一只空空的手，我便把绑着盾牌的手臂伸过去和她握手——皮包骨头的手过分地硌硬，手上的皮和带釉陶瓦一样光滑，没有战斗或生产留下来的老茧，看起来她的力气比我还大。\n我战战兢兢跟着走到一处幽蓝的营火旁坐下，我看到她方解石色的皮肤上勒出鲜明的骨头轮廓，不甚明亮的营火把上细下粗、强干弱枝的阴影投在被照成暗蓝色的凝灰岩壁上面。她突然开口：「地上的情况怎么样了？」\n「非常不好，农田都被上升的淹没了，我种的胡萝卜马铃薯都被抢走了。\n一到晚上，只要是没点灯的地方都会爬出不死族，我们只能躺在床上翻来覆去」\n「是这样啊，连树皮都吃光了吧？其实也好，我们那个时候可是连白天都会有不死族的啊——我想多少年之后，你们住的地方会变成沙砾掩埋的海底遗迹，包围你们的石山会盖上泥土，长出新的橡树、白桦树、云杉树、丛林树、樱花树......」\n「樱花？我没有见过什么樱花。」\n『那是一种粉红色的小花，我最重要的人之前经常送我这种花——这悲伤的陈年旧事不提也罢，这死城里遍布「幽匿催发体」，它们会让「幽匿」不断蔓延，而「监守者」会看护好我们的坟墓……』\n「我听不懂。」\n「你不用听懂，就像现在的我也不愿意去管那什么人类和不死族的战争，更不愿管某位背刺我的先生……」\n我眼前似乎冒出了一团黑雾——",
  3: "一种罕见的现象，在一段时间内所有历史全部凭空消失、所有生灵失去对这段世界的记忆。这种奇观被不属于两族的存在称之为「隐藏之年」\n而据称，在这段消失的历史中，发生了一些「三星之中」的掌舵者不想让天空之下的众生所知晓的事……",
  4: "§l无风纪§r\n1-2035\n\n那是一个没有风的世界……\n很久很久以前，「初之陆」被不同的部族所割据，两个千年后，来自于群星之中的「掌舵者」带来了风，无风的年代即「无风纪」便结束了\n可吹开了文明之窗的风，不久便影响到了「秩序之门」，世界因此分为三份，生灵也几乎消逝殆尽……\n「掌舵者」叹了口气，为这三个寂寞的世界默默送上祝福\n\n§l共生纪§r\n4000-8400\n这世界上终于有了一点生命。不久，生命的光辉就布满整个大洞穴之中\n当「掌舵者」的风吹来时，新的人类诞生了；而当月光撒下时，那永远不死的族群自地底钻出……\n在这之后，人类的领袖、「天赐王座」的主人主宰了这里千年。直到他的次子渐渐长大，雨细无声，「王座之主」暴毙而死，那名次子登上王座，却落得个「王座窃贼」的骂名……\n直到月光真正撒下的那天，「窃贼」被他所鄙视的不死之族所刺杀，「太古之战」就此拉开帷幕",
  5: "", // TODO
  6: "建立于新聚纪，据说是为了「超度」太古之战中死去的生灵而建立，掌握了「风之回响」的力量，后在地下建立了规模宏大的「祀城」\n灾厄诸战中，祀礼会的成员逐渐被「灾厄」的力量所侵蚀，「风之回响」的力量遭到侵蚀后变得更加强大与邪恶……被侵蚀的成员用这种力量帮助「迷失军团」与两族作战，战死后他们就葬于祀城之中，力量也随之消散\n而这种邪恶的力量，因战死的祀礼员越来越多逐渐聚集在祀城之中，后人称之为「幽匿」的力量",
  7: "据说在两族诞生之前就存在数千年的族群，创建的文明在「无风纪」中达到鼎盛，在第一段隐藏之年中神秘的消失，现在的人类与其极其相似，但是寿命只有四十岁",
  8: "来自于「三星之中」的存在，是「天赐王座」的主人，两族对其知之甚少。一方面是因为自身的神秘；另一方面是因为那位据称「永恒的存在」的消失……",
  9: "人声一:我们开始？\n人声二: 开始了，克洛西耶先生，接下来我们说什么都会被记录下来\n克洛西耶:你们对那些僵尸做了什么?抓它们费了我老大的劲，你知道杀死一只僵尸很容易一一小的或许有点难度，但抓一只就难了，你们研究出什么有意思的成果没有?\n人声二:您知道怎么防止不死之族爬回地底吗?\n克洛西耶:什么?\n人声二:用「名字」，有了「名字」，就不会被「遗忘」，没有「遗忘」就不会「消失」。您，克洛西耶，资深怪物猎人，我们二位只是没有名字的研究员罢了，我们相信您和别的资深怪物猎人不一样。\n克洛西耶(干笑):这种话还是少讲，我倒是被所谓有「名字」的仿制工具坑过。\n人声二:克洛西耶先生，以下是我们研究僵尸的资料中的一段：\n\n僵尸在死亡时常会掉落仿制铁锭。然而，僵尸并不会携带仿制铁工具，它们一般手持铁剑、铁镐、铁锨\n这是另一段：\n\n僵尸会穿戴装备，通常是皮甲、链甲、金甲或者铁甲，但决不会穿戴铜甲，除非你把其送给它们。\n\n相当奇怪的一点是：铜是一种相当易得且大量的金属，还是仿制铁锭的原料。请问克洛西耶先生是否目睹过例外情况?\n克洛西耶:没有，你说的这两点，我没有见过例外，虽然我的祖先在太古之战前和不死族生活在一起，但也资料流传下来。\n克洛西耶:不过，穿着钻石甲的僵尸我倒是见过两三次(笑)\n克洛西耶: 你们找到我肯定因为我有经验，那我直说吧，我觉得僵尸是一种很聪明的生物，我的祖先在「共生纪」时和他们玩游戏我丢给它们上好的胸甲和剑，之后再和他们战斗。当时我的祖先就发现了僵尸会换下相对劣质的装备捡起更好的，我觉得僵不用仿制品是不想受到来自次品的伤害吧……\n克洛西耶:至于铜的情况，我不清楚， 但它们至少不厌恶铜……或许是因为「掌舵者」忘给他们加这个设定了？\n人声一:［模糊不清］\n\n「笔记到此结束，你推测出还有下一半遗失在哪里」",
  10: "人声一:其实我们用那些僵尸做了实验。我们往这位可爱的小伙子手里塞了把漂亮的仿铁剑，他把20个喝了神龟药水的傻子村民变成白烟的时间比他用货真价实铁剑的对照组用的还要短。\n人声一:由此可见，僵尸不受仿制伤害\n(短暂的沉默)\n克洛西耶:我不懂。\n\n人声二:你记得传说吗?\n克洛西耶:传说?\n人声一:「洞穴内的资源即将耗尽」是太古之战战争的原因。人类来到主世界后发现了「物不美价却廉的仿制材料」，可事实上，不死之族比我们更懂仿制材料，我们的实验对象用那把剑用得很熟练\n人声二:可当我拿出一把同样的剑和他比划时，我的手却总是莫名奇妙地被割到。您不是认为这是诅咒吗？\n克洛西耶:你有点语无伦次，我觉得我们可以先把传说放到一边，你刚才说，比如我用仿制材料的斧头砍树虎口会震出血，镐子挖石头的时候石子会溅到身上\n克洛西耶:你说这是「诅咒」?\n(又是短暂的沉默)\n人声一:好了，克洛西耶先生，感谢您的配合\n克洛西耶:但愿你们能早日找出所有流通在市场上的仿制工具\n人声二:但愿吧\n［审讯结束］\n\n［以下是对克洛西耶供词的讨论］\n人声一:现在来看，不死族可以正常地使用仿制工具而不受伤害\n人声二:会不会是因为他们受了「不死诅咒」的原因呢\n人声一:有点道理……我这有个小机器，里面提取了不死之族的诅咒，或许可以把仿制材料放进去净化一下？\n\n【完】",
  11: "【自由的来临】\n在数个千年以前，天边的一颗星星无故突然闪烁起来……接着自由之神便降临于这个世界之上。\n此后将近两个千年，传说世界崩裂成了三重天地，而实际上在此时再无「历史」可言，我们谁也不知道发生了什么。\n此之谓，「断裂」。\n\n【于断裂之后】\n德芬特尔，或者说是「不死之神」，唤醒了断裂前的信徒，他们曾一同追随过自由之神，而自由之神将赐予他们所有人以不死的祝福。\n而此时，自由撒下的籽粒在极底的位面生根发芽，诞生了现如今的人类，同人类一起诞生的，便是我们「精灵」一族。\n\n【毁灭与新生】\n五十年的战争没有留下任何记载，所有历史于此中断，只知道最后人类的故土永远变成了一片炽热之地，熔化一切妄图探及这段往事的生灵……\n我们也就此离开了故乡——极底位面，今日被称为「下界」的所在，如今再回到那片故土，只有无边无际的熔岩海与象征着死亡的血红色岩石。\n\n【灾厄的年代】\n尽管世界几近毁灭，但人类凭借自己的双手，成功在新家安居乐业，可当「真相」被人所知后，那长长的繁荣就要告一段落了。\n灾厄之族击败了自己的同伴——后世称为「红宝石之王」的存在，而后开始扩张。\n终也，他们将魔爪伸向了我们。\n\n【幕起幕落】\n我们所有都为灾厄所征服，成为了其伟大的计划的一部分、并不光彩的一部分，精灵的时代，已经谢幕了\n——但桎梏之间，仍有幸存的「人」\n不远处传来了拉弩的声音，就此停笔吧。",
};

export const enum HyStoryTitle {
  section0 = "一切的开始？",
  section1 = "诞生于毁灭的新生",
  section2 = "探索这世间",
}

/**
 * 隐藏的故事的内容
 * @enum
 * @author 方漓猫
 */
export const enum HyStoryBody {
  section0 = "【迷梦中醒来】\n我自混沌中醒来，身边一无所有，\n砾石横生的陆地承接着我。\n抬眼望去，岩层阻挡了蓝天；\n誓要离开这里，找回遗失的过去。\n莞尔风起，大地旧貌换新装，\n草木生、禽兽衍，\n思想渐被侵蚀，\n「归顺而来的生灵啊\n「我将祝你们永远不死\n「而背叛者将永远在地狱中哭泣」\n\n【生命的欢歌】\n风起月落，智慧的籽粒散落在世间，\n他们在空中起舞、\n在河流中沐浴、\n日月交替，寒暑易节，\n在草丛中栖息。\n它们汇聚在一起成了精妙的「人类」\n而我等则被成称为「不死之族」\n两个族群，亲如一家。\n\n【？？？】\n赐予吾等自由之人，\n对吾等之命运自有安排，\n这就是所谓的「自由」吗？",
  section1 = "【终将来临的一日】\n一个月夜，\n人类的领袖倒在血泊之中，\n战争一触即发。\n为了取胜，人们第一次升起烈火；\n第一次尝试耕耘，不再茹毛饮血。\n\n【五十个没有记忆的春夏秋冬】\n五十个春秋，五十年鏖战，终于：\n一道「闪电」，正中不死的巢穴；\n一瞬亮光，惊醒了睡梦中的人类。\n满目疮痍，世间将倾。\n即将毁灭之时，\n小部分生灵远走高飞，\n来到了一个洞穴之上的世界……\n是为「太古之战」的结束\n转瞬间又是百余年，\n那五十个春夏秋冬，\n记录尽数消失，\n随着最后一名亲历者的离去，\n第一个「隐藏之年」诞生了。",
  section2 = "【朝日初现】\n阳光撒下来，\n穿透积攒千年的乌云。 清晨的露珠，\n浸润生来污浊的花朵。\n朝日，终将拨开雾霭。\n\n【新的世界】\n「主世界」，新家的名字。\n平原之上，山脉河流点缀于此，飞鸟禽兽穿行林间。\n人们撬走刚刚形成的「浅层矿石」，挖开埋藏不知多久的「地心矿石」；\n建造起地上归人居住的「村庄」、地下供鬼栖息的「祀城」；\n世上欣欣向荣，充盈着希望而又脆弱的光辉……\n\n【真相与纷争】\n夜深，灾难再次来袭。\n不死之族的一支，称得知了「世界的真相」。\n背叛赐予我们自由的那位，\n甚至自相残杀。\n\n【不死之徒的死】\n时光如白驹过隙，正所谓「雨后人去楼也空」\n我恐怕再也无法记录下这世界的一切。\n伫立于皎洁的月光下，我曾幻想宇宙可以告诉我所有未解的秘密。\n——但可惜这只是幻想罢了……\n望你也能踏上冒险的征程，\n探索这未知的世间。\n\n【完？】\n自由之神恩赐的「自由」，\n真的是自由吗？",
}

/**
 * 隐藏之年 物品锈蚀 的对应表
 */
export const HyCorrosionMap = {
  copper_axe: new mc.ItemStack("hy:exposed_copper_axe"),
  exposed_copper_axe: new mc.ItemStack("hy:weathered_copper_axe"),
  weathered_copper_axe: new mc.ItemStack("hy:oxidized_copper_axe"),
  copper_hammer: new mc.ItemStack("hy:exposed_copper_hammer"),
  exposed_copper_hammer: new mc.ItemStack("hy:weathered_copper_hammer"),
  weathered_copper_hammer: new mc.ItemStack("hy:oxidized_copper_hammer"),
  copper_hoe: new mc.ItemStack("hy:exposed_copper_hoe"),
  exposed_copper_hoe: new mc.ItemStack("hy:weathered_copper_hoe"),
  weathered_copper_hoe: new mc.ItemStack("hy:oxidized_copper_hoe"),
  copper_knife: new mc.ItemStack("hy:exposed_copper_knife"),
  exposed_copper_knife: new mc.ItemStack("hy:weathered_copper_knife"),
  weathered_copper_knife: new mc.ItemStack("hy:oxidized_copper_knife"),
  copper_pickaxe: new mc.ItemStack("hy:exposed_copper_pickaxe"),
  exposed_copper_pickaxe: new mc.ItemStack("hy:weathered_copper_pickaxe"),
  weathered_copper_pickaxe: new mc.ItemStack("hy:oxidized_copper_pickaxe"),
  copper_shovel: new mc.ItemStack("hy:exposed_copper_shovel"),
  exposed_copper_shovel: new mc.ItemStack("hy:weathered_copper_shovel"),
  weathered_copper_shovel: new mc.ItemStack("hy:oxidized_copper_shovel"),
  copper_sword: new mc.ItemStack("hy:exposed_copper_sword"),
  exposed_copper_sword: new mc.ItemStack("hy:weathered_copper_sword"),
  weathered_copper_sword: new mc.ItemStack("hy:oxidized_copper_sword"),
};

export const HyQuestAward = {
  netheriteIngot3: {
    item: {
      name: "下界合金锭",
      item: new mc.ItemStack("netherite_ingot", 3),
    },
  },
  diamond1: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 1),
    },
  },
  diamond2: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 2),
    },
  },
  diamond5: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 5),
    },
  },
  diamond4: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 4),
    },
  },
  diamond6: {
    item: {
      name: "钻石",
      item: new mc.ItemStack("diamond", 6),
    },
  },
  letter1: {
    item: {
      name: "散落的信纸·淬血的刚玉",
      item: new mc.ItemStack("hy:letter_1"),
    },
  },
  diamondBlock6: {
    item: {
      name: "钻石块",
      item: new mc.ItemStack("diamond_block", 6),
    },
  },
  netheriteBlock6: {
    item: {
      name: "下界合金块",
      item: new mc.ItemStack("netherite_block", 6),
    },
  },
  enchantedGoldenApple3: {
    item: {
      name: "金光闪闪而又充满魔法的苹果",
      item: new mc.ItemStack("enchanted_golden_apple", 3),
    },
  },
  goldenApple3: {
    item: {
      name: "金光闪闪的苹果",
      item: new mc.ItemStack("golden_apple", 3),
    },
  },
  goldenApple5: {
    item: {
      name: "金光闪闪的苹果",
      item: new mc.ItemStack("golden_apple", 5),
    },
  },
  diamondCoin3: {
    item: {
      name: "三枚钻石币",
      item: new mc.ItemStack("hy:diamond_coin", 3),
    },
  },
  diamondCoin9: {
    item: {
      name: "九枚钻石币",
      item: new mc.ItemStack("hy:diamond_coin", 9),
    },
  },
  dirt12: {
    item: {
      name: "泥土",
      item: new mc.ItemStack("dirt", 12),
    },
  },
  goldCoin5: {
    item: {
      name: "五枚金币",
      item: new mc.ItemStack("hy:gold_coin", 5),
    },
  },
  goldCoin6: {
    item: {
      name: "六枚金币",
      item: new mc.ItemStack("hy:gold_coin", 6),
    },
  },
  goldCoin10: {
    item: {
      name: "一串金币",
      item: new mc.ItemStack("hy:gold_coin", 10),
    },
  },
  questBook1: {
    item: {
      name: "一本奇怪的书",
      item: new mc.ItemStack("hy:quest_book1"),
    },
  },
  goldCoin12: {
    item: {
      name: "十二枚金币",
      item: new mc.ItemStack("hy:gold_coin", 12),
    },
  },
  goldCoin16: {
    item: {
      name: "十六枚金币",
      item: new mc.ItemStack("hy:gold_coin", 16),
    },
  },
  goldCoin18: {
    item: {
      name: "十八枚金币",
      item: new mc.ItemStack("hy:gold_coin", 18),
    },
  },
  goldCoin20: {
    item: {
      name: "两串金币",
      item: new mc.ItemStack("hy:gold_coin", 20),
    },
  },
  goldCoin25: {
    item: {
      name: "二十五枚金币",
      item: new mc.ItemStack("hy:gold_coin", 25),
    },
  },
  goldCoin30: {
    item: {
      name: "三串金币",
      item: new mc.ItemStack("hy:gold_coin", 30),
    },
  },
  labTable: {
    item: {
      name: "炼金台",
      item: new mc.ItemStack("hy:lab_table"),
    },
  },
  storyBook: {
    item: {
      name: "一本旧书",
      item: new mc.ItemStack("hy:story_book"),
    },
  },
  netheriteTemplate: {
    item: {
      name: "下界合金升级模板",
      item: new mc.ItemStack("netherite_upgrade_smithing_template"),
    },
  },
  copperBadge: {
    item: {
      name: "铜徽章",
      item: new mc.ItemStack("hy:copper_badge"),
    },
  },
  goldenBadge: {
    item: {
      name: "金徽章",
      item: new mc.ItemStack("hy:golden_badge"),
    },
  },
  diamondBadge: {
    item: {
      name: "钻石徽章",
      item: new mc.ItemStack("hy:diamond_badge"),
    },
  },
  enderEye4: {
    item: {
      name: "四颗末影珍珠",
      item: new mc.ItemStack("ender_eye", 4),
    },
  },
};

export const HyQuestCondition = {
  copperApple: {
    item: {
      name: "铜苹果",
      item: new mc.ItemStack("hy:copper_apple"),
    },
  },
  metalStar: {
    item: {
      name: "金属之星",
      item: new mc.ItemStack("hy:metal_star"),
    },
  },
  copperEssence: {
    item: {
      name: "铜之精华",
      item: new mc.ItemStack("hy:copper_essence"),
    },
  },
  stick: {
    item: {
      name: "木棍",
      item: new mc.ItemStack("stick"),
    },
  },
  overMetalIngot: {
    item: {
      name: "岩金锭",
      item: new mc.ItemStack("hy:over_metal_ingot"),
    },
  },
  ironIngot: {
    item: {
      name: "铁锭",
      item: new mc.ItemStack("iron_ingot"),
    },
  },
  copperIngot: {
    item: {
      name: "铜锭",
      item: new mc.ItemStack("copper_ingot"),
    },
  },
  ironHammer: {
    item: {
      name: "铁锤",
      item: new mc.ItemStack("hy:iron_hammer"),
    },
  },
  ironCrowbar: {
    item: {
      name: "铁撬棍",
      item: new mc.ItemStack("hy:iron_crowbar"),
    },
  },
  ironKnife: {
    item: {
      name: "铁小刀",
      item: new mc.ItemStack("hy:iron_knife"),
    },
  },
  ironDagger: {
    item: {
      name: "铁匕首",
      item: new mc.ItemStack("hy:iron_dagger"),
    },
  },
  ironSword: {
    item: {
      name: "铁剑",
      item: new mc.ItemStack("iron_sword"),
    },
  },
  fuelMetal: {
    item: {
      name: "燃金",
      item: new mc.ItemStack("hy:fuel_metal"),
    },
  },
  nightmareFuelMetal: {
    item: {
      name: "魇化燃金",
      item: new mc.ItemStack("hy:nightmare_fuel_metal"),
    },
  },
  steelIngot: {
    item: {
      name: "钢锭",
      item: new mc.ItemStack("hy:steel_ingot"),
    },
  },
  totem: {
    item: {
      name: "不死图腾",
      item: new mc.ItemStack("totem_of_undying"),
    },
  },
  obsidian: {
    item: {
      name: "黑曜石",
      item: new mc.ItemStack("obsidian"),
    },
  },
  goldIngot: {
    item: {
      name: "金锭",
      item: new mc.ItemStack("gold_ingot"),
    },
  },
  ghastTear: {
    item: {
      name: "恶魂之泪",
      item: new mc.ItemStack("ghast_tear"),
    },
  },
  netheriteScrap: {
    item: {
      name: "下界合金碎片",
      item: new mc.ItemStack("netherite_scrap"),
    },
  },
  lodestone: {
    item: {
      name: "磁石",
      item: new mc.ItemStack("lodestone"),
    },
  },
  respawnAnchor: {
    item: {
      name: "重生猫",
      item: new mc.ItemStack("respawn_anchor"),
    },
  },
  blazeRod: {
    item: {
      name: "烈焰棒",
      item: new mc.ItemStack("blaze_rod"),
    },
  },
  netherStar: {
    item: {
      name: "下界之星",
      item: new mc.ItemStack("nether_star"),
    },
  },
  enderPearl: {
    item: {
      name: "末影珍珠",
      item: new mc.ItemStack("ender_pearl"),
    },
  },
  dragonBreath: {
    item: {
      name: "龙息",
      item: new mc.ItemStack("dragon_breath"),
    },
  },
  dragonEgg: {
    item: {
      name: "龙蛋",
      item: new mc.ItemStack("dragon_egg"),
    },
  },
  ruby: {
    item: {
      name: "红宝石",
      item: new mc.ItemStack("hy:ruby"),
    },
  },
  rubyChestplate: {
    item: {
      name: "红宝石胸甲",
      item: new mc.ItemStack("hy:ruby_chestplate"),
    },
  },
  rubyBag: {
    item: {
      name: "红宝石谜袋",
      item: new mc.ItemStack("hy:ruby_bag"),
    },
  },
  rubyRunes: {
    item: {
      name: "红宝石符文",
      item: new mc.ItemStack("hy:ruby_runes"),
    },
  },
  sufferingSword: {
    item: {
      name: "痛苦之剑",
      item: new mc.ItemStack("hy:suffering_sword"),
    },
  },
  storyBook: {
    item: {
      name: "隐藏的故事",
      item: new mc.ItemStack("hy:story_book"),
    },
  },
  letter0: {
    item: {
      name: "散落的信纸·千里之行与脚下之路",
      item: new mc.ItemStack("hy:letter_0"),
    },
  },
  letter11: {
    item: {
      name: "散落的信纸·精灵史摘要",
      item: new mc.ItemStack("hy:letter_11"),
    },
  },
};

/**
 * 隐藏之年 物品奖励 的数据
 */
export const HyRewardTypes = {
  questBook1st: new mc.ItemStack("hy:quest_book"),
  letter1st: new mc.ItemStack("hy:letter_0"),
  diamondBlock: new mc.ItemStack("minecraft:diamond_block", 2),
  goldBlock: new mc.ItemStack("minecraft:gold_block", 3),
  scrap: new mc.ItemStack("minecraft:netherite_scrap"),
  template: new mc.ItemStack("minecraft:netherite_upgrade_smithing_template"),
  apple: new mc.ItemStack("minecraft:enchanted_golden_apple", 5),
  nightmareFuel: new mc.ItemStack("hy:nightmare_fuel_metal", 2),
};

/**
 * 隐藏之年任务书 第一辑·初入三界 的数据
 */
export const HyQuest1st = {
  typeId: "hy:quest_book",
  title: { translate: "hy.quest.title1" },
  description: { translate: "hy.quest.body1" },
  questItems: [
    ["stick", { translate: "item.stick.name" }],
    ["hy:over_metal_ingot", { translate: "hy.item.over_metal_ingot" }],
    ["iron_ingot", { translate: "item.iron_ingot.name" }],
    ["copper_ingot", { translate: "item.copper_ingot.name" }],
    ["hy:iron_hammer", { translate: "hy.item.iron_hammer" }],
    ["hy:iron_crowbar", { translate: "hy.item.iron_crowbar" }],
    ["hy:iron_knife", { translate: "hy.item.iron_knife" }],
    ["hy:iron_dagger", { translate: "hy.item.iron_dagger" }],
    ["iron_sword", { translate: "item.iron_sword.name" }],
    ["hy:fuel_metal", { translate: "hy.item.fuel_metal" }],
    ["hy:nightmare_fuel_metal", { translate: "hy.item.nightmare_fuel_metal" }],
    ["hy:steel_ingot", { translate: "hy.item.steel_ingot" }],
    ["totem_of_undying", { translate: "item.totem.name" }],
    ["obsidian", { translate: "tile.obsidian.name" }],
    ["gold_ingot", { translate: "item.gold_ingot.name" }],
    ["ghast_tear", { translate: "item.ghast_tear.name" }],
    ["netherite_scrap", { translate: "item.netherite_scrap.name" }],
    ["lodestone", { translate: "tile.lodestone.name" }],
    ["respawn_anchor", { translate: "tile.respawn_anchor.name" }],
    ["blaze_rod", { translate: "item.blaze_rod.name" }],
    ["nether_star", { translate: "item.netherStar.name" }],
    ["ender_pearl", { translate: "item.ender_pearl.name" }],
    ["dragon_breath", { translate: "item.dragon_breath.name" }],
    ["dragon_egg", { translate: "tile.dragon_egg.name" }],
    ["hy:ruby", { translate: "hy.item.ruby" }],
    ["hy:ruby_chestplate", { translate: "hy.item.ruby_chestplate" }],
    ["hy:ruby_bag", { translate: "hy.item.ruby_bag" }],
    ["hy:ruby_runes", { translate: "hy.item.ruby_runes" }],
  ],
  rewardItems: [
    ["hy:gold_coin", 5, { translate: "hy.item.gold_coin" }],
    ["hy:gold_coin", 6, { translate: "hy.item.gold_coin" }],
    ["hy:gold_coin", 10, { translate: "hy.item.gold_coin" }],
    ["hy:quest_book2", 1, { translate: "hy.quest.title2" }],
    ["iron_pickaxe", 1, { translate: "item.iron_pickaxe.name" }],
    ["hy:gold_coin", 16, { translate: "hy.item.gold_coin" }],
    ["hy:gold_coin", 18, { translate: "hy.item.gold_coin" }],
    ["hy:gold_coin", 20, { translate: "hy.item.gold_coin" }],
    ["golden_apple", 3, { translate: "item.golden_apple.name" }],
    ["hy:fuel_metal_stick", 3, { translate: "hy.item.fuel_metal_stick" }],
    ["hy:lab_table", 1, { translate: "hy.block.lab_table" }],
    ["hy:gold_coin", 25, { translate: "hy.item.gold_coin" }],
    ["hy:story_book", 1, { translate: "hy.item.story_book" }],
    ["hy:diamond_coin", 3, { translate: "hy.item.diamond_coin" }],
    ["hy:gold_coin", 8, { translate: "hy.item.gold_coin" }],
    ["golden_apple", 5, { translate: "item.golden_apple.name" }],
    [
      "netherite_upgrade_smithing_template",
      1,
      { translate: "item.netherite_upgrade_smithing_template.name" },
    ],
    ["hy:gold_coin", 30, { translate: "hy.item.gold_coin" }],
    ["hy:copper_badge", 1, { translate: "hy.item.copper_badge" }],
    ["hy:gold_badge", 1, { translate: "hy.item.gold_badge" }],
    ["beacon", 1, { translate: "tile.beacon.name" }],
    ["ender_eye", 4, { translate: "item.ender_eye.name" }],
    ["hy:diamond_badge", 1, { translate: "hy.item.diamond_badge" }],
    ["diamond", 32, { translate: "item.diamond.name" }],
    ["diamond", 2, { translate: "item.diamond.name" }],
    ["diamond", 4, { translate: "item.diamond.name" }],
    ["diamond", 6, { translate: "item.diamond.name" }],
    ["netherite_ingot", 3, { translate: "item.netherite_ingot.name" }],
  ],
  questName: [
    { translate: "hy.quest.stick.title" },
    { translate: "hy.quest.over_metal_ingot.title" },
    { translate: "hy.quest.iron_ingot.title" },
    { translate: "hy.quest.copper_ingot.title" },
    { translate: "hy.quest.iron_hammer.title" },
    { translate: "hy.quest.iron_crowbar.title" },
    { translate: "hy.quest.iron_knife.title" },
    { translate: "hy.quest.iron_dagger.title" },
    { translate: "hy.quest.iron_sword.title" },
    { translate: "hy.quest.fuel_metal.title" },
    { translate: "hy.quest.nightmare_fuel_metal.title" },
    { translate: "hy.quest.steel_ingot.title" },
    { translate: "hy.quest.end0.title" },
    { translate: "hy.quest.obsidian.title" },
    { translate: "hy.quest.gold_ingot.title" },
    { translate: "hy.quest.ghast_tear.title" },
    { translate: "hy.quest.netherite_scrap.title" },
    { translate: "hy.quest.lodestone.title" },
    { translate: "hy.quest.respawn_anchor.title" },
    { translate: "hy.quest.blaze_rod.title" },
    { translate: "hy.quest.end1.title" },
    { translate: "hy.quest.ender_pearl.title" },
    { translate: "hy.quest.dragon_breath.title" },
    { translate: "hy.quest.end2.title" },
    { translate: "hy.quest.ruby.title" },
    { translate: "hy.quest.ruby_chestplate.title" },
    { translate: "hy.quest.ruby_bag.title" },
    { translate: "hy.quest.end3.title" },
  ],
  questDescription: [
    { translate: "hy.quest.stick.body" },
    { translate: "hy.quest.over_metal_ingot.body" },
    { translate: "hy.quest.iron_ingot.body" },
    { translate: "hy.quest.copper_ingot.body" },
    { translate: "hy.quest.iron_hammer.body" },
    { translate: "hy.quest.iron_crowbar.body" },
    { translate: "hy.quest.iron_knife.body" },
    { translate: "hy.quest.iron_dagger.body" },
    { translate: "hy.quest.iron_sword.body" },
    { translate: "hy.quest.fuel_metal.body" },
    { translate: "hy.quest.nightmare_fuel_metal.body" },
    { translate: "hy.quest.steel_ingot.body" },
    { translate: "hy.quest.end0.body0" },
    /*      { text: "\n" },
      { translate: "hy.quest.end0.body1" },
      { text: "\n" },
      { translate: "hy.quest.end0.body2" },
      { text: "\n" },
      { translate: "hy.quest.end0.body3" },*/
    { translate: "hy.quest.obsidian.body" },
    { translate: "hy.quest.gold_ingot.body" },
    { translate: "hy.quest.ghast_tear.body" },
    { translate: "hy.quest.netherite_scrap.body" },
    { translate: "hy.quest.lodestone.body" },
    { translate: "hy.quest.respawn_anchor.body" },
    { translate: "hy.quest.blaze_rod.body" },

    { translate: "hy.quest.end1.body0" },
    /*{ text: "\n" },
      { translate: "hy.quest.end1.body1" },
      { text: "\n" },
      { translate: "hy.quest.end1.body2" },*/
    { translate: "hy.quest.ender_pearl.body" },
    { translate: "hy.quest.dragon_breath.body" },
    { translate: "hy.quest.end2.body0" },
    /*{ text: "\n" },
      { translate: "hy.quest.end2.body1" },
      { text: "\n" },
      { translate: "hy.quest.end2.body2" },*/
    { translate: "hy.quest.ruby.body" },
    { translate: "hy.quest.ruby_chestplate.body" },
    { translate: "hy.quest.ruby_bag.body" },

    { translate: "hy.quest.end3.body0" },
    /*  { text: "\n" },
      { translate: "hy.quest.end3.body1" },
      { text: "\n" },
      { translate: "hy.quest.end3.body2" },*/
  ],
};

/**
 * 隐藏之年任务书 间幕·与风同行 的数据
 */
export const HyQuest2nd = {
  typeId: "hy:quest_book2",
  title: { translate: "hy.quest.title2" },
  description: { translate: "hy.quest.body2" },
  questItems: [
    ["hy:copper_apple", { translate: "hy.item.copper_apple" }],
    ["hy:metal_star", { translate: "hy.item.metal_star" }],
    ["hy:copper_essence", { translate: "hy.item.copper_essence" }],
  ],
  rewardItems: [
    ["golden_apple", 3, { translate: "item.golden_apple.name" }],
    ["hy:diamond_coin", 9, { translate: "hy.item.diamond_coin" }],
    ["dirt", 12, { translate: "	tile.dirt.default.name" }],
  ],
  questName: [
    { translate: "hy.quest.copper_apple.title" },
    { translate: "hy.quest.metal_star.title" },
    { translate: "hy.quest.copper_essence.title" },
  ],
  questDescription: [
    { translate: "hy.quest.copper_apple.body" },
    { translate: "hy.quest.metal_star.body" },
    { translate: "hy.quest.copper_essence.body" },
  ],
};
