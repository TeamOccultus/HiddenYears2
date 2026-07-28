import { Dimension, Entity, Player, system, world } from "@minecraft/server";
import { DimensionTeleporterComponentParams } from "./Params";
import { consumeEquipmentAmount, toVec3, Vector3Utils } from "@occultus/api";

function parseLocationProvider(
  entity: Entity,
  param: DimensionTeleporterComponentParams
) {
  let location = entity.location;
  if (param.location_provider === "origin") location = toVec3(0, 0, 0);
  if (Array.isArray(param.location_provider))
    location = toVec3(
      param.location_provider[0],
      param.location_provider[1],
      param.location_provider[2]
    );
  if (typeof param.location_provider === "number") {
    location = Vector3Utils.scale(location, param.location_provider);
  }
  return location;
}

function parseDimension(
  entity: Entity,
  param: DimensionTeleporterComponentParams
): Dimension {
  let id = "minecraft:overworld";
  if (Array.isArray(param.dimension_id)) {
    const playerDimension = entity.dimension.id;
    if (playerDimension === param.dimension_id[0]) id = param.dimension_id[1];
    id = param.dimension_id[0];
  }
  if (typeof param.dimension_id === "string") id = param.dimension_id;
  return world.getDimension(id);
}

export class DimensionTeleporterComponent {
  constructor(readonly componentName: string) {
    system.beforeEvents.startup.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(this.componentName, {
        onUse(arg0, arg1) {
          const { source, itemStack } = arg0;
          if (!itemStack) return;
          const p = arg1.params as DimensionTeleporterComponentParams;

          source.teleport(parseLocationProvider(source, p), {
            dimension: parseDimension(source, p)
          });
          if (p.consume) {
            if (!(source instanceof Player)) return;
            consumeEquipmentAmount(source);
          }
        }
      });
    });
  }
}
