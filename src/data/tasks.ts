import {
  Format,
  ItemAwards,
  ItemConditions,
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
      conditions: [new ItemConditions("minecraft:wheat")],
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
      conditions: [
        new KillEntityFamilyConditions("monster", "family.monster", this),
      ],
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
    tasks: [
      silver,
      diamond,
      crystal,
      god,
      totem
    ],
    awards: [new ItemAwards("hiddenyears:stack_of_gold_coin", 15)],
    previousTask: "none",
    iconPath: "textures/items/diamond"
  }
);

  return [prolugueActI, prolugueActII, prolugueActIII];
}
