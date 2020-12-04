/**注释        [7,5,3,8,1]
* 插入排序算法
*   1. 找到数组下标为 1 的 元素与下标为 1-1 的元素进行比较
*/
function randomArray(num) {
  const array = new Array(num)
  for (let i = 0; i < num; i++) {
    array[i] = Math.floor(Math.random() * 10)
  }
  return array
}
// console.log(randomArray(800))

/**注释
* 思想，把数据看成是一个有序列表和无序列表，每次都从无序列表中取一个数组，和有序列表中的数字比较，并找到它在有序列表中的位置。
*
*/
function inserSort(arr) {
  const { length } = arr
  let inserVal, inserIndex

  for (let i = 1; i < length; i++) {
    inserVal = arr[i]  // inserVal 是待插入的数字
    inserIndex = i - 1 // 有序表的最大索引值
    // 1.保证 insertIndex >= 不越界 // 2.inserVal < arr[inserIndex] 说明待插入的数字还没找到插入位置

    while (inserIndex >= 0 && inserVal < arr[inserIndex]) {
      arr[inserIndex + 1] = arr[inserIndex] // [7,7,3,8,1]
      inserIndex-- // -1
    }
    arr[inserIndex + 1] = inserVal          // [5,7,3,8,1]
  }
}

let arr = randomArray(10)

inserSort(arr)