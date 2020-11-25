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


function inserSort(arr) {
  const { length } = arr
  let inserVal, inserIndex

  for (let i = 1; i < length; i++) {
    inserVal = arr[i]
    inserIndex = i - 1
    while (inserIndex >= 0 && inserVal < arr[inserIndex]) {
      arr[inserIndex + 1] = arr[inserIndex] // [7,7,3,8,1]
      inserIndex-- // -1
    }
    arr[inserIndex + 1] = inserVal          // [5,7,3,8,1]
    console.log(arr)
  }
}

let arr = randomArray(8)

inserSort(arr)