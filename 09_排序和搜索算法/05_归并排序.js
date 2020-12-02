function defaultCompare(a, b) {
  if (a === b) return COMPARE.EQ
  a < b ? COMPARE.LESS : COMPARE.BIG
}
COMPARE = {
  BIG: 1,
  LESS: -1,
  EQ: 0
}
function meregeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array
    const mid = Math.floor(length / 2)
    const left = meregeSort(arr.slice(0, mid), compareFn)
    const right = meregeSort(arr.slice(mid, length), compareFn)
    array = merege(left, right, compareFn)
  }
  return array
}
function