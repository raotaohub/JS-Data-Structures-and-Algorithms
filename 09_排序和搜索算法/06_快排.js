function quickSort(array, left, right) {
  let l = left
  let r = right
  let mid = Math.floor((left + right) / 2)
  let pivot = array[mid]

  while (l < r) {
    while (array[l] < pivot) {
      l++
    }
    while (array[r] > pivot) {
      r--
    }
    // 如果 左下标 已经移动到 右下标的位置了 说明左右两边都扫描过了 都是 左小右大了
    if (l >= r) {
      break
    }

    [array[l], array[r]] = [array[r], array[l]]

    // 如果交换之后 array[l] 和 中间数相等 ，那么前移
    if (array[l] === pivot) {
      r--
    }
    // 如果交换之后 array[r] 和 中间数相等 ，那么后移
    if (array[r] === pivot) {
      l++
    }
    if (l === r) {
      l++
      r--
    }
  }
  if (l === r) {
    l++
    r--
  }
  if (left < r) {
    quickSort(array, left, r)
  }
  if (right > l) {
    quickSort(array, l, right)
  }
}

let arr = [-9, 78, 0, 23, -567, 70]

quickSort(arr, 0, arr.length - 1)

console.log(arr)
