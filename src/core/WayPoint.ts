import { Player, Vector3, world } from "@minecraft/server";
import { toVec3, Vector3Utils } from "@occultus/api";

export class WayPoint {
  static DYNAMIC_PROPERTY = "hiddenyears:waystone";
  static WAYSTONE_IDENTIFIER = "hiddenyears:waystone";
  /**
   * 返回传送点是否可用
   * @param config 
   * @returns 
   */
  static isWayStoneAvailable(config: WayPointData): boolean {
    /*const block  = world.getDimension(config.dim).getBlock(toVec3(...config.loc));
    if(!block) return false;
    if (block.typeId === WayPoint.WAYSTONE_IDENTIFIER) return true;
    return false;*/
    return true;
  }
  /**
   * 获取玩家已激活的的传送点列表
   * @param player 
   * @returns 
   */
  static getWayStoneList(player: Player): WayPointData[] {
    const data = player.getDynamicProperty(WayPoint.DYNAMIC_PROPERTY);
    if (!data) return [];
    if (typeof data !== "string") {
      player.setDynamicProperty(WayPoint.DYNAMIC_PROPERTY, JSON.stringify([]));
      return [];
    }
    return JSON.parse(data);
  }
  /**
   * 向玩家的动态属性中移除传送点数据
   * @param player 
   * @param location 
   */
  static removeWayStone(player: Player, location: Vector3) {
    const list = this.getWayStoneList(player);
    const newList = list.filter((waypoint) => {
      return !Vector3Utils.equals(toVec3(...waypoint.loc), location);
    });
    player.setDynamicProperty(WayPoint.DYNAMIC_PROPERTY, JSON.stringify(newList));
  }
  /**
   * 向玩家的动态属性中添加传送点数据
   * @param player 
   * @param data 
   * @return 
   */
  static addWayStone(player: Player, data: WayPointData) {
    const list = player.getDynamicProperty(WayPoint.DYNAMIC_PROPERTY);
    if (!list) {
      player.setDynamicProperty(WayPoint.DYNAMIC_PROPERTY, JSON.stringify([data]));
      return;
    }
    if (typeof list !== "string") {
      player.setDynamicProperty(WayPoint.DYNAMIC_PROPERTY, JSON.stringify([]));
      return;
    }
    const jsonData = JSON.parse(list);
    if (!Array.isArray(jsonData)) {
      player.setDynamicProperty(WayPoint.DYNAMIC_PROPERTY, JSON.stringify([]));
      return;
    }
    jsonData.push(data);
    player.setDynamicProperty(WayPoint.DYNAMIC_PROPERTY, JSON.stringify(jsonData));
    return;
  }
  static hasWayPoint(player: Player, location: Vector3): boolean {
    const list = this.getWayStoneList(player);
    for (const data of list) {
      if (
        data.loc[0] === location.x &&
        data.loc[1] === location.y &&
        data.loc[2] === location.z
      ) {
        return true;
      }
    }
    return false;
  }
}

/**
 * 传送点数据
 *
 * **IMPORTANT: 由于原版动态属性存储大小有上限，因此本类型中部分名称采用缩写表示**
 */
export type WayPointData = {
  /**
   * 传送点的坐标
   */
  loc: [number, number, number];
  /**
   * 传送点所在的维度
   */
  dim: string;
  /**
   * 传送点名称
   */
  name: string;
  /**
   * 传送点的图标
   */
  icp?: string;
};
