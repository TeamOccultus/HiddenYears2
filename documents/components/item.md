---
title: 物品组件
group: Documents
category: Documents
---

# 物品组件

| 组件名称 | 描述 |
| --- | --- |
| hiddenyears:deprecated | 将物品标记为已弃用 |
| hiddenyears:music_disc | 将物品设置为音乐唱片 |
| hiddenyears:now_playing | 使物品被放入唱片机后显示弹窗提示 |
| hiddenyears:article | 将物品设置为文章 |
| hiddenyears:article_content | 设置文章的内容 |
| hiddenyears:article_center | 将物品设置为文章中心 |
| hiddenyears:hidden_effect_food | 为食物添加食用后的自定义模拟效果 |
| hiddenyears:effective_food | 为食物添加食用后的自定义状态效果 |
| hiddenyears:custom_tool | 将物品设置为自定义工具 |
| hiddenyears:custom_weapon | 将物品设置为自定义武器 |
| hiddenyears:tool_type | 指定工具的类型 |
| hiddenyears:weapon_type | 指定武器的类型 |
| hiddenyears:custom_crossbow | 将物品设置为自定义弩 |
| hiddenyears:arrow_present | 指定箭矢对应的箭矢预设 |
| hiddenyears:trophy_bundle | 指定物品为历战宝袋 |
| hiddenyears:exp_food | 指定食物给予的经验值 |
| hiddenyears:coin | 将物品设置为货币 |
| hiddenyears:staff | 为物品添加范围法杖的功能 |
| hiddenyears:job | 允许使用该物品后对玩家的职业进行操作 |
| hiddenyears:return_gem | 配置传送道具的相关参数 |
| hiddenyears:specific_damage | 允许该物品对特定类型的生物造成额外伤害 |
| hiddenyears:structure_placer | 允许该物品放置结构 |
| hiddenyears:blessing_of_isis | 为物品添加「雨之神的祝福」的功能 |
| hiddenyears:complex_potion | 为物品添加「复合药水」的功能 |
| hiddenyears:adventurer_note | 使物品获得书籍「故地异国行纪」的功能 |
| hiddenyears:profile | 使物品获得「时匿怀表」的功能 |
| hiddenyears:job_skill | 标记物品为职业技能 |
| hiddenyears:job_recovery | 使物品可以重置玩家职业 |

## hiddenyears:deprecated

> [!TIP]
> 可用版本：3.0.10+

将物品标记为已弃用

| 参数        | 类型     | 可选？ | 描述             |
| ----------- | -------- | ------ | ---------------- |
| replace_to  | `string` | 可选   | 将会替代弃用物品的新物品   |
| replace_amount       | `number` | 可选   | 新物品的数目，如果不填则与原来物品数目一致  |

## hiddenyears:music_disc

> [!IMPORTANT]
> 该组件必须要依赖于`minecraft:record`组件和`minecraft:music_disc`标签才能生效。

> [!TIP]
> 可用版本：3.0.1+

将物品设置为音乐唱片

| 参数        | 类型     | 可选？ | 描述             |
| ----------- | -------- | ------ | ---------------- |
| track_name  | `string` | 必填   | 音轨名称，可以填非原版的音轨   |
| name        | `string` | 必填   | 音乐唱片名称     |
| artist      | `string` | 必填   | 创作唱片的艺术家 |

### 范例
```json
{
  "format_version": "1.21.100",
  "minecraft:item": {
    "description": {
      "identifier": "hiddenyears:record_pharaohs",
      "menu_category": {
        "category": "items"
      }
    },
    "components": {
      "minecraft:display_name": {
        "value": "%item.record.name\n§7%item.record_pharaohs.desc"
      },
      "minecraft:icon": "hiddenyears:record_pharaohs",
      "minecraft:rarity": "uncommon",
      "hiddenyears:music_disc": {
        "track_name": "music.boss.pharaohs_ghost",
        "name": "Song of Ancient Desert",
        "artist": "3xLnw"
      },
      "minecraft:record": {
        "duration": 94,
        "comparator_signal": 13
      },
      "minecraft:tags": {
        "tags": ["minecraft:music_disc"]
      },
      "minecraft:max_stack_size": 1
    }
  }
}
```
## hiddenyears:now_playing

> [!IMPORTANT]
> 该组件必须要依赖于`minecraft:record`组件和`minecraft:music_disc`标签才能生效。

> [!TIP]
> 可用版本：3.0.9-beta.2 以及更高

使物品被放入唱片机后显示弹窗提示

| 参数        | 类型     | 可选？ | 描述             |
| ----------- | -------- | ------ | ---------------- |
| icon_path   | `string` | 可选   | 图标路径  |
| name        | `string` | 必填   | 音乐唱片名称     |
| author      | `string` | 必填   | 创作唱片的艺术家 |

### 范例
```json
{
  "format_version": "1.21.100",
  "minecraft:item": {
    "description": {
      "identifier": "hiddenyears:record_pharaohs",
      "menu_category": {
        "category": "items"
      }
    },
    "components": {
      "minecraft:display_name": {
        "value": "%item.record.name\n§7%item.record_pharaohs.desc"
      },
      "minecraft:icon": "hiddenyears:record_pharaohs",
      "minecraft:rarity": "uncommon",
      "hiddenyears:music_disc": {
        "track_name": "music.boss.pharaohs_ghost",
        "name": "Song of Ancient Desert",
        "artist": "3xLnw"
      },
      "minecraft:record": {
        "duration": 94,
        "comparator_signal": 13
      },
      "minecraft:tags": {
        "tags": ["minecraft:music_disc"]
      },
      "minecraft:max_stack_size": 1
    }
  }
}
```

## hiddenyears:article

> [!IMPORTANT]
> 该组件必须要依赖于`hiddenyears:article_content`组件才能生效。

