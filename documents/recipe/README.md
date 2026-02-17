---
title: 自定义配方
group: Documents
category: Documents
children:
  - ./types.md
---

# 配方

本项目内置了一些功能性方块，可以通过提供的 API 来为其添加配方。

## 原生配方

下面这些配方标签可以直接在原生配方中添加：

```
alchemy_table
```

炼金台的配方标签，可用于有序/无序配方。

```
bowyers_bench
```

弓匠台的配方标签，可用于有序/无序配方。

## 模拟配方

有些配方利用脚本实现，需要通过命令实现自定义。

在本项目中，我们不仅用模拟配方实现了功能性方块，一些工具的增产效果也是基于模拟配方实现的

### 锤子配方 (HammerRecipe)

通过scriptEvent添加新配方：

```typescript
/scriptevent hiddenyears:addHammerRecipe {
  "ingredient": "minecraft:brick_block",
  "output": "minecraft:brick",
  "amount": 12
}
```

### 碎石机配方 (CrusherRecipe)

通过scriptEvent添加新配方：

```typescript
/scriptevent hiddenyears:addCrusherRecipe {
  "ingredient": "minecraft:brick_block",
  "output": "minecraft:brick",
  "amount": 12
}
```

### 撬棍配方 (CrowbarRecipe)

通过scriptEvent添加新配方：

```typescript
/scriptevent hiddenyears:addCrowbarRecipe {
  "ingredient": "minecraft:brick_block",
  "output": "minecraft:brick",
  "amount": 12
}
```

### 复合药水配方 (ComplexPotionRecipe)

通过scriptEvent添加新配方：

```typescript
/scriptevent hiddenyears:addPotionRecipe {
  "ingredient": "minecraft:brick_block",
  "effect": "minecraft:invisibility",
  "duration": 600,
  "amplifier": 1,
  "can_always_use": true
}
```

### 锯子配方 (SawRecipe)

通过scriptEvent添加新配方：

```typescript
/scriptevent hiddenyears:addSawRecipe {
  "ingredient": "minecraft:brick_block",
  "output": "minecraft:brick",
  "amount": 12
}
```