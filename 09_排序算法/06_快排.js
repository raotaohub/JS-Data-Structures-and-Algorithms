// function quickSort(array, left, right) {
//   let l = left
//   let r = right
//   let mid = Math.floor((left + right) / 2)
//   let pivot = array[mid]
//
//   while (l < r) {
//     while (array[l] < pivot) {
//       l++
//     }
//     while (array[r] > pivot) {
//       r--
//     }
//     // 如果 左下标 已经移动到 右下标的位置了 说明左右两边都扫描过了 都是 左小右大了
//     if (l >= r) {
//       break
//     }
//
//     [array[l], array[r]] = [array[r], array[l]]
//
//     // 如果交换之后 array[l] 和 中间数相等 ，那么前移
//     if (array[l] === pivot) {
//       r--
//     }
//     // 如果交换之后 array[r] 和 中间数相等 ，那么后移
//     if (array[r] === pivot) {
//       l++
//     }
//     if (l === r) {
//       l++
//       r--
//     }
//   }
//   if (l === r) {
//     l++
//     r--
//   }
//   if (left < r) {
//     quickSort(array, left, r)
//   }
//   if (right > l) {
//     quickSort(array, l, right)
//   }
// }

function quickSort(array, left, right) {
  let l = left,
    r = right,
    mid = Math.floor((left + right) / 2),
    pivot = array[mid]

  while (l < r) {
    while (array[l] < pivot) l++;
    while (array[r] > pivot) r--;

    if (l >= r) break;

    [array[l], array[r]] = [array[r], array[l]]

    if (array[l] === pivot) r--;
    if (array[r] === pivot) l++;

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

function quick_sort(b, l, r) {
  if (l < r) {
    let mid = get_mid(b, l, r)
    quickSort(b, l, mid + 1)
    quickSort(b, mid - 1, r)
  }
}

function get_mid(b, l, r) {
  let pivot = b[l]
  while (l < r) {
    while (b[r] >= pivot && l < r) r--;
    b[l] = b[r];
    while (b[l] <= pivot && l < r) l++;
    b[r] = b[l];
  }
  b[l] = pivot
  return l
}

let arr2 = [-9, 78, 0, 23, -567, 70]
quick_sort(arr2, 0, arr2.length - 1)
console.log(arr2, '\'快排以左边的值为基准值\'')
