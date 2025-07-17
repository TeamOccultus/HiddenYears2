---
title: 方块组件
group: Documents
category: Documents
---
# 方块组件
## hiddenyears:interactable

指定方块为可交互方块：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A |  |  | 指定方块为可交互方块 |

## hiddenyears:ore_type

指定矿石的类型：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| ore_type | `OreType` | 必填 | 矿石的类型 |

在`OreType`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `ruby` | 红宝石矿石 |
| `normal` | 普通矿石 |

这些类型将会影响矿石被挖掘时的行为。

## hiddenyears:custom_ore

指定矿石为自定义矿石：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| loot_table | `string` | 必填 | 矿石战利品表 |
| item_tier | `ItemTiers` | 可选 | 挖掘矿石最低需要的物品等级 |
| tag | `string` | 可选 | 挖掘矿石所需要的物品标签 |
| item | `string` | 可选 | 挖掘矿石所需要的物品 |
| exp | `number` | 可选 | 挖掘矿石给予玩家的经验值 |

在`ItemTiers`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `wooden` | 木制工具 |
| `golden` | 金制工具 |
| `stone` | 石制工具 |
| `iron` | 铁制工具 |
| `diamond` | 钻石工具 |
| `netherite` | 下界合金工具 |
| `custom` | 自定义 |
| `none` |  |


## hiddenyears:destroy_condition

指定方块被破坏的条件：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| loot_table | `string` | 必填 | 方块战利品表 |
| item_tier | `ItemTiers` | 可选 | 挖掘矿石最低需要的物品等级 |
| tag | `string` | 可选 | 挖掘矿石所需要的物品标签 |
| item | `string` | 可选 | 挖掘矿石所需要的物品 |

在`ItemTiers`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `wooden` | 木制工具 |
| `golden` | 金制工具 |
| `stone` | 石制工具 |
| `iron` | 铁制工具 |
| `diamond` | 钻石工具 |
| `netherite` | 下界合金工具 |
| `custom` | 自定义 |
| `none` |  |