> [!TIP]
> 可用版本：3.0.1+

将物品设置为文章。

| 参数      | 类型                   | 可选？ | 描述         |
| --------- | ---------------------- | ------ | ------------ |
| title     | `RawMessage \| string` | 必填   | 文章标题     |
| icon_path | `string`               | 可选   | 文章图标路径 |

## hiddenyears:article_content

> [!TIP]
> 可用版本：3.0.1+

设置文章的内容。

| 参数 | 类型                     | 可选？ | 描述     |
| ---- | ------------------------ | ------ | -------- |
| N/A  | `RawMessage[] \| string` | 必填   | 文章内容 |

注意：这里的`string`是指预加载的复杂文章内容的 ID，而不是直接输入文章内容。

### 范例

```json
{
  "components": {
    "hiddenyears:article": {
      "title": {
        "translate": "article.hiddenyears:3.title"
      },
      "icon_path": "textures/items/paper"
    },
    "hiddenyears:article_content": [
      {
        "translate": "article.hiddenyears:3.body_1"
      },
      { "text": "\n" },
      {
        "translate": "article.hiddenyears:3.body_2"
      },
      { "text": "\n" },
      {
        "translate": "article.hiddenyears:3.body_3"
      },
      { "text": "\n" },
      {
        "translate": "article.hiddenyears:3.body_4"
      }
    ]
  }
}
```

## hiddenyears:article_center

> [!TIP]
> 可用版本：3.0.1+

将物品设置为文章中心。

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A  | N/A  | N/A    | N/A  |

## hiddenyears:hidden_effect_food

> [!TIP]
> 可用版本：3.0.0+

为食物添加食用后的自定义模拟效果。

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

> [!TIP]
> 可用版本：3.0.0+

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

> [!TIP]
> 可用版本：3.0.0+

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
| families     | `string[]` |  可选 | ***3.0.7+ 版本可用*** 法杖可作用的生物类型  |
| radius       | `number`      | 必填   | 法杖生效的范围                 |
| particle     | `string`      | 可选   | 法杖对敌人造成伤害时生成的粒子 |
| sound_event  | `string`      | 可选   | 使用法杖时的音效               |
| staff_preset | `StaffPreset` | 可选   | 法杖的预设                     |

在`StaffPreset`类型中：

| 可用值        | 描述                                 |
| ------------- | ------------------------------------ |
| `mutas_staff` | 创世之杖的预设，会在敌人头顶生成闪电 |
| `radiant_touch` | 圣辉之触的预设 |

## hiddenyears:job

允许使用该物品后对玩家的职业进行操作：

| 参数       | 类型      | 可选？ | 描述                       |
| ---------- | --------- | ------ | -------------------------- |
| job_type   | `JobType` | 必填   | 要向玩家添加的职业类型  |
| remove_old | `boolean` | 可选   | **3.0.7 后被弃用** 是否移除玩家当前的职业数据 |

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

## hiddenyears:specific_damage

允许该物品对特定类型的生物造成额外伤害：

| 参数 | 类型                   | 可选？ | 描述                 |
| ---- | ---------------------- | ------ | -------------------- |
| N/A  | `SpecificDamageType[]` | 必填   | 配置额外伤害相关选项 |

在`SpecificDamageType`类型中：

| 参数   | 类型     | 可选？                      | 描述                         |
| ------ | -------- | ------- | ---------- | 
| family | `string` | 必填                        | 适用于该类型额外伤害的实体族 |
| damage | `number  \| [max: number, min: number]` | 必填                         | 对该类型实体造成的额外伤害 |

## hiddenyears:structure_placer

允许该物品放置结构：

| 参数         | 类型                       | 可选？ | 描述                 |
| ------------ | -------------------------- | ------ | -------------------- |
| max_height   | `number`                   | 必填   | 结构放置的最大高度   |
| min_height   | `number`                   | 必填   | 结构放置的最小高度   |
| id           | `string`                   | 必填   | 要放置的结构ID       |
| place_offset | `[number, number, number]` | 可选   | 结构放置的偏移量     |
| show_warning | `boolean`                  | 可选   | 是否显示放置警告     |
| animation    | `AnimationConfig`          | 可选   | 结构放置时的动画配置 |
| present      | `StructurePresent`         | 可选   | 结构的预设类型       |

在`AnimationConfig`类型中：

| 参数    | 类型      | 可选？   | 描述               |
| ------- | --------- | -------- | ------------------ | 
| type    | `"blocks" \| "layers" \| "none"`            | 必填 | 动画类型 |
| seconds | `number`  | 必填     | 动画持续时间（秒） |

在`StructurePresent`类型中：

| 可用值       | 描述 |
| ------------ | ---- |
| `aaru_dream` |      |

## hiddenyears:blessing_of_isis

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

为物品添加「雨之神的祝福」的功能

## hiddenyears:complex_potion

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

为物品添加「复合药水」的功能。

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A  | N/A  | N/A    | N/A  |

## hiddenyears:adventurer_note

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

使物品获得书籍「故地异国行纪」的功能。

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A  | N/A  | N/A    | N/A  |

## hiddenyears:profile

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

使物品获得「时匿怀表」的功能。

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A  | N/A  | N/A    | N/A  |

## hiddenyears:job_skill

> [!IMPORTANT]
> 这是一个内部组件，在未来我们会开放更多自定义选项

标记物品为职业技能。

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A  | N/A  | N/A    | N/A  |

## hiddenyears:job_recovery

> [!TIP]
> 可用版本：3.0.7+

使物品可以重置玩家职业。

| 参数 | 类型 | 可选？ | 描述 |
| ---- | ---- | ------ | ---- |
| N/A  | N/A  | N/A    | N/A  |