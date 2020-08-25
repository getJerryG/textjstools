/**
 * 数据去重 Remove the repetition
 */
const unique = (arr: any[]): any[] => {
  let result = [], hash = {};
  for (let i = 0, elem: any; (elem = arr[i]) != null; i++) {
    var code = elem.commodity.commodityCode;
    if (!hash[code]) {
      result.push(elem);
      hash[code] = true;
    }
  }
  return result;
}
/**
 * 返回数组最大值
 * @param arr 
 */
const arrayMax = (arr: number[]): number => Math.max(...arr);
/**
 * 返回数组最小值
 * @param arr 
 */
export const arrayMin = (arr: number[]): number => Math.min(...arr);
export const compact = (arr:any[]):any[] => arr.filter(Boolean);
export const countOccurrences = (arr:any[], value:any):any => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
export const deepFlatten = (arr:any[]):any[] => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));
export const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr.shift();
  return arr;
  };
export const toArray = (list:any[],start=0):any[]=>{
  let i = list.length - start;
  let ret = new Array(i);
  while(i --){
    ret[i] = list[i+start];
  }
  return ret
}
export default { 
  unique ,
  arrayMax ,
  arrayMin,
  compact,
  countOccurrences,
  deepFlatten,
  dropElements,
  toArray,
}