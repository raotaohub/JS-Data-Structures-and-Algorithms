function mergeSort(arr, left, right, temp) {
  if (left < right) {
    let length = left + right
    let mid = Math.floor(length / 2)
    mergeSort(arr, left, mid, temp)
    mergeSort(arr, mid + 1, right, temp)
    merge(arr, left, mid, right, temp)
  }

}

function merge(arr, left, mid, right, temp) {
  let i = left
  let j = mid + 1
  let t = 0

  // left           right
  // [8,4,5,7,3,1,6,2]      temp [ ]
  //  i     m j                   t
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[t] = arr[i]
      t += 1
      i += 1
    } else {
      temp[t] = arr[j]
      t += 1
      j += 1
    }
  }
  //2. 如果退出第一个while循环 ，那么要通过下标判断左边和右边是否还有值
  while (i <= mid) {
    temp[t] = arr[i]
    t += 1
    i += 1
  }
  while (j <= right) {
    temp[t] = arr[j]
    t += 1
    j += 1
  }
  //3. 把temp数组里的元素拷贝到arr中
  t = 0
  let tempLeft = left
  // 第1次 tL = 0 ，right = 1 ，第2次 tL= 2 ,right = 3 ,第3次tL = 0 , right = 3, 最后一次 tL = 0，right = 7
  while (tempLeft <= right) {
    arr[tempLeft] = temp[t]
    tempLeft += 1
    t += 1
  }
}

let arr = [8, 4, 5, 7, 3, 1, 6, 2]
let temp = [arr.length]
mergeSort(arr, 0, arr.length - 1, temp)

console.log(arr)
