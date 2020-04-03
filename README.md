# choi

填写 yaml 配置文件，只需3番钟，即可自动化构建一个简单的网页版简历

## 示例

演示地址：[https://resume.npmrundev.com/](https://resume.npmrundev.com)

![演示图片](https://github.com/chenrrrrr/choi/blob/master/demo.png)

## 项目结构

```
├── README.md
├── package.json
├── public
│   ├── conf.yml  # 配置文件
│   ├── favicon.ico # 站点图标
│   └── index.html # 在这里修改网页的标题
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── less # 全局less
│   │   │   └── common.less
│   │   └── theme
│   │       └── pure # 默认主题
│   │           ├── core.less # 主题核心样式文件
│   │           ├── print.less # 主题打印稿样式
│   │           └── variables.less # 主题样式文件，默认提供了6种颜色，可供快速修改
│   ├── components
│   │   └── pure.vue # pure主题模板组件
│   └── main.js
├── vue.config.js
└── yarn.lock
```

### 配置文件

配置文件采用了简单易懂的`yaml`语法，当`yarn`打包后的`dist`文件部署打牌`nginx`之流的服务器上，会自动解析`conf.yml`并且渲染到页面中，可参考本例项目中的`conf.yml`配置

### 安装依赖

```
yarn install
```

### 打包构建

```
yarn run build / yarn build
```

### 部署到服务器

将dist文件夹的静态文件上传到服务器中

