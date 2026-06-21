import {
  ItemComponentUseEvent,
  CustomComponentParameters,
  LocationWaypoint,
  WaypointTexture,
  Player,
  DimensionLocation,
  world,
  EntityWaypoint
} from "@minecraft/server";
import { LocatorBarParams } from "../components/LocatorBarComponent/Params";
import { getEquipmentItem, hexToRgb, setEquipmentItem } from "@occultus/api";
import { default as bossData } from "../../../config/boss_locator_bar.json";
const bosses: string[] = [...bossData.map((boss) => boss.identifier)];

export class LocatorBarEvents {
  /**
   * 获取物品指向的路径点位置
   * @param player
   * @param params
   * @returns
   */
  static getLocation(
    player: Player,
    params: LocatorBarParams
  ): DimensionLocation | false {
    const provider = params.location_provider;
    if (!provider)
      throw new Error("LocatorBarComponent: No location provider available!");
    if (Array.isArray(provider)) {
      return {
        dimension: world.getDimension(provider[0]),
        x: provider[1],
        y: provider[2],
        z: provider[3]
      };
    }
    if (provider === "spawn_point") {
      const spawnPoint = player.getSpawnPoint();
      if (!spawnPoint) return false;
      return spawnPoint;
    }
    if (provider === "dynamic") {
      const item = getEquipmentItem(player);
      const dim = item.getDynamicProperty("hiddenyears:locator_bar_dimension");
      const location = item.getDynamicProperty(
        "hiddenyears:locator_bar_location"
      );
      if (!dim || !location) return false;
      if (typeof dim !== "string" || typeof location !== "object") return;
      return {
        dimension: world.getDimension(dim),
        x: location.x,
        y: location.y,
        z: location.z
      };
    }
    return false;
  }
  static onUse(arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) {
    const params = arg1.params as LocatorBarParams;
    const player = arg0.source;
    const item = arg0.itemStack;
    if (!item) return;
    if (item.getDynamicProperty("hiddenyears:locator_bar")) {
      item.setDynamicProperty("hiddenyears:locator_bar", false);
      setEquipmentItem(player, item);
      player.locatorBar.removeAllWaypoints();
      return;
    }
    const location = this.getLocation(player, params);
    if (!location) {
      if (params.failed_message)
        player.sendMessage({ translate: params.failed_message });
      return;
    }
    player.locatorBar.addWaypoint(
      new LocationWaypoint(
        location,
        {
          textureBoundsList: [
            {
              texture: WaypointTexture.Square,
              lowerBound: 0,
              upperBound: 64
            },
            {
              texture: WaypointTexture.SmallSquare,
              lowerBound: 64,
              upperBound: 128
            },
            {
              texture: WaypointTexture.Circle,
              lowerBound: 128,
              upperBound: 512
            },
            {
              texture: WaypointTexture.SmallStar,
              lowerBound: 512
            }
          ]
        },
        hexToRgb(params.color ?? "#ffffff")
      )
    );
    item.setDynamicProperty("hiddenyears:locator_bar", true);
    setEquipmentItem(player, item);
    return;
  }
  static subscribeBoss() {
    world.afterEvents.entitySpawn.subscribe((event) => {
      if (!bosses.includes(event.entity.typeId)) return;
      const data = bossData.find(
        (boss) => boss.identifier === event.entity.typeId
      );
      event.entity.dimension
        .getPlayers({
          location: event.entity.location,
          maxDistance: data.max_distance ?? 10,
          minDistance: 0
        })
        .forEach((player) => {
          player.locatorBar.addWaypoint(
            new EntityWaypoint(
              event.entity,
              {
                textureBoundsList: [
                  {
                    texture: {
                      iconHeight: 1,
                      iconWidth: 1,
                      path: data.path
                    },
                    lowerBound: 0
                  }
                ]
              },
              {
                showDead: false
              }
            )
          );
        });
    });
  }
}
