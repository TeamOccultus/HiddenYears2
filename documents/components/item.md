---
title: 物品组件
group: Documents
category: Documents
---

# 物品组件

## hiddenyears:hidden_effect_food

为食物添加食用后的自定义模拟效果：

| 参数      | 类型                 | 可选？ | 描述                                                        |
| --------- | -------------------- | ------ | ----------------------------------------------------------- |
| effect    | `HiddenEffects`      | 必填   | 食用后给予玩家的模拟效果                                    |
| duration  | `number \| number[]` | 必填   | 模拟效果持续的时间，以刻为单位，必须在范围`[0, 20000000]`内 |
| amplifier | `number \| number[]` | 可选   | 模拟效果等级                                                |
| remove    | `HiddenEffects`      | 可选   | 要移除的模拟效果类型                                        |

在`HiddenEffects`类型中：

| 可用值        | 描述   |
| ------------- | ------ |
| `tetanus`     | 破伤风 |
| `bleed`       | 失血   |
| `dehydration` | 脱水   |
| `drought`     | 干旱   |

## hiddenyears:effective_food

为食物添加食用后的自定义状态效果：

| 参数           | 类型                                 | 可选？ | 描述                                                        |
| -------------- | ------------------------------------ | ------ | ----------------------------------------------------------- |
| effect         | `string \| string[] \| EffectGroups` | 必填   | 食用后给予玩家的状态效果                                    |
| duration       | `number \| number[]`                 | 必填   | 状态效果持续的时间，以刻为单位，必须在范围`[0, 20000000]`内 |
| amplifier      | `number \| number[]`                 | 可选   | 状态效果等级                                                |
| show_particles | `boolean \| boolean[]`               | 可选   | 是否展示状态效果粒子                                        |
| clear          | `string \| string[] \| EffectGroups` | 可选   | 要移除的状态效果类型                                        |

在`EffectGroups`类型中：

| 可用值 | 描述         |
| ------ | ------------ |
| `ALL`  | 所有状态效果 |
| `GOOD` | 正面状态效果 |
| `BAD`  | 负面状态效果 |

## hiddenyears:custom_tool

将物品设置为自定义工具：

| 参数    | 类型       | 可选？ | 描述                          |
| ------- | ---------- | ------ | ----------------------------- |
| type    | `ToolType` | 必填   | 工具的类型                    |
| virtual | `boolean`  | 可选   | 是否为虚拟工具，默认为`false` |

> [!IMPORTANT]
>
> 如果工具被设置为虚拟工具，则工具在挖掘方块时将不会消耗耐久度。

在`ToolType`类型中：

|           | 描述       |
| --------- | ---------- |
| `pickaxe` | 镐         |
| `axe`     | 斧         |
| `sword`   | 剑         |
| `shovel`  | 铲         |
| `hoe`     | 锄         |
| `custom`  | 自定义工具 |

该可用值将会影响物品与方块交互时的行为。

## hiddenyears:custom_weapon

将物品设置为自定义武器：

| 参数    | 类型      | 可选？ | 描述                          |
| ------- | --------- | ------ | ----------------------------- |
| virtual | `boolean` | 可选   | 是否为虚拟武器，默认为`false` |

> [!IMPORTANT]
>
> 如果工具被设置为虚拟武器，则武器在挖掘方块时将不会消耗耐久度。

## hiddenyears:tool_type

指定工具的类型：

| 参数      | 类型             | 可选？ | 描述       |
| --------- | ---------------- | ------ | ---------- |
| tool_type | `CustomToolType` | 必填   | 工具的类型 |

在`CustomToolType`类型中：

| 可用值    | 描述     |
| --------- | -------- |
| `hammer`  | 锤子     |
| `crowbar` | 撬棍     |
| `saw`     | 锯子     |
| `normal`  | 普通工具 |

这些类型将会影响工具挖掘特定方块时的行为。

## hiddenyears:weapon_type

指定武器的类型：

| 参数        | 类型               | 可选？ | 描述       |
| ----------- | ------------------ | ------ | ---------- |
| weapon_type | `CustomWeaponType` | 必填   | 武器的类型 |

在`CustomWeaponType`类型中：

| 可用值         | 描述 |
| -------------- | ---- |
| `sword`        | 剑   |
| `sledgehammer` | 锤子 |
| `dagger`       | 匕首 |

## hiddenyears:custom_crossbow

将物品设置为自定义弩：

| 参数            | 类型                    | 可选？ | 描述                     |
| --------------- | ----------------------- | ------ | ------------------------ |
| pulling_level   | `CrossbowPullingLevels` | 必填   | 弩的拉力等级             |
| next_level_item | `string`                | 必填   | 下一个拉力等级所需的物品 |
| ammunitions     | `string[]`              | 必填   | 弩可用的弹药列表         |

