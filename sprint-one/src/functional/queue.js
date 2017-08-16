var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      counter--;
      var result = storage[first];
      
      for (var i = 0; i < counter; i++) {
        storage[i] = storage[i + 1]; 
      }
      return result;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};


