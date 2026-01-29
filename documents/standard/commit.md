---
title: Commit 规范
group: Documents
category: Documents
---

# Commit 规范

隐藏之年项目采用类 Angular 规范编写提交信息：

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

每次提交**可以**包含正文(`body`)和页脚(`footer`)，**必须**包含页眉(`header`)。内容，每次提交的信息不超过 100 个字符。

## Header

### Type

用于说明 commit 的类别，允许使用下面个标识：

- feat：添加新功能；
- fix：修复漏洞；
- docs：完善文档；
- style：修改代码格式；
- refactor：重构；
- test：增加测试用例；
- chore：构建过程或辅助工具的变动；
- revert：回滚提交。

### Scope

用于说明提交影响的范围，根据本项目特点，一般使用以下标识：

- beh：行为包；
- res：资源包；
- script：核心脚本；
- lang：本地化文件；
- assets：纹理资源。

还可以使用形如`beh/items`的方法进一步细化范围。

### Subject

用于简要描述提交的内容，需要注意：

- **使用中文描述**；
- 结尾不加句号。

## Body

用于详细描述提交的内容，如果没有必要，可以省略。

## Footer

如果当前代码与上一个版本不兼容，则 Footer 部分以`BREAKING CHANGE`开头，后面是对变动的描述、以及变动理由和迁移方法：

```
BREAKING CHANGE: 修改了`hiddenyears:ore_type`组件的参数类型
```

如果当前提交针对某个 issue，那么可以在 Footer 部分关闭这个 issue：

```
Closes #114, #514
```
