const {
  NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  function toArray(list) {
    let resultArr = [];
    let currentNode = list;
    while (currentNode) {
      resultArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return resultArr;
  }

  const lArr = toArray(l);

  function removeKFromLArr(lArr) {
    const lArrRemovedK = [];
    lArr.forEach(elem => {
      if (elem !== k) {
        lArrRemovedK.push(elem);
      }
    });
    return lArrRemovedK;
  }

  const lArrRemovedK = removeKFromLArr(lArr);

  function toList(arr) {
    let list = {};
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i === arr.length - 1) {
        const newNode = {
          value: arr[i],
          next: null
        }
        list = newNode;
      } else {
        const newNode = {
          value: arr[i],
          next: list
        }
        list = newNode;
      }
    };
    return list;
  }

  return toList(lArrRemovedK);
}

module.exports = {
  removeKFromList
};
