---
title: 兑换商店
group: Documents
category: Documents
---
# 兑换商店

> [!TIP]
> 可用版本：3.0.5+

在项目中，时匿怀表下有一个「货币兑换」子模块。

目前我们主要使用其实现货币与统一货币值的转换的功能，但你仍可以向其中自由地添加新的交易项目！

## 格式

通过脚本事件添加新配方：

```typescript
/scriptevent hiddenyears:addStoreItem {
  "ucv": 114514,
  "item": "minecraft:apple",
  "count": 1
}
```

在其中：

| 字段 | 类型 | 描述 |
| ---- | ---- | ---- |
| ucv | number | 兑换商品所需的统一货币值 |
| item | string | 商品的 ID |
| count | number | 一次兑换商品的数量 |
