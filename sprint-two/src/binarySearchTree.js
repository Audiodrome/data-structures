var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.right = null;
  tree.left = null;

  tree.insert = function(value) {
    var node = BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    }
  };
  
  tree.contains = function(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) { return false; }
      return this.left.contains(value);
    } else if (value > this.value) {
      if (this.right === null) {return false; }
      return this.right.contains(value);
    }
  };

  tree.depthFirstLog = function(cb) {
    var node = this;
    var s = Stack();
    
    if (node === null) { return; }
    s.push(node);

    while (!s.isEmpty()) {
      node = s.pop();
      cb(node.value);
      if (node.right !== null) { s.push(node.right); }
      if (node.left !== null) { s.push(node.left); }
    }
  };

  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
