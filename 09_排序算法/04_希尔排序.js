function randomArray(num) {
  const array = new Array(num)
  for (let i = 0; i < num; i++) {
    array[i] = Math.floor(Math.random() * 10)
  }
  return array
}
/**注释
 *希尔排序 是插入排序的优化版本，减少增量的排序方式
 *
 */
function shellSort(arr) {
  let len = arr.length
  // gap开始一个分组
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {

    for (let i = gap; i < len; i++) {
      // 开始一个内循环 遍历各组所有元素(有5组，每组2个元素);比较哪两个元素呢？ 5 和 5-5
      for (let j = i - gap; j >= 0; j -= gap) {
        // 若下标 0 的元素大于 下标 5 的元素 ，那么交换它们的位置
        if (arr[j] > arr[j + gap]) {
          [arr[j + gap], arr[j]] = [arr[j], arr[j + gap]]
        }
      }
    }
    console.log(`希尔排序排序`, arr) // [3, 5, 1, 6, 0, 8, 9, 4, 7, 2]

  }
  // // 第一轮 10/2 = 5
  // for (let i = 5; i < arr.length; i++) {
  //   // 开始一个内循环 遍历各组所有元素(有5组，每组2个元素);比较哪两个元素呢？ 5 和 5-5
  //   for (let j = i - 5; j >= 0; j -= 5) {
  //     // 若下标 0 的元素大于 下标 5 的元素 ，那么交换它们的位置
  //     if (arr[j] > arr[i]) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]]
  //     }
  //   }
  // }
  // console.log(arr) // [3, 5, 1, 6, 0, 8, 9, 4, 7, 2]

  // // 第二轮 10/2 = 5/2 = 2
  // for (let i = 2; i < arr.length; i++) {
  //   // 开始一个内循环 遍历各组所有元素(有5组，每组2个元素);比较哪两个元素呢？ 5 和 5-5
  //   for (let j = i - 2; j >= 0; j -= 2) {
  //     // 若下标 0 的元素大于 下标 5 的元素 ，那么交换它们的位置
  //     if (arr[j] > arr[i]) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]]
  //     }
  //   }
  // }
  // console.log(arr) // [3, 5, 1, 6, 0, 8, 9, 4, 7, 2]}
}
let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0]

// shellSort(arr)

function shellSort2(arr) {
  let len = arr.length
  let index = 0
  let temp = 0
  // 外面的循环是分组的过程 ,gap 是步进的长度
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {

    // 内部的循环是对每个分组进行 插入排序 ，从第 gap 开始（相当于插入排序选择无序列表的第一个元素开始比较）
    for (let i = gap; i < len; i++) {
      index = i
      temp = arr[index]
      if (arr[index] < arr[index - gap]) {
        while (index - gap >= 0 && temp < arr[index - gap]) {
          arr[index] = arr[index - gap]
          index -= gap
        }
        //退出时表示找到了要插入的位置
        arr[index] = temp
      }

    }
    console.log(arr)
  }
}
shellSort2(arr)
