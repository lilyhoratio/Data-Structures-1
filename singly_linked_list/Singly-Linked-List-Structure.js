// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    // if no head and no tail, make node new head and tail
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; // set next of current tail as new node
      this.tail = node; // set tail
    }

    this.length += 1;
    return this;
  }
  // remove from end
  pop() {
    // if no nodes
    if (!this.head) {
      return undefined;
    }

    // if yes nodes
    let current = this.head;
    let newTail = current;

    // while there is a next
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // set tail to be second to last node
    this.tail = newTail;

    // set next property of second to last node as null
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  //   traverse() {
  //     let current = this.head;

  //     while (current) {
  //       console.log(current.val);
  //       current = current.next;
  //     }
  //   }

  // REMOVE FROM BEGINNING
  shift() {
    if (!this.head) return undefined;
    // make head the second node
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // ADD TO BEGINNING - use case is when there is empty list and you unshift to it
  unshift(val) {
    // if no head, make val new head and tail

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!!!");
// console.log(list);

// list.traverse();

console.log("Last node:", list.pop());
