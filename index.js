// run `node index.js` in the terminal
console.log(`Lets learn the basics of DSA with Javascript`);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  //insert at the end
  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
      //if list is empty
      this.head = newNode;
      return;
    }
    while (node.next) {
      //find the last element of list -> last elem has null in .next
      node = node.next;
    }
    node.next = newNode;
  }

  //insert at the begining
  prependNode(newNode) {
    let node = this.head;
    newNode.next = node;
    this.head = newNode;
  }

  insertAt(index, newNode) {
    let node = this.head;
    if (index == 0) {
      newNode.next = node;
      this.head = newNode;
      return;
    }
    while (--index) {
      if (node.next !== null) {
        node = node.next;
      } else {
        throw Error('Index Out of Bound');
      }
    }
    let tempVal = node.next;
    node.next = newNode;
    newNode.next = tempVal;
  }

  printList() {
    let node = this.head;
    process.stdout.write('HEAD->');
    while (node) {
      process.stdout.write(node.data + '->');
      node = node.next;
    }
    console.log('NULL');
  }
}

let myList = new LinkedList();
let node = new Node(5);

myList.prependNode(new Node(9));
myList.appendNode(node);
myList.prependNode(new Node(1));
myList.appendNode(new Node(11));
myList.insertAt(3, new Node(2));

/* myList.appendNode(node);
myList.appendNode(new Node(11));
myList.appendNode(new Node(7)); */

myList.printList();
