import { isObject, isArrayObject, isTypeOfObject } from './data-type'
export const extend = (to: Object, _from: any[] | object): object => {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

export const toObject = (arr: any[]) => {
  console.log(arr);

  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);

    } else {
      console.log(123);

    }
  }
  return res
}
/**
 * 检查两个值是否大致相等
 * 
 * @param a 
 * 
 * @param b 
 */
export const looseEqual = (a: any, b: any) => {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArrayObject(a);
      var isArrayB = isArrayObject(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
/**
 * 深度合并
 * @param a 
 * @param b 
 */
export const merge = (a: any, b: any): object => {
  if(isObject(a)){
    let obj = {},
      aKeys = Object.keys(a),
      bkeys = isObject(b)? Object.keys(b):null,
      keys = aKeys.concat(bkeys);
    keys.map(value =>{
      if(isTypeOfObject(a[value],b[value]) && isArrayObject(a[value]) && isArrayObject(b[value])){
        obj[value] = merge(a[value],b[value])
      }else {
        obj[value] =b[value]
      }
    })
    return obj
  }else {
    return b
  }
}



export default {
  extend,
  toObject,
  merge
}