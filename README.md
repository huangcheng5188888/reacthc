# webpack 配置的方法

安装相关的依赖：
npm i react-app-rewired --save-dev
npm i customize-cra --save-dev
修改 package.json 的 scripts 为
"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-scripts eject"
}
在根目录下添加 config-overrides.js 配置文件
具体支持的配置可以查看 customize-cra 文档

# 使用 cssrem

根目录创建.cssrem

https://marketplace.visualstudio.com/items?itemName=cipchk.cssrem
