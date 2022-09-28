/**注释
*  比较函数
*
*/
function compare(a, b) {
  if (a === b) {
    return 0
  }
  a < b ? -1 : 1
}
/**注释
*  交换函数
*
*/
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}
/**注释
* 选择排序：选择排序的思路大致是，找到数据结构中最小的，放到第一位；找到第二小的，放到第二位··· 以此类推
*
*/
function selectionSort(arr, fn = compare) {
  const { length } = arr
  let indexMin

  for (let i = 0; i < length - 1; i++) {
    indexMin = i                                  // 倒数第 i 大的下标
    for (let j = i; j < length; j++) {            // j 从 第 i 次开始迭代,从而再下次循环跳过了上轮的下标
      if (arr[indexMin] > arr[j]) {               // 迭代整个数组若有 arr[j] 小于 arr[indexMin] ,那么将 j 赋值给 indexMin
        indexMin = j
      }
    }
    if (i !== indexMin) {                              // 若i 和 indexMin 不相等 则进行交换
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]] // swap(arr, i, indexMin) 这步交换 可以优化性能
    }
  }
  return arr
}
array = selectionSort([11, 423, 534, 1223, 5345, 745, 73, 123])
console.log(array.join())
