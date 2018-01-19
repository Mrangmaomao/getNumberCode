这是一个前端数字登陆验证码，所用到的技术，es6 + canvas。不基于任何框架

安装： npm install get-number-code --save

用法：

    html 部分 创建一个canvas
    
        <canvas width="120" height="40" id='canvas' v-show="showCode"></canvas>
        
    js 部分
    
      let f = getCode({el:'#canvas'});
      
返回参数：

    getFonts: 返回当前使用到的随机数字code
    
    例子：let code = f.getFonts()
    
注：使用到generator函数，webpack 如果报错regeneratorRuntime is not defined，请参照此文章配置webpack。

    网址：https://www.jianshu.com/p/c87fb7b3e450
   
 DEMO 地址 ： https://github.com/Mrangmaomao/PLUGIN-DEMO
