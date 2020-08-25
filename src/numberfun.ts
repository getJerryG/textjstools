
const evenNums = (num:number):boolean => num % 2 === 0

const oddNum = (num:number):boolean => num % 2 === 1

const primeNum = (num:number):boolean => {
  if (num < 2) return false;
  for (var i = num - 1; i > 1; i--) {
    if (num % i === 0) return false
  }
  return true
}
const primeNumArr = (num:number):Number[] => {
  var arr = [];
  for (var i = num; i > 1; i--) {
    if (primeNum(i)) {
      arr.push(i)
    }
  }
  return arr
}
const totalNum = (num:number):boolean => {
  if (num < 2) return false;
  for (var i = num - 1; i > 1; i--) {
    if (num % i === 1) return false
  }
  return true
}
const totalNumArr =(num:number):Number[] => {
  var arr = []
  for (var i = num; i > 1; i--) {
    if (totalNum(i)) {
      arr.push(i)
    }
  }
  return arr.sort((a,b)=>a-b)
}

const narcissisticNum = (num:number):boolean => {
  if (num < 100 || num >= 1000) throw new Error('this Number be must greater than or equal to 100 and less than 1000')
  const hundred = Math.floor(num / 100), ten = Math.floor( (num - (hundred * 100) ) / 10),one = num - hundred*100-ten*10
  return Math.pow(hundred,3)+Math.pow(ten,3)+Math.pow(one,3) === num
}

const narcissisticArr = (num:number):number[] => {
  if (num < 100 || num >= 1000) throw new Error('this Number be must greater than or equal to 100 and less than 1000')
  const arr = []
  for(let i = num; i>=100;i--){
    if(narcissisticNum(i)){
      arr.push(i)
    }
  }
  return arr.sort((a,b)=>a-b)

}
const factorial = (num:number):number => {
  if(num<1){
    return 1
  }
  num  = num * factorial(num-1)
  return num
}

// 将字符串转化数字
const toNum = (str:string):number => {
  // return str.replace(/\,|\￥/g, "");
  const strArr = str.match(/\d/g)
  var n = ''
  strArr.map(num => n += num)
  return Number(n)
}
// 保留两位小数（四舍五入）
const toPrice = (str:string, n:number) => {
  let nstr = toNum(str);
  if (isNaN(nstr)) return;
  const strArr = parseFloat(str).toFixed(n).toString().split(".");
  strArr[0] = strArr[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
  return Number(strArr.join("."));
}

// 保留两位小数（不四舍五入）
const toPrice1 = (str:string, n:number) => {
  let nstr = toNum(str);
  if (isNaN(nstr)) return;
  const strArr = parseFloat(str.replace(/(\.\d{2})\d+$/, "$1")).toFixed(n).toString().split(".");
  strArr[0] = str[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
  return Number(strArr.join("."));
}

// 不处理小数部分
const toPrice2 = (str:string) => {
  let nstr = toNum(str);
  if (isNaN(nstr)) return;
  const source = str.split(".");
  source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
  return source.join(".");
}

export default {
  evenNums, oddNum, primeNum, primeNumArr,
  totalNum, totalNumArr, toNum, toPrice, toPrice1, toPrice2,
  narcissisticNum,narcissisticArr,factorial
}

