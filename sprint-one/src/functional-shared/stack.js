var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.counter = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);

  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter -= 1;
    return this.storage[this.counter];
  }
};

stackMethods.size = function() {
  return this.counter;
};