
function compare(a, b) {
  if (a === b) {
    return 0
  }
  a < b ? -1 : 1
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}

function selectionSort(arr, fn = compare) {
  const { length } = arr
  let indexMin

  for (let i = 0; i < length - 1; i++) {
    // 每次最小的值的下标
    indexMin = i
    //  j 从 第 i 次开始迭代,从而跳过了上一次的值
    for (let j = i; j < length; j++) {
      // 如果 arr[j]的循环中 发现有比 arr[indexMin] 还小的值，那么将j 赋值给 indexMin
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      // swap(arr, i, indexMin)
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}
array = selectionSort([11, 423, 534, 1223, 5345, 745, 73, 123])
console.log(array.join())
