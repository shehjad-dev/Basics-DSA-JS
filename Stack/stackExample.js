// Check if a string is palindrome
/* example plaindrome words- redivider, deified, civic, radar, level, rotor, kayak, reviver, racecar, madam, and refer. */

//Stack Implementation in JS
class stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  getWholeStack = () => {
    return this.storage;
  };

  push = (newVal) => {
    this.storage[this.count] = newVal;
    this.count++;
  };

  pop = () => {
    if (this.count === 0) {
      return 'Stack is empty';
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  peek = (newVal) => {
    if (this.count === 0) {
      return 'Stack is empty';
    }
    var result = this.storage[this.count - 1];
    return result;
  };

  size = () => {
    return this.count;
  };
}

//Initialize Stack
var myStack = new stack();

//function to check if palindrome
const checkPalindrome = (strVal) => {
  let newVal = '';
  for (let i = 0; i < strVal.length; i++) {
    myStack.push(strVal[i]);
  }

  for (let i = 0; i < strVal.length; i++) {
    newVal += myStack.pop();
  }

  if (newVal === strVal) {
    console.log(`${strVal} is a plaindrome`);
  } else {
    console.log(`${strVal} is not a palindrome`);
  }
};

let word = 'racecar';
checkPalindrome(word);
