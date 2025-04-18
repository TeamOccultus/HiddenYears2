import { Dimension, Vector3 } from "@minecraft/server";

/**
 * 触发战利品表时的工具类型
 * @category Stable
 * @since 1.0.0
 */
export type LootToolType = string | "mainhand" | "offhand";


/**
 * 在指定位置生成战利品
 * @param dimension 要生成战利品的维度
 * @param location 生成战利品的位置
 * @param path 战利品表的路径，如`entity/zombie`
 * @param toolType 生成战利品的工具类型
 * @category Stable
 * @since 1.0.0
 */
export function loot(
  dimension: Dimension,
  location: Vector3,
  path: string,
  toolType?: LootToolType
): void {
  if (toolType) {
    dimension.runCommand(
      `loot spawn ${location.x} ${location.y} ${location.z} loot "${path}" "${toolType}"`
    );
  } else {
    dimension.runCommand(
      `loot spawn ${location.x} ${location.y} ${location.z} loot "${path}"`
    );
  }
}

/**
 * 向指定维度的容器中生成战利品
 * @param dimension 容器所处的维度
 * @param blockLocation 容器的位置
 * @param path 战利品表的路径，如`entity/zombie`
 * @param toolType 生成战利品的工具类型
 * @category Stable
 * @since 1.0.0
 */
export function insertLoot(
  dimension: Dimension,
  blockLocation: Vector3,
  path: string,
  toolType?: LootToolType
): void {
  if (toolType) {
    dimension.runCommand(
      `loot insert ${blockLocation.x} ${blockLocation.y} ${blockLocation.z} loot "${path}" "${toolType}"`
    );
  } else {
    dimension.runCommand(
      `loot insert ${blockLocation.x} ${blockLocation.y} ${blockLocation.z} loot "${path}"`
    );
  }
}