import { Entity, ItemStack, world } from "@minecraft/server";
import { BlockEntityData } from "./BlockEntityData";

export class BlockEntity {
  constructor() {}
  static getData(entity: Entity) {
    const block = entity.dimension.getBlock(entity.location);
    if (!block) return;
    const data: BlockEntityData = {
      dimension: entity.dimension,
      entity: entity,
      location: entity.location,
      block: block,
      scoreboardObjective: world.scoreboard.getObjective(
        `${entity.typeId}:${entity.id}`
      ),
    };
    return data;
  }
  static storeItem(items: ItemStack[] | ItemStack, data: BlockEntityData) {
    if (Array.isArray(items)) {
      this.storeWithContainer(data, items);
      return;
    }
    if (data.entity.hasComponent("inventory")) {
      this.storeWithContainer(data, items);
      return;
    }
    this.storeWithDynamicProperty(data, items);
  }
  static destory(data: BlockEntityData) {
    const item = this.getStoredItem(data);
    if (!item) {
      this.remove(data);
      return
    };
    if (Array.isArray(item)) {
      item.forEach((i) => {
        data.dimension.spawnItem(i, data.entity.location);
      });
    } else {
      data.dimension.spawnItem(item, data.entity.location);
    }
    this.remove(data);
  }
  static remove(data: BlockEntityData) {
    if (data.scoreboardObjective)
      world.scoreboard.removeObjective(data.scoreboardObjective);
    data.entity?.remove();
  }
  static clearStoredItem(data: BlockEntityData) {
    if (data.entity.hasComponent("inventory")) {
      const container = data.entity.getComponent("inventory")?.container;
      if (!container) return;
      container.clearAll();
      return;
    } else {
      data.entity.setDynamicProperty("starock:storedItem");
    }
  }
  static getStoredItem(
    data: BlockEntityData
  ): ItemStack | ItemStack[] | undefined {
    if (data.entity.hasComponent("inventory")) {
      const container = data.entity.getComponent("inventory")?.container;
      if (!container) return;
      const items: ItemStack[] = [];
      for (let i = 0; i < container.size; i++) {
        const item = container.getItem(i);
        if (item) {
          items.push(item);
        }
      }
      return items;
    }
    const rawData = data.entity.getDynamicProperty("starock:storedItem");
    if (typeof rawData !== "string") return;
    const itemData = JSON.parse(rawData);
    const item = new ItemStack(itemData.typeId, itemData.amount);
    if (!item.hasComponent("durability")) return item;
    if (!itemData.damage) return item;
    item.getComponent("durability")!.damage = itemData.damage;
    return item;
  }
  static storeWithContainer(
    data: BlockEntityData,
    item: ItemStack | ItemStack[]
  ) {
    const container = data.entity.getComponent("inventory")?.container;
    if (!container) return;
    if (Array.isArray(item)) {
      item.forEach((item) => {
        container.addItem(item);
      });
    } else {
      container.addItem(item);
    }
  }
  static storeWithDynamicProperty(data: BlockEntityData, item: ItemStack) {
    const itemData: ItemStackData = {
      typeId: item.typeId,
      amount: item.amount,
      damage: item.getComponent("durability")?.damage,
    };
    data.entity.setDynamicProperty(
      "starock:storedItem",
      JSON.stringify(itemData)
    );
    console.log(JSON.stringify(itemData));
  }
}

export class ItemStackData {
  constructor(
    readonly typeId: string,
    readonly amount: number,
    readonly damage?: number
  ) {}
  toString(): string {
    const data = {
      typeId: this.typeId,
      amount: this.amount,
      damage: this.damage,
    };
    return JSON.stringify(data);
  }
}
