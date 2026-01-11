// TODO: 添加任务提示
import {
  Format,
  ItemAwards,
  ItemConditions,
  KillEntityConditions,
  KillEntityFamilyConditions,
  Task,
  TaskGroup,
  TaskServer,
} from "@occultus/api";

export function getAllChapters() {
  const server = new TaskServer();

  const stick = new Task(
    "hiddenyears:stick",
    { translate: "task.stick" },
    { translate: "task.stick.desc" },
    {
      awards: [new ItemAwards("hiddenyears:copper_coin", 3)],
      conditions: [new ItemConditions("minecraft:stick")],
      previousTask: "none",
      iconPath: "textures/items/stick",
    }
  );

  const craftingTable = new Task(
    "hiddenyears:crafting_table",
    { translate: "task.crafting_table" },
    { translate: "task.crafting_table.desc" },
    {
      awards: [new ItemAwards("hiddenyears:copper_coin", 4)],
      conditions: [new ItemConditions("minecraft:crafting_table")],
      previousTask: "none",
      iconPath: "textures/ui/task/crafting_table",
    }
  );

  const furnace = new Task(
    "hiddenyears:furnace",
    { translate: "task.furnace" },
    { translate: "task.furnace.desc" },
    {
      awards: [new ItemAwards("hiddenyears:copper_coin", 5)],
      conditions: [new ItemConditions("minecraft:furnace")],
      previousTask: "none",
      iconPath: "textures/ui/task/furnace",
    }
  );

  const bed = new Task(
    "hiddenyears:bed",
    { translate: "task.bed" },
    { translate: "task.bed.desc" },
    {
      awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
      conditions: [new ItemConditions("minecraft:bed")],
      previousTask: "none",
      iconPath: "textures/items/bed_red",
    }
  );

  const bread = new Task(
    "hiddenyears:bread",
    { translate: "task.bread" },
    { translate: "task.bread.desc" },
    {
      awards: [new ItemAwards("minecraft:coal", 5)],
      conditions: [new ItemConditions("minecraft:bread")],
      previousTask: "none",
      iconPath: "textures/items/bread",
    }
  );

  const monsterHunter = new Task(
    "hiddenyears:monster_hunter",
    { translate: "task.monster_hunter" },
    { translate: "task.monster_hunter.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
      conditions: [new KillEntityFamilyConditions("monster", "family.monster")],
      previousTask: "none",
      iconPath: "textures/items/iron_sword",
    }
  );
  monsterHunter.pushToServer(server);

  const prolugueActI = new TaskGroup(
    "hiddenyears:prolugue_act_I",
    { translate: "task.prolugue.act_1" },
    {
      rawtext: [
        { translate: "task.prolugue.act_1.desc_1" },
        { text: Format.newLine },
        { translate: "task.prolugue.act_1.desc_2" },
      ],
    },
    {
      tasks: [stick, craftingTable, furnace, bed, bread, monsterHunter],
      awards: [new ItemAwards("hiddenyears:copper_coin", 10)],
      previousTask: "none",
      iconPath: "textures/items/stick",
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
    }
  );

  const stoneCraft = new Task(
    "hiddenyears:stone_craft",
    { translate: "task.stone_craft" },
    { translate: "task.stone_craft.desc" },
    {
      awards: [new ItemAwards("hiddenyears:copper_coin", 12)],
      conditions: [new ItemConditions("minecraft:cobblestone")],
      previousTask: "none",
      iconPath: "textures/items/stone_nugget",
    }
  );

  const copper = new Task(
    "hiddenyears:copper",
    { translate: "task.copper" },
    { translate: "task.copper.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 2)],
      conditions: [new ItemConditions("minecraft:copper_ingot")],
      previousTask: "none",
      iconPath: "textures/items/copper_ingot",
    }
  );

  const refinedRock = new Task(
    "hiddenyears:refined_rock",
    { translate: "task.refined_rock" },
    { translate: "task.refined_rock.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
      conditions: [new ItemConditions("hiddenyears:refined_rock_ingot")],
      previousTask: "none",
      iconPath: "textures/items/refined_rock_ingot",
    }
  );

  const iron = new Task(
    "hiddenyears:iron",
    { translate: "task.iron" },
    { translate: "task.iron.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 8)],
      conditions: [new ItemConditions("minecraft:iron_ingot")],
      previousTask: "none",
      iconPath: "textures/items/iron_ingot",
    }
  );

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
    }
  );

  const crowbar = new Task(
    "hiddenyears:crowbar",
    { translate: "task.crowbar" },
    { translate: "task.crowbar.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
      conditions: [new ItemConditions("hiddenyears:iron_crowbar")],
      previousTask: "none",
      iconPath: "textures/items/iron_crowbar",
    }
  );

  const hammer = new Task(
    "hiddenyears:hammer",
    { translate: "task.hammer" },
    { translate: "task.hammer.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 12)],
      conditions: [new ItemConditions("hiddenyears:iron_hammer")],
      previousTask: "none",
      iconPath: "textures/items/iron_hammer",
    }
  );

  const dagger = new Task(
    "hiddenyears:dagger",
    { translate: "task.dagger" },
    { translate: "task.dagger.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 12)],
      conditions: [new ItemConditions("hiddenyears:iron_dagger")],
      previousTask: "none",
      iconPath: "textures/items/iron_dagger",
    }
  );

  const sledgehammer = new Task(
    "hiddenyears:sledgehammer",
    { translate: "task.sledgehammer" },
    { translate: "task.sledgehammer.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
      conditions: [new ItemConditions("hiddenyears:iron_sledgehammer")],
      previousTask: "none",
      iconPath: "textures/items/iron_sledgehammer",
    }
  );

  const prolugueActII = new TaskGroup(
    "hiddenyears:prolugue_act_II",
    { translate: "task.prolugue.act_2" },
    {
      rawtext: [
        { translate: "task.prolugue.act_2.desc_1" },
        { text: Format.newLine },
        { translate: "task.prolugue.act_2.desc_2" },
      ],
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
      ],
      awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
      previousTask: "none",
      iconPath: "textures/items/iron_ingot",
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
      iconPath: "textures/items/silver_ingot",
    }
  );

  const diamond = new Task(
    "hiddenyears:diamond",
    { translate: "task.diamond" },
    { translate: "task.diamond.desc" },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
      conditions: [new ItemConditions("minecraft:diamond")],
      previousTask: "none",
      iconPath: "textures/items/diamond",
    }
  );

  const crystal = new Task(
    "hiddenyears:crystal",
    { translate: "task.crystal" },
    { translate: "task.crystal.desc" },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 8)],
      conditions: [new ItemConditions("hiddenyears:crystal_ingot")],
      previousTask: "none",
      iconPath: "textures/items/crystal_ingot",
    }
  );

  // 世界探索任务
  const god = new Task(
    "hiddenyears:god",
    { translate: "task.god" },
    { translate: "task.god.desc" },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 8)],
      conditions: [new ItemConditions("hiddenyears:letter_1")],
      previousTask: "none",
      iconPath: "textures/items/lost_letter",
    }
  );

  const totem = new Task(
    "hiddenyears:totem",
    { translate: "task.totem" },
    { translate: "task.totem.desc" },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
      conditions: [new ItemConditions("minecraft:totem_of_undying")],
      previousTask: "none",
      iconPath: "textures/items/totem",
    }
  );

  const prolugueActIII = new TaskGroup(
    "hiddenyears:prolugue_act_III",
    { translate: "task.prolugue.act_3" },
    {
      rawtext: [
        { translate: "task.prolugue.act_3.desc_1" },
        { text: Format.newLine },
        { translate: "task.prolugue.act_3.desc_2" },
      ],
    },
    {
      tasks: [silver, diamond, crystal, god, totem],
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
      previousTask: "none",
      iconPath: "textures/items/diamond",
    }
  );
  // 第二章·第一幕任务
  const gold = new Task(
    "hiddenyears:gold",
    { translate: "task.gold" },
    { translate: "task.gold.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
      conditions: [new ItemConditions("minecraft:gold_ingot")],
      previousTask: "none",
      iconPath: "textures/items/gold_ingot",
    }
  );

  const obsidian = new Task(
    "hiddenyears:obsidian",
    { translate: "task.obsidian" },
    { translate: "task.obsidian.desc" },
    {
      awards: [new ItemAwards("minecraft:flint_and_steel", 1)],
      conditions: [new ItemConditions("minecraft:obsidian")],
      previousTask: "none",
      iconPath: "textures/ui/task/obsidian",
    }
  );

  const ghastTear = new Task(
    "hiddenyears:ghast_tear",
    { translate: "task.ghast_tear" },
    { translate: "task.ghast_tear.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
      conditions: [new ItemConditions("minecraft:ghast_tear")],
      previousTask: "none",
      iconPath: "textures/items/ghast_tear",
    }
  );

  const compass = new Task(
    "hiddenyears:compass",
    { translate: "task.compass" },
    { translate: "task.compass.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
      conditions: [new ItemConditions("minecraft:lodestone")],
      previousTask: "none",
      iconPath: "textures/ui/task/lodestone",
    }
  );

  const respawnAnchor = new Task(
    "hiddenyears:respawn_anchor",
    { translate: "task.respawn_anchor" },
    { translate: "task.respawn_anchor.desc" },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
      conditions: [new ItemConditions("minecraft:respawn_anchor")],
      previousTask: "none",
      iconPath: "textures/ui/task/respawn_anchor",
    }
  );

  const blazeRod = new Task(
    "hiddenyears:blaze_rod",
    { translate: "task.blaze_rod" },
    { translate: "task.blaze_rod.desc" },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 1)],
      conditions: [new ItemConditions("minecraft:blaze_rod")],
      previousTask: "none",
      iconPath: "textures/items/blaze_rod",
    }
  );

  const wither = new Task(
    "hiddenyears:wither",
    { translate: "task.wither" },
    {
      rawtext: [
        { translate: "task.wither.desc_1" },
        { text: Format.newLine },
        { translate: "task.wither.desc_2" },
        { text: Format.blankLine() },
        { translate: "task.wither.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("minecraft:diamond", 12)],
      conditions: [new KillEntityConditions("wither")],
      previousTask: "none",
      iconPath: "textures/items/spawn_eggs/spawn_egg_wither",
    }
  );
  wither.pushToServer(server);

  const chapterIIActI = new TaskGroup(
    "hiddenyears:chapter2_act1",
    { translate: "task.chapter_2.act_1" },
    { translate: "task.chapter_2.act_1.desc" },
    {
      tasks: [
        gold,
        obsidian,
        ghastTear,
        compass,
        respawnAnchor,
        blazeRod,
        wither,
      ],
      awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
      previousTask: "none",
      iconPath: "textures/items/gold_ingot",
    }
  );

  // 第二章·第二幕任务
  const enderEye = new Task(
    "hiddenyears:ender_eye",
    { translate: "task.ender_eye" },
    { translate: "task.ender_eye.desc" },
    {
      awards: [new ItemAwards("hiddenyears:diamond_coin", 1)],
      conditions: [new ItemConditions("minecraft:ender_eye")],
      previousTask: "none",
      iconPath: "textures/items/ender_eye",
    }
  );

  const dragonBreath = new Task(
    "hiddenyears:dragon_breath",
    { translate: "task.dragon_breath" },
    { translate: "task.dragon_breath.desc" },
    {
      awards: [new ItemAwards("hiddenyears:diamond_coin", 5)],
      conditions: [new ItemConditions("minecraft:dragon_breath")],
      previousTask: "none",
      iconPath: "textures/items/dragons_breath",
    }
  );

  const elytra = new Task(
    "hiddenyears:elytra",
    { translate: "task.elytra" },
    { translate: "task.elytra.desc" },
    {
      awards: [new ItemAwards("minecraft:diamond", 5)],
      conditions: [new ItemConditions("minecraft:elytra")],
      previousTask: "none",
      iconPath: "textures/items/elytra",
    }
  );

  const enderDragon = new Task(
    "hiddenyears:ender_dragon",
    { translate: "task.ender_dragon" },
    {
      rawtext: [
        { translate: "task.ender_dragon.desc_1" },
        { text: Format.newLine },
        { translate: "task.ender_dragon.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("minecraft:diamond", 15)],
      conditions: [new KillEntityConditions("ender_dragon")],
      previousTask: "none",
      iconPath: "textures/ui/task/dragon_head",
    }
  );
  enderDragon.pushToServer(server);

  const chapterIIActII = new TaskGroup(
    "hiddenyears:chapter2_act2",
    { translate: "task.chapter_2.act_2" },
    { translate: "task.chapter_2.act_2.desc" },
    {
      tasks: [enderEye, dragonBreath, elytra, enderDragon],
      awards: [new ItemAwards("minecraft:diamond", 10)],
      previousTask: "none",
      iconPath: "textures/items/ender_eye",
    }
  );
  // 第一章·第一幕任务
  const summaryOfElvenHistory = new Task(
    "hiddenyears:summary_of_elven_history",
    { translate: "task.summary_of_elven_history" },
    { translate: "task.summary_of_elven_history.desc" },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 1)],
      conditions: [new ItemConditions("hiddenyears:letter_1")],
      previousTask: "none",
      iconPath: "textures/items/lost_letter",
    }
  );

  const imprisonedWing = new Task(
    "hiddenyears:imprisoned_wing",
    { translate: "task.imprisoned_wing" },
    {
      rawtext: [
        { translate: "task.imprisoned_wing.desc_1" },
        { text: Format.newLine },
        { translate: "task.imprisoned_wing.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 2)],
      conditions: [new ItemConditions("hiddenyears:imprisoned_wing")],
      previousTask: "none",
      iconPath: "textures/items/imprisoned_wing",
    }
  );

  const bloodyGem = new Task(
    "hiddenyears:bloody_gem",
    { translate: "task.bloody_gem" },
    {
      rawtext: [
        { translate: "task.bloody_gem.desc_1" },
        { text: Format.newLine },
        { translate: "task.bloody_gem.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 2)],
      conditions: [new ItemConditions("hiddenyears:ruby")],
      previousTask: "none",
      iconPath: "textures/items/ruby",
    }
  );

  const bloodyArmor = new Task(
    "hiddenyears:bloody_armor",
    { translate: "task.bloody_armor" },
    {
      rawtext: [
        { translate: "task.bloody_armor.desc_1" },
        { text: Format.newLine },
        { translate: "task.bloody_armor.desc_2" },
        { text: Format.newLine },
        { translate: "task.bloody_armor.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
      conditions: [new ItemConditions("hiddenyears:ruby_chestplate")],
      previousTask: "none",
      iconPath: "textures/items/ruby_chestplate",
    }
  );

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
        { translate: "task.decayed_servant.desc_4" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
      conditions: [new KillEntityConditions("hiddenyears:ruby_zombie")],
      previousTask: "none",
      iconPath: "textures/items/egg_ruby_zombie",
    }
  );

  const trueAndFalse = new Task(
    "hiddenyears:true_and_false",
    { translate: "task.true_and_false" },
    {
      rawtext: [
        { translate: "task.true_and_false.desc_1" },
        { text: Format.newLine },
        { translate: "task.true_and_false.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
      conditions: [
        new KillEntityConditions("hiddenyears:ferocious_ruby_guardian"),
      ],
      previousTask: "none",
      iconPath: "textures/items/egg_ruby_guardian",
    }
  );

  const thunderKey = new Task(
    "hiddenyears:thunder_key",
    { translate: "task.thunder_key" },
    {
      rawtext: [
        { translate: "task.thunder_key.desc_1" },
        { text: Format.newLine },
        { translate: "task.thunder_key.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("minecraft:potion", 4)],
      conditions: [new ItemConditions("hiddenyears:lightning_key")],
      previousTask: "none",
      iconPath: "textures/items/thunder_key",
    }
  );

  const bloodGaze = new Task(
    "hiddenyears:blood_gaze",
    { translate: "task.blood_gaze" },
    {
      rawtext: [
        { translate: "task.blood_gaze.desc_1" },
        { text: Format.newLine },
        { translate: "task.blood_gaze.desc_2" },
        { text: Format.newLine },
        { translate: "task.blood_gaze.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:diamond_badge", 1)],
      conditions: [new ItemConditions("hiddenyears:crimson_eyes")],
      previousTask: "none",
      iconPath: "textures/items/crimson_eyes",
    }
  );

  const worldEndFruit = new Task(
    "hiddenyears:ruby_apple",
    { translate: "task.world_end_fruit" },
    {
      rawtext: [
        { translate: "task.world_end_fruit.desc_1" },
        { text: Format.newLine },
        { translate: "task.world_end_fruit.desc_2" },
        { text: Format.newLine },
        { translate: "task.world_end_fruit.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 12)],
      conditions: [new ItemConditions("hiddenyears:ruby_apple")],
      previousTask: "none",
      iconPath: "textures/items/ruby_apple",
    }
  );

  const songOfPowerAndBlood = new Task(
    "hiddenyears:song_of_power_and_blood",
    { translate: "task.song_of_power_and_blood" },
    {
      rawtext: [
        { translate: "task.song_of_power_and_blood.desc_1" },
        { text: Format.newLine },
        { translate: "task.song_of_power_and_blood.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("minecraft:diamond", 10)],
      conditions: [new KillEntityConditions("hiddenyears:king_of_ruby")],
      previousTask: "none",
      iconPath: "textures/items/ruby_crown",
    }
  );
  songOfPowerAndBlood.pushToServer(server);

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
        songOfPowerAndBlood,
      ],
      awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
      previousTask: "none",
      iconPath: "textures/items/ruby",
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
        { translate: "task.green_in_sand.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:copper_coin", 5)],
      conditions: [new ItemConditions("minecraft:cactus")],
      previousTask: "none",
      iconPath: "textures/items/dye_powder_green",
    }
  );

  const hardToSwallowFood = new Task(
    "hiddenyears:hard_to_swallow_food",
    { translate: "task.hard_to_swallow_food" },
    {
      rawtext: [
        { translate: "task.hard_to_swallow_food.desc" },
        { text: Format.newLine },
        { translate: "task.hard_to_swallow_food.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 5)],
      conditions: [new ItemConditions("hiddenyears:sand_meat")],
      previousTask: "none",
      iconPath: "textures/items/sand_meat",
    }
  );

  const dryPot = new Task(
    "hiddenyears:dry_pot",
    { translate: "task.dry_pot" },
    {
      rawtext: [
        { translate: "task.dry_pot.desc" },
        { text: Format.newLine },
        { translate: "task.dry_pot.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
      conditions: [new ItemConditions("hiddenyears:desert_herbpot")],
      previousTask: "none",
      iconPath: "textures/items/herb_bottle",
    }
  );

  const godArrival = new Task(
    "hiddenyears:god_arrival",
    { translate: "task.god_arrival" },
    {
      rawtext: [
        { translate: "task.god_arrival.desc" },
        { text: Format.newLine },
        { translate: "task.god_arrival.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 10)],
      conditions: [new ItemConditions("hiddenyears:cooling_herbtea")],
      previousTask: "none",
      iconPath: "textures/items/cooling_herbtea",
    }
  );

  const sacrifice = new Task(
    "hiddenyears:sacrifice",
    { translate: "task.sacrifice" },
    {
      rawtext: [
        { translate: "task.sacrifice.desc" },
        { text: Format.newLine },
        { translate: "task.sacrifice.desc_2" },
        { text: Format.newLine },
        { translate: "task.sacrifice.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:sandcaust_apple", 2)],
      conditions: [new ItemConditions("hiddenyears:rabbit_paw")],
      previousTask: "none",
      iconPath: "textures/items/rabbit_paw",
    }
  );

  const shatteredSand = new Task(
    "hiddenyears:shattered_sand",
    { translate: "task.shattered_sand" },
    {
      rawtext: [
        { translate: "task.shattered_sand.desc" },
        { text: Format.newLine },
        { translate: "task.shattered_sand.desc_2" },
        { text: Format.newLine },
        { translate: "task.shattered_sand.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
      conditions: [new ItemConditions("hiddenyears:shattered_sand_cudgel")],
      previousTask: "none",
      iconPath: "textures/items/shattered_sand_cudgel",
    }
  );

  const keyOfContract = new Task(
    "hiddenyears:key_of_contract",
    { translate: "task.key_of_contract" },
    {
      rawtext: [
        { translate: "task.key_of_contract.desc" },
        { text: Format.newLine },
        { translate: "task.key_of_contract.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
      conditions: [new ItemConditions("hiddenyears:drift_sand_key")],
      previousTask: "none",
      iconPath: "textures/items/drift_sand_key",
    }
  );

  const blessingOfRain = new Task(
    "hiddenyears:blessing_of_rain",
    { translate: "task.blessing_of_rain" },
    {
      rawtext: [
        { translate: "task.blessing_of_rain.desc" },
        { text: Format.newLine },
        { translate: "task.blessing_of_rain.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:letter_1", 1)],
      conditions: [new ItemConditions("hiddenyears:blessing_of_isis")],
      previousTask: "none",
      iconPath: "textures/items/blessing_of_isis",
    }
  );

  const kingdomFall = new Task(
    "hiddenyears:kingdom_fall",
    { translate: "task.kingdom_fall" },
    {
      rawtext: [
        { translate: "task.kingdom_fall.desc" },
        { text: Format.newLine },
        { translate: "task.kingdom_fall.desc_2" },
        { text: Format.newLine },
        { translate: "task.kingdom_fall.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:gold_coin", 15)],
      conditions: [new ItemConditions("hiddenyears:desert_heart")],
      previousTask: "none",
      iconPath: "textures/items/desert_heart",
    }
  );

  const statueOfPast = new Task(
    "hiddenyears:statue_of_past",
    { translate: "task.statue_of_past" },
    {
      rawtext: [
        { translate: "task.statue_of_past.desc" },
      ],
    },
    {
      awards: [new ItemAwards("minecraft:diamond", 5)],
      conditions: [new ItemConditions("hiddenyears:past_statue")],
      previousTask: "none",
      iconPath: "textures/items/past_statue",
    }
  );

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
        { translate: "task.symbol_of_life.desc_5" },
      ],
    },
    {
      awards: [new ItemAwards("minecraft:diamond", 5)],
      conditions: [new ItemConditions("hiddenyears:rebirth_statue")],
      previousTask: "none",
      iconPath: "textures/items/rebirth_statue",
    }
  );

  const rainInSand = new Task(
    "hiddenyears:rain_in_sand",
    { translate: "task.rain_in_sand" },
    {
      rawtext: [
        { translate: "task.rain_in_sand.desc" },
        { text: Format.newLine },
        { translate: "task.rain_in_sand.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:letter_1", 1)],
      conditions: [new ItemConditions("hiddenyears:shattered_sand_staff")],
      previousTask: "none",
      iconPath: "textures/items/shattered_sand_staff",
    }
  );

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
        rainInSand,
      ],
      awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
      previousTask: "none",
      iconPath: "textures/items/desert_heart",
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
        { translate: "task.gold_in_sand.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
      conditions: [new ItemConditions("hiddenyears:gold_sand")],
      previousTask: "none",
      iconPath: "textures/items/gold_sand",
    }
  );

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
        { translate: "task.curse_of_sand.desc_4" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 5)],
      conditions: [
        new KillEntityConditions("hiddenyears:sandcaust_silverfish"),
      ],
      previousTask: "none",
      iconPath: "textures/items/egg_sand_silverfish",
    }
  );

  const storyOfGold = new Task(
    "hiddenyears:story_of_gold",
    { translate: "task.story_of_gold" },
    {
      rawtext: [
        { translate: "task.story_of_gold.desc_1" },
        { text: Format.newLine },
        { translate: "task.story_of_gold.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 10)],
      conditions: [new ItemConditions("hiddenyears:letter_1")],
      previousTask: "none",
      iconPath: "textures/items/paper",
    }
  );

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
        { translate: "task.ancient_myth.desc_6" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
      conditions: [new ItemConditions("hiddenyears:letter_1")],
      previousTask: "none",
      iconPath: "textures/items/paper",
    }
  );

  const signOfMutation = new Task(
    "hiddenyears:sign_of_mutation",
    { translate: "task.sign_of_mutation" },
    {
      rawtext: [
        { translate: "task.sign_of_mutation.desc_1" },
        { text: Format.newLine },
        { translate: "task.sign_of_mutation.desc_2" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
      conditions: [new KillEntityConditions("hiddenyears:scorpion")],
      previousTask: "none",
      iconPath: "textures/items/egg_scorpion",
    }
  );

  const palaceOfGods = new Task(
    "hiddenyears:palace_of_gods",
    { translate: "task.palace_of_gods" },
    {
      rawtext: [
        { translate: "task.palace_of_gods.desc_1" },
        { text: Format.newLine },
        { translate: "task.palace_of_gods.desc_2" },
        { text: Format.newLine },
        { translate: "task.palace_of_gods.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("minecraft:diamond", 15)],
      conditions: [new ItemConditions("hiddenyears:isis_crown")],
      previousTask: "none",
      iconPath: "textures/items/isis_crown",
    }
  );

  const eyeOfSandErosion = new Task(
    "hiddenyears:eye_of_sand_erosion",
    { translate: "task.eye_of_sand_erosion" },
    {
      rawtext: [
        { translate: "task.eye_of_sand_erosion.desc_1" },
        { text: Format.newLine },
        { translate: "task.eye_of_sand_erosion.desc_2" },
        { text: Format.newLine },
        { translate: "task.eye_of_sand_erosion.desc_3" },
      ],
    },
    {
      awards: [new ItemAwards("hiddenyears:sandcaust_apple", 5)],
      conditions: [new ItemConditions("hiddenyears:sandcaust_spider_eye")],
      previousTask: "none",
      iconPath: "textures/items/sand_spider_eye",
    }
  );

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
        eyeOfSandErosion,
      ],
      awards: [new ItemAwards("hiddenyears:gold_coin", 20)],
      previousTask: "none",
      iconPath: "textures/items/isis_crown",
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
        { translate: "task.echo_shard.desc_2" },
      ],
    },
    {
      conditions: [new ItemConditions("minecraft:echo_shard")],
      previousTask: "none",
      iconPath: "textures/items/echo_shard",
      awards: [new ItemAwards("hiddenyears:echo_coin", 5)],
    }
  );

  const chapterIVactI = new TaskGroup(
    "hiddenyears:chapter4_act1",
    {
      translate: "task.chapter_4.act_1",
    },
    {
      translate: "task.chapter_4.act_1.desc",
    },
    {
      tasks: [echoShard],
      previousTask: "none",
      awards: [new ItemAwards("hiddenyears:echo_coin", 20)],
      iconPath: "textures/items/echo_coin",
    }
  );

  return [
    prolugueActI,
    prolugueActII,
    prolugueActIII,
    chapterIActI,
    chapterIIActI,
    chapterIIActII,
    chapterIIIActI,
    chapterIIIActII,
    chapterIVactI,
  ];
}
