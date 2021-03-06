const hashStringToInt = (str, tableSize) => {
  let hash = 17;
  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize
  }
  return hash;
}

class HashTable {

  table = new Array(100);
  numItems = 0;

  setItem = (key, value) => {
    this.numItems++;
    const idx = hashStringToInt(key, this.table.length)
    if (this.table[idx]) {
      this.table[idx].push([[key, value]]);
    } else {
    this.table[idx] = [[key, value]];
    }
  }

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length)
    return this.table[idx].find(x => x[0] === key)[1];
    }
}

const myTable = new HashTable();
myTable.setItem("firstName", "Dom");
myTable.getItem("firstName");
myTable.setItem("lastName", "My");

console.log("Hello " + myTable.getItem("firstName"));
console.log("Hello " + myTable.getItem("lastName"));
console.log(myTable.numItems)