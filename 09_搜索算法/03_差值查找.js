function inserValueSearch(arr, left, right, findVal) {
  if (left > right || findVal < arr[0] || findVal > arr[arr.length - 1]) {
    return -1
  }
  let mid = left + Math.floor((right - left) * (findVal - arr[left]) / (arr[right] - arr[left]))
  // console.log(mid)
  // Math.floor((left + right) / 2)
  let midVal = arr[mid]

  if (findVal < midVal) {
    return inserValueSearch(arr, left, mid - 1, findVal)
  } else if (findVal > midVal) {
    return inserValueSearch(arr, mid + 1, right, findVal)
  } else {
    return mid
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 125, 198, 412, 745, 4346]

let res = inserValueSearch(array, 0, array.length - 1, 198)

console.log(res)
