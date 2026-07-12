---
title: 方块组件
group: Documents
category: Documents
---

# 方块组件

| 组件名称                 | 描述                   |
| ------------------------ | ---------------------- |
| hiddenyears:deprecated | 将方块标记为已弃用 |
| hiddenyears:interactable | 指定方块为可交互方块   |
| hiddenyears:ore_type     | 指定矿石的类型         |
| hiddenyears:vault        | 将方块设置为宝库       |
| hiddenyears:boss_spawner | 将方块设置为 BOSS 祭坛 |
| hiddenyears:trial_stone  | 将方块设置为试炼之石   |

## hiddenyears:deprecated

> [!TIP]
> 可用版本：3.0.11+3.0.10-patch.1+

将方块标记为已弃用

| 参数        | 类型     | 可选？ | 描述             |
| ----------- | -------- | ------ | ---------------- |
| replace_to  | `string` | 可选   | 将会替代弃用方块的新物品   |
| replace_amount       | `number` | 可选   | 新物品的数目，如果不填则与原来方块数目一致  |


## hiddenyears:interactable

指定方块为可交互方块：

| 参数 | 类型 | 可选？ | 描述                 |
| ---- | ---- | ------ | -------------------- |
| N/A  |      |        | 指定方块为可交互方块 |

## hiddenyears:ore_type

指定矿石的类型：

| 参数     | 类型      | 可选？ | 描述       |
| -------- | --------- | ------ | ---------- |
| ore_type | `OreType` | 必填   | 矿石的类型 |

在`OreType`类型中：

| 可用值   | 描述       |
| -------- | ---------- |
| `ruby`   | 红宝石矿石 |
| `normal` | 普通矿石   |

这些类型将会影响矿石被挖掘时的行为。

## hiddenyears:vault

将方块设置为宝库：

| 参数         | 类型               | 可选？ | 描述                     |
| ------------ | ------------------ | ------ | ------------------------ |
| table        | `string`           | 必填   | 宝库的战利品表路径       |
| transform_to | `string`           | 必填   | 宝库被使用后转换成的方块 |
| key          | `"none" \| string` | 必填   | 宝库的钥匙               |
| sound_event  | `string`           | 可选   | 宝库使用时播放的音效     |

## hiddenyears:boss_spawner

将方块设置为 BOSS 祭坛：

| 参数          | 类型                                                           | 可选？ | 描述                                |
| ------------- | -------------------------------------------------------------- | ------ | ----------------------------------- |
| boss          | `string`                                                       | 必填   | BOSS ID                             |
| transform_to  | `string`                                                       | 必填   | BOSS 祭坛被使用后转换成的方块       |
| key           | `"none" \| string`                                             | 必填   | BOSS 祭坛的钥匙                     |
| cutscene       | `"king_of_ruby" \| "mutas_wrath" \| "pharaohs_ghost"`         | 可选   | BOSS 祭坛被使用时触发的过场动画，这将会覆盖`clint_events`和`fade`属性的效果     |
| client_events | `{ sound_event?: string; title?: string; subtitle?: string; }` | 可选   | BOSS 祭坛被使用时触发的客户端事件   |
| fade          | `{ fade_in: number; fade_out: number; hold: number; }`         | 可选   | BOSS 祭坛被使用时触发的淡入淡出效果 |

## hiddenyears:trial_stone

将方块设置为试炼之石：

| 参数        | 类型               | 可选？ | 描述                             |
| ----------- | ------------------ | ------ | -------------------------------- |
| table       | `string`           | 必填   | 试炼之石的战利品表路径           |
| state       | `TrialStoneState`  | 必填   | 试炼之石的状态                   |
| next_state  | `string`           | 可选   | 试炼之石转换到下一状态所需的物品 |
| key         | `"none" \| string` | 必填   | 试炼之石的钥匙                   |
| sound_event | `string`           | 可选   | 试炼之石被使用时播放的音效       |

在`TrialStoneState`类型中：

| 可用值               | 描述     |
| -------------------- | -------- |
| `waiting_for_active` | 等待激活 |
| `active`             | 激活状态 |
| `extinguish`         | 熄灭状态 |
