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
      iconPath: "textures/items/stick"
    }
  );

  return [prolugueActI];
}
