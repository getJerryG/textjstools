
export const isUndefined = (value: any): Boolean => value === undefined
export const isNumber = (value: any): Boolean => typeof (value) === 'number';
export const isString = (value: any): Boolean => typeof (value) === 'string';
export const isBoolean = (value: any): Boolean => typeof (value) === 'boolean'
export const isNull = (value: any): Boolean => '' + value === 'null'
export const isFunction = (value: any): Boolean => typeof (value) === 'function'
export const isObject = (value: any): Boolean => typeof (value) === 'object'
export const isNaN = (value: any): Boolean => isNaN(value)
export const isArrayObject = (value: object): Boolean => !isNull(value) ? value instanceof Array : false
export const isNumberObject = (value:object): Boolean => !isNull(value)?value instanceof Number :false
export const isStringObject = (value:object): Boolean => !isNull(value)?value instanceof String :false
export const isBooleanObject = (value:object): Boolean => !isNull(value)?value instanceof Boolean :false
export const isSymbol = (value: any): Boolean => typeof (value) === 'symbol';
export const isBigint = (value: any): Boolean => typeof (value) === 'bigint';
/**
 * 判断两个值类型是否相等
 * @param a 
 * @param b 
 */
export const isType = (a:any,b:any):Boolean =>{
  return isNumber(a)&&isNumber(b)||
  isString(a)&&isString(b)||
  isBoolean(a)&&isBoolean(b)||
  isObject(a)&&isObject(b)||
  isUndefined(a)&&isUndefined(b)||
  isNull(a)||isNull(b)
}
export const isTypeOfObject = (a:any,b:any):Boolean =>{
  return isObject(a)&&isObject(b)
}
export default {
  isUndefined, 
  isNumber, 
  isString, 
  isBoolean,
  isNull, 
  isFunction, 
  isObject, 
  isNaN,
  isArrayObject, 
  isNumberObject, 
  isStringObject, 
  isBooleanObject,
  isSymbol, 
  isBigint,
  isType,
  isTypeOfObject
}


