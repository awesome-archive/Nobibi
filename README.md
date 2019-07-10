# Nobibi

> 想用 Javascript 统一世界？先从 Nobibi 开始吧（Love & peace）
> 这并不是一个切图仔的痴人说梦，因为并不是所有语言都能 0.1 + 0.2 = 0.30000000000000004（skr）

## 关于 Nobibi

```
（纯属 bibi）小时候老师教育我们，少说（bi）话（bi），多做（ban）事（zhuan）,长大才发现，那些说（bi）话（bi）的都成了领（sha）导（bi）,而我依然只会做（ban）事（zhuan）
也许我生来就不会说（bi）话（bi）,算了，那我就不（no）说（bi）话（bi）了
话说多了，反而是坏事（多管闲事多吃 pi，少管闲事少拉 xi）
```

Nobibi 是一个切图仔全栈梦的开始（呸呸！害 bibi）
...
（Acton！）
Nobibi 是一个纯 JS 的全栈开源社区，前台基于 nextjs，后台基于 Ant Deignt Pro 开发，接口是常规的 express+mongo。
起初是看到 antd 的[comment 组件](https://ant.design/components/comment-cn/)（这么美的组件，也许就只差一个社区...）
So 直接开搞（其实是 css 弱爆了，懒得自写）
它可以作为**nextjs+antd+redux-saga**轮子的美好的开始（也可以是 nextjs 深渊的结束..）
也可以领略**antd+umi+dva+react**搭中后台的快感
亦可以用**express+mongo**体验标准的 resutful-api 项目的魅力
同样可以让你从此脱离切图仔的苦海，真正的逆袭为全栈 JSer，横踢 Java，脚踩 Python，构建美好和谐...
（一顿点炮飞脚之后，一个切图仔横尸了街头）

## 相关项目

- [Nobibi-api](https://github.com/seawind8888/Nobibi-api) - Nobibi 后台接口
- [Nobibi-admin](https://github.com/seawind8888/Nobibi-admin) - Nobibi 管理后台
- Nobibi-taro - Nobibi 小程序（待开发）
- Nobibi-nuxt - 看心情

## 运行项目

> 保证已启动 api 项目[Nobibi-api](https://github.com/seawind8888/Nobibi-api)

1. Clone 项目

```
git clone https://github.com/seawind8888/Nobibi my-project
```

2. 安装依赖

```
cd my-porject
npm install 或 yarn
```

3. 运行项目

```
npm run start
```

## 项目部署

> 保证已启动 api 项目[Nobibi-api](https://github.com/seawind8888/Nobibi-api)

1. 修改.env 文件下配置

```
BASE_URL=http://yourapihost:port // 你的api的host地址

```

2. 将项目除去 node_modules 压缩，上传到服务器

```
windows&mac有异同，请自行百度或科学Goo

```

3. 在服务器项目目录下运行

```
npm run start:pm2

```

## 技术选型

![image](/screenshot/Nobibi-structure.png)

## 效果演示

![image](/screenshot/screenshot1.png)
![image](/screenshot/screenshot2.png)
![image](/screenshot/screenshot3.png)

### 后台

![image](/preview/demo.gif)

## 目录结构

```lua
ant-cms-admin
├── api/
│ ├── index.js/         # 接口部分
├── assets/             # less目录
├── components/         # 组件目录
├── constatns/
│ ├── ActionTypes.js/   # redux-sage action-type
│ ├── ConstTypes.js/    # next 页面title 配置
│ └── CustomTheme.js    # 主题样式配置
├── pages               # 主页面
│ ├── _app.js/          # App根组件自定义
│ ├── _document.js/     # document组件自定义
├── redux               # redux目录
├── static              # 静态资源引用目录
├── .editorconfig       # 编辑器配置
├── .eslintrc           # ESlint配置
├── .gitignore          # Git忽略文件配置
├── .prettierignore     # Prettier忽略文件配置
├── .prettierrc         # Prettier配置
├── next.config.js      # next配置
├── pm2.config.js       # pm2配置
├── server              # next服务配置
```

## 功能模块

- [x] 注册
- [x] 登录
- [x] 发布主题
- [x] 评论主题
- [x] 主题频道切换
- [x] 国际化（待开发）
- [x] 点赞（待开发）
- [x] 分享（待开发）
- [x] 转发（待开发）
