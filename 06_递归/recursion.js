console.log('————————————————————递归学习开始————————————————')

/*
  递归是一种解决问题的方法，通常涉及函数调用自身，或者相互调用。
  每个递归都必须有一个 基线条件（终止条件） 否则会导无限递归。
 */

//  迭代阶乘

function factorialItertative(number) {
  if (number < 0) return undefined
  let tobal = 1
  for (let n = number; n > 1; n--) {
    tobal = tobal * n
  }
  return tobal
}
console.log(factorialItertative(5))

console.log('————————————————————使用递归解———————————————————————')

// 用递归来重新书写
function factorial(number) {
  console.trace()
  if (number == 1 || number <= 0) {                 // 找到终止条件
    return 1
  }
  return number * factorial(number - 1)             // 找到等价关系式
}
console.log(factorial(3))


console.log('————————————————————用递归求斐波那契数————————————————')

function fibonacci(number) {
  if (number < 1) return 0
  if (number <= 2) return 1
  return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log('fibonacci(2)', fibonacci(2))
console.log('fibonacci(3)', fibonacci(3))
console.log('fibonacci(4)', fibonacci(4))
console.log('fibonacci(5)', fibonacci(5))