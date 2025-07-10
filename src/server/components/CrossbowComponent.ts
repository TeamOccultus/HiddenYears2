import {
  EquipmentSlot,
  ItemComponentCompleteUseEvent,
  ItemComponentUseEvent,
  ItemStack,
  Player,
  system,
  world,
} from "@minecraft/server";
import { EntityUtils } from "@starock/entity";

// @todo: 添加耐久消耗机制
export class CrossbowComponent {
  constructor(readonly componentName: string) {
    world.afterEvents.itemReleaseUse.subscribe((arg) => {
      const component = arg.itemStack.getComponent(this.componentName);
      if(!component) return;
      onReleaseUse(arg, this);
    })
    system.beforeEvents.startup.subscribe((arg) => {
      const that = this;
      arg.itemComponentRegistry.registerCustomComponent(componentName, {
        onCompleteUse(arg0, arg1) {
          onComplete(arg0, that);
        },
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
      if (item.typeId.includes("pulling_0")) return "pulling_0";
      if (item.typeId.includes("pulling_1")) return "pulling_1";
      if (item.typeId.includes("pulling_2")) return "pulling_2";
      if (item.typeId.includes("loaded")) return "loaded";
      return "standby";
    }
    const params = component.customComponentParameters
      .params as CrossbowComponentParams;
    if (!params) return "standby";
    if (!params.pulling_level) return "standby";
    return params.pulling_level;
  }
  getNextLevelItem(item: ItemStack): ItemStack {
    const component = item.getComponent(this.componentName);
    if (!component) throw new Error();
    const params = component.customComponentParameters
      .params as CrossbowComponentParams;
    if (!params) throw new Error();
    return new ItemStack(params.next_level_item);
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
    const offhandItem = EntityUtils.getEquipmentItem(
      player,
      EquipmentSlot.Offhand
    );
    if (offhandItem) {
      if (this.getAmmunitions(item).includes(offhandItem.typeId)) return true;
    }
    const container = player.getComponent("inventory")!.container;
    this.getAmmunitions(item).forEach((ammunition) => {
      if (container.find(new ItemStack(ammunition))) return true;
    });
    return false;
  }
  consumeAmmunition(item: ItemStack, player: Player) {
    const offhandItem = EntityUtils.getEquipmentItem(
      player,
      EquipmentSlot.Offhand
    );
    if (offhandItem) {
      if (this.getAmmunitions(item).includes(offhandItem.typeId)) {
        offhandItem.amount--;
        EntityUtils.setEquipmentItem(
          player,
          offhandItem,
          EquipmentSlot.Offhand
        );
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

export type CrossbowPullingLevels =
  | "standby"
  | "pulling_0"
  | "pulling_1"
  | "pulling_2"
  | "loaded";

export type CrossbowComponentParams = {
  pulling_level: CrossbowPullingLevels;
  next_level_item: string;
  ammunitions: string[];
};

function onComplete(
  arg0: ItemComponentCompleteUseEvent,
  that: CrossbowComponent
) {
  const [player, item] = [arg0.source, arg0.itemStack];
  const pullingLevel = that.getPullingLevels(item);
  console.warn(pullingLevel);
  /*if (pullingLevel === "loaded") {
    EntityUtils.setEquipmentItem(player, that.getNextLevelItem(item));
    return;
  }*/
  if (pullingLevel === "pulling_1") {
    player.playSound("crossbow.loading.middle");
    EntityUtils.setEquipmentItem(player, that.getNextLevelItem(item));
    return;
  }
  if (pullingLevel === "pulling_2") {
    player.playSound("crossbow.loading.end");
    EntityUtils.setEquipmentItem(player, that.getNextLevelItem(item));
    return;
  }
  if (pullingLevel === "standby") {
    if (!that.hasAmmunition(item, player)) return;
    that.consumeAmmunition(item, player);
    player.playSound("crossbow.loading.start");
    EntityUtils.setEquipmentItem(player, that.getNextLevelItem(item));
    return;
  }
  EntityUtils.setEquipmentItem(player, that.getNextLevelItem(item));
}

function onReleaseUse(arg0: ItemComponentUseEvent, that: CrossbowComponent) {
  const [player, item] = [arg0.source, arg0.itemStack];
  const pullingLevel = that.getPullingLevels(item);
  console.warn(pullingLevel);
  if (pullingLevel === "loaded") {
    EntityUtils.setEquipmentItem(player, that.getNextLevelItem(item));
    return;
  }
}
