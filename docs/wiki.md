# 大规范
## Questions

### 1.主题是否需要做多套 ios andriod 
> 前期我觉得做ios 就行 

### 2.组件的命名
> 以 ion- 开头命令


## 目录规范 介绍
<pre>
.
├── build                          //webpack 脚步
├── dist                           //发布文件
├── docs                           //开发文档    
├── examples                       //测试demo    
├── src                            //项目源文件
│    ├── components                //组件库    
│         ├── action-sheet         //单个组件 
               ├── src             //源码
               ├── index.js        //对外暴露 
               └── README.md       //单个组件文档接口在这
│         ├── lib                  //第三方资源
               ├── ionic           //ionic scss 源码
               └── ...    
│         └── ...                
│    ├── scss                      //自定义样式 对ionic 自定义的
│    ├── utils                     //工具库
│    └── index.js                  //对外暴露 
├── static                         //项目本身的静态资源
├── test                           //测试...木错是测试
├── .gitignore                     //
├── package.json                   //
├── ...
│
└──
.
</pre> 

## 开发须知
> 基于vue 2.0 开发
> 规范 https://github.com/airbnb/javascript

## 主题获取
```javascript
//在代码vue 中可以通过  this.$ionic.theme 获取到主题 默认是 ios  可以设置成md  可通过如下代码设置
Vue.use(VueIonic, { theme: 'md' });
```
