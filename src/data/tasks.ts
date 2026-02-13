// TODO: 添加任务提示
import {
  Format,
  ItemAwards,
  ItemConditions,
  ItemTagConditions,
  KillEntityConditions,
  KillEntityFamilyConditions,
  Task,
  TaskGroup,
  TaskServer
} from "@occultus/api";

const server = new TaskServer();
const tasks = new Map<string, Task>();

const stick = new Task(
  "hiddenyears:stick",
  { translate: "task.stick" },
  { translate: "task.stick.desc" },
  {
    awards: [new ItemAwards("hiddenyears:copper_coin", 3)],
    conditions: [new ItemConditions("minecraft:stick")],
    previousTask: "none",
    iconPath: "textures/items/stick"
  }
);
tasks.set(stick.id, stick);
const craftingTable = new Task(
  "hiddenyears:crafting_table",
  { translate: "task.crafting_table" },
  { translate: "task.crafting_table.desc" },
  {
    awards: [new ItemAwards("hiddenyears:copper_coin", 4)],
    conditions: [new ItemConditions("minecraft:crafting_table")],
    previousTask: "none",
    iconPath: "textures/ui/task/crafting_table"
  }
);
tasks.set(craftingTable.id, craftingTable);

const furnace = new Task(
  "hiddenyears:furnace",
  { translate: "task.furnace" },
  { translate: "task.furnace.desc" },
  {
    awards: [new ItemAwards("hiddenyears:copper_coin", 5)],
    conditions: [new ItemConditions("minecraft:furnace")],
    previousTask: "none",
    iconPath: "textures/ui/task/furnace"
  }
);
tasks.set(furnace.id, furnace);

const bed = new Task(
  "hiddenyears:bed",
  { translate: "task.bed" },
  { translate: "task.bed.desc" },
  {
    awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
    conditions: [new ItemConditions("minecraft:bed")],
    previousTask: "none",
    iconPath: "textures/items/bed_red"
  }
);
tasks.set(bed.id, bed);

const bread = new Task(
  "hiddenyears:bread",
  { translate: "task.bread" },
  { translate: "task.bread.desc" },
  {
    awards: [new ItemAwards("minecraft:coal", 5)],
    conditions: [new ItemConditions("minecraft:bread")],
    previousTask: "none",
    iconPath: "textures/items/bread"
  }
);
tasks.set(bread.id, bread);

const monsterHunter = new Task(
  "hiddenyears:monster_hunter",
  { translate: "task.monster_hunter" },
  { translate: "task.monster_hunter.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
    conditions: [new KillEntityFamilyConditions("monster", "family.monster")],
    previousTask: "none",
    iconPath: "textures/items/iron_sword"
  }
);
monsterHunter.pushToServer(server);
tasks.set(monsterHunter.id, monsterHunter);

const prolugueActI = new TaskGroup(
  "hiddenyears:prolugue_act_I",
  { translate: "task.prolugue.act_1" },
  {
    rawtext: [
      { translate: "task.prolugue.act_1.desc_1" },
      { text: Format.newLine },
      { translate: "task.prolugue.act_1.desc_2" }
    ]
  },
  {
    tasks: [stick, craftingTable, furnace, bed, bread, monsterHunter],
    awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
    previousTask: "none",
    iconPath: "textures/items/stick"
  }
);

// 基础材料任务
const boneTools = new Task(
  "hiddenyears:bone_tools",
  { translate: "task.bone_tools" },
  { translate: "task.bone_tools.desc" },
  {
    awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
    conditions: [new ItemConditions("minecraft:bone")],
    previousTask: "none",
    iconPath: "textures/items/bone",
    tips: { translate: "task.bone_tools.tips" }
  }
);
tasks.set(boneTools.id, boneTools);

const stoneCraft = new Task(
  "hiddenyears:stone_craft",
  { translate: "task.stone_craft" },
  { translate: "task.stone_craft.desc" },
  {
    awards: [new ItemAwards("hiddenyears:copper_coin", 12)],
    conditions: [new ItemConditions("minecraft:cobblestone")],
    previousTask: "none",
    iconPath: "textures/items/stone_nugget"
  }
);
tasks.set(stoneCraft.id, stoneCraft);

const copper = new Task(
  "hiddenyears:copper",
  { translate: "task.copper" },
  { translate: "task.copper.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 2)],
    conditions: [new ItemConditions("minecraft:copper_ingot")],
    previousTask: "none",
    iconPath: "textures/items/copper_ingot",
    tips: { translate: "task.copper.tips" }
  }
);
tasks.set(copper.id, copper);

const refinedRock = new Task(
  "hiddenyears:refined_rock",
  { translate: "task.refined_rock" },
  { translate: "task.refined_rock.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
    conditions: [new ItemConditions("hiddenyears:refined_rock_ingot")],
    previousTask: "none",
    iconPath: "textures/items/refined_rock_ingot",
    tips: { translate: "task.refined_rock.tips" }
  }
);
tasks.set(refinedRock.id, refinedRock);

const iron = new Task(
  "hiddenyears:iron",
  { translate: "task.iron" },
  { translate: "task.iron.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 8)],
    conditions: [new ItemConditions("minecraft:iron_ingot")],
    previousTask: "none",
    iconPath: "textures/items/iron_ingot"
  }
);
tasks.set(iron.id, iron);

// 记忆中所不存在的任务
const saw = new Task(
  "hiddenyears:saw",
  { translate: "task.saw" },
  { translate: "task.saw.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:iron_saw")],
    previousTask: "none",
    iconPath: "textures/items/iron_saw",
    tips: { translate: "task.saw.tips" }
  }
);
tasks.set(saw.id, saw);

