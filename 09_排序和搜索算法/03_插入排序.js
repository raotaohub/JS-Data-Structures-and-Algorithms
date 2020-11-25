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