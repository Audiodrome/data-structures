var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    var node = LinkedList();
    node.addToTail(v, k);
    this._storage.set(index, node);
  } else {
    var node = this._storage.get(index);
    var found = node.findNode(k);
    if (found) {
      if (node.head.next === null) { 
        node.head.value = v;
      } else {
        node.next.value = v;
      }
    }
    this._storage.get(index).addToTail(v, k);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = this._storage.get(index);
  node = node.findNode(k);
  return node.value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = this._storage.get(index);

  if (node.head.next === null) {
    node.head.value = undefined;
  } else {
    node.next.value = undefined;  
  }  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