const crowbar = new Task(
  "hiddenyears:crowbar",
  { translate: "task.crowbar" },
  { translate: "task.crowbar.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:iron_crowbar")],
    previousTask: "none",
    iconPath: "textures/items/iron_crowbar",
    tips: { translate: "task.crowbar.tips" }
  }
);
tasks.set(crowbar.id, crowbar);

const hammer = new Task(
  "hiddenyears:hammer",
  { translate: "task.hammer" },
  { translate: "task.hammer.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 12)],
    conditions: [new ItemConditions("hiddenyears:iron_hammer")],
    previousTask: "none",
    iconPath: "textures/items/iron_hammer",
    tips: { translate: "task.hammer.tips" }
  }
);
tasks.set(hammer.id, hammer);

const dagger = new Task(
  "hiddenyears:dagger",
  { translate: "task.dagger" },
  { translate: "task.dagger.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 12)],
    conditions: [new ItemConditions("hiddenyears:iron_dagger")],
    previousTask: "none",
    iconPath: "textures/items/iron_dagger",
    tips: { translate: "task.dagger.tips" }
  }
);
tasks.set(dagger.id, dagger);

const sledgehammer = new Task(
  "hiddenyears:sledgehammer",
  { translate: "task.sledgehammer" },
  { translate: "task.sledgehammer.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("hiddenyears:iron_sledgehammer")],
    previousTask: "none",
    iconPath: "textures/items/iron_sledgehammer"
  }
);
tasks.set(sledgehammer.id, sledgehammer);

const sniperDuel = new Task(
  "hiddenyears:sniper_duel",
  { translate: "task.sniper_duel" },
  { translate: "task.sniper_duel.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 8)],
    conditions: [new ItemConditions("minecraft:bow")],
    previousTask: "none",
    iconPath: "textures/items/bow_pulling_0"
  }
);
tasks.set(sniperDuel.id, sniperDuel);

const triggerBlade = new Task(
  "hiddenyears:trigger_blade",
  { translate: "task.trigger_blade" },
  { translate: "task.trigger_blade.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 8)],
    conditions: [new ItemConditions("minecraft:crossbow")],
    previousTask: "none",
    iconPath: "textures/items/crossbow_pulling_0"
  }
);
tasks.set(triggerBlade.id, triggerBlade);

const sharpening = new Task(
  "hiddenyears:sharpening",
  { translate: "task.sharpening" },
  { translate: "task.sharpening.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:iron_enhanced_bow")],
    previousTask: "none",
    iconPath: "textures/items/iron_enhanced_bow_pulling_0"
  }
);
tasks.set(sharpening.id, sharpening);

const shield = new Task(
  "hiddenyears:shield",
  { translate: "task.shield" },
  { translate: "task.shield.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 8)],
    conditions: [new ItemConditions("minecraft:shield")],
    previousTask: "none",
    iconPath: "textures/ui/task/shield"
  }
);
tasks.set(shield.id, shield);

const skewer = new Task(
  "hiddenyears:skewer",
  { translate: "task.skewer" },
  { translate: "task.skewer.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
    conditions: [new ItemConditions("minecraft:iron_spear")],
    previousTask: "none",
    iconPath: "textures/items/spear/iron_spear"
  }
);
tasks.set(skewer.id, skewer);

const prolugueActII = new TaskGroup(
  "hiddenyears:prolugue_act_II",
  { translate: "task.prolugue.act_2" },
  {
    rawtext: [
      { translate: "task.prolugue.act_2.desc_1" },
      { text: Format.newLine },
      { translate: "task.prolugue.act_2.desc_2" }
    ]
  },
  {
    tasks: [
      boneTools,
      stoneCraft,
      copper,
      refinedRock,
      iron,
      saw,
      crowbar,
      hammer,
      dagger,
      sledgehammer,
      sniperDuel,
      triggerBlade,
      sharpening,
      shield,
      skewer
    ],
    awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
    previousTask: "none",
    iconPath: "textures/items/iron_ingot"
  }
);

// 珍贵材料任务
const silver = new Task(
  "hiddenyears:silver",
  { translate: "task.silver" },
  { translate: "task.silver.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 3)],
    conditions: [new ItemConditions("hiddenyears:silver_ingot")],
    previousTask: "none",
    iconPath: "textures/items/silver_ingot"
  }
);
tasks.set(silver.id, silver);

const diamond = new Task(
  "hiddenyears:diamond",
  { translate: "task.diamond" },
  { translate: "task.diamond.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
    conditions: [new ItemConditions("minecraft:diamond")],
    previousTask: "none",
    iconPath: "textures/items/diamond"
  }
);
tasks.set(diamond.id, diamond);

const crystal = new Task(
  "hiddenyears:crystal",
  { translate: "task.crystal" },
  { translate: "task.crystal.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 8)],
    conditions: [new ItemConditions("hiddenyears:crystal_ingot")],
    previousTask: "none",
    iconPath: "textures/items/crystal_ingot"
  }
);
tasks.set(crystal.id, crystal);

// 世界探索任务
const god = new Task(
  "hiddenyears:god",
  { translate: "task.god" },
  { translate: "task.god.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 8)],
    conditions: [new ItemConditions("hiddenyears:hidden_story")],
    previousTask: "none",
    iconPath: "textures/items/lost_letter"
  }
);
tasks.set(god.id, god);

const bleakTotem = new Task(
  "hiddenyears:bleak_totem",
  { translate: "task.bleak_totem" },
  {
    rawtext: [{ translate: "task.bleak_totem.desc" }]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
    conditions: [new ItemConditions("hiddenyears:bleak_totem")],
    previousTask: "none",
    iconPath: "textures/items/bleak_totem"
  }
);
tasks.set(bleakTotem.id, bleakTotem);

