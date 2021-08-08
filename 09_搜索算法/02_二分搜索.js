/**
 * 递归法
 * */
// 二分搜索的前提是传入的数组有序
function binarySearch(array, left, right, findVal) {
  if (left > right) {
    console.log(-1)
    return -1
  }
  let mid = Math.floor((left + right) / 2)
  if (findVal < array[mid]) {
    return binarySearch(array, left, mid - 1, findVal)
  }
  if (findVal > array[mid]) {
    return binarySearch(array, mid + 1, right, findVal)
  }
  if (findVal === array[mid]) {
    console.log(mid)
    return mid
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

binarySearch(array, 0, array.length - 1, 7)

/**
 * 思考题：如果要求返回所有满足条件的值的下标该如何操作？
 * 向左扫描，向右扫描，并把满足条件的值加入到 result 并返回
 * */

function binarySearch2(array, left, right, findVal, result = []) {
  if (left > right) {
    result.push(-1)
    console.log(result)
    return result
  }
  let mid = Math.floor((left + right) / 2)
  if (findVal < array[mid]) {
    return binarySearch2(array, left, mid - 1, findVal)
  }
  if (findVal > array[mid]) {
    return binarySearch2(array, mid + 1, right, findVal)
  }
  if (findVal === array[mid]) {
    let i = mid - 1
    //向左扫描
    while (true) {
      if (i < 0 || array[i] !== findVal) {
        break
      }
      result.push(i)
      i--
    }
    result.push(mid)
    i = mid + 1
    while (true) {
      if (i > array.length - 1 || array[i] !== findVal) {
        break
      }
      result.push(i)
      i++
    }
    console.log(result)
    return result
  }
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 8, 9, 10]

binarySearch2(array2, 0, array.length - 1, 7)
/**
 * 迭代法
 * */
