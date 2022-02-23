//colleced from codewars
/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

// So, now we can do this in the following way with a brute force solution =>
/* 
function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
} 
*/

// But rather we can use mySet to simplify the function as below
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

function isIsogram(str) {
  const rag1 = new mySet(str.toLowerCase());
  return rag1.size() === str.length;
}
const demoStr = 'awesom';
const isogramFuncOutput = isIsogram(demoStr);

console.log(
  isogramFuncOutput
    ? `${demoStr} is an isogram`
    : `${demoStr} is not an isogram`
);
