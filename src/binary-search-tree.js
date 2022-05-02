const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    if (!this.treeRoot) {
      return null;
    }
    return this.treeRoot;
  }

  add(data) {

    let currentNode = this.treeRoot;

    if (this.treeRoot === null) {
      this.treeRoot = {};
      addNode(data, this.treeRoot);
    } else {
      while (true) {
        if (data < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = {};
            addNode(data, currentNode.left);
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = {};
            addNode(data, currentNode.right);
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return undefined;
        }
      }
    }

    function addNode(data, currentNode) {
      currentNode.value = data;
      currentNode.left = null;
      currentNode.right = null;
    }

    return this;
  }

  has(data) {
    let currentNode = this.treeRoot;
    while (true) {
      if (data === currentNode.value) {
        return true;
      } else {
        if (data < currentNode.value) {
          if (currentNode.left === null) {
            return false;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.value) {
          if (currentNode.right === null) {
            return false;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  find(data) {
    let currentNode = this.treeRoot;
    while (true) {
      if (data === currentNode.value) {
        return currentNode;
      } else {
        if (data < currentNode.value) {
          if (currentNode.left === null) {
            return null;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.value) {
          if (currentNode.right === null) {
            return null;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  remove( /* data */ ) {
    return this;
  }

  min() {
    if (this.treeRoot === null) {
      return null;
    } else {
      let currentNode = this.treeRoot;
      while (true) {
        if (currentNode.left === null) {
          return currentNode.value;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  max() {
    if (this.treeRoot === null) {
      return null;
    } else {
      let currentNode = this.treeRoot;
      while (true) {
        if (currentNode.right === null) {
          return currentNode.value;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};