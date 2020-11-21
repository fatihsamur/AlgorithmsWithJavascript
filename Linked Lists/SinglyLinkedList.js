class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let current = this.head;
    // if the list is empty
    if (!current) {
      return undefined;
    }
    // if the list have only one item
    if (!current.next) {
      this.head = this.tail = null;
      this.length--;
      return current.val;
    }
    // if the list have multiple items
    while (current.next.next) {
      current = current.next;
    }
    let popped = current.next;
    current.next = null;
    this.tail = current;
    this.length--;
    return popped;
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else if (!this.head.next) {
      let shifted = this.head;
      this.head = this.tail = null;
      this.length--;
      return shifted.val;
    } else {
      let shifted = this.head;
      this.head = this.head.next;
      this.length--;
      return shifted;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    let counter = 0;
    if (index >= this.length || index < 0) {
      return null;
    }
    let temp = this.head;
    while (temp && counter < index) {
      temp = temp.next;
      counter++;
    }
    return temp;
  }
  set(index, val) {
    if (this.get(index)) {
      this.get(index).val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === this.length - 1) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      let tempNext = this.get(index - 1).next;
      this.get(index - 1).next = new Node(val);
      this.get(index - 1).next.next = tempNext;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.legth) return false;
    else if (index === this.length - 1) return this.pop();
    else if (index === 0) return this.shift();
    else {
      let prev = this.get(index - 1);
      let removed = prev.next;
      let next = removed.next;
      prev.next = next;
      this.length--;
      return removed;
    }
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  print() {
    let temp = this.head;
    const arr = [];
    while (temp) {
      arr.push(temp.val);
      temp = temp.next;
    }
    console.log(arr);
  }
}

/* TEST */

let list = new singlyLinkedList();

list.push(7);
list.push(8);
list.push(9);
list.push(12);
list.push(123);
list.push(34);
list.print();
console.log('reverse');
list.reverse();
list.print();
