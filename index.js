// run `node index.js` in the terminal
console.log(`Lets learn the basics of DSA with Javascript`);

class Queue {
  constructor() {
    this.collection = [];
  }

  print = () => {
    console.log(this.collection);
  };

  enqueue = (item) => {
    this.collection.push(item);
  };

  dequeue = () => {
    return this.collection.shift();
  };

  front = () => {
    return this.collection[0];
  };

  size = () => {
    return this.collection.length;
  };

  isEmpty = () => {
    return this.collection.length === 0;
  };
}

var q = new Queue();
console.log(q.isEmpty());
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
console.log(q.dequeue());
console.log(q.front());
q.print();
console.log(q.size());
console.log(q.isEmpty());