const totem = new Task(
  "hiddenyears:totem",
  { translate: "task.totem" },
  {
    rawtext: [
      { translate: "task.totem.desc_1" },
      { text: Format.newLine },
      { translate: "task.totem.desc_2" },
      { text: Format.newLine },
      { translate: "task.totem.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
    conditions: [new ItemConditions("minecraft:totem_of_undying")],
    previousTask: "none",
    iconPath: "textures/items/totem"
  }
);
tasks.set(totem.id, totem);

const prolugueActIII = new TaskGroup(
  "hiddenyears:prolugue_act_III",
  { translate: "task.prolugue.act_3" },
  {
    rawtext: [
      { translate: "task.prolugue.act_3.desc_1" },
      { text: Format.newLine },
      { translate: "task.prolugue.act_3.desc_2" }
    ]
  },
  {
    tasks: [silver, diamond, crystal, bleakTotem, god, totem],
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin")],
    previousTask: "none",
    iconPath: "textures/items/diamond"
  }
);

// 第二章·第一幕任务
const infestedBeast = new Task(
  "hiddenyears:infested_beast",
  { translate: "task.infested_beast" },
  { translate: "task.infested_beast.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
    conditions: [
      new KillEntityFamilyConditions("trial_monster", "ui.family.trial_monster")
    ],
    previousTask: "none",
    iconPath: "textures/items/contract_dust",
    tips: { translate: "task.infested_beast.tips" }
  }
);
infestedBeast.pushToServer(server);
tasks.set(infestedBeast.id, infestedBeast);

const contractStone = new Task(
  "hiddenyears:contract_stone",
  { translate: "task.contract_stone" },
  { translate: "task.contract_stone.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:contract_gem")],
    previousTask: "none",
    iconPath: "textures/items/contract_gem",
    tips: { translate: "task.contract_stone.tips" }
  }
);
tasks.set(contractStone.id, contractStone);

const memoryCondensation = new Task(
  "hiddenyears:memory_condensation",
  { translate: "task.memory_condensation" },
  {
    rawtext: [
      { translate: "task.memory_condensation.desc" },
      { text: Format.newLine },
      { translate: "task.memory_condensation.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
    conditions: [
      new ItemTagConditions("hiddenyears:is_artifact", 1, "ui.tag.is_artifact")
    ],
    previousTask: "none",
    iconPath: "textures/items/crucifix_runes"
  }
);
tasks.set(memoryCondensation.id, memoryCondensation);

const chapterIIActI = new TaskGroup(
  "hiddenyears:chapter2_act1",
  { translate: "task.chapter_2.act_1" },
  { translate: "task.chapter_2.act_1.desc" },
  {
    tasks: [infestedBeast, contractStone, memoryCondensation],
    awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
    previousTask: "none",
    iconPath: "textures/items/crucifix_runes"
  }
);

// 第二章·第二幕任务
const gold = new Task(
  "hiddenyears:gold",
  { translate: "task.gold" },
  { translate: "task.gold.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
    conditions: [new ItemConditions("minecraft:gold_ingot")],
    previousTask: "none",
    iconPath: "textures/items/gold_ingot"
  }
);
tasks.set(gold.id, gold);

const obsidian = new Task(
  "hiddenyears:obsidian",
  { translate: "task.obsidian" },
  { translate: "task.obsidian.desc" },
  {
    awards: [new ItemAwards("minecraft:flint_and_steel", 1)],
    conditions: [new ItemConditions("minecraft:obsidian")],
    previousTask: "none",
    iconPath: "textures/ui/task/obsidian"
  }
);
tasks.set(obsidian.id, obsidian);

const ghastTear = new Task(
  "hiddenyears:ghast_tear",
  { translate: "task.ghast_tear" },
  { translate: "task.ghast_tear.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("minecraft:ghast_tear")],
    previousTask: "none",
    iconPath: "textures/items/ghast_tear"
  }
);
tasks.set(ghastTear.id, ghastTear);

const compass = new Task(
  "hiddenyears:compass",
  { translate: "task.compass" },
  { translate: "task.compass.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("minecraft:lodestone")],
    previousTask: "none",
    iconPath: "textures/ui/task/lodestone"
  }
);
tasks.set(compass.id, compass);

const respawnAnchor = new Task(
  "hiddenyears:respawn_anchor",
  { translate: "task.respawn_anchor" },
  { translate: "task.respawn_anchor.desc" },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("minecraft:respawn_anchor")],
    previousTask: "none",
    iconPath: "textures/ui/task/respawn_anchor"
  }
);
tasks.set(respawnAnchor.id, respawnAnchor);

const blazeRod = new Task(
  "hiddenyears:blaze_rod",
  { translate: "task.blaze_rod" },
  { translate: "task.blaze_rod.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 1)],
    conditions: [new ItemConditions("minecraft:blaze_rod")],
    previousTask: "none",
    iconPath: "textures/items/blaze_rod"
  }
);
tasks.set(blazeRod.id, blazeRod);

