---
title: 隐藏之年²：天边的开发文档
group: Documents
category: Documents
children:
  - ./components/README.md
  - ./recipe/README.md
  - ./family.md
  - ./tags.md
---
# 隐藏之年²：天边的开发文档
欢迎来到《隐藏之年：天边的迦万涅尔》开发文档！

这里的文档记载了本项目开放的组件、标签、实体族和自定义配方等信息。

> [!IMPORTANT]
> 开发文档内嵌于代码仓库中，并由 Typedoc 自动生成，因此可能会包括错误和正式版中未公开的接口。

## 组件
### 方块组件

| 组件名称                 | 描述                   |
| ------------------------ | ---------------------- |
| hiddenyears:interactable | 指定方块为可交互方块   |
| hiddenyears:ore_type     | 指定矿石的类型         |
| hiddenyears:vault        | 将方块设置为宝库       |
| hiddenyears:boss_spawner | 将方块设置为 BOSS 祭坛 |
| hiddenyears:trial_stone  | 将方块设置为试炼之石   |

### 物品组件


| 组件名称 | 描述 |
| --- | --- |
| hiddenyears:music_disc | 将物品设置为音乐唱片 |
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

## 标签与族

## 配方

## 技术架构

| 架构名称 | 项目版本 | Minecraft 版本 | 状态 | 特征 |
| :--- | :--- | :--- | :--- | :--- |
| Generation-1 | Alpha | 1.17.0 ~ 1.21.20 | 放弃维护 | 假日创作者玩法+函数 |
| Generation-2 | 1.0.0 ~ 2.4.16 |  | 放弃维护 |  假日创作者玩法+函数（前期）、原版数据驱动+脚本 V1（后期） |
| Generation-3 | 3.0.0+ | 1.21.130+ | 积极维护 | 原版数据驱动+脚本 V2 |

## 最后一点想说的话

当前本项目的接口的开放程度和设计上多多少少还存在着一些问题，我（方漓猫）会尽我所能来修复问题并改进设计。

但是隐年组的人手特别紧缺，如果你真的觉得我写的不好……那我也无能为力。

当然，欢迎大家的贡献！