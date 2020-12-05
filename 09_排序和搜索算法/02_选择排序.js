/*
  选择排序的思路
  原始的数组：101，34，119，1
  第一轮排序：1，34，119，101
  第二轮排序：1，34，119，101
  第三轮排序：1，34，101，119

  说明：
  1、选择排序一共有 数组大小-1 轮排序


 */
function selectionSort(arr) {
  let indexMin
  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i

    for (let j = i; j < arr.length; j++) {        // 注意点：这里的length 不能-1 否则最后一个会排不到 
      if (arr[indexMin] > arr[j]) {               // 这里要用 arr[indexMin] 来比较
        indexMin = j
      }
    }
    if (i != indexMin) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}
array = selectionSort([11, 423, 534, 1223, 5345, 745, 73, 123])
console.log(array.join())