class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let popped = null;
    // if no val
    if (this.length === 0) {
      return null;
    }
    // if one value
    if (this.value === 1) {
      popped = this.tail;
      this.head = this.tail = null;
      this.length = 0;
      return popped;
    }
    // if more than one value
    popped = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return popped;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }
  shift() {
    let shifted = null;
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      shifted = this.head;
      this.head = this.tail = null;
      this.length--;
      return shifted;
    }
    shifted = this.head;
    this.head = shifted.next;
    this.length--;
    return shifted;
  }
  get(index) {
    let temp = this.head;
    if (index < 0 || this.length <= index) {
      return null;
    }
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, val) {
    let oldVal = this.get(index);
    oldVal.val = val;
  }
  /* To Do */
  insert() {}
  remove() {}
  /* To do */
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    for (let i = 0; i < this.length; i++) {
      const { prev, next } = current;
      current.prev = next;
      current.next = prev;
      current = next;
    }
    return this;
  }
  print() {
    let temp = this.head;
    const len = this.length;
    const arr = [];
    while (temp) {
      arr.push(temp.val);
      temp = temp.next;
    }
    console.log(`(${len})`, arr);
  }
}

/* test */

const dLL = new DoublyLinkedList();

dLL.push('1');
dLL.push('2');
dLL.push('3');
dLL.push('4');
dLL.unshift('5');
dLL.print();
dLL.reverse();
dLL.print();
