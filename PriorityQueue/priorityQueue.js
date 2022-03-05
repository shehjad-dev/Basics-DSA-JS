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
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1]);
pq.enqueue(['Briana Swift', 2]);
pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();
