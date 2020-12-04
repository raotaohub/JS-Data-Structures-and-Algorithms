// 思想，找到一个数组中的中轴值，把比pivot小的放左边，大的放右边
function quickSort(arr, left, right) {
  let l = left    // 左下标
  let r = right   // 有下标
  let mid = Math.floor((left + right) / 2)
  let pivot = arr[mid]// 中轴值

  while (l < r) { // l 下标 < r 下标就继续循环
    while (arr[l] < pivot) {  // 遍历左边
      l++
    }
    while (arr[r] > pivot) {  // 遍历右边
      r--
    }
    // 如果 l>=r 说明左边都是小于 pivot的值 右边都是大的
    if (l >= r) {
      break
    }

    [arr[l], arr[r]] = [arr[r], arr[l]] // 交换

    if (arr[l] == pivot) {
      r--
    }
    if (arr[r] == pivot) {
      l++
    }
    if (l == r) {
      l++
      r--
    }
  }
  // 如果l==r 那么必须让他们继续移动 否则会死循环
  if (l == r) {
    l++
    r--
  }
  if (left < r) {   //  左边的递归
    quickSort(arr, left, r)
  }
  if (right > l) { // 右边的递归
    quickSort(arr, l, right)
  }
}

let arr = [-9, 78, 0, 23, -567, 70, -1, 900, -4561]
quickSort(arr, 0, arr.length - 1)
console.log(arr);





















/**注释  思路
*   1）选择数组一个值作为主元，中间的那个值 piovt
*   2）创建两个指针 一个指向数组第一个，一个指向数组最后一个
*       2.1）移动左指针，直到找到比主元大的，移动右指针直到找到比主元小的，然后交换他们，
*       2.2）重复这个过程直到 大的都在主元右侧，小的都在左侧
*   3）对划分后的小数组重复上面的过程，直到数组都已经排序完成
*/

function quickSort2(array) {
  return quick(array, 0, array.length - 1)
};

function quick(array, left, right) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (right > index) {
      quick(array, index, right)
    }
  }
  return array
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)]
  let l = left
  let r = right

  while (l <= r) {
    while (array[l] < pivot) {
      l++
    }
    while (array[r] > pivot) {
      r--
    }
    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }
  return l
}

// console.log(quickSort2(arr));