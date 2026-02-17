---
title: 模拟配方
group: Documents
category: Documents
---
## HammerRecipe

允许锤子对特定方块进行处理，获得额外材料：

| 参数       | 类型      | 可选？ | 描述                       |
| ---------- | --------- | ------ | -------------------------- |
| ingredient | `string`  | 必填   | 可被锤子处理的方块ID       |
| output     | `string`  | 必填   | 处理后获得的物品ID         |
| amount     | `number \| {min: number, max: number}` | 必填 | 获得物品的数量，可以是固定值或范围值 |

## CrusherRecipe

允许碎石机处理特定方块：

| 参数       | 类型     | 可选？ | 描述                       |
| ---------- | -------- | ------ | -------------------------- |
| ingredient | `string` | 必填   | 可被碎石机处理的方块ID     |
| output     | `string` | 必填   | 处理后获得的物品ID         |
| amount     | `number` | 必填   | 获得物品的固定数量         |

## CrowbarRecipe

允许撬棍对特定方块进行处理：

| 参数       | 类型      | 可选？ | 描述                       |
| ---------- | --------- | ------ | -------------------------- |
| ingredient | `string`  | 必填   | 可被撬棍处理的方块ID       |
| output     | `string`  | 必填   | 处理后获得的物品ID         |
| amount     | `number | {min: number, max: number}` | 必填 | 获得物品的数量，可以是固定值或范围值 |

## ComplexPotionRecipe

允许为物品添加特殊的药水效果：

| 参数            | 类型      | 可选？ | 描述                       |
| --------------- | --------- | ------ | -------------------------- |
| ingredient      | `string`  | 必填   | 可添加药水效果的物品ID     |
| effect          | `string`  | 必填   | 要添加的药水效果ID         |
| duration        | `number`  | 必填   | 效果持续时间（tick）        |
| amplifier       | `number`  | 必填   | 效果等级                   |
| can_always_use  | `boolean` | 可选   | 是否无视使用条件           |

## SawRecipe

允许锯子处理原木/木材：

| 参数       | 类型      | 可选？ | 描述                       |
| ---------- | --------- | ------ | -------------------------- |
| ingredient | `string`  | 必填   | 可被锯子处理的方块ID       |
| output     | `string`  | 必填   | 处理后获得的物品ID         |
| amount     | `number \| {min: number, max: number}` | 必填 | 获得物品的数量，可以是固定值或范围值 |

## MagicSmithingTableRecipe

允许在魔法锻造台进行特殊锻造：

| 参数      | 类型     | 可选？ | 描述                       |
| --------- | -------- | ------ | -------------------------- |
| base      | `string` | 必填   | 基础物品ID                 |
| addition  | `string` | 必填   | 添加材料ID                 |
| result    | `string` | 必填   | 合成结果物品ID             |
