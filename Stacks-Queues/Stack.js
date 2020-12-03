class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp;
  }

  print() {
    let temp = this.first;
    const arr = [];
    while (temp) {
      arr.push(temp.val);
      temp = temp.next;
    }
    console.log(arr);
  }
}

/* Test */

const myStack = new Stack();

myStack.push('2');

let last = myStack.pop();
console.log(last);
myStack.print();
console.log(myStack);
