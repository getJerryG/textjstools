declare const textjstools: {
    extend: (to: Object, _from: object | any[]) => object;
    toObject: (arr: any[]) => {};
    unique: (arr: any[]) => any[];
    arrayMax: (arr: number[]) => number;
    arrayMin: (arr: number[]) => number;
    compact: (arr: any[]) => any[];
    countOccurrences: (arr: any[], value: any) => any;
    deepFlatten: (arr: any[]) => any[];
    dropElements: (arr: any, func: any) => any;
    toArray: (list: any[], start?: number) => any[];
    toFillStr: (str: string, n: number, insertStr: string) => string;
    cached: (fn: Function) => Function;
    camelize: Function;
    hyphenate: Function;
    repeat: (str: string, n: number) => string;
    evenNums: (num: number) => boolean;
    oddNum: (num: number) => boolean;
    primeNum: (num: number) => boolean;
    primeNumArr: (num: number) => Number[];
    totalNum: (num: number) => boolean;
    totalNumArr: (num: number) => Number[];
    toNum: (str: string) => number;
    toPrice: (str: string, n: number) => number;
    toPrice1: (str: string, n: number) => number;
    toPrice2: (str: string) => string;
    narcissisticNum: (num: number) => boolean;
    narcissisticArr: (num: number) => number[];
    factorial: (num: number) => number;
    isUndefined: (value: any) => Boolean;
    isNumber: (value: any) => Boolean;
    isString: (value: any) => Boolean;
    isBoolean: (value: any) => Boolean;
    isNull: (value: any) => Boolean;
    isFunction: (value: any) => Boolean;
    isObject: (value: any) => Boolean;
    isNaN: (value: any) => Boolean;
    isArrayObject: (value: object) => Boolean;
    isNumberObject: (value: object) => Boolean;
    isStringObject: (value: object) => Boolean;
    isBooleanObject: (value: object) => Boolean;
    isSymbol: (value: any) => Boolean;
    isBigint: (value: any) => Boolean;
};
export default textjstools;
