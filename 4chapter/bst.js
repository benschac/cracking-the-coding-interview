
class Node {
  /** @inheritdoc */
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  /** @inheritdoc */
  constructor() {
    this.root = null;
  }

  /**
   * Insert Node into BST
   * 
   * @param {number} value to insert into tree.
   */
  insert(value) {
    
    // If there's nothing in the tree create it.
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    let current = this.root;
    let newNode = new Node(value);

    while(current) {
      // The left side
      if (value < current.value) {
        // and the tree left doesn't exist
        if(!current.left) {
          // create and new leaft
          current.left = newNode;
          return this;
        } else {
          // look farther down the tree
          current = current.left;
        }
      } else {
        // The right side of the tree
        if(!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
}


const bstTree = new BST();
bstTree.insert(10);
bstTree.insert(11);
bstTree.insert(9);
bstTree.insert(8);
bstTree.insert(15);
bstTree.insert(1);
console.log(bstTree);