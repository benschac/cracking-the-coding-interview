const Tree = require('./Tree/index.js');

/**
 * In order Traversal
 * 
 * @param {object} node the node to traverse on
 * 
 * @return {void}
 */
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node);
    inOrderTraversal(node.right);
  }
}