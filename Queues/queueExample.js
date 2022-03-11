// Implement a queue using stacks.
// We are using our custom stacks to implement a queue
// Total stacks used = 2

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

class Queue {
  constructor() {
    this.s1 = new stack();
    this.s2 = new stack();
  }

  enqueue = (item) => {
    while (this.s1.size() !== 0) {
      this.s2.push(this.s1.pop());
    }

    this.s1.push(item);

    while (this.s2.size() !== 0) {
      this.s1.push(this.s2.pop());
    }
  };

  deQueue() {
    // If first stack is empty
    if (this.s1.size() === 0) {
      return 'Queue is empty';
    }

    // Return top of s1
    return this.s1.pop();
  }
}

var q = new Queue();

console.log(q.deQueue());
q.enqueue(2);
q.enqueue(9);
q.enqueue(1);
q.enqueue(5);
q.deQueue();
q.deQueue();