在`CrossbowPullingLevels`类型中：

| 可用值    | 描述       |
| --------- | ---------- |
| `standby` | 等待状态   |
| `loaded`  | 已装填状态 |

## hiddenyears:arrow_present

指定箭矢对应的箭矢预设：

| 参数    | 类型            | 可选？ | 描述               |
| ------- | --------------- | ------ | ------------------ |
| present | `ArrowPresents` | 必填   | 箭矢对应的箭矢预设 |

在`ArrowPresents`类型中：

| 可用值      | 描述     |
| ----------- | -------- |
| `daylight`  | 日光之箭 |
| `lightning` | 雷光之箭 |
| `fire`      | 烈焰之箭 |
| `steel`     | 寒钢之箭 |

## hiddenyears:trophy_bundle

指定物品为历战宝袋：

| 参数         | 类型                     | 可选？ | 描述                   |
| ------------ | ------------------------ | ------ | ---------------------- |
| loot_table   | `string`                 | 可选   | 历战包袋的战利品表     |
| table_source | `TrophyBundleSourceType` | 必填   | 历战包袋的战利品表来源 |

在`TrophyBundleSourceType`类型中：

| 可用值     | 描述   |
| ---------- | ------ |
| `hardcode` | 硬编码 |
| `script`   | 脚本   |

> [!IMPORTANT]
> 如果`table_source`参数为`script`，那么物品的最大堆叠必须为 1！

其中的硬编码即指`loot_table`参数指定的战利品表，脚本指从物品的`hiddenyears:loot_table`动态属性获取战利品表。

## hiddenyears:exp_food

指定食物给予的经验值：

| 参数 | 类型     | 可选？ | 描述                 |
| ---- | -------- | ------ | -------------------- |
| exp  | `number` | 必填   | 食物给予玩家的经验值 |

## hiddenyears:coin

将物品设置为货币，使用该物品时将会增加玩家的统一货币值：

| 参数      | 类型     | 可选？ | 描述                         |
| --------- | -------- | ------ | ---------------------------- |
| ucv_value | `number` | 必填   | 单个货币对应的「统一货币值」 |

## hiddenyears:staff

为物品添加范围法杖的功能：

| 参数         | 类型          | 可选？ | 描述                           |
| ------------ | ------------- | ------ | ------------------------------ |
| damage       | `number`      | 必填   | 法杖可造成的伤害               |
| radius       | `number`      | 必填   | 法杖生效的范围                 |
| particle     | `string`      | 可选   | 法杖对敌人造成伤害时生成的粒子 |
| sound_event  | `string`      | 可选   | 使用法杖时的音效               |
| staff_preset | `StaffPreset` | 可选   | 法杖的预设                     |

在`StaffPreset`类型中：

| 可用值        | 描述                                 |
| ------------- | ------------------------------------ |
| `mutas_staff` | 创世之杖的预设，会在敌人头顶生成闪电 |

## hiddenyears:job

允许使用该物品后对玩家的职业进行操作：

| 参数       | 类型      | 可选？ | 描述                       |
| ---------- | --------- | ------ | -------------------------- |
| job_type   | `JobType` | 必填   | 要向玩家添加的职业类型     |
| remove_old | `boolean` | 可选   | 是否移除玩家当前的职业数据 |

在`JobType`类型中：

| 可用值     | 描述   |
| ---------- | ------ |
| `traveler` | 行旅者 |
| `none`     | 无     |

## hiddenyears:return_gem

配置传送道具的相关参数：

| 参数        | 类型                       | 可选？ | 描述                                     |
| ----------- | -------------------------- | ------ | ---------------------------------------- |
| bind_to     | `LocationProvider`         | 必填   | 传送道具的终点来源                       |
| location    | `[number, number, number]` | 可选   | 将返回位置固定为某一坐标，并禁用绑定功能 |
| dimension   | `string`                   | 可选   | 将返回位置固定为某一维度，并禁用绑定功能 |
| sound_event | `string`                   | 可选   | 返回时播放的音效                         |

在`LocationProvider`类型中：

| 可用值        | 描述                     |
| ------------- | ------------------------ |
| `script`      | 从动态属性读取目的地     |
| `data_driven` | 从数据驱动读取目的地     |
| `home`        | 读取玩家出生点作为目的地 |
| `waystone`    | 与传送石碑绑定           |

## hiddenyears:blessing_of_isis

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

为物品添加「雨之神的祝福」的功能

## hiddenyears:complex_potion

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

为物品添加「复合药水」的功能

## hiddenyears:adventurer_note

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

使物品获得书籍「故地异国行纪」的功能。

## hiddenyears:profile

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

使物品获得「时匿怀表」的功能。
