const map = new Map()

map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has('Gandalf'))
console.log(map.size); // 3

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

console.log(map.get('Tyrion'))

map.delete('John')