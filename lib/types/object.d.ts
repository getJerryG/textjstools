export declare const extend: (to: Object, _from: any[] | object) => object;
export declare const toObject: (arr: any[]) => {};
/**
 * 检查两个值是否大致相等
 *
 * @param a
 *
 * @param b
 */
export declare const looseEqual: (a: any, b: any) => any;
/**
 * 深度合并
 * @param a
 * @param b
 */
export declare const merge: (a: any, b: any) => object;
declare const _default: {
    extend: (to: Object, _from: object | any[]) => object;
    toObject: (arr: any[]) => {};
    merge: (a: any, b: any) => object;
};
export default _default;
