# KHWhyNot

开黑啦为什么不做这个呢？

## 功能

### 目前提供的功能有：

- 每次加载自动载入我的[透明 UI CSS](https://kaihei.co/S9JaO7)
- 如果有加入[我的服务器](https://kaihei.co/dol02o)使用最新版的我的[透明 UI CSS](https://kaihei.co/S9JaO7)
- 每次加载时自动拉取当天必应壁纸作为背景

### 正在做的功能有：

- 自定义背景图片 URL

### 计划或可能做的有：

- 自定义 CSS 地址
- 自定义订阅 CSS 频道
- 自动更新本脚本
- 客户端更新后自动安装本脚本
- 自定义订阅背景频道

## 安装

在开黑啦的安装目录下找到文件

`开黑啦的安装目录\resources\app\webapp\build\index.htm`

使用记事本打开并在最后加上

```html
<script src="https://img.kaiheila.cn/attachments/2021-06/02/60b74ee777a20.js"></script>
```

保存然后重新打开开黑啦即可

## 开发调试

### 配置开发环境

安装 Nodejs，然后

```bash
git clone https://github.com/shugen002/KHWhyNot.git
cd KHWhyNot
npm i
```

### 本地调试

修改前面添加的内容为：

```html
<script src="http://localhost:8080/inject.js"></script>
```

在项目内运行

```
npm run dev
```
