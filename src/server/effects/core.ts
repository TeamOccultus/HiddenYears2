import { Entity, system, world } from "@minecraft/server";
import { vanillaDimensions } from "../../data/data";

export class VirtualEffect {
  protected effect: (entity: Entity, level: number) => void;
  protected onLevelUp: (
    entity: Entity,
    newLevel: number,
    oldLevel: number
  ) => void;
  protected systemId: number;
  constructor(
    readonly id: string,
    public maxLevel: number,
    protected triggerTick: number = 1
  ) {}
  getDynamicPropertyToken(): string {
    return this.id + ":level";
  }
  /**
   * Set an entity's effect level.
   * @param entity The entity to set level.
   * @param level The level.
   * @throws RangeError when level > maxLevel
   */
  setLevel(entity: Entity, level: number = 0): void {
    if (!level) level = 0;
    if (level > this.maxLevel) {
      throw new RangeError(
        "The level to set is bigger than max level! The max level is:" +
          this.maxLevel
      );
    }
    entity.setDynamicProperty(this.getDynamicPropertyToken(), level);
  }
  getLevel(entity: Entity): number {
    const level = entity.getDynamicProperty(this.getDynamicPropertyToken());
    if (!level) {
      this.setLevel(entity, 0);
      return 0;
    }
    if (typeof level !== "number") {
      throw new Error();
    }
    return level;
  }
  addLevel(entity: Entity, level: number = 1): number {
    const oldLevel = this.getLevel(entity);
    let newLevel = 0;
    if (oldLevel + level > this.maxLevel) {
      this.setLevel(entity, this.maxLevel);
      if (this.onLevelUp) {
        this.onLevelUp(entity, oldLevel, newLevel);
        console.log(this.onLevelUp.toString());
      }
      return this.maxLevel;
    }
    newLevel = oldLevel + level;
    this.setLevel(entity, newLevel);
    if (this.onLevelUp) {
      this.onLevelUp(entity, oldLevel, newLevel);
      console.log(this.onLevelUp.toString());
    }
    return newLevel;
  }
  addLevelTemporarily(entity: Entity, level: number = 0, tick: number = 20) {
    const oldLevel = this.getLevel(entity);
    this.addLevel(entity, level);
    system.runTimeout(() => {
      if (entity.isValid()) {
        this.setLevel(entity, oldLevel);
      }
    }, tick);
  }
  setEffect(effect: (entity: Entity, level: number) => void, tick: number) {
    this.effect = effect;
    this.triggerTick = tick;
    if (this.systemId) {
      system.clearRun(this.systemId);
      let num = system.runInterval(() => {
        this.trigger;
      }, this.triggerTick);
      this.systemId = num;
    }
  }
  setLevelUp(
    event: (entity: Entity, newLevel: number, oldLevel: number) => void
  ) {
    this.onLevelUp = event;
  }
  protected trigger() {
    system.runInterval(() => {
      vanillaDimensions.forEach((dimension) => {
        dimension.getEntities().forEach((entity) => {
          const level = this.getLevel(entity);
          if (level > 0) {
            this.effect(entity, level);
          }
        });
      });
    }, this.triggerTick);
    world.afterEvents.playerSpawn.subscribe((arg) => {
      if (!arg.initialSpawn) {
        this.setLevel(arg.player);
      }
    });
  }
  /**
   * Start trigger.
   */
  startTrigger() {
    let num = system.runInterval(() => {
      this.trigger();
    }, this.triggerTick);
    this.systemId = num;
  }
  /**
   * Stop trigger.
   */
  stopTrigger() {
    if (this.systemId) system.clearRun(this.systemId);
  }
}
