var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.head = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var result = this.storage[this.head];
    for (var i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.counter--;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.counter;
};


//var q = new Queue();