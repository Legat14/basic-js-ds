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
    if (this.treeRoot === null) {
      return null;
    } else {
      return this.treeRoot;
    }
  }

  add(data) {

    let currentNode = this.treeRoot;

    if (this.treeRoot === null) {
      this.treeRoot = {};
      addNode(data, this.treeRoot);
    } else {
      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = {};
            addNode(data, currentNode.left);
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
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
      currentNode.data = data;
      currentNode.left = null;
      currentNode.right = null;
    }

    return this;
  }

  has(data) {
    let currentNode = this.treeRoot;
    while (true) {
      if (data === currentNode.data) {
        return true;
      } else {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            return false;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
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
      if (data === currentNode.data) {
        return currentNode;
      } else {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            return null;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
          if (currentNode.right === null) {
            return null;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  remove(data) {
    if (this.treeRoot.data === data) {
      delete this.treeRoot;
    }
    let currentNode = this.treeRoot;
    let previousNode = null;
    while (true) {
      if (data === currentNode.data) {
        currentNode = null;
        return currentNode;
      } else {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            return null;
          } else {
            previousNode = currentNode;
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
          if (currentNode.right === null) {
            return null;
          } else {
            previousNode = currentNode;
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  min() {
    if (this.treeRoot === null) {
      return null;
    } else {
      let currentNode = this.treeRoot;
      while (true) {
        if (currentNode.left === null) {
          return currentNode.data;
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
          return currentNode.data;
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