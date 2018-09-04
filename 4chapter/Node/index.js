/**
 * Node in a Linked List
 * 
 * @class Node
 */
class Node {
  /** @inheritdoc */
  constructor(name, left=null, right=null) {
    this.name = name;
    this.left = left;
    this.right = right;
  }
}


const node = new Node('Benjamin');

console.log(node);