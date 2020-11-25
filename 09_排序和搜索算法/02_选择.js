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
    // 每轮最小的值的下标
    indexMin = i
    //  j 从 第 i 次开始迭代,从而跳过了上轮的下标
    for (let j = i; j < length; j++) {
      // 若有 arr[j] 比 arr[indexMin] 小，那么将j 赋值给 indexMin
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {   // 若i 和 indexMin 不相等 则进行交换
      // swap(arr, i, indexMin)
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}
array = selectionSort([11, 423, 534, 1223, 5345, 745, 73, 123])
console.log(array.join())
