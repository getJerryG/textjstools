# textjstools 

![David](https://img.shields.io/badge/Node-v14.4.0-green)![David](https://img.shields.io/badge/webpack-v4.44.1-green)![David](https://img.shields.io/badge/typescript-v4.0.2.1-green)



##  author

CJerryG



## About

> textjstools 是一个javascript 函数库扩展。您可以尽情的使用它，您也可以按需加载。
>
> 该函数库为测试库（功能还不够完善。如有建议，可以lssues；如因为错误所造成的后果，请您见谅！）



## Build Setup

install dependencies

```sh
$ npm install --save textjstools
```

import textjstools

```js
import textjstools from 'textjstools'
```

demand import

```js
import {toStr} form 'textjstools'
```



## Characteristic

- [x] 水仙花树（Narcissus）
- [x] 阶乘 （factorials）
- [x] 数组去重（Array to remove duplicate）
- [ ] 深度克隆 （Deep cloning）
- [ ] 对象深度合并（Object depth merge）
- [ ] 算法 （Javascript algorithm）



## Content list



**dataType.js**

| 名称            | 描述              | 参数   | 返回值              |
| --------------- | ----------------- | ------ | ------------------- |
| isUndefined     | 是否为`Undefined` | any | `true`&#124;`false` |
| isNumber        | 是否为`Number`    | any |   `true`&#124;`false`                  |
| isString        | 是否为`String`    | any |    `true`&#124;`false`                 |
| isBoolean       | 是否为`Boolean`    | any |  `true`&#124;`false`                   |
| isNull          | 是否为`Null`    | any |     `true`&#124;`false`                |
| isFunction      | 是否为`Function`    | any |  `true`&#124;`false`                   |
| isObject        | 是否为`Object`    | any |     `true`&#124;`false`                |
| isNaN           | 是否为`NaN`    | any | `true`&#124;`false` |
| isArrayObject   | 是否为`ArrayObject`    | any |  `true`&#124;`false`                   |
| isNumberObject  | 是否为`NumberObject`    | any |  `true`&#124;`false`                   |
| isStringObject  | 是否为`StringObject`    | any  | `true`&#124;`false`                    |
| isBooleanObject | 是否为`BooleanObject`    | any | `true`&#124;`false`                    |
| isSymbol        | 是否为`Symbol`    | any  |  `true`&#124;`false`                   |
| isBigint        | 是否为`Bigint`    | any |   `true`&#124;`false`                  |



**numberfun.js**

| 名称        | 描述                                         | 参数   | 返回值              |
| ----------- | -------------------------------------------- | ------ | ------------------- |
| evenNums    | 是否为偶数                                   | Number | `true`&#124;`false` |
| oddNum      | 是否为奇数                                   | Number | `true`&#124;`false` |
| primeNum    | 是否为质数（大于1且只能被1或自身整除）       | Number | `true`&#124;`false` |
| primeNumArr | 返回2 至 该数的质数集合                      | Number | [...]               |
| totalNum    | 是否为合数（大于1且可以被其他数整除，除了0） | Number | `true`&#124;`false` |
| totalNumArr | 返回2至该数的合数集合                        | Number | [...]               |
| toNum       | 强制转换成Number                             | any    | Number\|NaN         |
| toPrice     | 保留n位小数（四舍五入）                      | Number | String              |
| toPrice1    | 保留n位小数（不四舍五入）                    | Number | String              |
| toPrice2    | 不处理小数部分                               | Number | String              |



**stringfun.js**

| 名称      | 描述               | 参数                                              | 返回值 |
| --------- | ------------------ | ------------------------------------------------- | ------ |
| toStr     | 强制转换成`String` | any                                               | String |
| toFillStr | 填充元素           | String<br/>Number：从哪填充<br/>String:填充的元素 | String |
|           |                    |                                                   |        |



**array.js**

| 名称      | 描述               | 参数                                              | 返回值 |
| --------- | ------------------ | ------------------------------------------------- | ------ |
|    unique | 数组去掉重复的元素| array                                                |array|



## Examples

```js
import textjstools from 'textjstools';
const arr = textjstools.primeNum(12);//[2,3,5,7,11]
```

```js
import {totalNumArr} from 'textjstools';
const arr = totalNumArr(12);//[4,6,8,9,10,12]
```



## Communication

vx:GJteams（注明来意）

github:https://github.com/getJerryG

npm:https://www.npmjs.com/textjstools

##  Plate
  - Number
  - String
  - Arrray
  - Object
  - dataType
  - browser
  - Mode


## expect

更多功能敬请期待，欢迎共同创造！