import { ItemStack, world } from "@minecraft/server";
import { NumberRange } from "@minecraft/common";
import { getEquipmentItem, randomInteger } from "@lazuli/ldk2";

let attributes: ItemAttribute[] = [];

export class ItemAttribute {
  constructor(
    public id: string,
    public valueRange: NumberRange,
    public name: string
  ) {}
  trigger() {}
  registry() {
    attributes.push(this);
    this.trigger();
  }
  getValue(item: ItemStack) {}
  add(item: ItemStack, value: number) {
    if (item.getDynamicProperty(this.id)) {
      return;
    }
    if (value > this.valueRange.max || value < this.valueRange.min) {
      throw new RangeError("The given value is invalid!");
    }
  }
}

export class ItemAttackAttribute extends ItemAttribute {
  constructor(
    public id: string,
    public valueRange: NumberRange,
    public name: string
  ) {
    super(id, valueRange, name);
  }
  trigger(): void {
    world.afterEvents.entityHurt.subscribe((event) => {
      if (event.damage) {
        if (!(event.damageSource.cause === "entityAttack")) return;
        if (!event.damageSource.damagingEntity) return;
      }
    });
  }
}

export class ItemAttributeManager {
  static getAllAttributes() {
    return attributes;
  }
}
