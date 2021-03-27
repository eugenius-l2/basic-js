const CustomError = require("../extensions/custom-error");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const chainMaker = {
  head: null,
  length: 0,
  getLength() {
    return this.length;
  },

  addLink(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    };
    this.length++;
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.length || typeof position !== 'number' || !Number.isInteger(position) )  {
      this.head = null;
      this.length = 0;
      throw (new Error);
    };
    let index = 1;
    let current = this.head;
    let prev = null;
    if (position === 1) {
      this.head = current.next;
    } else {
      while (position > index ) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    this.length--;
    return this;
  },

  reverseChain() {
    let current = this.head;
    let nextCurrent = null;

    while (current) {
      let temporary = current.next;
      current.next = nextCurrent;
      nextCurrent = current;
      current = temporary;
    }
    this.head = nextCurrent;
    return this;
  },

  finishChain() {
   let current = this.head;
   let result = [];
   while (current) {
     result.push(`( ${current.value} )`);
     current = current.next;
   }
   this.head = null;
   this.length = 0;
   return result.join('~~');
  }
};

module.exports = chainMaker;
