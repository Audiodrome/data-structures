var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value, key) {
    if (this.head === null && this.tail === null) {
      this.head = Node(value, key);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value, key);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var node = this.head;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return node.value;
    }
  };

  list.findNode = function(key) {
    var node = this.head;
    while (node !== null) {
      if (node.key === key) { return node; }
      node = node.next;
    }
    return false;
  }

  list.previousNode = function(key) {
    var node = this.head;
    while(node.next !== null) {
      if (node.next.key === key) { return node; }
      node = node.next;
    }
    return false;
  }

  list.contains = function(target) {
    var node = this.head;
    while (node.value !== target) {
      if (node.next === null) { return false; }
      node = node.next;
    }
    return true;
  };

  return list;
};

var Node = function(value, key) {
  var node = {};
  node.key = key;
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// list.addToTail: O(1) because append right to the end of the list
// and since we have a pointer to the end of the list, we know where
// we are when we do an insertion.
// list.removeHead: O(1) same idea as addToTail, instead we're removing 
// from the front of the list.
// list.contains: O(n), worst case our target node is at the end of the
// list, therefor we would've traversed throught the entire list to find
// it.
