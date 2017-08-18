// Instantiate a new graph
var Graph = function() {
  this.adjacencyList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.adjacencyList[node] === undefined || 
      this.adjacencyList[node] === null) {
    this.adjacencyList[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var list = this.adjacencyList[node];
  if (Array.isArray(list)) { return true; }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var list = this.adjacencyList[node];
  for (var i = 0; i < list.length; i++) {
    var prune = this.adjacencyList[list[i]];
    for (var i = 0; i < prune.length; i++) {
      if (prune[i] = node) {
        prune.splice(i, 1);
      }
    }
  }
  this.adjacencyList[node] = null;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var list = this.adjacencyList[fromNode];
  for (var i = 0; i < list.length; i++) {
    if (list[i] === toNode) { return true; }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var list = this.adjacencyList;

  if (list[toNode] === null || 
      list[toNode] === undefined) { this.addNode(toNode); }
  if (list[fromNode] === null ||
      list[fromNode] === undefined) { this.addNode(fromNode); }
  this.adjacencyList[fromNode].push(toNode);
  this.adjacencyList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var list = this.adjacencyList;

  for (var i = 0; i < list.length; i++) {
    if (list[fromNode][i] === toNode) {
      list[fromNode].splice(i, 1);
    }
    if (list[toNode][i] === fromNode) {
      list[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var list = this.adjacencyList;

  for (var i = 0; i < list.length; i++) {
    // if (list[i].constructor === Array) { cb(i); }
    if (list[i] !== null || list[i] !== undefined) {
      cb(i);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