const wither = new Task(
  "hiddenyears:wither",
  { translate: "task.wither" },
  {
    rawtext: [
      { translate: "task.wither.desc_1" },
      { text: Format.newLine },
      { translate: "task.wither.desc_2" },
      { text: Format.blankLine() },
      { translate: "task.wither.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("minecraft:diamond", 12)],
    conditions: [new KillEntityConditions("wither")],
    previousTask: "none",
    iconPath: "textures/items/spawn_eggs/spawn_egg_wither"
  }
);
wither.pushToServer(server);
tasks.set(wither.id, wither);

const chapterIIActII = new TaskGroup(
  "hiddenyears:chapter2_act2",
  { translate: "task.chapter_2.act_2" },
  { translate: "task.chapter_2.act_2.desc" },
  {
    tasks: [
      gold,
      obsidian,
      ghastTear,
      compass,
      respawnAnchor,
      blazeRod,
      wither
    ],
    awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
    previousTask: "none",
    iconPath: "textures/items/gold_ingot"
  }
);

// 第二章·第三幕任务
const enderEye = new Task(
  "hiddenyears:ender_eye",
  { translate: "task.ender_eye" },
  { translate: "task.ender_eye.desc" },
  {
    awards: [new ItemAwards("hiddenyears:diamond_coin", 1)],
    conditions: [new ItemConditions("minecraft:ender_eye")],
    previousTask: "none",
    iconPath: "textures/items/ender_eye"
  }
);
tasks.set(enderEye.id, enderEye);

const dragonBreath = new Task(
  "hiddenyears:dragon_breath",
  { translate: "task.dragon_breath" },
  { translate: "task.dragon_breath.desc" },
  {
    awards: [new ItemAwards("hiddenyears:diamond_coin", 5)],
    conditions: [new ItemConditions("minecraft:dragon_breath")],
    previousTask: "none",
    iconPath: "textures/items/dragons_breath"
  }
);
tasks.set(dragonBreath.id, dragonBreath);

const elytra = new Task(
  "hiddenyears:elytra",
  { translate: "task.elytra" },
  { translate: "task.elytra.desc" },
  {
    awards: [new ItemAwards("minecraft:diamond", 5)],
    conditions: [new ItemConditions("minecraft:elytra")],
    previousTask: "none",
    iconPath: "textures/items/elytra"
  }
);

const enderDragon = new Task(
  "hiddenyears:ender_dragon",
  { translate: "task.ender_dragon" },
  {
    rawtext: [
      { translate: "task.ender_dragon.desc_1" },
      { text: Format.newLine },
      { translate: "task.ender_dragon.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("minecraft:diamond", 15)],
    conditions: [new KillEntityConditions("ender_dragon")],
    previousTask: "none",
    iconPath: "textures/ui/task/dragon_head"
  }
);
enderDragon.pushToServer(server);
tasks.set(enderDragon.id, enderDragon);

const chapterIIActIII = new TaskGroup(
  "hiddenyears:chapter2_act3",
  { translate: "task.chapter_2.act_3" },
  { translate: "task.chapter_2.act_3.desc" },
  {
    tasks: [enderEye, dragonBreath, elytra, enderDragon],
    awards: [new ItemAwards("minecraft:diamond", 10)],
    previousTask: "none",
    iconPath: "textures/items/ender_eye"
  }
);
// 第一章·第一幕任务
const summaryOfElvenHistory = new Task(
  "hiddenyears:summary_of_elven_history",
  { translate: "task.summary_of_elven_history" },
  { translate: "task.summary_of_elven_history.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 1)],
    conditions: [new ItemConditions("hiddenyears:article_3")],
    previousTask: "none",
    iconPath: "textures/items/lost_letter"
  }
);
tasks.set(summaryOfElvenHistory.id, summaryOfElvenHistory);

const imprisonedWing = new Task(
  "hiddenyears:imprisoned_wing",
  { translate: "task.imprisoned_wing" },
  {
    rawtext: [
      { translate: "task.imprisoned_wing.desc_1" },
      { text: Format.newLine },
      { translate: "task.imprisoned_wing.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 2)],
    conditions: [new ItemConditions("hiddenyears:imprisoned_wing")],
    previousTask: "none",
    iconPath: "textures/items/imprisoned_wing"
  }
);
tasks.set(imprisonedWing.id, imprisonedWing);

const bloodyGem = new Task(
  "hiddenyears:bloody_gem",
  { translate: "task.bloody_gem" },
  {
    rawtext: [
      { translate: "task.bloody_gem.desc_1" },
      { text: Format.newLine },
      { translate: "task.bloody_gem.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 2)],
    conditions: [new ItemConditions("hiddenyears:ruby")],
    previousTask: "none",
    iconPath: "textures/items/ruby",
    tips: { translate: "task.bloody_gem.tips" }
  }
);
tasks.set(bloodyGem.id, bloodyGem);

const bloodyArmor = new Task(
  "hiddenyears:bloody_armor",
  { translate: "task.bloody_armor" },
  {
    rawtext: [
      { translate: "task.bloody_armor.desc_1" },
      { text: Format.newLine },
      { translate: "task.bloody_armor.desc_2" },
      { text: Format.newLine },
      { translate: "task.bloody_armor.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
    conditions: [new ItemConditions("hiddenyears:ruby_chestplate")],
    previousTask: "none",
    iconPath: "textures/items/ruby_chestplate"
  }
);
tasks.set(bloodyArmor.id, bloodyArmor);

const decayedServant = new Task(
  "hiddenyears:decayed_servant",
  { translate: "task.decayed_servant" },
  {
    rawtext: [
      { translate: "task.decayed_servant.desc_1" },
      { text: Format.newLine },
      { translate: "task.decayed_servant.desc_2" },
      { text: Format.newLine },
      { translate: "task.decayed_servant.desc_3" },
      { text: Format.newLine },
      { translate: "task.decayed_servant.desc_4" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
    conditions: [new KillEntityConditions("hiddenyears:ruby_zombie")],
    previousTask: "none",
    iconPath: "textures/items/egg_ruby_zombie",
    tips: { translate: "task.decayed_servant.tips" }
  }
);
tasks.set(decayedServant.id, decayedServant);

const trueAndFalse = new Task(
  "hiddenyears:true_and_false",
  { translate: "task.true_and_false" },
  {
    rawtext: [
      { translate: "task.true_and_false.desc_1" },
      { text: Format.newLine },
      { translate: "task.true_and_false.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
    conditions: [
      new KillEntityConditions("hiddenyears:ferocious_ruby_guardian")
    ],
    previousTask: "none",
    iconPath: "textures/items/egg_ruby_guardian",
    tips: { translate: "task.true_and_false.tips" }
  }
);
tasks.set(trueAndFalse.id, trueAndFalse);

const thunderKey = new Task(
  "hiddenyears:thunder_key",
  { translate: "task.thunder_key" },
  {
    rawtext: [
      { translate: "task.thunder_key.desc_1" },
      { text: Format.newLine },
      { translate: "task.thunder_key.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("minecraft:potion", 4)],
    conditions: [new ItemConditions("hiddenyears:lightning_key")],
    previousTask: "none",
    iconPath: "textures/items/lightning_key",
    tips: { translate: "task.thunder_key.tips" }
  }
);
tasks.set(thunderKey.id, thunderKey);

const bloodGaze = new Task(
  "hiddenyears:blood_gaze",
  { translate: "task.blood_gaze" },
  {
    rawtext: [
      { translate: "task.blood_gaze.desc_1" },
      { text: Format.newLine },
      { translate: "task.blood_gaze.desc_2" },
      { text: Format.newLine },
      { translate: "task.blood_gaze.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:diamond_badge", 1)],
    conditions: [new ItemConditions("hiddenyears:crimson_eyes")],
    previousTask: "none",
    iconPath: "textures/items/crimson_eyes",
    tips: { translate: "task.blood_gaze.tips" }
  }
);
tasks.set(bloodGaze.id, bloodGaze);

const worldEndFruit = new Task(
  "hiddenyears:ruby_apple",
  { translate: "task.world_end_fruit" },
  {
    rawtext: [
      { translate: "task.world_end_fruit.desc_1" },
      { text: Format.newLine },
      { translate: "task.world_end_fruit.desc_2" },
      { text: Format.newLine },
      { translate: "task.world_end_fruit.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 12)],
    conditions: [new ItemConditions("hiddenyears:ruby_apple")],
    previousTask: "none",
    iconPath: "textures/items/ruby_apple",
    tips: { translate: "task.world_end_fruit.tips" }
  }
);
tasks.set(worldEndFruit.id, worldEndFruit);

const songOfPowerAndBlood = new Task(
  "hiddenyears:song_of_power_and_blood",
  { translate: "task.song_of_power_and_blood" },
  {
    rawtext: [
      { translate: "task.song_of_power_and_blood.desc_1" },
      { text: Format.newLine },
      { translate: "task.song_of_power_and_blood.desc_2" }
    ]
  },
  {
    awards: [
      new ItemAwards("minecraft:diamond", 10),
      new ItemAwards("hiddenyears:article_4")
    ],
    conditions: [new KillEntityConditions("hiddenyears:king_of_ruby")],
    previousTask: "none",
    iconPath: "textures/items/ruby_crown",
    tips: { translate: "task.song_of_power_and_blood.tips" }
  }
);
songOfPowerAndBlood.pushToServer(server);
tasks.set(songOfPowerAndBlood.id, songOfPowerAndBlood);

const chapterIActI = new TaskGroup(
  "hiddenyears:chapter1_act1",
  { translate: "task.chapter_1.act_1" },
  { translate: "task.chapter_1.act_1.desc" },
  {
    tasks: [
      summaryOfElvenHistory,
      imprisonedWing,
      bloodyGem,
      bloodyArmor,
      decayedServant,
      trueAndFalse,
      thunderKey,
      bloodGaze,
      worldEndFruit,
      songOfPowerAndBlood
    ],
    awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
    previousTask: "none",
    iconPath: "textures/items/ruby"
  }
);

// 第二章·第四幕任务
const alchemist = new Task(
  "hiddenyears:alchemist",
  { translate: "task.alchemist" },
  { translate: "task.alchemist.desc" },
  {
    awards: [new ItemAwards("minecraft:diamond", 2)],
    conditions: [new ItemConditions("hiddenyears:alchemy_table")],
    previousTask: "none",
    iconPath: "textures/ui/task/alchemy_table",
    tips: { translate: "task.alchemist.tips" }
  }
);
tasks.set(alchemist.id, alchemist);

const magicDust = new Task(
  "hiddenyears:magic_dust",
  { translate: "task.magic_dust" },
  { translate: "task.magic_dust.desc" },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
    conditions: [new ItemConditions("hiddenyears:magic_dust")],
    previousTask: "none",
    iconPath: "textures/items/magic_dust",
    tips: { translate: "task.magic_dust.tips" }
  }
);
tasks.set(magicDust.id, magicDust);

const verdantStone = new Task(
  "hiddenyears:verdant_stone",
  { translate: "task.verdant_stone" },
  { translate: "task.verdant_stone.desc" },
  {
    awards: [new ItemAwards("minecraft:diamond", 5)],
    conditions: [new ItemConditions("hiddenyears:ancient_extracts")],
    previousTask: "none",
    iconPath: "textures/items/ancient_extracts"
  }
);
tasks.set(verdantStone.id, verdantStone);

const infernalRemains = new Task(
  "hiddenyears:infernal_remains",
  { translate: "task.infernal_remains" },
  { translate: "task.infernal_remains.desc" },
  {
    awards: [new ItemAwards("minecraft:diamond", 5)],
    conditions: [new ItemConditions("minecraft:netherite_scrap")],
    previousTask: "none",
    iconPath: "textures/items/netherite_scrap"
  }
);
tasks.set(infernalRemains.id, infernalRemains);

const ancientWarRemains = new Task(
  "hiddenyears:ancient_war_remains",
  { translate: "task.ancient_war_remains" },
  { translate: "task.ancient_war_remains.desc" },
  {
    awards: [new ItemAwards("minecraft:diamond", 5)],
    conditions: [new ItemConditions("hiddenyears:ancient_scrap")],
    previousTask: "none",
    iconPath: "textures/items/ancient_scrap",
    tips: { translate: "task.ancient_war_remains.tips" }
  }
);
tasks.set(ancientWarRemains.id, ancientWarRemains);

const fearSoul = new Task(
  "hiddenyears:fear_soul",
  { translate: "task.fear_soul" },
  { translate: "task.fear_soul.desc" },
  {
    awards: [new ItemAwards("minecraft:diamond", 5)],
    conditions: [new ItemConditions("hiddenyears:soul_of_fear")],
    previousTask: "none",
    iconPath: "textures/items/soul_of_fear",
    tips: { translate: "task.fear_soul.tips" }
  }
);
tasks.set(fearSoul.id, fearSoul);

const primalYearning = new Task(
  "hiddenyears:primal_yearning",
  { translate: "task.primal_yearning" },
  {
    rawtext: [
      { translate: "task.primal_yearning.desc" },
      { text: Format.newLine },
      { translate: "task.primal_yearning.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("minecraft:diamond", 15)],
    conditions: [new ItemConditions("hiddenyears:originite_ingot")],
    previousTask: "none",
    iconPath: "textures/items/originite_ingot",
    tips: { translate: "task.primal_yearning.tips" }
  }
);
tasks.set(primalYearning.id, primalYearning);

const chapterIIActIV = new TaskGroup(
  "hiddenyears:chapter2_act4",
  { translate: "task.chapter_2.act_4" },
  { translate: "task.chapter_2.act_4.desc" },
  {
    tasks: [
      alchemist,
      magicDust,
      verdantStone,
      infernalRemains,
      ancientWarRemains,
      fearSoul,
      primalYearning
    ],
    awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
    previousTask: "none",
    iconPath: "textures/items/originite_ingot"
  }
);

// 第三章·第一幕任务
const greenInSand = new Task(
  "hiddenyears:green_in_sand",
  { translate: "task.green_in_sand" },
  {
    rawtext: [
      { translate: "task.green_in_sand.desc" },
      { text: Format.newLine },
      { translate: "task.green_in_sand.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:copper_coin", 5)],
    conditions: [new ItemConditions("minecraft:cactus")],
    previousTask: "none",
    iconPath: "textures/items/dye_powder_green"
  }
);
tasks.set(greenInSand.id, greenInSand);

const hardToSwallowFood = new Task(
  "hiddenyears:hard_to_swallow_food",
  { translate: "task.hard_to_swallow_food" },
  {
    rawtext: [
      { translate: "task.hard_to_swallow_food.desc" },
      { text: Format.newLine },
      { translate: "task.hard_to_swallow_food.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
    conditions: [new ItemConditions("hiddenyears:sand_meat")],
    previousTask: "none",
    iconPath: "textures/items/sand_meat",
    tips: { translate: "task.hard_to_swallow_food.tips" }
  }
);
tasks.set(hardToSwallowFood.id, hardToSwallowFood);

const dryPot = new Task(
  "hiddenyears:dry_pot",
  { translate: "task.dry_pot" },
  {
    rawtext: [
      { translate: "task.dry_pot.desc" },
      { text: Format.newLine },
      { translate: "task.dry_pot.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:desert_herbpot")],
    previousTask: "none",
    iconPath: "textures/items/herb_bottle",
    tips: { translate: "task.dry_pot.tips" }
  }
);
tasks.set(dryPot.id, dryPot);

const godArrival = new Task(
  "hiddenyears:god_arrival",
  { translate: "task.god_arrival" },
  {
    rawtext: [
      { translate: "task.god_arrival.desc" },
      { text: Format.newLine },
      { translate: "task.god_arrival.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:cooling_herbtea")],
    previousTask: "none",
    iconPath: "textures/items/cooling_herbtea",
    tips: { translate: "task.god_arrival.tips" }
  }
);
tasks.set(godArrival.id, godArrival);

const sacrifice = new Task(
  "hiddenyears:sacrifice",
  { translate: "task.sacrifice" },
  {
    rawtext: [
      { translate: "task.sacrifice.desc" },
      { text: Format.newLine },
      { translate: "task.sacrifice.desc_2" },
      { text: Format.newLine },
      { translate: "task.sacrifice.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:sandcaust_apple", 2)],
    conditions: [new ItemConditions("hiddenyears:rabbit_paw")],
    previousTask: "none",
    iconPath: "textures/items/rabbit_paw",
    tips: { translate: "task.sacrifice.tips" }
  }
);
tasks.set(sacrifice.id, sacrifice);

const shatteredSand = new Task(
  "hiddenyears:shattered_sand",
  { translate: "task.shattered_sand" },
  {
    rawtext: [
      { translate: "task.shattered_sand.desc" },
      { text: Format.newLine },
      { translate: "task.shattered_sand.desc_2" },
      { text: Format.newLine },
      { translate: "task.shattered_sand.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("hiddenyears:shattered_sand_cudgel")],
    previousTask: "none",
    iconPath: "textures/items/shattered_sand_cudgel",
    tips: { translate: "task.shattered_sand.tips" }
  }
);
tasks.set(shatteredSand.id, shatteredSand);

const keyOfContract = new Task(
  "hiddenyears:key_of_contract",
  { translate: "task.key_of_contract" },
  {
    rawtext: [
      { translate: "task.key_of_contract.desc" },
      { text: Format.newLine },
      { translate: "task.key_of_contract.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("hiddenyears:drift_sand_key")],
    previousTask: "none",
    iconPath: "textures/items/drift_sand_key",
    tips: { translate: "task.key_of_contract.tips" }
  }
);
tasks.set(keyOfContract.id, keyOfContract);

const blessingOfRain = new Task(
  "hiddenyears:blessing_of_rain",
  { translate: "task.blessing_of_rain" },
  {
    rawtext: [
      { translate: "task.blessing_of_rain.desc" },
      { text: Format.newLine },
      { translate: "task.blessing_of_rain.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("hiddenyears:blessing_of_isis")],
    previousTask: "none",
    iconPath: "textures/items/blessing_of_isis",
    tips: { translate: "task.blessing_of_rain.tips" }
  }
);
tasks.set(blessingOfRain.id, blessingOfRain);

const kingdomFall = new Task(
  "hiddenyears:kingdom_fall",
  { translate: "task.kingdom_fall" },
  {
    rawtext: [
      { translate: "task.kingdom_fall.desc" },
      { text: Format.newLine },
      { translate: "task.kingdom_fall.desc_2" },
      { text: Format.newLine },
      { translate: "task.kingdom_fall.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
    conditions: [new ItemConditions("hiddenyears:desert_heart")],
    previousTask: "none",
    iconPath: "textures/items/desert_heart",
    tips: { translate: "task.kingdom_fall.tips" }
  }
);
tasks.set(kingdomFall.id, kingdomFall);

const statueOfPast = new Task(
  "hiddenyears:statue_of_past",
  { translate: "task.statue_of_past" },
  {
    rawtext: [{ translate: "task.statue_of_past.desc" }]
  },
  {
    awards: [new ItemAwards("minecraft:diamond", 5)],
    conditions: [new ItemConditions("hiddenyears:past_statue")],
    previousTask: "none",
    iconPath: "textures/items/past_statue",
    tips: { translate: "task.statue_of_past.tips" }
  }
);
tasks.set(statueOfPast.id, statueOfPast);

const symbolOfLife = new Task(
  "hiddenyears:symbol_of_life",
  { translate: "task.symbol_of_life" },
  {
    rawtext: [
      { translate: "task.symbol_of_life.desc" },
      { text: Format.newLine },
      { translate: "task.symbol_of_life.desc_2" },
      { text: Format.newLine },
      { translate: "task.symbol_of_life.desc_3" },
      { text: Format.newLine },
      { translate: "task.symbol_of_life.desc_4" },
      { text: Format.newLine },
      { translate: "task.symbol_of_life.desc_5" }
    ]
  },
  {
    awards: [new ItemAwards("minecraft:diamond", 5)],
    conditions: [new ItemConditions("hiddenyears:rebirth_statue")],
    previousTask: "none",
    iconPath: "textures/items/rebirth_statue",
    tips: { translate: "task.symbol_of_life.tips" }
  }
);
tasks.set(symbolOfLife.id, symbolOfLife);

const rainInSand = new Task(
  "hiddenyears:rain_in_sand",
  { translate: "task.rain_in_sand" },
  {
    rawtext: [
      { translate: "task.rain_in_sand.desc" },
      { text: Format.newLine },
      { translate: "task.rain_in_sand.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:gold_coin", 1)],
    conditions: [new ItemConditions("hiddenyears:shattered_sand_staff")],
    previousTask: "none",
    iconPath: "textures/items/shattered_sand_staff",
    tips: { translate: "task.rain_in_sand.tips" }
  }
);
tasks.set(rainInSand.id, rainInSand);

const chapterIIIActI = new TaskGroup(
  "hiddenyears:chapter3_act1",
  { translate: "task.chapter_3.act_1" },
  { translate: "task.chapter_3.act_1.desc" },
  {
    tasks: [
      greenInSand,
      hardToSwallowFood,
      dryPot,
      godArrival,
      sacrifice,
      shatteredSand,
      keyOfContract,
      blessingOfRain,
      kingdomFall,
      statueOfPast,
      symbolOfLife,
      rainInSand
    ],
    awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
    previousTask: "none",
    iconPath: "textures/items/desert_heart"
  }
);

// 第三章·第二幕任务
const goldInSand = new Task(
  "hiddenyears:gold_in_sand",
  { translate: "task.gold_in_sand" },
  {
    rawtext: [
      { translate: "task.gold_in_sand.desc_1" },
      { text: Format.newLine },
      { translate: "task.gold_in_sand.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:gold_sand")],
    previousTask: "none",
    iconPath: "textures/items/gold_sand",
    tips: { translate: "task.gold_in_sand.tips" }
  }
);
tasks.set(goldInSand.id, goldInSand);

const curseOfSand = new Task(
  "hiddenyears:curse_of_sand",
  { translate: "task.curse_of_sand" },
  {
    rawtext: [
      { translate: "task.curse_of_sand.desc_1" },
      { text: Format.newLine },
      { translate: "task.curse_of_sand.desc_2" },
      { text: Format.newLine },
      { translate: "task.curse_of_sand.desc_3" },
      { text: Format.newLine },
      { translate: "task.curse_of_sand.desc_4" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
    conditions: [new KillEntityConditions("hiddenyears:sandcaust_silverfish")],
    previousTask: "none",
    iconPath: "textures/items/egg_sand_silverfish"
  }
);
tasks.set(curseOfSand.id, curseOfSand);

const storyOfGold = new Task(
  "hiddenyears:story_of_gold",
  { translate: "task.story_of_gold" },
  {
    rawtext: [
      { translate: "task.story_of_gold.desc_1" },
      { text: Format.newLine },
      { translate: "task.story_of_gold.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
    conditions: [new ItemConditions("hiddenyears:article_11")],
    previousTask: "none",
    iconPath: "textures/items/paper"
  }
);
tasks.set(storyOfGold.id, storyOfGold);

const ancientMyth = new Task(
  "hiddenyears:ancient_myth",
  { translate: "task.ancient_myth" },
  {
    rawtext: [
      { translate: "task.ancient_myth.desc_1" },
      { text: Format.newLine },
      { translate: "task.ancient_myth.desc_2" },
      { text: Format.newLine },
      { translate: "task.ancient_myth.desc_3" },
      { text: Format.newLine },
      { translate: "task.ancient_myth.desc_4" },
      { text: Format.newLine },
      { translate: "task.ancient_myth.desc_5" },
      { text: Format.newLine },
      { translate: "task.ancient_myth.desc_6" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
    conditions: [new ItemConditions("hiddenyears:article_10")],
    previousTask: "none",
    iconPath: "textures/items/paper",
    tips: { translate: "task.ancient_myth.tips" }
  }
);
tasks.set(ancientMyth.id, ancientMyth);

const signOfMutation = new Task(
  "hiddenyears:sign_of_mutation",
  { translate: "task.sign_of_mutation" },
  {
    rawtext: [
      { translate: "task.sign_of_mutation.desc_1" },
      { text: Format.newLine },
      { translate: "task.sign_of_mutation.desc_2" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
    conditions: [new KillEntityConditions("hiddenyears:scorpion")],
    previousTask: "none",
    iconPath: "textures/items/egg_scorpion",
    tips: { translate: "task.sign_of_mutation.tips" }
  }
);
tasks.set(signOfMutation.id, signOfMutation);

const palaceOfGods = new Task(
  "hiddenyears:palace_of_gods",
  { translate: "task.palace_of_gods" },
  {
    rawtext: [
      { translate: "task.palace_of_gods.desc_1" },
      { text: Format.newLine },
      { translate: "task.palace_of_gods.desc_2" },
      { text: Format.newLine },
      { translate: "task.palace_of_gods.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("minecraft:diamond", 15)],
    conditions: [new ItemConditions("hiddenyears:isis_crown")],
    previousTask: "none",
    iconPath: "textures/items/isis_crown",
    tips: { translate: "task.palace_of_gods.tips" }
  }
);
tasks.set(palaceOfGods.id, palaceOfGods);

const eyeOfSandErosion = new Task(
  "hiddenyears:eye_of_sand_erosion",
  { translate: "task.eye_of_sand_erosion" },
  {
    rawtext: [
      { translate: "task.eye_of_sand_erosion.desc_1" },
      { text: Format.newLine },
      { translate: "task.eye_of_sand_erosion.desc_2" },
      { text: Format.newLine },
      { translate: "task.eye_of_sand_erosion.desc_3" }
    ]
  },
  {
    awards: [new ItemAwards("hiddenyears:sandcaust_apple", 5)],
    conditions: [new ItemConditions("hiddenyears:sandcaust_spider_eye")],
    previousTask: "none",
    iconPath: "textures/items/sand_spider_eye",
    tips: { translate: "task.eye_of_sand_erosion.tips" }
  }
);
tasks.set(eyeOfSandErosion.id, eyeOfSandErosion);

const chapterIIIActII = new TaskGroup(
  "hiddenyears:chapter3_act2",
  { translate: "task.chapter_3.act_2" },
  { translate: "task.chapter_3.act_2.desc" },
  {
    tasks: [
      goldInSand,
      curseOfSand,
      storyOfGold,
      ancientMyth,
      signOfMutation,
      palaceOfGods,
      eyeOfSandErosion
    ],
    awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
    previousTask: "none",
    iconPath: "textures/items/isis_crown"
  }
);

// 第四章·第一幕任务
const echoShard = new Task(
  "hiddenyears:echo_shard",
  { translate: "task.echo_shard" },
  {
    rawtext: [
      { translate: "task.echo_shard.desc_1" },
      { text: Format.newLine },
      { translate: "task.echo_shard.desc_2" }
    ]
  },
  {
    conditions: [new ItemConditions("minecraft:echo_shard")],
    previousTask: "none",
    iconPath: "textures/items/echo_shard",
    awards: [new ItemAwards("hiddenyears:echo_coin", 5)]
  }
);
tasks.set(echoShard.id, echoShard);

const chapterIVactI = new TaskGroup(
  "hiddenyears:chapter4_act1",
  {
    translate: "task.chapter_4.act_1"
  },
  {
    translate: "task.chapter_4.act_1.desc"
  },
  {
    tasks: [echoShard],
    previousTask: "none",
    awards: [new ItemAwards("hiddenyears:echo_coin", 20)],
    iconPath: "textures/items/echo_coin"
  }
);

const babelSand = new Task(
  "hiddenyears:babel_sand",
  { translate: "task.babel_sand" },
  {
    rawtext: [{ translate: "task.babel_sand.desc" }]
  },
  {
    conditions: [new ItemConditions("hiddenyears:babel_tower_wreckage_sand")],
    previousTask: "none",
    iconPath: "textures/items/babel_tower_wreckage_sand",
    awards: [new ItemAwards("hiddenyears:stack_of_diamond_coin", 5)]
  }
);
tasks.set(babelSand.id, babelSand);

const epilogueActI = new TaskGroup(
  "hiddenyears:epilogue_act1",
  { translate: "task.epilogue.act_1" },
  { translate: "task.epilogue.act_1.desc" },
  {
    tasks: [babelSand],
    awards: [],
    previousTask: "none",
    iconPath: "textures/items/babel_tower_wreckage_sand"
  }
);


export function hasTask(id: string): boolean{
  return tasks.has(id);
}

export function getTask(id: string):Task | undefined {
  return tasks.get(id);
}

export function getAllTasks() {
  return Array.from(tasks.values());
}

export function getAllChapters() {
  return [
    prolugueActI,
    prolugueActII,
    prolugueActIII,
    chapterIActI,
    chapterIIActI,
    chapterIIActII,
    chapterIIActIII,
    chapterIIActIV,
    chapterIIIActI,
    chapterIIIActII,
    chapterIVactI,
    epilogueActI
  ];
}
