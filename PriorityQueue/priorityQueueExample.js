// use priority queue and update its enqueue function by
// setting up priorities of child, female & male as 1, 2 & 3
// during a moment of emergency shifting from one country
// to another by boat.

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

class PriorityQueue extends Queue {
  enqueue = (item) => {
    if (item[1] === 'child') {
      item[1] = 1;
    } else if (item[1] === 'female') {
      item[1] = 2;
    } else {
      item[1] = 3;
    }

    if (this.collection.length === 0) {
      this.collection.push(item);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (item[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(item);
      }
    }
  };
}

var pq = new PriorityQueue();

const data = [
  ['Beau Carnes', 'child'],
  ['Quincy Larson', 'female'],
  ['Brian Swift', 'male'],
  ['Ewa Mitulska-Wójcik', 'female'],
];

data.forEach((i) => {
  pq.enqueue(i);
});

pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();
