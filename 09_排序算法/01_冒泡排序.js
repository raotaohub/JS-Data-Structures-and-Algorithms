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

function bubbleSort(array, compareFn = defaultCompare) {

  const { length } = array    //

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // let temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp  //经典方式
        swap(array, j, j + 1)
      }
    }
  }
  return array
}


function createNonSortedArray(size) {
  var array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const array = bubbleSort(createNonSortedArray(999));
console.log(array);

