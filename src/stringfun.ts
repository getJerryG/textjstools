
export const toFillStr = (str: string, n: number, insertStr: string) =>
  n === 0 ? insertStr + str :
    str.slice(0, n) + insertStr + str.slice(n, str.length);
export const cached = (fn: Function): Function => {
  let cache = Object.create(null);
  return ((str: string): string => {
    let hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

export const camelizeRE = /-(\w)/g;
export const camelize = cached(function (str: string): string {
  return str.replace(camelizeRE, function (_: string, c: string): string { return c ? c.toUpperCase() : ''; })
});

export const hyphenateRE = /\B([A-Z])/g;
export const hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});
export const repeat = function (str: string, n: number): string {
  let res = '';
  while (n) {
    if (n % 2 === 1) { res += str; }
    if (n > 1) { str += str; }
    n >>= 1;
  }
  return res
};


export default {
  toFillStr,
  cached,
  camelize,
  hyphenate,
  repeat,
}