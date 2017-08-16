var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.counter = 0;
  newQueue.head = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;  
};

queueMethods.dequeue = function() { 
  if (this.counter > 0) {
    var results = this.storage[this.head];
    for (var i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.counter--;
    return results;
  }
};

queueMethods.size = function() {
  return this.counter;
};