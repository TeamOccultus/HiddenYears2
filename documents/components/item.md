---
title: 物品组件
group: Documents
category: Documents
---

# 物品组件
## hiddenyears:adventurer_note

使物品获得书籍「故地异国行纪」的功能。


| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A | | | 使物品获得书籍「故地异国行纪」的功能。|

例如：

```json
{
  "hiddenyears:adventurer_note": {}
}
```

## hiddenyears:effective_food

为食物添加食用后的自定义状态效果：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| effect | `string \| string[] \| EffectGroups` | 必填 | 食用后给予玩家的状态效果 |
| duration | `number \| number[]` | 必填 | 状态效果持续的时间，以刻为单位，必须在范围`[0, 20000000]`内 |
| amplifier | `number \| number[]` | 可选 | 状态效果等级 |
| show_particles | `boolean \| boolean[]` | 可选 | 是否展示状态效果粒子 |
| clear | `string \| string[] \| EffectGroups` | 可选 | 要移除的状态效果类型 |

在`EffectGroups`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `ALL` | 所有状态效果 |
| `GOOD` | 正面状态效果 |
| `BAD` | 负面状态效果 |

## hiddenyears:custom_tool

将物品设置为自定义工具：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| type | `ToolType` | 必填 | 工具的类型 |
| virtual | `boolean` | 可选 | 是否为虚拟工具，默认为`false` |

> [!IMPORTANT]
>
> 如果工具被设置为虚拟工具，则工具在挖掘方块时将不会消耗耐久度。

在`ToolType`类型中：

|   | 描述 |
| ------ | ---- |
| `pickaxe` | 镐 |
| `axe` | 斧 |
| `sword` | 剑 |
| `shovel` | 铲 |
| `hoe` | 锄 |
| `custom` | 自定义工具 |

该可用值将会影响物品与方块交互时的行为。

## hiddenyears:custom_weapon

将物品设置为自定义武器：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| virtual | `boolean` | 可选 | 是否为虚拟武器，默认为`false` |

> [!IMPORTANT]
>
> 如果工具被设置为虚拟武器，则武器在挖掘方块时将不会消耗耐久度。

## hiddenyears:tool_type

指定工具的类型：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| tool_type | `CustomToolType` | 必填 | 工具的类型 |

在`CustomToolType`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `hammer` | 锤子 |
| `crowbar` | 撬棍 |
| `saw` | 锯子 |
| `normal` | 普通工具 |

这些类型将会影响工具挖掘特定方块时的行为。

## hiddenyears:weapon_type

指定武器的类型：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| weapon_type | `CustomWeaponType` | 必填 | 武器的类型 |

在`CustomWeaponType`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `sword` | 剑 |
| `sledgehammer` | 锤子 |
| `dagger` | 匕首 |

## hiddenyears:custom_crossbow

将物品设置为自定义弩：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| pulling_level | `CrossbowPullingLevels` | 必填 | 弩的拉力等级 |
| next_level_item | `string` | 必填 | 下一个拉力等级所需的物品 |
| ammunitions | `string[]` | 必填 | 弩可用的弹药列表 |

在`CrossbowPullingLevels`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `standby` | 等待状态 |
| `loaded` | 已装填状态 |

## hiddenyears:arrow_present

指定箭矢对应的箭矢预设：

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| present | `ArrowPresents` | 必填 | 箭矢对应的箭矢预设 |

在`ArrowPresents`类型中：

| 可用值 | 描述 |
| ------ | ---- |
| `daylight` | 日光之箭 |
| `lightning` | 雷光之箭 |
| `fire` | 烈焰之箭 |
| `steel` | 寒钢之箭 |