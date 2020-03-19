/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];
  var stack={}
  stack.storage=storage;
  stack.stackSize=0;
  stack.push=push;
  stack.size=size

  this.push = function(value) {
  this.storage.push(value)
  this.stackSize++


  };

  this.pop = function() {
     var removedStack=this.storage[this.storage.length-1]
    this.storage.pop()
    this.stackSize--
    return removedStack
  };

  this.size = function() {

    return this.stackSize
  };
  return stack;
};



var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();
  var queue={}
  queue.enqueue=enqueue
  queue.dequeue=dequeue
  queue.queueSize=queueSize

  this.enqueue = function(data) {
   
     while (inbox.length){
       outbox.push(inbox[inbox.length-1]);
       inbox.pop()
     }
      while(outbox.length){
        inbox.push(outbox[outbox.length-1])
        outbox.pop()
      }
    
    inbox.push(data)
    this.queueSize++

  };

  this.dequeue = function() {
    if ( this.stackSize<=0){
      return this.stackSize=0;
    }
    var removedQueue= inbox[inbox.length-1]
    inbox.pop()
     this.queueSize--
    
    return removedQueue

  };

  this.size = function() {
    return this.queueSize
  };
  return queue
};
