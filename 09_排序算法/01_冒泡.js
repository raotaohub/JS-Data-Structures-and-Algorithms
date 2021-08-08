// function compare(a, b) {
//   if (a > b) return 1
//   if (a === b) return 0
//   if (a < b) return -1
// }

// function bubbleSort(arr, fn = compare) {
//   let { length } = arr
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1; j++) {
//       if (arr[i] < arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([11, 423, 534, 1223, 5345, 745, 73, 123]))

// 提前存储数组的长度 避免每次遍历都读这个值
// 开始一个外层循环，代表每次取下标为 i 的元素作为第一项 
// 开始一个内循环，代表每次取下标为 j 的元素作为第二项； 直至内循环迭代完，
// 外循环迭代一次，再进入内循环迭代一轮, 首次跳过第一项，每轮跳过第i项
// 内循环在迭代的过程中，若发现有比下标为 i 还小的元素 ，则对他们进行调换
function bubbleSort(arr) {
  let { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[i] < arr[j]) {
        // let temp = arr[i]
        // arr[i] = arr[j]
        // arr[j] = temp  //经典方式 es5 之前 👇
        [arr[i], arr[j]] = [arr[j], arr[i]] // 这个是 es6之后 解构赋值写法 
      }
    }
  }
  return arr
}

console.log(bubbleSort([11, 423, 534, 1223, 5345, 745, 73, 123]))    // 输出 [11, 73, 123, 423, 534, 745, 1223, 5345]