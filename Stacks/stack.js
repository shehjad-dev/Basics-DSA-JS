// Stack Implementation in JS

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

var myStack = new stack();

console.log(`Popped Value: ${myStack.pop()}`);
console.log(`Peeked Value: ${myStack.peek()}`);
myStack.push(1);

console.log(myStack.getWholeStack());
console.log(`Stack Size: ${myStack.size()}`);
myStack.push(2);
console.log(myStack.getWholeStack());
console.log(`Stack Size: ${myStack.size()}`);
console.log(`Peeked Value: ${myStack.peek()}`);
console.log(myStack.getWholeStack());
console.log(`Popped Value: ${myStack.pop()}`);
console.log(myStack.getWholeStack());
console.log(`Peeked Value: ${myStack.peek()}`);
console.log(`Stack Size: ${myStack.size()}`);
console.log(myStack.getWholeStack());
console.log(`Popped Value: ${myStack.pop()}`);
console.log(myStack.getWholeStack());
console.log(`Stack Size: ${myStack.size()}`);
