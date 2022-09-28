function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}:${this.value}]`
  }
}
/*
  字典以[键,值]的方式存储元素  
  set(key,value)    向字典添加新元素
  remove(key)       移除对应key的元素
  hasKey(key)       检查对应的key是否存在字典中，若有返回true 若无返回false
  get(key)
  clear()
  size()
  isEmpty()
  keys()
  values()
  keyValues()
  forEach(callback)

 */
class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  // set(key, value)
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  // remove(key)
  remove(key) {
    if (this.table[key]) {// 如果存在key
      delete this.table[this.toStrFn(key)] // 删除该key属性            要注意将key转换为字符串形式，否则会出现意外            
      return true
    }
    return false
  }
  // hasKey(key)
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null                  // 检查一下table里这个key名是否已经存在了
  }
  // get(key)             根据key，返回对应的值
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]               // 获得该值
    return valuePair == null ? undefined : valuePair.value        // 判断 
  }
  // clear()
  clear() {
    this.table = {}
  }
  // size()
  size() {
    return this.keyValues().length
  }
  // isEmpty()
  isEmpty() {
    return this.size() === 0
  }
  // keys()
  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }
  // values()
  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }
  // keyValues()
  keyValues() {
    // return Object.values(this.table) // 不是所有浏览器都支持Object.values()
    const valuePairs = []
    for (let key in this.table) {
      if (this.hasKey(key)) {
        valuePairs.push(this.table[key])
      }
    }
    return valuePairs
  }
  // forEach(callback)
  forEach(callback) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callback(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}

const dictionary = new Dictionary();

dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.hasKey('Gandalf')); // true
console.log(dictionary.size()); // 3

console.log(dictionary.keys()); // ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values()); // ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dictionary.get('Tyrion')); // tyrion@email.com

dictionary.remove('John');

console.log(dictionary.keys()); // ["Gandalf", "Tyrion"]
console.log(dictionary.values()); // ["gandalf@email.com", "tyrion@email.com"]

console.log(dictionary.keyValues()); // [{key: "Gandalf", value: "gandalf@email.com"}, {key: "Tyrion", value: "tyrion@email.com"}]
console.log(dictionary.toString()); // [#Gandalf: gandalf@email.com],[#Tyrion: tyrion@email.com]

dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}, value: ${v}`);
});
// forEach:  key: Gandalf, value: gandalf@email.com
// forEach:  key: Tyrion, value: tyrion@email.com