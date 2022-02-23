class mySet {
  constructor(input = []) {
    this.newArr = [];
    this.collection = [];
    if (typeof input === 'string') {
      this.newArr = input.split('');
    } else {
      this.newArr = [...input];
    }
    this.newArr.forEach((i) => {
      if (!this.has(i)) {
        this.collection.push(i);
      }
    });
  }

  has = (item) => {
    //console.log(this.collection.indexOf(item) !== -1);
    return this.collection.indexOf(item) !== -1;
  };

  values = () => {
    return this.collection;
  };

  add = (item) => {
    if (!this.has(item)) {
      this.collection.push(item);
      return true;
    }
    return false;
  };

  remove = (item) => {
    if (this.has(item)) {
      let index = this.collection.indexOf(item);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  size = () => {
    return this.collection.length;
  };

  union = (otherSet) => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((item) => {
      unionSet.add(item);
    });
    secondSet.forEach((item) => {
      unionSet.add(item);
    });
    return unionSet;
  };

  intersection = (otherSet) => {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((item) => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  };

  difference = (otherSet) => {
    let differenceSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((item) => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });
    secondSet.forEach((item) => {
      if (!this.has(item)) {
        differenceSet.add(item);
      }
    });
    return differenceSet;
  };

  subset = (otherSet) => {
    let firstSet = this.values();
    return firstSet.every((item) => {
      return otherSet.has(item);
    });
  };
}

/* const rag1 = new mySet('ADWA');
const rag2 = new mySet([1, 2, 3, 4, 1, 3]); */

var setA = new mySet();
setA.add(9);
setA.add(8);
setA.add(1);
setA.add(3);

var setC = new mySet();
setC.add(2);
setC.add(3);

var setB = new mySet();
setB.add(8);
setB.add(2);
setB.add(3);
setB.add(4);
console.log('Set A values:');
console.log(setA.values());
console.log('Set B values:');
console.log(setB.values());
console.log('Set A & B union:');
console.log(setA.union(setB).values());
console.log('Set A & B intersection:');
console.log(setA.intersection(setB).values());
console.log('Set A & B difference:');
console.log(setA.difference(setB).values());
console.log(
  `${
    setC.subset(setB)
      ? 'setC is a subset of setB'
      : 'setC is not a subset of setB'
  }`
);

//const searchItem = 2;
/* console.log(`${setA.has(searchItem) ? `The set has ${searchItem}` : `The set doesn't have ${searchItem}`}`) */
/* setA.has(3);
console.log(setA.values());
console.log(setA.add(9));
console.log(setA.values());
console.log(setA.add(3));
console.log(setA.values());
console.log(setA.remove(3));
console.log(setA.values());
console.log(setA.remove(4));
console.log(setA.values());
console.log(setA.size());
console.log(setA.size()); */
