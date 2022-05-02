const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    if (!this['length']) {
      this['length'] = 1;
    } else {
      this['length'] += 1;
    }
    this[this['length']] = element;
    return this;
  }
  
  pop() {
    let i = 0;
    for (let key in this) {
      i++;
    }
    i--;

    const tempVar = this[this['length']];
    delete this[i.toString()];
    return tempVar;
  }
  
  peek() {
    let i = 0;
    for (let key in this) {
      i++;
    }
    i--;

    return this[i.toString()];
  }
}

module.exports = {
  Stack
};
