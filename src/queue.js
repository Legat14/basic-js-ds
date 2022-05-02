const {
  NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    let list = {};
    const objLength = Object.keys(this).length - 1;
    for (let i = objLength - 1; i >= 0; i--) {
      if (i === objLength - 1) {
        const newNode = {
          value: this[Object.keys(this)[i]],
          next: null
        }
        list = newNode;
      } else {
        const newNode = {
          value: this[Object.keys(this)[i]],
          next: list
        }
        list = newNode;
      }
    };
    return list;
  }

  enqueue(value) {
    if (!this['length']) {
      this['length'] = 1;
    } else {
      this['length'] += 1;
    }
    this[this['length']] = value;
    return this;
  }

  dequeue() {
    let key = Object.keys(this)[0];
    let tempVar = this[key];
    delete this[key];
    return tempVar;
  }
}

module.exports = {
  Queue
};
