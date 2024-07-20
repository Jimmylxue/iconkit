<br>

<h1 align="center">Welcome to iconkits 👋</h1>

<br>

iconkits 是一个轻量级、多功能、且简单的生成 App icon 的库，只需要提供一个资源路径（svg），即可生成全尺寸 App 图标

> issues 是第一生产力！😄

知识星球：[传送门](http://www.jimmyxuexue.top)

> 大兄弟们聚过来，这件事很重要 🎉🎉🎉

(如果觉得不错 👍，给个 star ⭐ 吧，你的认可是我最大的动力 ！)

**前言**

大家在开发 App（Android 或 IOS）时如果更换图标需要提供很多尺寸大小的图标。一般情况我们需要求助于 UI 设计师或对应的网站。还是比较麻烦，这个工具主要为了解决这一痛点！

## demo

有了它我们可以一键快速完成上面操作，不求人！

![image-20240720134858171](https://image.jimmyxuexue.top/img/image-20240720134858171.png)

执行之后项目路径下会生成对应的矩形图标和圆角图标

![image-20240720131246947](https://image.jimmyxuexue.top/img/image-20240720131246947.png)

之后我们再将这些图标替换到安卓项目下图标即可。

## 使用：

1. 安装

```
pnpm add iconkits
```

2. 运行

```
npx iconkits --input=<your source path>
```

这块资源路径支持相对路径、绝对路径、远程路径。

```
npx iconkits --input=./splash.svg
npx iconkits --input=/User/Jimmy/Desktop/splash.svg
npx iconkits --input=http://image.jimmyxuexue.top/img/splash.svg
```

**ps：目前仅支持 svg 的图片文件**

## 相关项目

- [h5pack-core](https://github.com/Jimmylxue/h5pack-core)
- [h5pack-native](https://github.com/Jimmylxue/h5pack-native)

## Todo

- [ ] 生成 IOS 图标
- [ ] 支持除 svg 外的文件生成 icon
- [ ] ......

## 其他内容

不定期在 B 站直播写代码，欢迎有兴趣的小伙伴们前来围观，期待你们的关注~

[B 站个人主页](https://space.bilibili.com/304985153?spm_id_from=333.1007.0.0)

我有个前端交流群，平时大家一起讨论技术和交流 bug，有兴趣的小伙伴欢迎加入。（vx 添加：ysh15120）
