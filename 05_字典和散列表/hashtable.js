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
  put(key,value)  向散列表增加一个新的项
  remove(key)     根据键从散列表中移除对应的值
  get(key)        根据键，获得对应的值
 */
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  djb2HashCode(key) {                                    // 社区最受推崇的散列函数之一
    const tableKey = this.toStrFn(key)
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)    //若不是数字，转换为字符串
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)      //charCodeAt() 返回表示给定索引的字符的Unicode的值。
    }
    return hash % 37
  }
  hashCode(key) {
    return this.loseloseHashCode(key)
  }
  // put(key,value)
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)                 // position是转换后的key值
      this.table[position] = new ValuePair(key, value)    // 这里的key值是原始的
      return true
    }
    return false
  }
  // remove(key)
  remove(key) {
    // if (this.get(key)) {
    //   delete this.table[this.hashCode(key)]
    //   return true
    // }
    // return false
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
  // get(key)
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  getTable() {
    return this.table;
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.table = {}
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},${keys[i]} => ${this.table[keys[i]].toString()}`
    }
    return objString
  }

}

console.log('———————————————————————————————this.table[hash]———————————————————————————————')

const hash = new HashTable()

hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(' ');

console.log('**** Get **** ');

console.log(hash.get('Gandalf')); // ygritte@email.com
console.log(hash.get('Loiane')); //  undefined

console.log('**** Remove **** ');

hash.remove('Gandalf')
console.log(hash.get('Gandalf')); //undefined

//                ########## 冲突 ##########
console.log('**** Printing Hash **** ');
const hash1 = new HashTable()
console.log(hash1.hashCode('Ygritte') + ' - Ygritte');
console.log(hash1.hashCode('Jonathan') + ' - Jonathan');
console.log(hash1.hashCode('Jamie') + ' - Jamie');
console.log(hash1.hashCode('Jack') + ' - Jack');
console.log(hash1.hashCode('Jasmine') + ' - Jasmine');
console.log(hash1.hashCode('Jake') + ' - Jake');
console.log(hash1.hashCode('Nathan') + ' - Nathan');
console.log(hash1.hashCode('Athelstan') + ' - Athelstan');
console.log(hash1.hashCode('Sue') + ' - Sue');
console.log(hash1.hashCode('Aethelwulf') + ' - Aethelwulf');
console.log(hash1.hashCode('Sargeras') + ' - Sargeras');

hash1.put('Ygritte', 'ygritte@email.com');
hash1.put('Jonathan', 'jonathan@email.com');
hash1.put('Jamie', 'jamie@email.com');
hash1.put('Jack', 'jack@email.com');
hash1.put('Jasmine', 'jasmine@email.com');
hash1.put('Jake', 'jake@email.com');
hash1.put('Nathan', 'nathan@email.com');
hash1.put('Athelstan', 'athelstan@email.com');
hash1.put('Sue', 'sue@email.com');
hash1.put('Aethelwulf', 'aethelwulf@email.com');
hash1.put('Sargeras', 'sargeras@email.com');

console.log('**** Printing Hash **** ');

console.log(hash1.toString())
