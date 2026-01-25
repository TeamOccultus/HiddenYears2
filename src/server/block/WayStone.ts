import { Player, Vector3 } from "@minecraft/server";

export class WayStone {
  static getWayStoneList(player: Player): WayPointData[] {
    const data = player.getDynamicProperty("hiddenyears:waystone");
    if (!data) return [];
    if (typeof data !== "string") {
      player.setDynamicProperty("hiddenyears:waystone", JSON.stringify([]));
      return [];
    }
    return JSON.parse(data);
  }
  static addWayStone(player: Player, data: WayPointData) {
    const list = player.getDynamicProperty("hiddenyears:waystone");
    if (!list) {
      player.setDynamicProperty("hiddenyears:waystone", JSON.stringify([data]));
      return;
    }
    if (typeof list !== "string") {
      player.setDynamicProperty("hiddenyears:waystone", JSON.stringify([]));
      return;
    }
    const jsonData = JSON.parse(list);
    if (!Array.isArray(jsonData)) {
      player.setDynamicProperty("hiddenyears:waystone", JSON.stringify([]));
      return;
    }
    jsonData.push(data);
    player.setDynamicProperty("hiddenyears:waystone", JSON.stringify(jsonData));
    console.log(
      `Add ${data.name}(${data.loc}) to ${player.name}'s waystone list`,
    );
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
