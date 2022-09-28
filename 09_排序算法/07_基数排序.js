/**
 * https://juejin.cn/post/6844903950978662414
 * */
const utils = {
  swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
  },
  randomNum() {
    return Math.floor(Math.random() * 100)
  },
  randomArray() {
    return Array.from(Array(this.randomNum()), _ => this.randomNum() * 50 + this.randomNum())
  }
}
// 基数排序
function radixSort(array) {
  let maxLength = 0   // 找出最大位数
  for (let v of array) {
    let length = String(v).length
    if (length > maxLength) {
      maxLength = length
    }
  }
  for (let i = 0; i < maxLength; i++) {
    array = sort(array, i)
  }

  function sort(array, index) {
    let buckets = []
    for (let i = 0; i < 10; i++) {
      buckets.push([])    // 生成元组 10个桶
    }
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
     * */
    for (let v of array) {
      let pad = String(v).padStart(maxLength, '0')// padStart 转字符串补 0
      let num = pad[maxLength - 1 - index]        // 转字符串取下标的方式 （最大位 - 1 - 遍历轮次）
      buckets[num].push(v)
    }
    let result = []
    for (let bucket of buckets) {                 // 依次把10个桶里的值添加到 结果中
      result.push(...bucket)
    }
    return result
  }
  return array
}

let array = radixSort(utils.randomArray())
console.log(array)
