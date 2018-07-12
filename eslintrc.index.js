module.exports = 
{
    // 继承规则eslint:recommended
    // "extends": "eslint:recommended",
    // "extends": ["../index.js"],
    /* 默认情况下，ESLint 会在所有父级目录里寻找配置文件
       ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找
    */
    "root": true,
    /* 指定你想启用的环境
        browser - 浏览器环境中的全局变量。
        node - Node.js 全局变量和 Node.js 作用域。
        commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
        shared-node-browser - Node.js 和 Browser 通用全局变量。
        es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
        ...
        [参考地址] http://eslint.cn/docs/user-guide/configuring#specifying-environments
    */
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    /* 使用 globals 指出你要使用的全局变量,将变量设置为 true 将允许变量被重写，或 false 将不允许被重写
       [参考地址] http://eslint.cn/docs/user-guide/configuring#specifying-globals
    */
    "globals": {
        // "var1": true,
        // "var2": false
    },
    /* ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
       在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
       [参考地址] http://eslint.cn/docs/user-guide/configuring#configuring-plugins
    */
    "plugins": [
        "vue"
        // "eslint-plugin-plugin2"
    ],
    /* 解析器, ESLint 默认使用esprima作为其解析器，你可以在配置文件中指定一个不同的解析器
       [参考地址] http://eslint.cn/docs/user-guide/configuring#specifying-parser
    */
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        }
    },
    /* 规则
       [规则配置参考] http://eslint.cn/docs/user-guide/configuring#configuring-rules 
       [具体规则解释] http://eslint.cn/docs/rules/${rule-key} 
    */
    "rules": {
        // 要求或禁止使用分号代替 ASI
        "semi": ["error", "always"],
        // 禁止使用alert
        "no-alert": "error",
        // 禁止定义未使用的变量
        "no-unused-vars": "error",
        // 禁止对 undefined 重新赋值
        "no-undefined": "error",
        // 不允许在 case 子句中使用词法声明
        "no-case-declarations": "error",
        // 禁止修改类声明的变量
        "no-class-assign": "error",
        // 要求在构造函数中有 super() 的调用
        "constructor-super":"error",
        // 禁止与 -0 进行比较
        "no-compare-neg-zero":"error",
        // 禁止条件表达式中出现赋值操作符
        "no-cond-assign":"error",
        // 禁用 console
        //"no-console":"off",
        // 禁止修改 const 声明的变量
        "no-const-assign":"error",
        // 禁止在条件中使用常量表达式
        "no-constant-condition":"error",
        // 禁止在正则表达式中使用控制字符
        "no-control-regex":"error",
        // 禁用 debugger
        "no-debugger":"error",
        // 禁止删除变量
        "no-delete-var":"error",
        // 禁止 function 定义中出现重名参数
        "no-dupe-args":"error",
        // 禁止类成员中出现重复的名称
        "no-dupe-class-members":"error",
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys":"error",
        // 禁止出现重复的 case 标签
        "no-duplicate-case":"error",
        // 禁止出现空语句块
        "no-empty":"error",
        // 禁止在正则表达式中使用空字符集
        "no-empty-character-class":"error",
        // 禁止使用空解构模式
        "no-empty-pattern":"error",
        // 禁止对 catch 子句的参数重新赋值
        "no-ex-assign":"error",
        // 禁止不必要的布尔转换
        "no-extra-boolean-cast":"error",
        // 禁止不必要的分号
        "no-extra-semi":"error",
        // 禁止 case 语句落空
        "no-fallthrough":"error",
        // 禁止对 function 声明重新赋值
        "no-func-assign":"error",
        // 禁止对原生对象或只读的全局对象进行赋值
        "no-global-assign":"error",
        // 禁止在嵌套的块中出现变量声明或 function 声明
        "no-inner-declarations":"error",
        // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
        "no-invalid-regexp":"error",
        // 禁止在字符串和注释之外不规则的空白
        "no-irregular-whitespace":"error",
        // 禁止空格和 tab 的混合缩进(2个)
        "no-mixed-spaces-and-tabs":"error",
        // 禁止 Symbolnew 操作符和 new 一起使用
        "no-new-symbol":"error",
        // 禁止使用 new 来生成 String, Number 或 Boolean
        "no-new-wrappers": "error",
        // 禁止把全局对象作为函数调用
        "no-obj-calls":"error",
        // 禁用八进制字面量
        "no-octal":"error",
        // 禁止在 return 语句里赋值
        "no-return-assign": [
            "error",
            "always"
        ],
        // 禁止在 return 语句里使用 await
        "no-return-await": "error",
        // 禁止出现 location.href = "javascript:void(0)";
        "no-script-url": "error",
        // 禁止将自己赋值给自己
        "no-self-assign": "error",
        // 禁止将自己与自己比较
        "no-self-compare": "error",
        // 禁止多次声明同一变量
        "no-redeclare":"error",
        // 禁止正则表达式字面量中出现多个空格
        "no-regex-spaces":"error",
        // 禁用稀疏数组稀,疏数组包括很多空位置，经常是由于在数组字面量中使用多个逗号造成的，例如：var items = [,,];
        "no-sparse-arrays":"error",
        // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        "no-this-before-super":"error",
        // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        "no-undef":"error",
        // 禁止出现令人困惑的多行表达式
        "no-unexpected-multiline":"error",
        // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        "no-unreachable":"error",
        // 禁止在 finally 语句块中出现控制流语句
        "no-unsafe-finally":"error",
        // 禁止对关系运算符的左操作数使用否定操作符
        "no-unsafe-negation":"error",
        // 禁用未使用过的标签
        "no-unused-labels":"error",
	// 禁用标签
       "no-labels": "error",
        // 禁用不必要的转义字符
        "no-useless-escape":"error",
        // 要求使用 let 或 const 而不是 var
        "no-var": "error",
        // 禁止出现多行空行(最多2行)
        "no-multiple-empty-lines": ["error", { "max": 2}],
        // 禁用行尾空格
        "no-trailing-spaces": "error",
        // 禁止使用多个空格
        "no-multi-spaces": "error",
        // 禁止修改原生对象
        "no-extend-native": "error",
        // @fixable 禁止使用 !! ~ 等难以理解的运算符
        // 仅允许使用 !!
        "no-implicit-coercion": [
            "error",
            {
                allow: [
                    "!!"
                ]
            }
        ],
        // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout("alert("Hi!")", 100);
        "no-implied-eval": "error",
        // 要求 generator 函数内有 yield
        "require-yield":"error",
        // 要求使用 isNaN() 检查 NaN
        "use-isnan":"error",
        // 强制 typeof 表达式与有效的字符串进行比较
        "valid-typeof":"error",
        // 强制使用一致的反勾号、双引号或单引号(单引号)
        "quotes": ["error", "single"],
        // 强制在逗号前后使用一致的空格
        "comma-spacing": ["error", { "before": false, "after": true }],
        // 强制使用一致的缩进
        "indent": ["error", 2],
        // 要求或禁止末尾逗号
        "comma-dangle": ["error", "never"],
        // 强制在圆括号内使用一致的空格
        "space-in-parens": ["error", "never"],
        // 要求操作符周围有空格
        "space-infix-ops": "error",
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        "key-spacing": ["error", { "mode": "strict" }],
        // 禁用逗号操作符
        "no-sequences": "error",
        // 强制操作符使用一致的换行符
        "operator-linebreak": ["error", "after"],
        // 要求或禁止在变量声明周围换行
        "one-var-declaration-per-line": ["error", "initializations"],
        // 要求对象字面量属性名称用引号括起来
        "quote-props": ["error", "always"]
        // 更多其他规则，参考地址：http://eslint.cn/docs/rules/
    }
}

