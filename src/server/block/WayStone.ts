import { Player, Vector3 } from "@minecraft/server";

export class WayStone {
  static getWayStoneList(player: Player): WayStoneData[] {
    const data = player.getDynamicProperty("hiddenyears:waystone");
    if (!data) return [];
    if (typeof data !== "string") {
      player.setDynamicProperty("hiddenyears:waystone", JSON.stringify([]));
      return [];
    }
    return JSON.parse(data);
  }
  static addWayStone(player: Player, data: WayStoneData) {
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
      `Add ${data.name}(${data.location}) to ${player.name}'s waystone list`,
    );
    return;
  }
  static hasWayPoint(player: Player, location: Vector3): boolean {
    const list = this.getWayStoneList(player);
    for (const data of list) {
      if (
        data.location[0] === location.x &&
        data.location[1] === location.y &&
        data.location[2] === location.z
      ) {
        return true;
      }
    }
    return false;
  }
}

export type WayStoneData = {
  location: [number, number, number];
  dimension: string;
  name: string;
};
