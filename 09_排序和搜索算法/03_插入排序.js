function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;                                // 相等 返回 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // 小于返回 -1 大于返回1
}
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}
/**注释
* 插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着，
* 它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确
* 排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。
*
*/
function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array; // {1}
  let temp;
  for (let i = 1; i < length; i++) { // {2}
    let j = i; // {3}
    temp = array[i]; // {4}
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) { // {5}
      array[j] = array[j - 1]; // {6}
      j--;
    }
    array[j] = temp; // {7}
  }
  return array;
};



function insertionSort(arr) {
  const len = arr.length
  let val, index

  for (let i = 1; i < len; i++) { // 第一次 把数组的第1个当成是要插入的值，第0看成是有序的
    val = arr[i]                  // 保存要插入的值
    index = i - 1                 // 有序表的最大下标

    while (index >= 0 && val < arr[index]) { // 问,有序表的最大下标是否大于 0 ， 插入值 是否小于有序表最后一个值
      arr[index + 1] = arr[index]            // 满足，则
      index--
    }
    arr[index + 1] = val

  }
  return arr
}