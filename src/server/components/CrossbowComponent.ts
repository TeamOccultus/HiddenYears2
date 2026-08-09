import {
  EquipmentSlot,
  ItemComponentCompleteUseEvent,
  ItemComponentUseEvent,
  ItemStack,
  Player,
  system,
  world
} from "@minecraft/server";
import {
  consumeDurability,
  getEquipmentItem,
  migrateDamage,
  migrateEnchantments,
  setEquipmentItem
} from "@occultus/api";

function copyItem(oldItem: ItemStack, to?: string, amount?: number) {
  if (!to) to = oldItem.typeId;
  if (!amount) amount = oldItem.amount;
  const newItem = new ItemStack(to, amount);
  migrateDamage(oldItem, newItem);
  migrateEnchantments(oldItem, newItem);
  newItem.lockMode = oldItem.lockMode;
  if (oldItem.nameTag) {
    newItem.nameTag = oldItem.nameTag;
  }
  if (oldItem.getLore().length > 0) {
    newItem.setLore(oldItem.getLore());
  }
  if (oldItem.getDynamicPropertyIds().length > 0) {
    oldItem.getDynamicPropertyIds().forEach((id) => {
      newItem.setDynamicProperty(id, oldItem.getDynamicProperty(id));
    });
  }
  return newItem;
}

export class CrossbowComponent {
  constructor(readonly componentName: string) {
    world.afterEvents.itemReleaseUse.subscribe((arg) => {
      if (!arg.itemStack) return;
      const component = arg.itemStack.getComponent(this.componentName);
      if (!component) return;
      onReleaseUse(arg, this);
    });
    system.beforeEvents.startup.subscribe((arg) => {
      const that = this;
      arg.itemComponentRegistry.registerCustomComponent(componentName, {
        onCompleteUse(arg0, arg1) {
          onComplete(arg0, that);
        },
        onUse(arg0, arg1) {
          onUse(arg0, that);
        }
      });
    });
  }
  /**
   * 获取物品的蓄力等级
   * @param item
   * @returns
   */
  getPullingLevels(item: ItemStack): CrossbowPullingLevels {
    const component = item.getComponent(this.componentName);
    if (!component) {
      if (item.typeId.includes("loaded")) return "loaded";
      return "standby";
    }
    const params = component.customComponentParameters
      .params as CrossbowComponentParams;
    if (!params) return "standby";
    if (!params.pulling_level) return "standby";
    return params.pulling_level;
  }
  getNextLevelItem(item: ItemStack, player: Player): ItemStack | undefined {
    const component = item.getComponent(this.componentName);
    if (!component) throw new Error();
    const params = component.customComponentParameters
      .params as CrossbowComponentParams;
    if (!params) throw new Error();
    const newItem = copyItem(item, params.next_level_item);
    if (params.pulling_level === "loaded") {
      return consumeDurability(newItem, 1, player);
    }
    return newItem;
  }
  getAmmunitions(item: ItemStack): string[] {
    const component = item.getComponent(this.componentName);
    if (!component) throw new Error();
    const params = component.customComponentParameters
      .params as CrossbowComponentParams;
    if (!params) throw new Error();
    return params.ammunitions;
  }
  hasAmmunition(item: ItemStack, player: Player): boolean {
    if (player.getGameMode() === "Creative") return true;
    const offhandItem = getEquipmentItem(player, EquipmentSlot.Offhand);
    if (offhandItem) {
      if (this.getAmmunitions(item).includes(offhandItem.typeId)) return true;
    }
    const container = player.getComponent("inventory")!.container;
    let result: boolean = false;
    this.getAmmunitions(item).forEach((ammunition) => {
      if (container.contains(new ItemStack(ammunition))) result = true;
    });
    return result;
  }
  consumeAmmunition(item: ItemStack, player: Player) {
    if (player.getGameMode() === "Creative") return;
    const offhandItem = getEquipmentItem(player, EquipmentSlot.Offhand);
    if (offhandItem) {
      if (this.getAmmunitions(item).includes(offhandItem.typeId)) {
        offhandItem.amount--;
        setEquipmentItem(player, offhandItem, EquipmentSlot.Offhand);
        return;
      }
    }
    const container = player.getComponent("inventory")!.container;
    this.getAmmunitions(item).forEach((ammunition) => {
      const index = container.find(new ItemStack(ammunition));
      if (index) {
        const newItem = container.getItem(index);
        if (!newItem) return;
        newItem.amount--;
        container.setItem(index, newItem);
      }
    });
  }
}

export type CrossbowPullingLevels = "standby" | "loaded";

export type CrossbowComponentParams = {
  pulling_level: CrossbowPullingLevels;
  next_level_item: string;
  ammunitions: string[];
};

function onUse(arg0: ItemComponentUseEvent, that: CrossbowComponent) {
  const [player, item] = [arg0.source, arg0.itemStack];
  if (!item) return;
  const pullingLevel = that.getPullingLevels(item);
  if (pullingLevel === "standby") {
    player.playSound("crossbow.loading.start");
  }
}

function onComplete(
  arg0: ItemComponentCompleteUseEvent,
  that: CrossbowComponent
) {
  const [player, item] = [arg0.source, arg0.itemStack];
  const pullingLevel = that.getPullingLevels(item);
  console.log(that.hasAmmunition(item, player));
  if (pullingLevel === "standby") {
    if (!that.hasAmmunition(item, player)) return;
    that.consumeAmmunition(item, player);
    player.playSound("crossbow.loading.end");
    setEquipmentItem(player, that.getNextLevelItem(item, player));
    return;
  }
  setEquipmentItem(player, that.getNextLevelItem(item, player));
}

function onReleaseUse(arg0: ItemComponentUseEvent, that: CrossbowComponent) {
  const [player, item] = [arg0.source, arg0.itemStack];
  if (!item) return;
  const pullingLevel = that.getPullingLevels(item);
  if (pullingLevel === "loaded") {
    setEquipmentItem(player, that.getNextLevelItem(item, player));
    return;
  }
}
