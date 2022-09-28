// add(element)            向集合添加一个新元素
// delete(element)         从集合删除一个  元素
// has(element)            检查集合是否有该元素，有则返回ture 无则返回false
// clear()                 移除集合中所有元素
// size()                  返回集合中元素的个数
// values()                返回一个  包含集合中所有元素的  数组
// union(ohterSet)         并集 给定两个集合 ，返回一个包含两个集合 所有元素 的新集合
// intersection()          交集 给定两个集合 ，返回一个包含两个集合 共同元素 的新集合                    
// difference(otherSet)    差集 给定两个集合 , 返回一个存在于第一个集合且不存在第二个集合的元素的 新集合
// isSubsetOf(otherSet)    子集 验证          一个集合是否是另一个集合的子集

class Set {
  constructor() {
    this.items = {}
  }
  // add(element)            向集合添加一个新元素
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }
  // delete(element)         从集合删除一个  元素
  delete(element) {
    if (!this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  // has(element)            检查集合是否有该元素，有则返回ture 无则返回false
  has(element) {
    // return element in this.items[element]
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  // clear()                 移除集合中所有元素
  clear() {
    this.items = {}
  }
  // size()                  返回集合中元素的个数
  size() {
    // return Object.keys(this.items).length  // ES6的Object内置方法
    let count = 0
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }
  // values()                返回一个  包含集合中所有元素的  数组
  values() {
    let values = []
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key)
      }
    }
    return values
  }
  // union(ohterSet) 并集 给定两个集合 ，返回一个包含两个集合所有元素的新集合
  union(ohterSet) {
    const unionSet = new Set()
    this.values().forEach(val => { unionSet.add(val) })
    ohterSet.values().forEach(val => { unionSet.add(val) })
    return unionSet
  }
  // intersection(ohterSet)          交集 给定两个集合 ，返回一个包含两个集合 共同元素 的新集合  
  intersection(ohterSet) {
    const intersectionSet = new Set()
    const values = this.values()
    const ohterValues = ohterSet.values()
    // 优化一下 遍历元素少的那个集合
    let bigSet = values
    let samllSet = ohterValues
    if (ohterValues.length - values.length > 0) {
      bigSet = ohterValues
      samllSet = values
    }
    samllSet.forEach(val => {
      if (bigSet.includes(val)) {
        intersectionSet.add(val)
      }
    })
    return intersectionSet
  }
  // difference(otherSet)    差集 给定两个集合 , 返回一个存在于第一个集合且不存在第二个集合的元素的 新集合
  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(val => {
      if (!otherSet.includes(val)) {
        differenceSet.add(val)
      }
    })
    return differenceSet
  }
  // isSubsetOf(otherSet)    子集 验证          一个集合是否是另一个集合的子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.length) {
      return false
    }
    let isSubset = true
    this.values().every(val => {
      if (!otherSet.includes(val)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}